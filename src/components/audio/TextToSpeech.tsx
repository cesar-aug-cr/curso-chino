"use client";

import { useState, useEffect, useCallback } from "react";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { speakChinese } from "@/lib/audio";
import { cn } from "@/lib/utils";

interface TextToSpeechProps {
  text: string;
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeConfig = {
  sm: { icon: 24, button: "h-10 w-10" },
  md: { icon: 32, button: "h-12 w-12" },
  lg: { icon: 40, button: "h-14 w-14" },
} as const;

export default function TextToSpeech({
  text,
  rate = 0.8,
  size = "md",
  className,
}: TextToSpeechProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setIsAvailable(false);
    }
  }, []);

  // Limpiar la sintesis al desmontar el componente
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = useCallback(async () => {
    if (isSpeaking || !isAvailable) return;

    setIsSpeaking(true);
    try {
      await speakChinese(text, rate);
    } catch {
      // Error silencioso - la voz puede no estar disponible
    } finally {
      setIsSpeaking(false);
    }
  }, [text, rate, isSpeaking, isAvailable]);

  const { icon: iconSize, button: buttonSize } = sizeConfig[size];

  const IconComponent = isSpeaking ? Volume1 : Volume2;

  return (
    <div className="relative inline-block group">
      <button
        type="button"
        onClick={handleSpeak}
        disabled={!isAvailable}
        aria-label={
          !isAvailable
            ? "Audio no disponible"
            : isSpeaking
              ? "Reproduciendo audio..."
              : `Escuchar pronunciacion: ${text}`
        }
        className={cn(
          "relative flex items-center justify-center rounded-full",
          "transition-all duration-200 ease-out",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
          buttonSize,
          isAvailable
            ? [
                "bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700",
                "hover:scale-105 active:scale-95",
                "cursor-pointer",
              ]
            : "bg-gray-100 text-gray-400 cursor-not-allowed",
          isSpeaking && "animate-pulse bg-red-100",
          className
        )}
      >
        {/* Onda de pulso mientras se reproduce */}
        {isSpeaking && (
          <span
            className={cn(
              "absolute inset-0 rounded-full",
              "bg-red-200 opacity-50",
              "animate-ping"
            )}
            aria-hidden="true"
          />
        )}

        {!isAvailable ? (
          <VolumeX size={iconSize} aria-hidden="true" />
        ) : (
          <IconComponent
            size={iconSize}
            className="relative z-10"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Tooltip cuando el audio no esta disponible */}
      {!isAvailable && (
        <span
          role="tooltip"
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bottom-full mb-2",
            "px-3 py-1.5 rounded-md",
            "bg-gray-900 text-white text-xs whitespace-nowrap",
            "opacity-0 group-hover:opacity-100",
            "transition-opacity duration-200",
            "pointer-events-none",
            // Flecha del tooltip
            "after:content-[''] after:absolute after:top-full after:left-1/2",
            "after:-translate-x-1/2 after:border-4 after:border-transparent",
            "after:border-t-gray-900"
          )}
        >
          Audio no disponible
        </span>
      )}
    </div>
  );
}
