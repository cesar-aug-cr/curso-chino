"use client";
import { useState, useEffect, useMemo } from "react";
import { Layers, RefreshCw, ArrowRight } from "lucide-react";
import FlashCard from "@/components/practice/FlashCard";
import { useProgressStore } from "@/stores/useProgressStore";
import { hsk1Words } from "@/data/hsk1";
import { type Quality } from "@/lib/spaced-repetition";

export default function FlashcardsPage() {
  const {
    initialize,
    flashcardStates,
    getDueFlashcards,
    reviewFlashcard,
    addFlashcard,
  } = useProgressStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionDone, setSessionDone] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [mode, setMode] = useState<
    "hanzi-to-spanish" | "spanish-to-hanzi" | "audio-to-hanzi"
  >("hanzi-to-spanish");

  useEffect(() => {
    initialize();
  }, [initialize]);

  // Auto-add first 10 words if no flashcards exist
  useEffect(() => {
    if (Object.keys(flashcardStates).length === 0) {
      hsk1Words.slice(0, 10).forEach((w) => addFlashcard(w.id));
    }
  }, [flashcardStates, addFlashcard]);

  const dueCards = useMemo(() => getDueFlashcards(), [getDueFlashcards, flashcardStates]);

  const currentCard = dueCards[currentIndex];
  const currentWord = currentCard
    ? hsk1Words.find((w) => w.id === currentCard.wordId)
    : null;

  const handleRate = (quality: Quality) => {
    if (!currentCard) return;
    reviewFlashcard(currentCard.wordId, quality);
    setReviewed((r) => r + 1);

    if (currentIndex + 1 >= dueCards.length) {
      setSessionDone(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setSessionDone(false);
    setReviewed(0);
  };

  const addMore = () => {
    const existingIds = new Set(Object.keys(flashcardStates).map(Number));
    const newWords = hsk1Words
      .filter((w) => !existingIds.has(w.id))
      .slice(0, 5);
    newWords.forEach((w) => addFlashcard(w.id));
    restart();
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Layers className="text-red-600" size={28} />
          Flashcards
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Repasa tu vocabulario con repetición espaciada
        </p>
      </div>

      {/* Mode selector */}
      <div className="flex justify-center gap-2">
        {[
          { value: "hanzi-to-spanish" as const, label: "Chino → Español" },
          { value: "spanish-to-hanzi" as const, label: "Español → Chino" },
          { value: "audio-to-hanzi" as const, label: "Audio → Chino" },
        ].map((m) => (
          <button
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              mode === m.value
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 text-sm text-gray-500">
        <span>Pendientes: {Math.max(0, dueCards.length - currentIndex)}</span>
        <span>Revisadas: {reviewed}</span>
        <span>Total: {Object.keys(flashcardStates).length}</span>
      </div>

      {/* Card or completion */}
      {sessionDone || !currentWord ? (
        <div className="text-center py-12 space-y-4 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 p-8">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl font-bold">
            {dueCards.length === 0 && reviewed === 0
              ? "No hay tarjetas pendientes"
              : "¡Sesión completada!"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {reviewed > 0
              ? `Revisaste ${reviewed} tarjeta${reviewed > 1 ? "s" : ""}. ¡Buen trabajo!`
              : "Vuelve más tarde para repasar, o agrega más palabras."}
          </p>
          <div className="flex justify-center gap-3 mt-4">
            {reviewed > 0 && (
              <button
                onClick={restart}
                className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 rounded-xl transition-colors"
              >
                <RefreshCw size={16} />
                Repetir
              </button>
            )}
            <button
              onClick={addMore}
              className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
            >
              <ArrowRight size={16} />
              Agregar 5 palabras
            </button>
          </div>
        </div>
      ) : (
        <FlashCard
          hanzi={currentWord.hanzi}
          pinyin={currentWord.pinyin}
          meaning={currentWord.meaning}
          tones={currentWord.tones}
          mode={mode}
          onRate={handleRate}
        />
      )}
    </div>
  );
}
