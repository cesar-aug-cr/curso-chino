"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  BookOpen,
  Languages,
  Landmark,
  ClipboardCheck,
  ChevronLeft,
  ChevronRight,
  Volume2,
  PlusCircle,
  Trophy,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { lessons, type VocabItem } from "@/data/lessons";
import { useProgressStore } from "@/stores/useProgressStore";
import TextToSpeech from "@/components/audio/TextToSpeech";
import CharacterCard from "@/components/characters/CharacterCard";
import QuizQuestion, {
  type QuizItem,
} from "@/components/practice/QuizQuestion";
import { getToneColor } from "@/lib/pinyin-utils";
import { cn } from "@/lib/utils";
import { speakChinese } from "@/lib/audio";

/* --------------------------------------------------------
   Pestanas disponibles en cada leccion
-------------------------------------------------------- */
const TABS = [
  { id: "dialogo", label: "Dialogo", icon: MessageCircle },
  { id: "vocabulario", label: "Vocabulario", icon: BookOpen },
  { id: "gramatica", label: "Gramatica", icon: Languages },
  { id: "cultural", label: "Cultural", icon: Landmark },
  { id: "ejercicios", label: "Ejercicios", icon: ClipboardCheck },
] as const;

type TabId = (typeof TABS)[number]["id"];

/* --------------------------------------------------------
   Adaptador: convierte VocabItem de leccion a Word de hsk1
-------------------------------------------------------- */
function wordFromVocab(
  v: VocabItem,
  index: number,
  lessonId: number,
  lessonTitle: string
) {
  return {
    id: lessonId * 100 + index,
    hanzi: v.hanzi,
    pinyin: v.pinyin,
    meaning: v.meaning,
    tones: v.tones,
    category: lessonTitle,
    level: "HSK1" as const,
    examples: [] as { hanzi: string; pinyin: string; meaning: string }[],
  };
}

/* ================================================================
   PAGINA DE LECCION INDIVIDUAL
================================================================ */
export default function LessonPage() {
  const params = useParams<{ leccion: string }>();
  const leccionId = Number(params.leccion);

  const lesson = lessons.find((l) => l.id === leccionId);

  const { initialize, completedLessons, completeLesson, addFlashcard } =
    useProgressStore();

  const [activeTab, setActiveTab] = useState<TabId>("dialogo");

  useEffect(() => {
    initialize();
  }, [initialize]);

  /* ----- Ejercicios: estado del quiz ----- */
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  /* --------------------------------------------------------
     Leccion no encontrada
  -------------------------------------------------------- */
  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Leccion no encontrada
        </p>
        <Link
          href="/curso/hsk1"
          className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
        >
          <ChevronLeft size={18} />
          Volver al curso
        </Link>
      </div>
    );
  }

  /* --------------------------------------------------------
     Datos derivados
  -------------------------------------------------------- */
  const isCompleted = completedLessons.includes(lesson.id);
  const prevLesson = lessons.find((l) => l.id === lesson.id - 1);
  const nextLesson = lessons.find((l) => l.id === lesson.id + 1);

  // Convertir ejercicios de la leccion al formato QuizItem
  const quizItems: QuizItem[] = lesson.exercises
    .filter((ex) => ex.options && ex.options.length > 0)
    .map((ex) => ({
      type: ex.type as QuizItem["type"],
      question: ex.question,
      audioText:
        ex.type === "listen-select"
          ? ex.options?.[ex.correctAnswer as number]
          : undefined,
      options: ex.options as string[],
      correctAnswer:
        typeof ex.correctAnswer === "number"
          ? ex.correctAnswer
          : (ex.options?.indexOf(ex.correctAnswer as string) ?? 0),
      explanation: ex.explanation,
    }));

  /* --------------------------------------------------------
     Handlers
  -------------------------------------------------------- */
  const handleQuizAnswer = (correct: boolean) => {
    if (correct) setQuizScore((s) => s + 1);

    setTimeout(() => {
      if (quizIndex + 1 < quizItems.length) {
        setQuizIndex((i) => i + 1);
      } else {
        setQuizFinished(true);
        completeLesson(lesson.id);
      }
    }, 1600);
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
  };

  const handleAddAllFlashcards = () => {
    lesson.vocabulary.forEach((v, i) => {
      addFlashcard(lesson.id * 100 + i);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/30 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
      {/* Encabezado de la leccion */}
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/curso/hsk1"
              className="flex-shrink-0 p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500"
              aria-label="Volver al listado de lecciones"
            >
              <ChevronLeft size={20} />
            </Link>
            <div className="min-w-0">
              <p className="text-xs font-medium text-red-600 dark:text-red-400 uppercase tracking-wide">
                Leccion {lesson.id} de {lessons.length}
              </p>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate">
                {lesson.title}
              </h1>
            </div>
            {isCompleted && (
              <span className="ml-auto flex-shrink-0 text-xs px-2.5 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-medium">
                Completada
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Pestanas de navegacion */}
      <nav className="border-b border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm sticky top-[73px] z-20 overflow-x-auto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 -mb-px">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 sm:px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap",
                    isActive
                      ? "border-red-500 text-red-600 dark:text-red-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"
                  )}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Contenido de la pestana activa */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "dialogo" && <DialogTab lesson={lesson} />}
            {activeTab === "vocabulario" && (
              <VocabularyTab
                lesson={lesson}
                onAddFlashcard={addFlashcard}
                onAddAll={handleAddAllFlashcards}
              />
            )}
            {activeTab === "gramatica" && <GrammarTab lesson={lesson} />}
            {activeTab === "cultural" && <CulturalTab lesson={lesson} />}
            {activeTab === "ejercicios" && (
              <ExercisesTab
                quizItems={quizItems}
                quizIndex={quizIndex}
                quizScore={quizScore}
                quizFinished={quizFinished}
                lessonId={lesson.id}
                totalExercises={quizItems.length}
                onAnswer={handleQuizAnswer}
                onReset={handleResetQuiz}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navegacion inferior entre lecciones */}
      <footer className="border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {prevLesson ? (
            <Link
              href={`/curso/hsk1/${prevLesson.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <ChevronLeft size={18} />
              Leccion anterior
            </Link>
          ) : (
            <span />
          )}

          {nextLesson ? (
            <Link
              href={`/curso/hsk1/${nextLesson.id}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              Siguiente leccion
              <ChevronRight size={18} />
            </Link>
          ) : (
            <span className="text-sm text-gray-400 dark:text-gray-600">
              Ultima leccion del curso
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}

/* ================================================================
   PESTANA: DIALOGO
================================================================ */
interface DialogTabProps {
  lesson: (typeof lessons)[number];
}

function DialogTab({ lesson }: DialogTabProps) {
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const handlePlayAll = useCallback(async () => {
    if (isPlayingAll) return;
    setIsPlayingAll(true);
    try {
      for (const line of lesson.dialog) {
        await speakChinese(line.hanzi, 0.8);
        // Breve pausa entre lineas
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    } catch {
      // Error silencioso si la sintesis falla
    } finally {
      setIsPlayingAll(false);
    }
  }, [lesson.dialog, isPlayingAll]);

  return (
    <div>
      {/* Boton para escuchar todo el dialogo */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handlePlayAll}
          disabled={isPlayingAll}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all",
            isPlayingAll
              ? "bg-red-100 dark:bg-red-900/30 text-red-400 cursor-wait animate-pulse"
              : "bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg active:scale-[0.98]"
          )}
        >
          <Volume2 size={18} />
          {isPlayingAll ? "Reproduciendo..." : "Escuchar todo"}
        </button>
      </div>

      {/* Lineas del dialogo */}
      <div className="space-y-5">
        {lesson.dialog.map((line, i) => {
          const isA = line.speaker === "A";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isA ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className={cn(
                "flex gap-3 sm:gap-4",
                isA ? "justify-start" : "justify-end"
              )}
            >
              {/* Avatar del hablante */}
              {isA && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-sm">
                  A
                </div>
              )}

              <div
                className={cn(
                  "max-w-sm sm:max-w-md rounded-2xl p-4",
                  isA
                    ? "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-tl-md"
                    : "bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-tr-md"
                )}
              >
                {/* Hanzi */}
                <p className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed">
                  {line.hanzi}
                </p>
                {/* Pinyin */}
                <p
                  className={cn(
                    "text-sm mt-1 font-medium",
                    getToneColor(1)
                  )}
                >
                  {line.pinyin}
                </p>
                {/* Significado */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                  {line.meaning}
                </p>

                {/* Boton de audio */}
                <div className="mt-2">
                  <TextToSpeech text={line.hanzi} size="sm" />
                </div>
              </div>

              {/* Avatar del hablante B */}
              {!isA && (
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                  B
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================
   PESTANA: VOCABULARIO
================================================================ */
interface VocabularyTabProps {
  lesson: (typeof lessons)[number];
  onAddFlashcard: (wordId: number) => void;
  onAddAll: () => void;
}

function VocabularyTab({
  lesson,
  onAddFlashcard,
  onAddAll,
}: VocabularyTabProps) {
  return (
    <div>
      {/* Boton para agregar todo a flashcards */}
      <div className="flex justify-center mb-8">
        <button
          onClick={onAddAll}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg active:scale-[0.98] transition-all"
        >
          <PlusCircle size={18} />
          Agregar todo a flashcards
        </button>
      </div>

      {/* Cuadricula de tarjetas de caracteres */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lesson.vocabulary.map((v, i) => {
          const word = wordFromVocab(v, i, lesson.id, lesson.title);
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
            >
              <CharacterCard
                word={word}
                showStroke={true}
                onAddFlashcard={onAddFlashcard}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================
   PESTANA: GRAMATICA
================================================================ */
interface GrammarTabProps {
  lesson: (typeof lessons)[number];
}

function GrammarTab({ lesson }: GrammarTabProps) {
  if (lesson.grammar.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Languages size={40} className="mx-auto mb-3 opacity-40" />
        <p>Esta leccion no tiene puntos gramaticales.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {lesson.grammar.map((point, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden"
        >
          {/* Titulo del punto gramatical */}
          <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-900/10 dark:to-transparent">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles
                size={18}
                className="text-amber-500 flex-shrink-0"
              />
              {point.title}
            </h3>
          </div>

          <div className="p-5 space-y-4">
            {/* Explicacion */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {point.explanation}
            </p>

            {/* Frases de ejemplo */}
            {point.examples.length > 0 && (
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Ejemplos
                </p>
                {point.examples.map((ex, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {ex.hanzi}
                      </p>
                      <p
                        className={cn(
                          "text-sm font-medium mt-0.5",
                          getToneColor(1)
                        )}
                      >
                        {ex.pinyin}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {ex.meaning}
                      </p>
                    </div>
                    <TextToSpeech text={ex.hanzi} size="sm" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ================================================================
   PESTANA: CULTURAL
================================================================ */
interface CulturalTabProps {
  lesson: (typeof lessons)[number];
}

function CulturalTab({ lesson }: CulturalTabProps) {
  if (lesson.culturalNotes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <Landmark size={40} className="mx-auto mb-3 opacity-40" />
        <p>Esta leccion no tiene notas culturales.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {lesson.culturalNotes.map((note, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-5 sm:p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <Landmark
              size={18}
              className="text-red-500 flex-shrink-0"
            />
            {note.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {note.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ================================================================
   PESTANA: EJERCICIOS
================================================================ */
interface ExercisesTabProps {
  quizItems: QuizItem[];
  quizIndex: number;
  quizScore: number;
  quizFinished: boolean;
  lessonId: number;
  totalExercises: number;
  onAnswer: (correct: boolean) => void;
  onReset: () => void;
}

function ExercisesTab({
  quizItems,
  quizIndex,
  quizScore,
  quizFinished,
  lessonId,
  totalExercises,
  onAnswer,
  onReset,
}: ExercisesTabProps) {
  if (quizItems.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <ClipboardCheck size={40} className="mx-auto mb-3 opacity-40" />
        <p>Esta leccion no tiene ejercicios disponibles.</p>
      </div>
    );
  }

  // Pantalla de resultados al finalizar
  if (quizFinished) {
    const percentage = Math.round((quizScore / totalExercises) * 100);
    const isPassing = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center py-8"
      >
        <div
          className={cn(
            "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5",
            isPassing
              ? "bg-green-100 dark:bg-green-900/30"
              : "bg-amber-100 dark:bg-amber-900/30"
          )}
        >
          <Trophy
            size={36}
            className={
              isPassing
                ? "text-green-600 dark:text-green-400"
                : "text-amber-600 dark:text-amber-400"
            }
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {isPassing ? "Excelente trabajo!" : "Buen intento!"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Obtuviste{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {quizScore}
          </span>{" "}
          de{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {totalExercises}
          </span>{" "}
          respuestas correctas ({percentage}%)
        </p>

        {isPassing && (
          <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-6">
            Leccion {lessonId} marcada como completada
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <RotateCcw size={16} />
            Intentar de nuevo
          </button>
          <Link
            href="/curso/hsk1"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            Volver al curso
          </Link>
        </div>
      </motion.div>
    );
  }

  // Pregunta actual del quiz
  return (
    <div>
      <QuizQuestion
        item={quizItems[quizIndex]}
        questionNumber={quizIndex + 1}
        totalQuestions={totalExercises}
        onAnswer={onAnswer}
      />
    </div>
  );
}
