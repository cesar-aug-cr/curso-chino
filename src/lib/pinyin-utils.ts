// Pinyin utility functions

// Tone number to tone mark mapping
const toneMarks: Record<string, string[]> = {
  a: ["ā", "á", "ǎ", "à", "a"],
  e: ["ē", "é", "ě", "è", "e"],
  i: ["ī", "í", "ǐ", "ì", "i"],
  o: ["ō", "ó", "ǒ", "ò", "o"],
  u: ["ū", "ú", "ǔ", "ù", "u"],
  ü: ["ǖ", "ǘ", "ǚ", "ǜ", "ü"],
};

// Convert numbered pinyin (ma1) to tone-marked pinyin (mā)
export function numberedToMarked(numbered: string): string {
  const match = numbered.match(/^([a-züÜ]+)(\d)$/i);
  if (!match) return numbered;

  const [, syllable, toneStr] = match;
  const tone = parseInt(toneStr);
  if (tone < 1 || tone > 5) return numbered;

  // Find the vowel to mark (pinyin tone placement rules)
  const lower = syllable.toLowerCase();

  // Rule: a and e always get the mark
  for (const vowel of ["a", "e"]) {
    const idx = lower.indexOf(vowel);
    if (idx !== -1) {
      const marked = toneMarks[vowel][tone - 1];
      return syllable.slice(0, idx) + marked + syllable.slice(idx + 1);
    }
  }

  // Rule: ou → mark the o
  if (lower.includes("ou")) {
    const idx = lower.indexOf("o");
    const marked = toneMarks["o"][tone - 1];
    return syllable.slice(0, idx) + marked + syllable.slice(idx + 1);
  }

  // Rule: otherwise mark the last vowel
  for (let i = lower.length - 1; i >= 0; i--) {
    const char = lower[i];
    if (toneMarks[char]) {
      const marked = toneMarks[char][tone - 1];
      return syllable.slice(0, i) + marked + syllable.slice(i + 1);
    }
  }

  return numbered;
}

// Get tone number from marked pinyin
export function getToneNumber(pinyin: string): number {
  const toneChars: Record<string, number> = {
    ā: 1, á: 2, ǎ: 3, à: 4,
    ē: 1, é: 2, ě: 3, è: 4,
    ī: 1, í: 2, ǐ: 3, ì: 4,
    ō: 1, ó: 2, ǒ: 3, ò: 4,
    ū: 1, ú: 2, ǔ: 3, ù: 4,
    ǖ: 1, ǘ: 2, ǚ: 3, ǜ: 4,
  };

  for (const char of pinyin) {
    if (toneChars[char]) return toneChars[char];
  }
  return 5; // Neutral tone
}

// Get tone color
export function getToneColor(tone: number): string {
  const colors: Record<number, string> = {
    1: "text-red-600",
    2: "text-orange-500",
    3: "text-green-600",
    4: "text-blue-600",
    5: "text-gray-500",
  };
  return colors[tone] || "text-gray-500";
}

export function getToneBgColor(tone: number): string {
  const colors: Record<number, string> = {
    1: "bg-red-100 text-red-700",
    2: "bg-orange-100 text-orange-700",
    3: "bg-green-100 text-green-700",
    4: "bg-blue-100 text-blue-700",
    5: "bg-gray-100 text-gray-600",
  };
  return colors[tone] || "bg-gray-100 text-gray-600";
}

// Split a pinyin string with multiple syllables
export function splitPinyin(pinyin: string): string[] {
  return pinyin
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean);
}

// Remove tone marks to get base pinyin
export function removeToneMarks(pinyin: string): string {
  const replacements: Record<string, string> = {
    ā: "a", á: "a", ǎ: "a", à: "a",
    ē: "e", é: "e", ě: "e", è: "e",
    ī: "i", í: "i", ǐ: "i", ì: "i",
    ō: "o", ó: "o", ǒ: "o", ò: "o",
    ū: "u", ú: "u", ǔ: "u", ù: "u",
    ǖ: "ü", ǘ: "ü", ǚ: "ü", ǜ: "ü",
  };

  return pinyin
    .split("")
    .map((ch) => replacements[ch] || ch)
    .join("");
}
