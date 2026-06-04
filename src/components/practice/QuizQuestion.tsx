"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { cn } from "@/lib/utils";

export interface QuizItem {
  type: "multiple-choice" | "listen-select" | "fill-blank" | "order-words" | "match";
  question: string;
  audioText?: string; // Chinese text for audio questions
  options: string[];
  correctAnswer: number; // index
  explanation?: string;
}

interface QuizQuestionProps {
  item: QuizItem;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
}

export default function QuizQuestion({
  item,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const isCorrect = selected === item.correctAnswer;

  const handleSelect = (index: number) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);
    setTimeout(() => onAnswer(index === item.correctAnswer), 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm text-gray-500">
          {questionNumber}/{totalQuestions}
        </span>
        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-500 rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
          {item.question}
        </p>

        {item.audioText && (
          <div className="flex justify-center my-4">
            <TextToSpeech text={item.audioText} size="lg" />
          </div>
        )}

        {/* Options */}
        <div className="space-y-3 mt-4">
          {item.options.map((option, i) => {
            const isThis = selected === i;
            const isRight = i === item.correctAnswer;

            return (
              <motion.button
                key={i}
                whileTap={!answered ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(i)}
                disabled={answered}
                className={cn(
                  "w-full p-4 rounded-xl text-left transition-all border-2 flex items-center gap-3",
                  !answered && "border-gray-200 hover:border-red-300 hover:bg-red-50 cursor-pointer",
                  answered && isThis && isRight && "border-green-500 bg-green-50",
                  answered && isThis && !isRight && "border-red-500 bg-red-50",
                  answered && !isThis && isRight && "border-green-500 bg-green-50",
                  answered && !isThis && !isRight && "border-gray-100 opacity-50"
                )}
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
                    !answered && "bg-gray-100 text-gray-600",
                    answered && isRight && "bg-green-500 text-white",
                    answered && isThis && !isRight && "bg-red-500 text-white"
                  )}
                >
                  {answered && isRight ? (
                    <Check size={16} />
                  ) : answered && isThis && !isRight ? (
                    <X size={16} />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="text-base">{option}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Feedback */}
        {answered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-4 p-4 rounded-xl",
              isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            )}
          >
            <p className={cn("font-semibold", isCorrect ? "text-green-700" : "text-red-700")}>
              {isCorrect ? "¡Correcto!" : "Incorrecto"}
            </p>
            {item.explanation && (
              <p className="text-sm text-gray-600 mt-1">{item.explanation}</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
