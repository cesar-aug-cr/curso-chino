"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, CheckCircle2, BookOpen, GraduationCap } from "lucide-react";
import { lessons } from "@/data/lessons";
import { useProgressStore } from "@/stores/useProgressStore";
import ProgressBar from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

export default function HSK1CoursePage() {
  const { completedLessons, initialize, isLessonAvailable } =
    useProgressStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  const progressPercent =
    lessons.length > 0
      ? Math.round((completedLessons.length / lessons.length) * 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/40 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      {/* Encabezado del curso */}
      <section className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Circulos decorativos de fondo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-100/30 dark:bg-red-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium mb-4">
              <GraduationCap size={16} />
              Nivel principiante
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Curso HSK 1 - Chino Basico
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mx-auto">
              30 lecciones para dominar los fundamentos del mandarin
            </p>
          </motion.div>

          {/* Barra de progreso general */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 max-w-md mx-auto"
          >
            <ProgressBar
              value={progressPercent}
              label="Progreso del curso"
              size="lg"
              color="red"
              showPercent
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {completedLessons.length} de {lessons.length} lecciones
              completadas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lista de lecciones */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const available = isLessonAvailable(lesson.id);
            const completed = completedLessons.includes(lesson.id);

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                {available ? (
                  <Link href={`/curso/hsk1/${lesson.id}`} className="block">
                    <LessonCard
                      lesson={lesson}
                      available={available}
                      completed={completed}
                    />
                  </Link>
                ) : (
                  <div className="cursor-not-allowed">
                    <LessonCard
                      lesson={lesson}
                      available={available}
                      completed={completed}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* --------------------------------------------------------
   Componente de tarjeta de leccion individual
-------------------------------------------------------- */

interface LessonCardProps {
  lesson: (typeof lessons)[number];
  available: boolean;
  completed: boolean;
}

function LessonCard({ lesson, available, completed }: LessonCardProps) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border transition-all duration-200",
        available && !completed
          ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-red-200 dark:hover:border-red-800 hover:-translate-y-0.5"
          : "",
        completed
          ? "bg-green-50/60 dark:bg-green-900/10 border-green-200 dark:border-green-800 hover:shadow-lg hover:-translate-y-0.5"
          : "",
        !available
          ? "bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-800 opacity-60"
          : ""
      )}
    >
      {/* Circulo con numero de leccion */}
      <div
        className={cn(
          "flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold",
          completed
            ? "bg-green-500 text-white"
            : available
              ? "bg-red-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
        )}
      >
        {completed ? (
          <CheckCircle2 size={28} />
        ) : !available ? (
          <Lock size={22} />
        ) : (
          lesson.id
        )}
      </div>

      {/* Informacion de la leccion */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3
            className={cn(
              "font-semibold text-base sm:text-lg",
              available
                ? "text-gray-900 dark:text-white"
                : "text-gray-400 dark:text-gray-500"
            )}
          >
            Leccion {lesson.id}: {lesson.title}
          </h3>
          {completed && (
            <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
              Completada
            </span>
          )}
        </div>

        <p
          className={cn(
            "text-sm mt-1 line-clamp-2",
            available
              ? "text-gray-600 dark:text-gray-400"
              : "text-gray-400 dark:text-gray-600"
          )}
        >
          {lesson.description}
        </p>

        {/* Insignia de vocabulario */}
        <div className="flex items-center gap-3 mt-2">
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium",
              available
                ? "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600"
            )}
          >
            <BookOpen size={12} />
            {lesson.vocabulary.length} palabras
          </span>
        </div>
      </div>

      {/* Flecha indicadora para lecciones disponibles */}
      {available && (
        <div className="flex-shrink-0 text-gray-300 dark:text-gray-600">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
