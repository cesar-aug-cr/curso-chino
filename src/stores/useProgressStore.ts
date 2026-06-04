"use client";
import { create } from "zustand";
import {
  getCompletedLessons,
  markLessonComplete,
  getStreakData,
  updateStreak,
  getStudyTime,
  addStudyTime,
  type StreakData,
  type StudyTimeData,
} from "@/lib/progress";
import {
  type CardState,
  createNewCard,
  reviewCard,
  getDueCards,
  type Quality,
} from "@/lib/spaced-repetition";

interface ProgressState {
  completedLessons: number[];
  streak: StreakData;
  studyTime: StudyTimeData;
  flashcardStates: Record<number, CardState>;
  wordsLearned: number;

  // Actions
  initialize: () => void;
  completeLesson: (lessonId: number) => void;
  recordStudyTime: (minutes: number) => void;
  addFlashcard: (wordId: number) => void;
  reviewFlashcard: (wordId: number, quality: Quality) => void;
  getDueFlashcards: () => CardState[];
  isLessonAvailable: (lessonId: number) => boolean;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  completedLessons: [],
  streak: {
    currentStreak: 0,
    bestStreak: 0,
    lastStudyDate: null,
    totalDays: 0,
  },
  studyTime: { totalMinutes: 0, weeklyMinutes: {} },
  flashcardStates: {},
  wordsLearned: 0,

  initialize: () => {
    const completedLessons = getCompletedLessons();
    const streak = getStreakData();
    const studyTime = getStudyTime();

    let flashcardStates: Record<number, CardState> = {};
    try {
      const stored = localStorage.getItem("chino_flashcard_states");
      if (stored) flashcardStates = JSON.parse(stored);
    } catch {}

    set({
      completedLessons,
      streak,
      studyTime,
      flashcardStates,
      wordsLearned: Object.keys(flashcardStates).length,
    });
  },

  completeLesson: (lessonId: number) => {
    markLessonComplete(lessonId);
    const updatedStreak = updateStreak();
    set((state) => ({
      completedLessons: [...new Set([...state.completedLessons, lessonId])],
      streak: updatedStreak,
    }));
  },

  recordStudyTime: (minutes: number) => {
    addStudyTime(minutes);
    set({ studyTime: getStudyTime() });
  },

  addFlashcard: (wordId: number) => {
    const { flashcardStates } = get();
    if (flashcardStates[wordId]) return;

    const newStates = {
      ...flashcardStates,
      [wordId]: createNewCard(wordId),
    };
    localStorage.setItem("chino_flashcard_states", JSON.stringify(newStates));
    set({
      flashcardStates: newStates,
      wordsLearned: Object.keys(newStates).length,
    });
  },

  reviewFlashcard: (wordId: number, quality: Quality) => {
    const { flashcardStates } = get();
    const card = flashcardStates[wordId];
    if (!card) return;

    const updated = reviewCard(card, quality);
    const newStates = { ...flashcardStates, [wordId]: updated };
    localStorage.setItem("chino_flashcard_states", JSON.stringify(newStates));
    set({ flashcardStates: newStates });
  },

  getDueFlashcards: () => {
    const { flashcardStates } = get();
    return getDueCards(Object.values(flashcardStates));
  },

  isLessonAvailable: (lessonId: number) => {
    if (lessonId <= 1) return true;
    return get().completedLessons.includes(lessonId - 1);
  },
}));
