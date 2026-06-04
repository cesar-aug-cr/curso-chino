"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  Mic,
  PenTool,
  Layers,
  HelpCircle,
  BarChart3,
  Music,
  MessageSquare,
  Menu,
  X,
  Settings,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/curso/hsk1", label: "Curso HSK 1", icon: BookOpen },
  { href: "/tonos", label: "Entrenador de Tonos", icon: Music },
  { href: "/practica/flashcards", label: "Flashcards", icon: Layers },
  { href: "/practica/quiz", label: "Quiz", icon: HelpCircle },
  { href: "/practica/pronunciacion", label: "Pronunciación", icon: Mic },
  { href: "/practica/escritura", label: "Escritura", icon: PenTool },
  { href: "/frases", label: "Frases Útiles", icon: MessageSquare },
  { href: "/diccionario", label: "Diccionario", icon: GraduationCap },
  { href: "/cultura", label: "Cultura China", icon: Landmark },
  { href: "/progreso", label: "Mi Progreso", icon: BarChart3 },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50",
          "w-64 flex flex-col transition-transform duration-300",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <span className="text-2xl">🀄</span>
            <div>
              <h1 className="font-bold text-lg leading-tight text-gray-900 dark:text-white">
                Aprende Chino
              </h1>
              <p className="text-xs text-gray-500">Mandarín desde cero</p>
            </div>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-lg"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/progreso"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Settings size={18} />
            Configuración
          </Link>
        </div>
      </aside>
    </>
  );
}
