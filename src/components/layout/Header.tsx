"use client";
import { useEffect } from "react";
import { Flame, BookOpen, Brain } from "lucide-react";
import { useProgressStore } from "@/stores/useProgressStore";
import { useSettingsStore } from "@/stores/useSettingsStore";

export default function Header() {
  const { streak, wordsLearned, completedLessons, initialize } = useProgressStore();
  const { initialize: initSettings } = useSettingsStore();

  useEffect(() => {
    initialize();
    initSettings();
  }, [initialize, initSettings]);

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="lg:hidden w-10" /> {/* Spacer for mobile menu button */}

        <div className="flex items-center gap-4 sm:gap-6 ml-auto">
          {/* Streak */}
          <div className="flex items-center gap-1.5" title="Racha diaria">
            <Flame
              size={18}
              className={streak.currentStreak > 0 ? "text-orange-500" : "text-gray-400"}
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {streak.currentStreak}
            </span>
          </div>

          {/* Words learned */}
          <div className="flex items-center gap-1.5" title="Palabras aprendidas">
            <Brain size={18} className="text-purple-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {wordsLearned}
            </span>
          </div>

          {/* Lessons completed */}
          <div className="flex items-center gap-1.5" title="Lecciones completadas">
            <BookOpen size={18} className="text-green-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {completedLessons.length}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
