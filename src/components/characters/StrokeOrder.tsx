"use client";
import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

interface StrokeOrderProps {
  character: string;
  size?: number;
  className?: string;
}

export default function StrokeOrder({
  character,
  size = 200,
  className,
}: StrokeOrderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);
  const [mode, setMode] = useState<"animate" | "quiz">("animate");
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const [strokeCount, setStrokeCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  // Tamano efectivo del lienzo: nunca mayor que `size`, pero se reduce para
  // caber en pantallas estrechas (movil) segun el ancho disponible del contenedor.
  const [renderSize, setRenderSize] = useState(size);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const update = () => {
      const available = el.clientWidth;
      if (available > 0) setRenderSize(Math.min(size, available));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [size]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous
    containerRef.current.innerHTML = "";
    writerRef.current = null;
    setLoading(true);
    setQuizResult(null);

    import("hanzi-writer").then((HanziWriter) => {
      if (!containerRef.current) return;

      const Writer = HanziWriter.default || HanziWriter;

      try {
        const writer = Writer.create(containerRef.current, character, {
          width: renderSize,
          height: renderSize,
          padding: 10,
          showOutline: true,
          strokeAnimationSpeed: 1,
          delayBetweenStrokes: 300,
          strokeColor: "#1f2937",
          outlineColor: "#e5e7eb",
          radicalColor: "#dc2626",
          highlightColor: "#dc2626",
          drawingColor: "#2563eb",
          showCharacter: mode === "animate",
          showHintAfterMisses: 2,
        });

        writerRef.current = writer;
        setLoading(false);

        // Try to get stroke count from character data
        try {
          Writer.loadCharacterData(character).then((data: any) => {
            if (data && data.strokes) {
              setStrokeCount(data.strokes.length);
            }
          });
        } catch {}
      } catch {
        setLoading(false);
      }
    });

    return () => {
      writerRef.current = null;
    };
  }, [character, renderSize, mode]);

  const handleAnimate = () => {
    if (writerRef.current) {
      writerRef.current.animateCharacter();
    }
  };

  const handleQuiz = () => {
    setMode("quiz");
    setQuizResult(null);
    setTimeout(() => {
      if (writerRef.current) {
        writerRef.current.quiz({
          onComplete: (summary: any) => {
            const mistakes = summary.totalMistakes || 0;
            if (mistakes === 0) {
              setQuizResult("¡Perfecto! Sin errores");
            } else {
              setQuizResult(`Completado con ${mistakes} error${mistakes > 1 ? "es" : ""}`);
            }
          },
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setMode("animate");
    setQuizResult(null);
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {/* Wrapper de ancho completo (hasta `size`) para medir el espacio disponible */}
      <div ref={wrapperRef} className="w-full flex justify-center" style={{ maxWidth: size }}>
        <div
          ref={containerRef}
          className={cn(
            "border-2 border-gray-200 rounded-xl bg-white relative",
            loading && "animate-pulse"
          )}
          style={{ width: renderSize, height: renderSize }}
        />
      </div>

      {strokeCount > 0 && (
        <p className="text-xs text-gray-500">{strokeCount} trazos</p>
      )}

      <div className="flex gap-2">
        <button
          onClick={handleAnimate}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          title="Ver animación"
        >
          <Play size={14} />
          Animar
        </button>
        <button
          onClick={handleQuiz}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          title="Practicar escritura"
        >
          <Pencil size={14} />
          Practicar
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          title="Reiniciar"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {quizResult && (
        <p
          className={cn(
            "text-sm font-medium",
            quizResult.includes("Perfecto") ? "text-green-600" : "text-orange-600"
          )}
        >
          {quizResult}
        </p>
      )}
    </div>
  );
}
