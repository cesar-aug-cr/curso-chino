"use client";
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { phrases, phraseCategories } from "@/data/phrases";
import { cn } from "@/lib/utils";

export default function FrasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(phraseCategories[0]);

  const filtered = phrases.filter((p) => p.category === selectedCategory);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <MessageSquare className="text-red-600" size={28} />
          Frases Útiles
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Frases prácticas organizadas por situación
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {phraseCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-4 py-2 text-sm rounded-xl whitespace-nowrap transition-colors",
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-red-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Phrases */}
      <div className="space-y-3">
        {filtered.map((phrase) => (
          <div
            key={phrase.id}
            className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p
                  className="text-xl font-medium"
                  style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
                >
                  {phrase.hanzi}
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-0.5">
                  {phrase.pinyin}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-0.5">
                  {phrase.meaning}
                </p>
                {phrase.context && (
                  <p className="text-xs text-gray-400 mt-1 italic">
                    {phrase.context}
                  </p>
                )}
              </div>
              <TextToSpeech text={phrase.hanzi} size="sm" />
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-8">
          No hay frases en esta categoría
        </p>
      )}
    </div>
  );
}
