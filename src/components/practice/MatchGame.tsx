"use client";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { RefreshCw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface MatchPair {
  hanzi: string;
  meaning: string;
}

interface MatchGameProps {
  pairs: MatchPair[];
  onComplete?: (mistakes: number) => void;
}

interface Card {
  id: string;
  content: string;
  type: "hanzi" | "meaning";
  pairIndex: number;
  matched: boolean;
}

export default function MatchGame({ pairs, onComplete }: MatchGameProps) {
  const [mistakes, setMistakes] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<number>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);

  const cards = useMemo(() => {
    const shuffled = pairs.slice(0, 6); // Max 6 pairs
    const allCards: Card[] = [];

    shuffled.forEach((pair, i) => {
      allCards.push({ id: `h-${i}`, content: pair.hanzi, type: "hanzi", pairIndex: i, matched: false });
      allCards.push({ id: `m-${i}`, content: pair.meaning, type: "meaning", pairIndex: i, matched: false });
    });

    // Shuffle
    for (let i = allCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
    }

    return allCards;
  }, [pairs]);

  const isComplete = matchedPairs.size === Math.min(pairs.length, 6);

  const handleSelect = useCallback(
    (cardId: string) => {
      if (wrongPair) return;
      const card = cards.find((c) => c.id === cardId);
      if (!card || matchedPairs.has(card.pairIndex)) return;

      if (!selected) {
        setSelected(cardId);
        return;
      }

      if (selected === cardId) {
        setSelected(null);
        return;
      }

      const first = cards.find((c) => c.id === selected)!;

      if (first.type === card.type) {
        setSelected(cardId);
        return;
      }

      if (first.pairIndex === card.pairIndex) {
        // Match!
        const newMatched = new Set(matchedPairs);
        newMatched.add(card.pairIndex);
        setMatchedPairs(newMatched);
        setSelected(null);
        if (newMatched.size === Math.min(pairs.length, 6)) {
          onComplete?.(mistakes);
        }
      } else {
        // Wrong
        setMistakes((m) => m + 1);
        setWrongPair([selected, cardId]);
        setTimeout(() => {
          setWrongPair(null);
          setSelected(null);
        }, 800);
      }
    },
    [selected, cards, matchedPairs, mistakes, wrongPair, pairs.length, onComplete]
  );

  const reset = () => {
    setMistakes(0);
    setSelected(null);
    setMatchedPairs(new Set());
    setWrongPair(null);
  };

  if (isComplete) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-12 space-y-4"
      >
        <Trophy size={48} className="mx-auto text-yellow-500" />
        <h3 className="text-2xl font-bold">¡Completado!</h3>
        <p className="text-gray-600">
          {mistakes === 0
            ? "¡Perfecto! Sin errores"
            : `Terminaste con ${mistakes} error${mistakes > 1 ? "es" : ""}`}
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
        >
          <RefreshCw size={16} />
          Jugar de nuevo
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Empareja cada caracter con su significado
        </p>
        <span className="text-sm text-gray-400">Errores: {mistakes}</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {cards.map((card) => {
          const isMatched = matchedPairs.has(card.pairIndex);
          const isSelected = selected === card.id;
          const isWrong = wrongPair?.includes(card.id);

          return (
            <motion.button
              key={card.id}
              whileTap={!isMatched ? { scale: 0.95 } : {}}
              onClick={() => handleSelect(card.id)}
              disabled={isMatched}
              className={cn(
                "p-3 rounded-xl border-2 text-center transition-all min-h-[70px] flex items-center justify-center",
                isMatched && "border-green-300 bg-green-50 opacity-60",
                isSelected && !isWrong && "border-red-500 bg-red-50",
                isWrong && "border-red-500 bg-red-100 animate-shake",
                !isMatched && !isSelected && !isWrong && "border-gray-200 hover:border-gray-400 cursor-pointer",
                card.type === "hanzi" ? "text-2xl" : "text-sm"
              )}
            >
              {card.content}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
