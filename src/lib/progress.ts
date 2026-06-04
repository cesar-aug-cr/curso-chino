// Progress persistence using localStorage

const STORAGE_KEYS = {
  COMPLETED_LESSONS: "chino_completed_lessons",
  FLASHCARD_STATES: "chino_flashcard_states",
  QUIZ_SCORES: "chino_quiz_scores",
  STREAK: "chino_streak",
  STUDY_TIME: "chino_study_time",
  SETTINGS: "chino_settings",
  NOTES: "chino_notes",
  CUSTOM_FLASHCARDS: "chino_custom_flashcards",
} as const;

function getItem<T>(key: string, defaultValue: T): T {
  if (typeof window === "undefined") return defaultValue;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn("No se pudo guardar en localStorage");
  }
}

// Completed lessons
export function getCompletedLessons(): number[] {
  return getItem<number[]>(STORAGE_KEYS.COMPLETED_LESSONS, []);
}

export function markLessonComplete(lessonId: number): void {
  const completed = getCompletedLessons();
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
    setItem(STORAGE_KEYS.COMPLETED_LESSONS, completed);
  }
}

export function isLessonCompleted(lessonId: number): boolean {
  return getCompletedLessons().includes(lessonId);
}

export function isLessonUnlocked(lessonId: number): boolean {
  if (lessonId <= 1) return true;
  return isLessonCompleted(lessonId - 1);
}

// Flashcard states
export function getFlashcardStates(): Record<string, any> {
  return getItem(STORAGE_KEYS.FLASHCARD_STATES, {});
}

export function saveFlashcardStates(states: Record<string, any>): void {
  setItem(STORAGE_KEYS.FLASHCARD_STATES, states);
}

// Quiz scores
export interface QuizScore {
  lessonId: number;
  score: number;
  total: number;
  date: string;
}

export function getQuizScores(): QuizScore[] {
  return getItem<QuizScore[]>(STORAGE_KEYS.QUIZ_SCORES, []);
}

export function saveQuizScore(score: QuizScore): void {
  const scores = getQuizScores();
  scores.push(score);
  setItem(STORAGE_KEYS.QUIZ_SCORES, scores);
}

export function getBestScore(lessonId: number): QuizScore | null {
  const scores = getQuizScores().filter((s) => s.lessonId === lessonId);
  if (scores.length === 0) return null;
  return scores.reduce((best, s) =>
    s.score / s.total > best.score / best.total ? s : best
  );
}

// Streak tracking
export interface StreakData {
  currentStreak: number;
  bestStreak: number;
  lastStudyDate: string | null;
  totalDays: number;
}

export function getStreakData(): StreakData {
  return getItem<StreakData>(STORAGE_KEYS.STREAK, {
    currentStreak: 0,
    bestStreak: 0,
    lastStudyDate: null,
    totalDays: 0,
  });
}

export function updateStreak(): StreakData {
  const today = new Date().toISOString().split("T")[0];
  const streak = getStreakData();

  if (streak.lastStudyDate === today) return streak; // Already studied today

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  if (streak.lastStudyDate === yesterdayStr) {
    streak.currentStreak += 1;
  } else if (streak.lastStudyDate !== today) {
    streak.currentStreak = 1;
  }

  streak.lastStudyDate = today;
  streak.totalDays += 1;
  if (streak.currentStreak > streak.bestStreak) {
    streak.bestStreak = streak.currentStreak;
  }

  setItem(STORAGE_KEYS.STREAK, streak);
  return streak;
}

// Study time tracking (in minutes)
export interface StudyTimeData {
  totalMinutes: number;
  weeklyMinutes: Record<string, number>; // "2024-01-15": 30
}

export function getStudyTime(): StudyTimeData {
  return getItem<StudyTimeData>(STORAGE_KEYS.STUDY_TIME, {
    totalMinutes: 0,
    weeklyMinutes: {},
  });
}

export function addStudyTime(minutes: number): void {
  const data = getStudyTime();
  const today = new Date().toISOString().split("T")[0];
  data.totalMinutes += minutes;
  data.weeklyMinutes[today] = (data.weeklyMinutes[today] || 0) + minutes;
  setItem(STORAGE_KEYS.STUDY_TIME, data);
}

// Get weekly activity (last 7 days)
export function getWeeklyActivity(): { date: string; minutes: number }[] {
  const data = getStudyTime();
  const result: { date: string; minutes: number }[] = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];
    result.push({
      date: dateStr,
      minutes: data.weeklyMinutes[dateStr] || 0,
    });
  }

  return result;
}

// Personal notes
export function getNotes(): Record<string, string> {
  return getItem(STORAGE_KEYS.NOTES, {});
}

export function saveNote(key: string, note: string): void {
  const notes = getNotes();
  notes[key] = note;
  setItem(STORAGE_KEYS.NOTES, notes);
}

// Clear all progress
export function clearAllProgress(): void {
  Object.values(STORAGE_KEYS).forEach((key) => {
    localStorage.removeItem(key);
  });
}
