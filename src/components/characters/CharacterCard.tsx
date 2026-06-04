"use client";
import { useState } from "react";
import { BookOpen, Plus } from "lucide-react";
import TextToSpeech from "@/components/audio/TextToSpeech";
import StrokeOrder from "./StrokeOrder";
import { cn } from "@/lib/utils";
import { getToneColor } from "@/lib/pinyin-utils";
import type { Word } from "@/data/hsk1";

interface CharacterCardProps {
  word: Word;
  showStroke?: boolean;
  onAddFlashcard?: (wordId: number) => void;
  compact?: boolean;
}

export default function CharacterCard({
  word,
  showStroke = false,
  onAddFlashcard,
  compact = false,
}: CharacterCardProps) {
  const [showStrokeAnim, setShowStrokeAnim] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const mainTone = word.tones[0] || 5;

  if (compact) {
    return (
      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
        <span className="text-3xl font-medium min-w-[60px] text-center">
          {word.hanzi}
        </span>
        <div className="flex-1 min-w-0">
          <p className={cn("text-sm font-medium", getToneColor(mainTone))}>
            {word.pinyin}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {word.meaning}
          </p>
        </div>
        <TextToSpeech text={word.hanzi} size="sm" />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-5 flex flex-col items-center text-center">
        {/* Character */}
        <div className="relative">
          <span className="text-6xl font-medium">{word.hanzi}</span>
          <div className="absolute -right-10 top-0">
            <TextToSpeech text={word.hanzi} size="md" />
          </div>
        </div>

        {/* Pinyin */}
        <p className={cn("text-xl font-medium mt-2", getToneColor(mainTone))}>
          {word.pinyin}
        </p>

        {/* Meaning */}
        <p className="text-gray-600 dark:text-gray-400 mt-1">{word.meaning}</p>

        {/* Tone badges */}
        <div className="flex gap-1 mt-2">
          {word.tones.map((t, i) => (
            <span
              key={i}
              className={cn(
                "text-xs px-2 py-0.5 rounded-full font-medium",
                t === 1 && "bg-red-100 text-red-700",
                t === 2 && "bg-orange-100 text-orange-700",
                t === 3 && "bg-green-100 text-green-700",
                t === 4 && "bg-blue-100 text-blue-700",
                t === 5 && "bg-gray-100 text-gray-600"
              )}
            >
              T{t}
            </span>
          ))}
        </div>

        {/* Category & Level */}
        <div className="flex gap-2 mt-3">
          <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500">
            {word.category}
          </span>
          <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 rounded-full">
            {word.level}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-gray-100 dark:border-gray-700 px-4 py-3 flex gap-2 justify-center">
        {showStroke && word.hanzi.length === 1 && (
          <button
            onClick={() => setShowStrokeAnim(!showStrokeAnim)}
            className="text-xs flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
          >
            <BookOpen size={14} />
            {showStrokeAnim ? "Ocultar trazos" : "Ver trazos"}
          </button>
        )}
        {word.examples.length > 0 && (
          <button
            onClick={() => setShowExamples(!showExamples)}
            className="text-xs flex items-center gap-1 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors"
          >
            {showExamples ? "Ocultar ejemplos" : "Ver ejemplos"}
          </button>
        )}
        {onAddFlashcard && (
          <button
            onClick={() => onAddFlashcard(word.id)}
            className="text-xs flex items-center gap-1 px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors"
          >
            <Plus size={14} />
            Flashcard
          </button>
        )}
      </div>

      {/* Stroke animation */}
      {showStrokeAnim && word.hanzi.length === 1 && (
        <div className="border-t border-gray-100 dark:border-gray-700 p-4 flex justify-center">
          <StrokeOrder character={word.hanzi} size={180} />
        </div>
      )}

      {/* Examples */}
      {showExamples && word.examples.length > 0 && (
        <div className="border-t border-gray-100 dark:border-gray-700 p-4 space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase">Ejemplos</p>
          {word.examples.map((ex, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{ex.hanzi}</span>
                  <TextToSpeech text={ex.hanzi} size="sm" />
                </div>
                <p className="text-sm text-gray-500">{ex.pinyin}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{ex.meaning}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
