"use client";
import { create } from "zustand";

interface SettingsState {
  audioSpeed: "slow" | "normal" | "fast";
  newCardsPerDay: number;
  showPinyin: boolean;
  darkMode: boolean;
  autoPlayAudio: boolean;

  setAudioSpeed: (speed: "slow" | "normal" | "fast") => void;
  setNewCardsPerDay: (count: number) => void;
  togglePinyin: () => void;
  toggleDarkMode: () => void;
  toggleAutoPlay: () => void;
  initialize: () => void;
}

const STORAGE_KEY = "chino_settings";

export const useSettingsStore = create<SettingsState>((set, get) => ({
  audioSpeed: "slow",
  newCardsPerDay: 10,
  showPinyin: true,
  darkMode: false,
  autoPlayAudio: false,

  initialize: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        set(parsed);
        if (parsed.darkMode) {
          document.documentElement.classList.add("dark");
        }
      }
    } catch {}
  },

  setAudioSpeed: (speed) => {
    set({ audioSpeed: speed });
    saveSettings(get());
  },

  setNewCardsPerDay: (count) => {
    set({ newCardsPerDay: count });
    saveSettings(get());
  },

  togglePinyin: () => {
    set((s) => ({ showPinyin: !s.showPinyin }));
    saveSettings(get());
  },

  toggleDarkMode: () => {
    set((s) => {
      const newDark = !s.darkMode;
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return { darkMode: newDark };
    });
    saveSettings(get());
  },

  toggleAutoPlay: () => {
    set((s) => ({ autoPlayAudio: !s.autoPlayAudio }));
    saveSettings(get());
  },
}));

function saveSettings(state: SettingsState) {
  try {
    const { audioSpeed, newCardsPerDay, showPinyin, darkMode, autoPlayAudio } =
      state;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ audioSpeed, newCardsPerDay, showPinyin, darkMode, autoPlayAudio })
    );
  } catch {}
}
