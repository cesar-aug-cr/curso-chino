"use client";
import { useState, useEffect } from "react";
import { Mic, RefreshCw, ChevronRight } from "lucide-react";
import SpeechRecognitionComponent from "@/components/audio/SpeechRecognition";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { hsk1Words } from "@/data/hsk1";
import { cn } from "@/lib/utils";
import { getToneColor } from "@/lib/pinyin-utils";

export default function PronunciacionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0,
  });

  // Pick 10 random words for the session
  const [sessionWords, setSessionWords] = useState(() =>
    [...hsk1Words].sort(() => Math.random() - 0.5).slice(0, 10)
  );

  const currentWord = sessionWords[currentIndex];
  const isComplete = currentIndex >= sessionWords.length;

  const handleResult = (result: { transcript: string; confidence: number; isMatch: boolean }) => {
    setResults((r) => ({
      correct: r.correct + (result.isMatch ? 1 : 0),
      total: r.total + 1,
    }));
  };

  const next = () => {
    setCurrentIndex((i) => i + 1);
  };

  const restart = () => {
    setCurrentIndex(0);
    setResults({ correct: 0, total: 0 });
    setSessionWords([...hsk1Words].sort(() => Math.random() - 0.5).slice(0, 10));
  };

  if (isComplete) {
    const pct = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;
    return (
      <div className="max-w-md mx-auto text-center py-12 space-y-4">
        <div className="text-5xl">🎤</div>
        <h2 className="text-2xl font-bold">¡Sesión completada!</h2>
        <p className="text-gray-600">
          Acertaste {results.correct} de {results.total} ({pct}%)
        </p>
        <button
          onClick={restart}
          className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
        >
          <RefreshCw size={16} />
          Practicar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Mic className="text-red-600" size={28} />
          Pronunciación
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Escucha la palabra y repítela en voz alta
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">
          {currentIndex + 1}/{sessionWords.length}
        </span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / sessionWords.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Current word */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-4">
        <p className="text-sm text-gray-500">Escucha y repite:</p>

        <div className="space-y-1">
          <p className="text-5xl sm:text-6xl font-medium break-words" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
            {currentWord.hanzi}
          </p>
          <p className={cn("text-xl font-medium", getToneColor(currentWord.tones[0] || 5))}>
            {currentWord.pinyin}
          </p>
          <p className="text-gray-500">{currentWord.meaning}</p>
        </div>

        <div className="flex justify-center">
          <TextToSpeech text={currentWord.hanzi} size="lg" />
        </div>

        <div className="pt-4">
          <SpeechRecognitionComponent
            expectedText={currentWord.hanzi}
            onResult={handleResult}
          />
        </div>

        <button
          onClick={next}
          className="inline-flex items-center gap-1 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Siguiente
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
