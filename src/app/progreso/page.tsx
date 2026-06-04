"use client";
import { useEffect } from "react";
import {
  BarChart3,
  Flame,
  Brain,
  BookOpen,
  Clock,
  Trophy,
  Calendar,
} from "lucide-react";
import { useProgressStore } from "@/stores/useProgressStore";
import { getWeeklyActivity } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { hsk1Words } from "@/data/hsk1";
import { lessons } from "@/data/lessons";
import ProgressBar from "@/components/ui/ProgressBar";

const DAY_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

export default function ProgresoPage() {
  const {
    streak,
    wordsLearned,
    completedLessons,
    studyTime,
    initialize,
  } = useProgressStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const weekly = getWeeklyActivity();
  const maxMinutes = Math.max(...weekly.map((d) => d.minutes), 1);

  const totalWords = hsk1Words.length;
  const totalLessons = lessons.length;
  const wordsPct = Math.round((wordsLearned / totalWords) * 100);
  const lessonsPct = Math.round(
    (completedLessons.length / totalLessons) * 100
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <BarChart3 className="text-red-600" size={28} />
          Mi Progreso
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tu avance en el aprendizaje del chino mandarín
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          {
            icon: Flame,
            label: "Racha actual",
            value: streak.currentStreak,
            unit: "días",
            color: "text-orange-500",
            bg: "bg-orange-50 dark:bg-orange-900/20",
          },
          {
            icon: Trophy,
            label: "Mejor racha",
            value: streak.bestStreak,
            unit: "días",
            color: "text-yellow-500",
            bg: "bg-yellow-50 dark:bg-yellow-900/20",
          },
          {
            icon: Brain,
            label: "Palabras",
            value: wordsLearned,
            unit: `/ ${totalWords}`,
            color: "text-purple-500",
            bg: "bg-purple-50 dark:bg-purple-900/20",
          },
          {
            icon: BookOpen,
            label: "Lecciones",
            value: completedLessons.length,
            unit: `/ ${totalLessons}`,
            color: "text-green-500",
            bg: "bg-green-50 dark:bg-green-900/20",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "rounded-2xl p-4 border border-gray-100 dark:border-gray-700",
              stat.bg
            )}
          >
            <stat.icon size={22} className={stat.color} />
            <p className="text-2xl font-bold mt-2">
              {stat.value}
              <span className="text-sm font-normal text-gray-400 ml-1">
                {stat.unit}
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Progress bars */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 space-y-4">
        <h2 className="font-semibold text-lg">Progreso general</h2>
        <ProgressBar
          value={wordsPct}
          label={`Vocabulario (${wordsLearned}/${totalWords})`}
          color="red"
        />
        <ProgressBar
          value={lessonsPct}
          label={`Lecciones (${completedLessons.length}/${totalLessons})`}
          color="green"
        />
      </div>

      {/* Weekly activity */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={18} className="text-gray-400" />
          <h2 className="font-semibold text-lg">Actividad semanal</h2>
        </div>

        <div className="flex items-end justify-between gap-2 h-32">
          {weekly.map((day, i) => {
            const height = day.minutes > 0 ? (day.minutes / maxMinutes) * 100 : 4;
            const today = new Date().toISOString().split("T")[0];
            const isToday = day.date === today;

            return (
              <div
                key={day.date}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <span className="text-xs text-gray-400">
                  {day.minutes > 0 ? `${day.minutes}m` : ""}
                </span>
                <div
                  className={cn(
                    "w-full rounded-t-lg transition-all",
                    day.minutes > 0
                      ? isToday
                        ? "bg-red-500"
                        : "bg-red-200 dark:bg-red-800"
                      : "bg-gray-100 dark:bg-gray-700"
                  )}
                  style={{ height: `${height}%`, minHeight: "4px" }}
                />
                <span
                  className={cn(
                    "text-xs",
                    isToday ? "font-bold text-red-600" : "text-gray-400"
                  )}
                >
                  {DAY_LABELS[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Study time */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-gray-400" />
          <h2 className="font-semibold">Tiempo total de estudio</h2>
        </div>
        <p className="text-3xl font-bold mt-2">
          {Math.floor(studyTime.totalMinutes / 60)}h{" "}
          {studyTime.totalMinutes % 60}m
        </p>
        <p className="text-sm text-gray-500">
          {streak.totalDays} día{streak.totalDays !== 1 ? "s" : ""} de estudio
          en total
        </p>
      </div>
    </div>
  );
}
