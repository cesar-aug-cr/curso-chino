"use client";
import { useState, useMemo } from "react";
import { HelpCircle, RefreshCw, Trophy } from "lucide-react";
import QuizQuestion, { type QuizItem } from "@/components/practice/QuizQuestion";
import { hsk1Words } from "@/data/hsk1";

function generateQuiz(count: number = 10): QuizItem[] {
  const shuffled = [...hsk1Words].sort(() => Math.random() - 0.5);
  const questions: QuizItem[] = [];

  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const word = shuffled[i];
    const type = Math.random() > 0.5 ? "multiple-choice" : "listen-select";

    // Get 3 wrong options
    const wrongWords = hsk1Words
      .filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "multiple-choice") {
      const options = [word.meaning, ...wrongWords.map((w) => w.meaning)].sort(
        () => Math.random() - 0.5
      );
      questions.push({
        type: "multiple-choice",
        question: `¿Qué significa "${word.hanzi}" (${word.pinyin})?`,
        options,
        correctAnswer: options.indexOf(word.meaning),
        explanation: `${word.hanzi} (${word.pinyin}) significa "${word.meaning}"`,
      });
    } else {
      const options = [word.hanzi, ...wrongWords.map((w) => w.hanzi)].sort(
        () => Math.random() - 0.5
      );
      questions.push({
        type: "listen-select",
        question: "Escucha y selecciona el carácter correcto:",
        audioText: word.hanzi,
        options,
        correctAnswer: options.indexOf(word.hanzi),
        explanation: `La respuesta es ${word.hanzi} (${word.pinyin}) - "${word.meaning}"`,
      });
    }
  }

  return questions;
}

export default function QuizPage() {
  const [quiz, setQuiz] = useState(() => generateQuiz(10));
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      if (currentQ + 1 >= quiz.length) {
        setDone(true);
      } else {
        setCurrentQ((q) => q + 1);
      }
    }, 300);
  };

  const restart = () => {
    setQuiz(generateQuiz(10));
    setCurrentQ(0);
    setScore(0);
    setDone(false);
  };

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    return (
      <div className="max-w-md mx-auto text-center py-12 space-y-4">
        <Trophy
          size={48}
          className={pct >= 70 ? "mx-auto text-yellow-500" : "mx-auto text-gray-400"}
        />
        <h2 className="text-2xl font-bold">¡Quiz terminado!</h2>
        <p className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          {score}/{quiz.length}
        </p>
        <p className="text-gray-600">
          {pct >= 90
            ? "¡Excelente! Dominas este vocabulario."
            : pct >= 70
              ? "¡Muy bien! Sigue practicando."
              : pct >= 50
                ? "Buen intento. Repasa las palabras que fallaste."
                : "Necesitas más práctica. ¡No te rindas!"}
        </p>
        <button
          onClick={restart}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
        >
          <RefreshCw size={16} />
          Nuevo quiz
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <HelpCircle className="text-red-600" size={28} />
          Quiz
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pon a prueba tu conocimiento
        </p>
      </div>

      <QuizQuestion
        item={quiz[currentQ]}
        questionNumber={currentQ + 1}
        totalQuestions={quiz.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
