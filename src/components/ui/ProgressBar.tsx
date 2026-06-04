"use client";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  size?: "sm" | "md" | "lg";
  color?: "red" | "green" | "blue" | "gold";
  showPercent?: boolean;
  className?: string;
}

export default function ProgressBar({
  value,
  label,
  size = "md",
  color = "red",
  showPercent = true,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  const heights = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    gold: "bg-yellow-500",
  };

  return (
    <div className={cn("w-full", className)}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>}
          {showPercent && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round(clamped)}%
            </span>
          )}
        </div>
      )}
      <div className={cn("w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden", heights[size])}>
        <div
          className={cn("h-full rounded-full transition-all duration-700 ease-out", colors[color])}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
