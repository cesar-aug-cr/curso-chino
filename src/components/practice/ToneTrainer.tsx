"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Check, X, Volume2 } from "lucide-react";
import { speakChinese } from "@/lib/audio";
import { cn } from "@/lib/utils";

const TONE_COLORS = {
  1: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300", fill: "#dc2626" },
  2: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300", fill: "#f97316" },
  3: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300", fill: "#16a34a" },
  4: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300", fill: "#2563eb" },
  5: { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300", fill: "#6b7280" },
};

const TONE_NAMES = ["", "Primer tono", "Segundo tono", "Tercer tono", "Cuarto tono", "Tono neutro"];

// SVG path data for tone curves
function ToneCurve({ tone, size = 80 }: { tone: number; size?: number }) {
  const h = size * 0.6;
  const w = size;
  const paths: Record<number, string> = {
    1: `M 10 ${h * 0.3} L ${w - 10} ${h * 0.3}`,
    2: `M 10 ${h * 0.7} Q ${w / 2} ${h * 0.3} ${w - 10} ${h * 0.15}`,
    3: `M 10 ${h * 0.4} Q ${w * 0.35} ${h * 0.9} ${w / 2} ${h * 0.7} Q ${w * 0.65} ${h * 0.5} ${w - 10} ${h * 0.45}`,
    4: `M 10 ${h * 0.15} Q ${w / 2} ${h * 0.5} ${w - 10} ${h * 0.85}`,
    5: `M 10 ${h * 0.55} L ${w - 10} ${h * 0.55}`,
  };

  return (
    <svg width={w} height={h} className="block">
      <path
        d={paths[tone] || paths[5]}
        fill="none"
        stroke={TONE_COLORS[tone as keyof typeof TONE_COLORS]?.fill || "#6b7280"}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

const syllables = ["mā", "má", "mǎ", "mà", "bā", "bá", "bǎ", "bà", "tā", "tá", "tǎ", "tà", "shī", "shí", "shǐ", "shì"];

function getRandomExercise() {
  const correctTone = Math.floor(Math.random() * 4) + 1;
  const syllable = syllables[Math.floor(Math.random() * syllables.length)];
  // Build the character to speak based on tone
  const base = syllable.replace(/[āáǎàēéěèīíǐìōóǒòūúǔù]/g, (m) => {
    const map: Record<string, string> = {
      ā: "a", á: "a", ǎ: "a", à: "a",
      ē: "e", é: "e", ě: "e", è: "e",
      ī: "i", í: "i", ǐ: "i", ì: "i",
      ō: "o", ó: "o", ǒ: "o", ò: "o",
      ū: "u", ú: "u", ǔ: "u", ù: "u",
    };
    return map[m] || m;
  });

  return { correctTone, base, syllable };
}

export default function ToneTrainer() {
  const [exercise, setExercise] = useState(getRandomExercise);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const toneChars: Record<number, string> = useMemo(
    () => ({
      1: "妈",
      2: "麻",
      3: "马",
      4: "骂",
    }),
    []
  );

  const playTone = (tone: number) => {
    const chars: Record<number, string> = { 1: "妈", 2: "麻", 3: "马", 4: "骂" };
    speakChinese(chars[tone] || "妈", 0.7).catch(() => {});
  };

  const playExercise = () => {
    playTone(exercise.correctTone);
  };

  const handleSelect = (tone: number) => {
    if (selected !== null) return;
    setSelected(tone);
    const correct = tone === exercise.correctTone;
    setScore((s) => ({
      correct: s.correct + (correct ? 1 : 0),
      total: s.total + 1,
    }));
  };

  const next = () => {
    setSelected(null);
    setExercise(getRandomExercise());
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      {/* Tone reference */}
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((t) => (
          <button
            key={t}
            onClick={() => playTone(t)}
            className={cn(
              "flex flex-col items-center p-3 rounded-xl border-2 transition-all hover:scale-105",
              TONE_COLORS[t as keyof typeof TONE_COLORS].bg,
              TONE_COLORS[t as keyof typeof TONE_COLORS].border
            )}
          >
            <ToneCurve tone={t} size={60} />
            <span className={cn("text-xs font-medium mt-1", TONE_COLORS[t as keyof typeof TONE_COLORS].text)}>
              Tono {t}
            </span>
          </button>
        ))}
      </div>

      {/* Score */}
      {score.total > 0 && (
        <div className="text-center text-sm text-gray-500">
          {score.correct}/{score.total} correctas (
          {Math.round((score.correct / score.total) * 100)}%)
        </div>
      )}

      {/* Exercise */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 text-center space-y-4">
        <p className="text-gray-600">Escucha y selecciona el tono correcto</p>

        <button
          onClick={playExercise}
          className="mx-auto w-20 h-20 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors"
        >
          <Volume2 size={36} className="text-red-600" />
        </button>

        <div className="grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((t) => {
            const isSelected = selected === t;
            const isCorrect = t === exercise.correctTone;
            const showResult = selected !== null;

            return (
              <motion.button
                key={t}
                whileTap={!showResult ? { scale: 0.95 } : {}}
                onClick={() => handleSelect(t)}
                disabled={showResult}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-1",
                  !showResult && "border-gray-200 hover:border-gray-400 cursor-pointer",
                  showResult && isCorrect && "border-green-500 bg-green-50",
                  showResult && isSelected && !isCorrect && "border-red-500 bg-red-50",
                  showResult && !isSelected && !isCorrect && "opacity-40"
                )}
              >
                {showResult && isCorrect && <Check size={20} className="text-green-600" />}
                {showResult && isSelected && !isCorrect && <X size={20} className="text-red-600" />}
                {!showResult && <ToneCurve tone={t} size={50} />}
                <span className="text-sm font-medium">Tono {t}</span>
              </motion.button>
            );
          })}
        </div>

        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className={cn("font-semibold", selected === exercise.correctTone ? "text-green-600" : "text-red-600")}>
              {selected === exercise.correctTone
                ? "¡Correcto!"
                : `Era el ${TONE_NAMES[exercise.correctTone]}`}
            </p>
            <button
              onClick={next}
              className="mt-3 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
            >
              Siguiente
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
