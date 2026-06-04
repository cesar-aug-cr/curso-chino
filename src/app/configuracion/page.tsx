"use client";

import { useEffect } from "react";
import { Settings, Volume2, Layers, Eye, Moon, Sun, Play } from "lucide-react";
import { useSettingsStore } from "@/stores/useSettingsStore";
import { cn } from "@/lib/utils";

export default function ConfiguracionPage() {
  const {
    audioSpeed,
    newCardsPerDay,
    showPinyin,
    darkMode,
    autoPlayAudio,
    setAudioSpeed,
    setNewCardsPerDay,
    togglePinyin,
    toggleDarkMode,
    toggleAutoPlay,
    initialize,
  } = useSettingsStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Settings className="text-red-600" size={28} />
          Configuracion
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Personaliza tu experiencia de aprendizaje
        </p>
      </div>

      {/* Apariencia */}
      <SettingsSection title="Apariencia" icon={darkMode ? <Moon size={20} className="text-indigo-500" /> : <Sun size={20} className="text-amber-500" />}>
        <ToggleSetting
          label="Modo oscuro"
          description="Cambia entre tema claro y oscuro"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
      </SettingsSection>

      {/* Audio */}
      <SettingsSection title="Audio" icon={<Volume2 size={20} className="text-blue-500" />}>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Velocidad del audio
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Ajusta la velocidad de reproduccion del texto en chino
          </p>
          <div className="flex gap-2 mt-2">
            {(["slow", "normal", "fast"] as const).map((speed) => (
              <button
                key={speed}
                onClick={() => setAudioSpeed(speed)}
                className={cn(
                  "px-4 py-2 text-sm rounded-xl font-medium transition-colors",
                  audioSpeed === speed
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                {speed === "slow" ? "Lenta" : speed === "normal" ? "Normal" : "Rapida"}
              </button>
            ))}
          </div>
        </div>

        <ToggleSetting
          label="Auto-reproducir audio"
          description="Reproduce automaticamente el audio al pasar a una nueva palabra"
          checked={autoPlayAudio}
          onChange={toggleAutoPlay}
        />
      </SettingsSection>

      {/* Estudio */}
      <SettingsSection title="Estudio" icon={<Layers size={20} className="text-green-500" />}>
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Tarjetas nuevas por dia
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Cuantas tarjetas nuevas agregar en cada sesion de flashcards
          </p>
          <div className="flex gap-2 mt-2">
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                onClick={() => setNewCardsPerDay(count)}
                className={cn(
                  "px-4 py-2 text-sm rounded-xl font-medium transition-colors",
                  newCardsPerDay === count
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
                )}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      </SettingsSection>

      {/* Visualizacion */}
      <SettingsSection title="Visualizacion" icon={<Eye size={20} className="text-purple-500" />}>
        <ToggleSetting
          label="Mostrar pinyin"
          description="Muestra la romanizacion pinyin junto a los caracteres chinos"
          checked={showPinyin}
          onChange={togglePinyin}
        />
      </SettingsSection>
    </div>
  );
}

/* --------------------------------------------------------
   Componentes auxiliares
-------------------------------------------------------- */

function SettingsSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center gap-2.5">
        {icon}
        <h2 className="font-semibold text-gray-900 dark:text-white">{title}</h2>
      </div>
      <div className="p-5 space-y-5">{children}</div>
    </div>
  );
}

function ToggleSetting({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-0.5">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{label}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={cn(
          "relative w-11 h-6 rounded-full transition-colors flex-shrink-0",
          checked ? "bg-red-600" : "bg-gray-300 dark:bg-gray-600"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform",
            checked && "translate-x-5"
          )}
        />
      </button>
    </div>
  );
}
