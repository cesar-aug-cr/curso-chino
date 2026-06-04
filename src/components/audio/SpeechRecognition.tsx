"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Mic, MicOff, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import {
  startRecognition,
  calculateSimilarity,
  type RecognitionResult,
} from "@/lib/audio";
import { cn } from "@/lib/utils";

interface SpeechRecognitionProps {
  expectedText: string;
  onResult?: (result: RecognitionResult) => void;
  className?: string;
}

type RecognitionState = "idle" | "listening" | "result";

export default function SpeechRecognition({
  expectedText,
  onResult,
  className,
}: SpeechRecognitionProps) {
  const [state, setState] = useState<RecognitionState>("idle");
  const [result, setResult] = useState<RecognitionResult | null>(null);
  const [similarity, setSimilarity] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsAvailable(false);
      return;
    }
    const w = window as unknown as Record<string, unknown>;
    const SpeechRecognitionAPI =
      w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setIsAvailable(false);
    }
  }, []);

  // Limpiar reconocimiento al desmontar
  useEffect(() => {
    return () => {
      stopRef.current?.();
    };
  }, []);

  const handleStart = useCallback(() => {
    setError(null);
    setResult(null);
    setState("listening");

    const stop = startRecognition(
      expectedText,
      (recognitionResult) => {
        const sim = calculateSimilarity(
          recognitionResult.transcript,
          expectedText
        );
        setSimilarity(sim);
        setResult(recognitionResult);
        setState("result");
        onResult?.(recognitionResult);
        stopRef.current = null;
      },
      (errorMessage) => {
        setError(errorMessage);
        setState("idle");
        stopRef.current = null;
      }
    );

    if (stop) {
      stopRef.current = stop;
    } else {
      // startRecognition devolvio null, API no disponible
      setError("Reconocimiento de voz no disponible en este navegador");
      setState("idle");
    }
  }, [expectedText, onResult]);

  const handleStop = useCallback(() => {
    stopRef.current?.();
    stopRef.current = null;
    setState("idle");
  }, []);

  const handleRetry = useCallback(() => {
    setResult(null);
    setSimilarity(0);
    setError(null);
    setState("idle");
  }, []);

  // Color del indicador de similitud segun porcentaje
  const getSimilarityColor = (pct: number): string => {
    if (pct >= 80) return "text-green-600";
    if (pct >= 50) return "text-yellow-600";
    return "text-red-500";
  };

  const getSimilarityBg = (pct: number): string => {
    if (pct >= 80) return "bg-green-500";
    if (pct >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  if (!isAvailable) {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-warm">
          <MicOff size={36} className="text-[var(--text-muted)]" aria-hidden="true" />
        </div>
        <p className="text-sm text-[var(--text-muted)] text-center">
          Reconocimiento de voz no disponible en este navegador
        </p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      {/* Boton principal de microfono */}
      <div className="relative flex items-center justify-center">
        {/* Anillo animado cuando esta escuchando */}
        {state === "listening" && (
          <>
            <span
              className={cn(
                "absolute h-24 w-24 rounded-full",
                "border-4 border-red-400 opacity-75",
                "animate-ping"
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                "absolute h-28 w-28 rounded-full",
                "border-2 border-red-300 opacity-40",
                "animate-pulse"
              )}
              aria-hidden="true"
            />
          </>
        )}

        <button
          type="button"
          onClick={state === "listening" ? handleStop : handleStart}
          disabled={state === "result"}
          aria-label={
            state === "listening"
              ? "Detener grabacion"
              : state === "result"
                ? "Grabacion finalizada"
                : "Iniciar grabacion de voz"
          }
          className={cn(
            "relative z-10 flex items-center justify-center",
            "h-20 w-20 rounded-full",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            state === "idle" && [
              "bg-red-600 text-white",
              "hover:bg-red-700 hover:scale-105",
              "active:scale-95",
              "focus-visible:ring-red-500",
              "cursor-pointer shadow-lg shadow-red-200",
            ],
            state === "listening" && [
              "bg-red-600 text-white",
              "animate-pulse",
              "cursor-pointer shadow-xl shadow-red-300",
              "focus-visible:ring-red-500",
            ],
            state === "result" && [
              result?.isMatch
                ? "bg-green-100 text-green-600"
                : "bg-warm text-[var(--text-muted)]",
              "cursor-default",
            ]
          )}
        >
          {state === "result" ? (
            result?.isMatch ? (
              <CheckCircle2 size={36} aria-hidden="true" />
            ) : (
              <XCircle size={36} aria-hidden="true" />
            )
          ) : (
            <Mic size={36} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Texto indicador de estado */}
      {state === "idle" && !error && (
        <p className="text-sm text-[var(--text-muted)]">
          Pulsa el microfono para hablar
        </p>
      )}
      {state === "listening" && (
        <p className="text-sm text-red-600 font-medium animate-pulse">
          Escuchando... Habla ahora
        </p>
      )}

      {/* Mensaje de error */}
      {error && (
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-red-500 text-center">{error}</p>
          <button
            type="button"
            onClick={handleRetry}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5",
              "text-sm text-red-600 font-medium",
              "rounded-md hover:bg-red-50",
              "transition-colors duration-150"
            )}
          >
            <RotateCcw size={14} aria-hidden="true" />
            Intentar de nuevo
          </button>
        </div>
      )}

      {/* Panel de resultados */}
      {state === "result" && result && (
        <div
          className={cn(
            "w-full max-w-xs flex flex-col items-center gap-3",
            "p-4 rounded-xl",
            "bg-card border border-card-border shadow-warm",
            "animate-in fade-in slide-in-from-bottom-2 duration-300"
          )}
        >
          {/* Resultado principal */}
          {result.isMatch ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 size={24} aria-hidden="true" />
              <span className="text-lg font-bold">Correcto!</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-foreground">
              <XCircle size={24} className="text-red-400" aria-hidden="true" />
              <span className="text-lg font-medium">Casi...</span>
            </div>
          )}

          {/* Barra de similitud */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[var(--text-muted)]">Similitud</span>
              <span
                className={cn(
                  "text-sm font-bold",
                  getSimilarityColor(similarity)
                )}
              >
                {similarity}%
              </span>
            </div>
            <div className="w-full h-2 bg-warm rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500 ease-out",
                  getSimilarityBg(similarity)
                )}
                style={{ width: `${similarity}%` }}
                role="progressbar"
                aria-valuenow={similarity}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Similitud: ${similarity} por ciento`}
              />
            </div>
          </div>

          {/* Texto reconocido */}
          <div className="w-full text-center">
            <p className="text-xs text-[var(--text-muted)] mb-1">Se reconocio:</p>
            <p className="text-xl font-medium text-foreground">
              {result.transcript || (
                <span className="text-[var(--text-muted)] italic text-base">
                  No se detecto texto
                </span>
              )}
            </p>
          </div>

          {/* Texto esperado para comparacion */}
          {!result.isMatch && (
            <div className="w-full text-center">
              <p className="text-xs text-[var(--text-muted)] mb-1">Se esperaba:</p>
              <p className="text-xl font-medium text-red-600">{expectedText}</p>
            </div>
          )}

          {/* Confianza del reconocimiento */}
          <p className="text-xs text-[var(--text-muted)]">
            Confianza: {Math.round(result.confidence * 100)}%
          </p>

          {/* Boton de reintentar */}
          <button
            type="button"
            onClick={handleRetry}
            className={cn(
              "inline-flex items-center gap-2",
              "px-5 py-2.5 rounded-lg",
              "bg-red-600 text-white text-sm font-medium",
              "hover:bg-red-700 active:scale-95",
              "transition-all duration-200",
              "focus:outline-none focus-visible:ring-2",
              "focus-visible:ring-red-500 focus-visible:ring-offset-2"
            )}
          >
            <RotateCcw size={16} aria-hidden="true" />
            Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
