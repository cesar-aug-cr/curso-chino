"use client";
import TextToSpeech from "@/components/audio/TextToSpeech";
import { cn } from "@/lib/utils";
import { getToneColor, getToneNumber } from "@/lib/pinyin-utils";

interface PinyinDisplayProps {
  hanzi: string;
  pinyin: string;
  meaning?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showAudio?: boolean;
  className?: string;
}

export default function PinyinDisplay({
  hanzi,
  pinyin,
  meaning,
  size = "md",
  showAudio = true,
  className,
}: PinyinDisplayProps) {
  const tone = getToneNumber(pinyin.split(" ")[0]);

  const sizes = {
    sm: { hanzi: "text-xl", pinyin: "text-xs", meaning: "text-xs" },
    md: { hanzi: "text-3xl", pinyin: "text-sm", meaning: "text-sm" },
    lg: { hanzi: "text-5xl", pinyin: "text-base", meaning: "text-base" },
    xl: { hanzi: "text-7xl", pinyin: "text-lg", meaning: "text-lg" },
  };

  const s = sizes[size];

  return (
    <div className={cn("inline-flex flex-col items-center gap-0.5", className)}>
      <span className={cn("font-medium", s.pinyin, getToneColor(tone))}>
        {pinyin}
      </span>
      <div className="flex items-center gap-1.5">
        <span className={cn("font-medium", s.hanzi)}>{hanzi}</span>
        {showAudio && <TextToSpeech text={hanzi} size={size === "sm" ? "sm" : "md"} />}
      </div>
      {meaning && (
        <span className={cn("text-gray-500 dark:text-gray-400", s.meaning)}>
          {meaning}
        </span>
      )}
    </div>
  );
}
