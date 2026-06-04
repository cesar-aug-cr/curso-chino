"use client";
import { useState } from "react";
import { PenTool, ChevronLeft, ChevronRight } from "lucide-react";
import StrokeOrder from "@/components/characters/StrokeOrder";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { hsk1Words } from "@/data/hsk1";
import { cn } from "@/lib/utils";
import { getToneColor } from "@/lib/pinyin-utils";

export default function EscrituraPage() {
  // Filter single-character words (stroke order works with single chars)
  const singleChars = hsk1Words.filter((w) => w.hanzi.length === 1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = singleChars[currentIndex];

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () =>
    setCurrentIndex((i) => Math.min(singleChars.length - 1, i + 1));

  if (!current) return null;

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <PenTool className="text-red-600" size={28} />
          Escritura
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Aprende el orden de trazos de cada carácter
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm text-gray-500">
          {currentIndex + 1} / {singleChars.length}
        </span>
        <button
          onClick={next}
          disabled={currentIndex === singleChars.length - 1}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Character info */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <p
            className={cn(
              "text-lg font-medium",
              getToneColor(current.tones[0] || 5)
            )}
          >
            {current.pinyin}
          </p>
          <TextToSpeech text={current.hanzi} size="sm" />
        </div>
        <p className="text-gray-500">{current.meaning}</p>

        {/* Stroke animation */}
        <div className="flex justify-center pt-2">
          <StrokeOrder character={current.hanzi} size={220} />
        </div>
      </div>

      {/* Quick jump */}
      <div className="flex flex-wrap gap-2 justify-center">
        {singleChars.slice(0, 20).map((w, i) => (
          <button
            key={w.id}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "w-10 h-10 rounded-lg text-lg flex items-center justify-center transition-colors",
              currentIndex === i
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-red-300"
            )}
            style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
          >
            {w.hanzi}
          </button>
        ))}
      </div>
    </div>
  );
}
