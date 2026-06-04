"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { cn } from "@/lib/utils";
import { getToneColor } from "@/lib/pinyin-utils";
import { qualityLabels, type Quality } from "@/lib/spaced-repetition";

interface FlashCardProps {
  hanzi: string;
  pinyin: string;
  meaning: string;
  tones: number[];
  mode?: "hanzi-to-spanish" | "spanish-to-hanzi" | "audio-to-hanzi";
  onRate: (quality: Quality) => void;
}

export default function FlashCard({
  hanzi,
  pinyin,
  meaning,
  tones,
  mode = "hanzi-to-spanish",
  onRate,
}: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);

  const front = () => {
    switch (mode) {
      case "hanzi-to-spanish":
        return (
          <div className="flex flex-col items-center gap-3">
            <span className="text-7xl font-medium">{hanzi}</span>
            <TextToSpeech text={hanzi} size="lg" />
            <p className="text-sm text-gray-400 mt-4">Toca para ver la respuesta</p>
          </div>
        );
      case "spanish-to-hanzi":
        return (
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl font-medium text-gray-700">{meaning}</span>
            <p className="text-sm text-gray-400 mt-4">¿Cómo se dice en chino?</p>
          </div>
        );
      case "audio-to-hanzi":
        return (
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg text-gray-500 mb-2">Escucha y adivina</p>
            <TextToSpeech text={hanzi} size="lg" />
            <p className="text-sm text-gray-400 mt-4">Toca para ver la respuesta</p>
          </div>
        );
    }
  };

  const back = () => (
    <div className="flex flex-col items-center gap-2">
      <span className="text-6xl font-medium">{hanzi}</span>
      <TextToSpeech text={hanzi} size="md" />
      <p className={cn("text-xl font-medium", getToneColor(tones[0] || 5))}>
        {pinyin}
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300">{meaning}</p>

      {/* Rating buttons */}
      <div className="flex gap-2 mt-6 flex-wrap justify-center">
        {qualityLabels.map(({ quality, label, color }) => (
          <button
            key={quality}
            onClick={(e) => {
              e.stopPropagation();
              onRate(quality);
              setFlipped(false);
            }}
            className={cn(
              "px-4 py-2 rounded-xl text-white font-medium text-sm transition-transform hover:scale-105 active:scale-95",
              color
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={flipped ? "back" : "front"}
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        exit={{ rotateY: -90, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => !flipped && setFlipped(true)}
        className={cn(
          "w-full max-w-sm mx-auto min-h-[320px] flex items-center justify-center p-8",
          "bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700",
          !flipped && "cursor-pointer hover:shadow-xl transition-shadow"
        )}
      >
        {flipped ? back() : front()}
      </motion.div>
    </AnimatePresence>
  );
}
