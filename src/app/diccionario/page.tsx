"use client";
import { useState, useMemo } from "react";
import { Search, GraduationCap } from "lucide-react";
import CharacterCard from "@/components/characters/CharacterCard";
import { hsk1Words, type Word } from "@/data/hsk1";
import { useProgressStore } from "@/stores/useProgressStore";
import { cn } from "@/lib/utils";

const categories = [
  "Todos",
  ...new Set(hsk1Words.map((w) => w.category)),
];

export default function DiccionarioPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const { addFlashcard } = useProgressStore();

  const filtered = useMemo(() => {
    let results = hsk1Words;

    if (selectedCategory !== "Todos") {
      results = results.filter((w) => w.category === selectedCategory);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      results = results.filter(
        (w) =>
          w.hanzi.includes(q) ||
          w.pinyin.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q)
      );
    }

    return results;
  }, [search, selectedCategory]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <GraduationCap className="text-red-600" size={28} />
          Diccionario
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Busca por carácter, pinyin o significado en español
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar: 你好, nǐ hǎo, hola..."
          className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors",
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-red-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        {filtered.length} palabra{filtered.length !== 1 ? "s" : ""} encontrada
        {filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((word) => (
          <CharacterCard
            key={word.id}
            word={word}
            showStroke
            onAddFlashcard={addFlashcard}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">No se encontraron resultados</p>
          <p className="text-sm">Intenta con otro término de búsqueda</p>
        </div>
      )}
    </div>
  );
}
