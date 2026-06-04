// =============================================================================
// DATOS DE TONOS DEL CHINO MANDARÍN
// Todas las explicaciones en español para hispanohablantes
// =============================================================================

export interface ToneExample {
  syllable: string;
  tone: number;
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface TonePair {
  hanzi: string;
  pinyin: string;
  meaning: string;
  tones: [number, number];
}

export interface ToneExercise {
  audio: string;
  options: number[];
  correct: number;
}

export interface ToneChangeRule {
  id: string;
  title: string;
  explanation: string;
  examples: {
    original: string;
    spoken: string;
    hanzi: string;
    meaning: string;
  }[];
}

// =============================================================================
// DESCRIPCIONES DE LOS 5 TONOS
// =============================================================================

export const toneDescriptions = [
  {
    tone: 1,
    name: "Primer tono",
    symbol: "\u0101",
    description:
      "Plano y alto. Como cantar una nota sostenida. Mant\u00e9n la voz alta y pareja, como si estuvieras cantando 'laaaa' en una sola nota aguda.",
    color: "#DC2626",
    curve: "flat-high",
    mnemonic:
      "Imagina que sostienes una nota musical alta sin subir ni bajar. Como el sonido de un monitor cardiaco: biiiiip.",
    pitchContour: [55, 55, 55, 55, 55],
  },
  {
    tone: 2,
    name: "Segundo tono",
    symbol: "\u00e1",
    description:
      "Ascendente. Como cuando preguntas '\u00bfQu\u00e9?' con sorpresa. La voz sube desde un tono medio hasta uno alto.",
    color: "#F97316",
    curve: "rising",
    mnemonic:
      "Piensa en c\u00f3mo suena tu voz cuando alguien te dice algo incre\u00edble y respondes '\u00bfEn serio?'. Esa subida natural es el segundo tono.",
    pitchContour: [35, 40, 45, 50, 55],
  },
  {
    tone: 3,
    name: "Tercer tono",
    symbol: "\u01ce",
    description:
      "Baja y sube. Como cuando dices 'Hmm...' dudando. La voz baja primero y luego sube un poco al final.",
    color: "#16A34A",
    curve: "dipping",
    mnemonic:
      "Imagina que est\u00e1s pensando y dices 'Hmm...' con duda. Tu voz baja y al final sube ligeramente. Tambi\u00e9n como cuando dices '\u00bfde verdaaad?' con escepticismo.",
    pitchContour: [21, 15, 11, 15, 21],
  },
  {
    tone: 4,
    name: "Cuarto tono",
    symbol: "\u00e0",
    description:
      "Descendente fuerte. Como cuando das una orden '\u00a1No!'. La voz baja con fuerza y decisi\u00f3n desde arriba.",
    color: "#2563EB",
    curve: "falling",
    mnemonic:
      "Como cuando est\u00e1s enojado y dices '\u00a1Basta!' o '\u00a1No!' con autoridad. La voz cae r\u00e1pido desde un tono alto.",
    pitchContour: [55, 45, 35, 25, 15],
  },
  {
    tone: 5,
    name: "Tono neutro",
    symbol: "a",
    description:
      "Corto y ligero. Sin \u00e9nfasis particular. Se usa en s\u00edlabas \u00e1tonas, part\u00edculas gramaticales y segundas s\u00edlabas de ciertas palabras.",
    color: "#6B7280",
    curve: "neutral",
    mnemonic:
      "Como la segunda s\u00edlaba de 'mesa' en espa\u00f1ol: no tiene fuerza propia, simplemente se desliza suavemente.",
    pitchContour: [33, 33, 33, 33, 33],
  },
];

// =============================================================================
// EJEMPLOS CL\u00c1SICOS CON "MA" - Los 5 tonos
// =============================================================================

export const classicExamples: ToneExample[] = [
  {
    syllable: "ma",
    tone: 1,
    hanzi: "\u5988",
    pinyin: "m\u0101",
    meaning: "mam\u00e1",
  },
  {
    syllable: "ma",
    tone: 2,
    hanzi: "\u9ebb",
    pinyin: "m\u00e1",
    meaning: "c\u00e1\u00f1amo / entumecido",
  },
  {
    syllable: "ma",
    tone: 3,
    hanzi: "\u9a6c",
    pinyin: "m\u01ce",
    meaning: "caballo",
  },
  {
    syllable: "ma",
    tone: 4,
    hanzi: "\u9a82",
    pinyin: "m\u00e0",
    meaning: "rega\u00f1ar / insultar",
  },
  {
    syllable: "ma",
    tone: 5,
    hanzi: "\u5417",
    pinyin: "ma",
    meaning: "part\u00edcula de pregunta",
  },
];

// =============================================================================
// EJEMPLOS ADICIONALES CON OTRAS S\u00cdLABAS
// =============================================================================

export const additionalExamples: ToneExample[] = [
  // -- Grupo SHI --
  {
    syllable: "shi",
    tone: 1,
    hanzi: "\u5e08",
    pinyin: "sh\u012b",
    meaning: "maestro / profesor",
  },
  {
    syllable: "shi",
    tone: 2,
    hanzi: "\u5341",
    pinyin: "sh\u00ed",
    meaning: "diez",
  },
  {
    syllable: "shi",
    tone: 3,
    hanzi: "\u53f2",
    pinyin: "sh\u01d0",
    meaning: "historia",
  },
  {
    syllable: "shi",
    tone: 4,
    hanzi: "\u662f",
    pinyin: "sh\u00ec",
    meaning: "ser / estar",
  },

  // -- Grupo BA --
  {
    syllable: "ba",
    tone: 1,
    hanzi: "\u516b",
    pinyin: "b\u0101",
    meaning: "ocho",
  },
  {
    syllable: "ba",
    tone: 2,
    hanzi: "\u62d4",
    pinyin: "b\u00e1",
    meaning: "arrancar / sacar",
  },
  {
    syllable: "ba",
    tone: 3,
    hanzi: "\u628a",
    pinyin: "b\u01ce",
    meaning: "agarrar (clasificador)",
  },
  {
    syllable: "ba",
    tone: 4,
    hanzi: "\u7238",
    pinyin: "b\u00e0",
    meaning: "pap\u00e1",
  },
  {
    syllable: "ba",
    tone: 5,
    hanzi: "\u5427",
    pinyin: "ba",
    meaning: "part\u00edcula de sugerencia",
  },

  // -- Grupo TANG --
  {
    syllable: "tang",
    tone: 1,
    hanzi: "\u6c64",
    pinyin: "t\u0101ng",
    meaning: "sopa / caldo",
  },
  {
    syllable: "tang",
    tone: 2,
    hanzi: "\u5802",
    pinyin: "t\u00e1ng",
    meaning: "sal\u00f3n / vest\u00edbulo",
  },
  {
    syllable: "tang",
    tone: 3,
    hanzi: "\u8eba",
    pinyin: "t\u01ceng",
    meaning: "acostarse / recostarse",
  },
  {
    syllable: "tang",
    tone: 4,
    hanzi: "\u70eb",
    pinyin: "t\u00e0ng",
    meaning: "quemar / escaldar",
  },

  // -- Grupo WEN --
  {
    syllable: "wen",
    tone: 1,
    hanzi: "\u6e29",
    pinyin: "w\u0113n",
    meaning: "tibio / temperatura",
  },
  {
    syllable: "wen",
    tone: 2,
    hanzi: "\u6587",
    pinyin: "w\u00e9n",
    meaning: "texto / cultura",
  },
  {
    syllable: "wen",
    tone: 3,
    hanzi: "\u7a33",
    pinyin: "w\u011bn",
    meaning: "estable / firme",
  },
  {
    syllable: "wen",
    tone: 4,
    hanzi: "\u95ee",
    pinyin: "w\u00e8n",
    meaning: "preguntar",
  },

  // -- Grupo MAI --
  {
    syllable: "mai",
    tone: 2,
    hanzi: "\u4e70",
    pinyin: "m\u01cei",
    meaning: "comprar",
  },
  {
    syllable: "mai",
    tone: 4,
    hanzi: "\u5356",
    pinyin: "m\u00e0i",
    meaning: "vender",
  },

  // -- Grupo FAN --
  {
    syllable: "fan",
    tone: 1,
    hanzi: "\u7ffb",
    pinyin: "f\u0101n",
    meaning: "voltear / traducir",
  },
  {
    syllable: "fan",
    tone: 2,
    hanzi: "\u70e6",
    pinyin: "f\u00e1n",
    meaning: "molesto / irritado",
  },
  {
    syllable: "fan",
    tone: 3,
    hanzi: "\u53cd",
    pinyin: "f\u01cen",
    meaning: "contrario / al rev\u00e9s",
  },
  {
    syllable: "fan",
    tone: 4,
    hanzi: "\u996d",
    pinyin: "f\u00e0n",
    meaning: "arroz cocido / comida",
  },

  // -- Grupo SHUI --
  {
    syllable: "shui",
    tone: 2,
    hanzi: "\u8c01",
    pinyin: "shu\u00ed",
    meaning: "\u00bfqui\u00e9n?",
  },
  {
    syllable: "shui",
    tone: 3,
    hanzi: "\u6c34",
    pinyin: "shu\u01d0",
    meaning: "agua",
  },
  {
    syllable: "shui",
    tone: 4,
    hanzi: "\u7761",
    pinyin: "shu\u00ec",
    meaning: "dormir",
  },

  // -- Grupo DA --
  {
    syllable: "da",
    tone: 1,
    hanzi: "\u642d",
    pinyin: "d\u0101",
    meaning: "tomar (transporte) / montar",
  },
  {
    syllable: "da",
    tone: 2,
    hanzi: "\u8fbe",
    pinyin: "d\u00e1",
    meaning: "alcanzar / llegar",
  },
  {
    syllable: "da",
    tone: 3,
    hanzi: "\u6253",
    pinyin: "d\u01ce",
    meaning: "golpear / hacer (tel\u00e9fono)",
  },
  {
    syllable: "da",
    tone: 4,
    hanzi: "\u5927",
    pinyin: "d\u00e0",
    meaning: "grande",
  },

  // -- Grupo XIAO --
  {
    syllable: "xiao",
    tone: 3,
    hanzi: "\u5c0f",
    pinyin: "xi\u01ceo",
    meaning: "peque\u00f1o",
  },
  {
    syllable: "xiao",
    tone: 4,
    hanzi: "\u7b11",
    pinyin: "xi\u00e0o",
    meaning: "re\u00edr / sonre\u00edr",
  },

  // -- Grupo CHI --
  {
    syllable: "chi",
    tone: 1,
    hanzi: "\u5403",
    pinyin: "ch\u012b",
    meaning: "comer",
  },
  {
    syllable: "chi",
    tone: 2,
    hanzi: "\u6c60",
    pinyin: "ch\u00ed",
    meaning: "estanque / piscina",
  },
  {
    syllable: "chi",
    tone: 3,
    hanzi: "\u5c3a",
    pinyin: "ch\u01d0",
    meaning: "regla (medida) / pie (unidad)",
  },
  {
    syllable: "chi",
    tone: 4,
    hanzi: "\u7ffc",
    pinyin: "ch\u00ec",
    meaning: "ala / aleta",
  },

  // -- Grupo ZHU --
  {
    syllable: "zhu",
    tone: 1,
    hanzi: "\u732a",
    pinyin: "zh\u016b",
    meaning: "cerdo",
  },
  {
    syllable: "zhu",
    tone: 2,
    hanzi: "\u7af9",
    pinyin: "zh\u00fa",
    meaning: "bamb\u00fa",
  },
  {
    syllable: "zhu",
    tone: 3,
    hanzi: "\u4e3b",
    pinyin: "zh\u01d4",
    meaning: "principal / due\u00f1o",
  },
  {
    syllable: "zhu",
    tone: 4,
    hanzi: "\u4f4f",
    pinyin: "zh\u00f9",
    meaning: "vivir / habitar",
  },

  // -- Grupo HUA --
  {
    syllable: "hua",
    tone: 1,
    hanzi: "\u82b1",
    pinyin: "hu\u0101",
    meaning: "flor",
  },
  {
    syllable: "hua",
    tone: 2,
    hanzi: "\u534e",
    pinyin: "hu\u00e1",
    meaning: "China / esplendor",
  },
  {
    syllable: "hua",
    tone: 4,
    hanzi: "\u8bdd",
    pinyin: "hu\u00e0",
    meaning: "palabra / idioma",
  },

  // -- Grupo LIANG --
  {
    syllable: "liang",
    tone: 2,
    hanzi: "\u826f",
    pinyin: "li\u00e1ng",
    meaning: "bueno / excelente",
  },
  {
    syllable: "liang",
    tone: 3,
    hanzi: "\u4e24",
    pinyin: "li\u01ceng",
    meaning: "dos (cantidad)",
  },
  {
    syllable: "liang",
    tone: 4,
    hanzi: "\u4eae",
    pinyin: "li\u00e0ng",
    meaning: "brillante / luminoso",
  },

  // -- Grupo GUO --
  {
    syllable: "guo",
    tone: 1,
    hanzi: "\u9505",
    pinyin: "gu\u014d",
    meaning: "olla / sart\u00e9n",
  },
  {
    syllable: "guo",
    tone: 2,
    hanzi: "\u56fd",
    pinyin: "gu\u00f3",
    meaning: "pa\u00eds",
  },
  {
    syllable: "guo",
    tone: 3,
    hanzi: "\u679c",
    pinyin: "gu\u01d2",
    meaning: "fruta / resultado",
  },
  {
    syllable: "guo",
    tone: 4,
    hanzi: "\u8fc7",
    pinyin: "gu\u00f2",
    meaning: "pasar / cruzar",
  },

  // -- Grupo LI --
  {
    syllable: "li",
    tone: 2,
    hanzi: "\u79bb",
    pinyin: "l\u00ed",
    meaning: "separarse / distancia",
  },
  {
    syllable: "li",
    tone: 3,
    hanzi: "\u91cc",
    pinyin: "l\u01d0",
    meaning: "dentro / kil\u00f3metro chino",
  },
  {
    syllable: "li",
    tone: 4,
    hanzi: "\u529b",
    pinyin: "l\u00ec",
    meaning: "fuerza / poder",
  },

  // -- Grupo YU --
  {
    syllable: "yu",
    tone: 2,
    hanzi: "\u9c7c",
    pinyin: "y\u00fa",
    meaning: "pez / pescado",
  },
  {
    syllable: "yu",
    tone: 3,
    hanzi: "\u96e8",
    pinyin: "y\u01d4",
    meaning: "lluvia",
  },
  {
    syllable: "yu",
    tone: 4,
    hanzi: "\u7389",
    pinyin: "y\u00f9",
    meaning: "jade",
  },

  // -- Grupo JIAO --
  {
    syllable: "jiao",
    tone: 1,
    hanzi: "\u6559",
    pinyin: "ji\u0101o",
    meaning: "ense\u00f1ar",
  },
  {
    syllable: "jiao",
    tone: 3,
    hanzi: "\u811a",
    pinyin: "ji\u01ceo",
    meaning: "pie",
  },
  {
    syllable: "jiao",
    tone: 4,
    hanzi: "\u53eb",
    pinyin: "ji\u00e0o",
    meaning: "llamarse / gritar",
  },

  // -- Grupo GUO (tono neutro) --
  {
    syllable: "guo",
    tone: 5,
    hanzi: "\u8fc7",
    pinyin: "guo",
    meaning: "part\u00edcula de experiencia (tono neutro)",
  },

  // -- Grupo JIAO (tono 2) --
  {
    syllable: "jiao",
    tone: 2,
    hanzi: "\u89d2",
    pinyin: "ji\u00e1o",
    meaning: "esquina / cuerno",
  },
];

// =============================================================================
// PARES DE TONOS - Palabras comunes de 2 s\u00edlabas
// Muestran combinaciones reales de tonos en uso cotidiano
// =============================================================================

export const tonePairs: TonePair[] = [
  // -- Tono 1 + Tono 1 --
  {
    hanzi: "\u4eca\u5929",
    pinyin: "j\u012bntian",
    meaning: "hoy",
    tones: [1, 1],
  },
  {
    hanzi: "\u98de\u673a",
    pinyin: "f\u0113ij\u012b",
    meaning: "avi\u00f3n",
    tones: [1, 1],
  },
  {
    hanzi: "\u5de5\u4f5c",
    pinyin: "g\u014dngzu\u00f2",
    meaning: "trabajo / trabajar",
    tones: [1, 4],
  },

  // -- Tono 1 + Tono 2 --
  {
    hanzi: "\u4e2d\u56fd",
    pinyin: "Zh\u014dnggu\u00f3",
    meaning: "China",
    tones: [1, 2],
  },
  {
    hanzi: "\u5355\u4eba",
    pinyin: "d\u0101nr\u00e9n",
    meaning: "una persona / individual",
    tones: [1, 2],
  },

  // -- Tono 1 + Tono 3 --
  {
    hanzi: "\u542c\u5199",
    pinyin: "t\u012bngxi\u011b",
    meaning: "dictado (escuchar y escribir)",
    tones: [1, 3],
  },
  {
    hanzi: "\u516c\u91cc",
    pinyin: "g\u014dngl\u01d0",
    meaning: "kil\u00f3metro",
    tones: [1, 3],
  },

  // -- Tono 1 + Tono 4 --
  {
    hanzi: "\u5546\u5e97",
    pinyin: "sh\u0101ngdi\u00e0n",
    meaning: "tienda / comercio",
    tones: [1, 4],
  },
  {
    hanzi: "\u8bbe\u8ba1",
    pinyin: "sh\u0113ji\u00ec",
    meaning: "dise\u00f1ar / dise\u00f1o",
    tones: [1, 4],
  },

  // -- Tono 2 + Tono 1 --
  {
    hanzi: "\u660e\u5929",
    pinyin: "m\u00edngti\u0101n",
    meaning: "ma\u00f1ana",
    tones: [2, 1],
  },
  {
    hanzi: "\u5b66\u751f",
    pinyin: "xu\u00e9sh\u0113ng",
    meaning: "estudiante",
    tones: [2, 1],
  },

  // -- Tono 2 + Tono 2 --
  {
    hanzi: "\u94f6\u884c",
    pinyin: "y\u00ednh\u00e1ng",
    meaning: "banco",
    tones: [2, 2],
  },
  {
    hanzi: "\u6210\u529f",
    pinyin: "ch\u00e9ngg\u014dng",
    meaning: "\u00e9xito / tener \u00e9xito",
    tones: [2, 2],
  },

  // -- Tono 2 + Tono 3 --
  {
    hanzi: "\u7f8e\u5973",
    pinyin: "m\u011bin\u01da",
    meaning: "mujer bonita",
    tones: [2, 3],
  },
  {
    hanzi: "\u8bcd\u5178",
    pinyin: "c\u00edd\u01d0\u01cen",
    meaning: "diccionario",
    tones: [2, 3],
  },

  // -- Tono 2 + Tono 4 --
  {
    hanzi: "\u5b66\u4f1a",
    pinyin: "xu\u00e9hu\u00ec",
    meaning: "aprender (hasta dominar)",
    tones: [2, 4],
  },
  {
    hanzi: "\u7ea2\u8272",
    pinyin: "h\u00f3ngs\u00e8",
    meaning: "color rojo",
    tones: [2, 4],
  },

  // -- Tono 3 + Tono 1 --
  {
    hanzi: "\u5317\u4eac",
    pinyin: "B\u011bij\u012bng",
    meaning: "Pek\u00edn / Beijing",
    tones: [3, 1],
  },
  {
    hanzi: "\u706b\u8f66",
    pinyin: "hu\u01d2ch\u0113",
    meaning: "tren",
    tones: [3, 1],
  },

  // -- Tono 3 + Tono 2 --
  // (Se pronuncia como tono 2 + tono 2 por regla sandhi)
  {
    hanzi: "\u4f60\u597d",
    pinyin: "n\u01d0 h\u01ceo",
    meaning: "hola",
    tones: [3, 3],
  },
  {
    hanzi: "\u6c34\u679c",
    pinyin: "shu\u01d0gu\u01d2",
    meaning: "fruta",
    tones: [3, 3],
  },

  // -- Tono 3 + Tono 4 --
  {
    hanzi: "\u7f8e\u4e3d",
    pinyin: "m\u011bil\u00ec",
    meaning: "hermoso / bello",
    tones: [3, 4],
  },
  {
    hanzi: "\u7d2b\u8272",
    pinyin: "z\u01d0s\u00e8",
    meaning: "color morado",
    tones: [3, 4],
  },

  // -- Tono 4 + Tono 1 --
  {
    hanzi: "\u5927\u5bb6",
    pinyin: "d\u00e0ji\u0101",
    meaning: "todos / todo el mundo",
    tones: [4, 1],
  },
  {
    hanzi: "\u7535\u8bdd",
    pinyin: "di\u00e0nhu\u00e0",
    meaning: "tel\u00e9fono",
    tones: [4, 4],
  },

  // -- Tono 4 + Tono 2 --
  {
    hanzi: "\u5927\u5b66",
    pinyin: "d\u00e0xu\u00e9",
    meaning: "universidad",
    tones: [4, 2],
  },
  {
    hanzi: "\u65e5\u672c",
    pinyin: "R\u00ecb\u011bn",
    meaning: "Jap\u00f3n",
    tones: [4, 3],
  },

  // -- Tono 4 + Tono 3 --
  {
    hanzi: "\u73b0\u5728",
    pinyin: "xi\u00e0nz\u00e0i",
    meaning: "ahora",
    tones: [4, 4],
  },
  {
    hanzi: "\u7535\u8111",
    pinyin: "di\u00e0nn\u01ceo",
    meaning: "computadora / ordenador",
    tones: [4, 3],
  },

  // -- Tono 4 + Tono 4 --
  {
    hanzi: "\u518d\u89c1",
    pinyin: "z\u00e0iji\u00e0n",
    meaning: "adi\u00f3s / hasta luego",
    tones: [4, 4],
  },
  {
    hanzi: "\u4e0b\u8bfe",
    pinyin: "xi\u00e0k\u00e8",
    meaning: "terminar la clase",
    tones: [4, 4],
  },

  // -- Combinaciones con tono neutro --
  {
    hanzi: "\u4e1c\u897f",
    pinyin: "d\u014dngxi",
    meaning: "cosa / objeto",
    tones: [1, 5],
  },
  {
    hanzi: "\u6f02\u4eae",
    pinyin: "pi\u00e0oliang",
    meaning: "bonito / guapo",
    tones: [4, 5],
  },
  {
    hanzi: "\u559c\u6b22",
    pinyin: "x\u01d0huan",
    meaning: "gustar",
    tones: [3, 5],
  },
  {
    hanzi: "\u7236\u4eb2",
    pinyin: "f\u00f9q\u012bn",
    meaning: "padre (formal)",
    tones: [4, 1],
  },
  {
    hanzi: "\u6bcd\u4eb2",
    pinyin: "m\u01d4q\u012bn",
    meaning: "madre (formal)",
    tones: [3, 1],
  },
  {
    hanzi: "\u670b\u53cb",
    pinyin: "p\u00e9ngyou",
    meaning: "amigo",
    tones: [2, 5],
  },
  {
    hanzi: "\u8c22\u8c22",
    pinyin: "xi\u00e8xie",
    meaning: "gracias",
    tones: [4, 5],
  },
  {
    hanzi: "\u5988\u5988",
    pinyin: "m\u0101ma",
    meaning: "mam\u00e1",
    tones: [1, 5],
  },
  {
    hanzi: "\u7238\u7238",
    pinyin: "b\u00e0ba",
    meaning: "pap\u00e1",
    tones: [4, 5],
  },
  {
    hanzi: "\u59d0\u59d0",
    pinyin: "ji\u011bjie",
    meaning: "hermana mayor",
    tones: [3, 5],
  },
  {
    hanzi: "\u5f1f\u5f1f",
    pinyin: "d\u00ecd\u00ec",
    meaning: "hermano menor",
    tones: [4, 5],
  },

  // -- Pares adicionales --
  {
    hanzi: "\u9ad8\u5174",
    pinyin: "g\u0101ox\u00ecng",
    meaning: "contento / feliz",
    tones: [1, 4],
  },
  {
    hanzi: "\u8eab\u4f53",
    pinyin: "sh\u0113nt\u01d0",
    meaning: "cuerpo / salud",
    tones: [1, 3],
  },
  {
    hanzi: "\u5496\u5561",
    pinyin: "k\u0101f\u0113i",
    meaning: "caf\u00e9 (bebida)",
    tones: [1, 1],
  },
  {
    hanzi: "\u4fbf\u5b9c",
    pinyin: "pi\u00e1nyi",
    meaning: "barato",
    tones: [2, 5],
  },
  {
    hanzi: "\u82f9\u679c",
    pinyin: "p\u00ednggu\u01d2",
    meaning: "manzana",
    tones: [2, 3],
  },
  {
    hanzi: "\u540c\u5b66",
    pinyin: "t\u00f3ngxu\u00e9",
    meaning: "compa\u00f1ero de clase",
    tones: [2, 2],
  },
  {
    hanzi: "\u53ef\u80fd",
    pinyin: "k\u011bn\u00e9ng",
    meaning: "posiblemente",
    tones: [3, 2],
  },
  {
    hanzi: "\u9996\u90fd",
    pinyin: "sh\u01d2ud\u016b",
    meaning: "capital (ciudad)",
    tones: [3, 1],
  },
  {
    hanzi: "\u8003\u8bd5",
    pinyin: "k\u01ceosh\u00ec",
    meaning: "examen",
    tones: [3, 4],
  },
  {
    hanzi: "\u95ee\u9898",
    pinyin: "w\u00e8nt\u00ed",
    meaning: "pregunta / problema",
    tones: [4, 2],
  },
  {
    hanzi: "\u4e0a\u8bfe",
    pinyin: "sh\u00e0ngk\u00e8",
    meaning: "tener clase",
    tones: [4, 4],
  },
  {
    hanzi: "\u4f5c\u4e1a",
    pinyin: "zu\u00f2y\u00e8",
    meaning: "tarea (escolar)",
    tones: [4, 4],
  },
  {
    hanzi: "\u5de6\u8fb9",
    pinyin: "zu\u01d2bi\u0101n",
    meaning: "lado izquierdo",
    tones: [3, 1],
  },
  {
    hanzi: "\u53f3\u8fb9",
    pinyin: "y\u00f2ubi\u0101n",
    meaning: "lado derecho",
    tones: [4, 1],
  },
  {
    hanzi: "\u5973\u4eba",
    pinyin: "n\u01dar\u00e9n",
    meaning: "mujer",
    tones: [3, 2],
  },
];

// =============================================================================
// REGLAS DE CAMBIO DE TONO (SANDHI TONAL)
// Explicadas en espa\u00f1ol para hispanohablantes
// =============================================================================

export const toneChangeRules: ToneChangeRule[] = [
  {
    id: "third-tone-sandhi",
    title: "Regla del tercer tono consecutivo",
    explanation:
      "Cuando dos s\u00edlabas de tercer tono aparecen seguidas, la PRIMERA se pronuncia como segundo tono (ascendente). Esto ocurre de forma natural para facilitar la pronunciaci\u00f3n. En la escritura pinyin se mantiene la marca del tercer tono, pero al hablar se cambia. Esta es la regla m\u00e1s importante y frecuente del chino.",
    examples: [
      {
        original: "n\u01d0 h\u01ceo (3+3)",
        spoken: "n\u00ed h\u01ceo (2+3)",
        hanzi: "\u4f60\u597d",
        meaning: "hola (la primera s\u00edlaba suena como tono 2)",
      },
      {
        original: "shu\u01d0gu\u01d2 (3+3)",
        spoken: "shu\u00edgu\u01d2 (2+3)",
        hanzi: "\u6c34\u679c",
        meaning: "fruta",
      },
      {
        original: "x\u01d0z\u01ceo (3+3)",
        spoken: "x\u00edz\u01ceo (2+3)",
        hanzi: "\u6d17\u6fa1",
        meaning: "ba\u00f1arse / ducharse",
      },
      {
        original: "y\u01d4f\u01ce (3+3)",
        spoken: "y\u00faf\u01ce (2+3)",
        hanzi: "\u8bed\u6cd5",
        meaning: "gram\u00e1tica",
      },
      {
        original: "k\u011by\u01d0 (3+3)",
        spoken: "k\u00e9y\u01d0 (2+3)",
        hanzi: "\u53ef\u4ee5",
        meaning: "poder / se puede",
      },
      {
        original: "n\u01ced\u01d0 (3+3)",
        spoken: "n\u00e1d\u01d0 (2+3)",
        hanzi: "\u54ea\u91cc",
        meaning: "\u00bfd\u00f3nde?",
      },
    ],
  },
  {
    id: "bu-tone-change",
    title: "Cambio de tono de \u4e0d (b\u00f9 / no)",
    explanation:
      "La palabra \u4e0d (no / negaci\u00f3n) normalmente se pronuncia con cuarto tono (b\u00f9). PERO cuando va seguida de otra s\u00edlaba en cuarto tono, cambia a segundo tono (b\u00fa). Es un cambio autom\u00e1tico que los hablantes nativos hacen sin pensar. En todos los dem\u00e1s casos mantiene su cuarto tono original.",
    examples: [
      {
        original: "b\u00f9 sh\u00ec (4+4)",
        spoken: "b\u00fa sh\u00ec (2+4)",
        hanzi: "\u4e0d\u662f",
        meaning: "no es / no ser",
      },
      {
        original: "b\u00f9 du\u00ec (4+4)",
        spoken: "b\u00fa du\u00ec (2+4)",
        hanzi: "\u4e0d\u5bf9",
        meaning: "incorrecto / no est\u00e1 bien",
      },
      {
        original: "b\u00f9 k\u00e8qi (4+4)",
        spoken: "b\u00fa k\u00e8qi (2+4)",
        hanzi: "\u4e0d\u5ba2\u6c14",
        meaning: "de nada (respuesta a gracias)",
      },
      {
        original: "b\u00f9 q\u00f9 (4+4)",
        spoken: "b\u00fa q\u00f9 (2+4)",
        hanzi: "\u4e0d\u53bb",
        meaning: "no ir",
      },
      {
        original: "b\u00f9 h\u01ceo (4+3)",
        spoken: "b\u00f9 h\u01ceo (4+3, sin cambio)",
        hanzi: "\u4e0d\u597d",
        meaning: "no est\u00e1 bien / malo",
      },
      {
        original: "b\u00f9 zh\u012bd\u00e0o (4+1+4)",
        spoken: "b\u00f9 zh\u012bd\u00e0o (sin cambio en b\u00f9)",
        hanzi: "\u4e0d\u77e5\u9053",
        meaning: "no saber / no s\u00e9",
      },
    ],
  },
  {
    id: "yi-tone-change",
    title: "Cambio de tono de \u4e00 (y\u012b / uno)",
    explanation:
      "El n\u00famero \u4e00 (uno) es especial porque cambia de tono seg\u00fan lo que sigue. Su tono base es el primero (y\u012b), pero: 1) Antes de cuarto tono cambia a segundo tono (y\u00ed). 2) Antes de primer, segundo o tercer tono cambia a cuarto tono (y\u00ec). 3) Cuando se dice solo (contando) o al final de una frase, mantiene el primer tono (y\u012b).",
    examples: [
      {
        original: "y\u012b g\u00e8 (1+4)",
        spoken: "y\u00ed g\u00e8 (2+4)",
        hanzi: "\u4e00\u4e2a",
        meaning: "uno (clasificador general)",
      },
      {
        original: "y\u012b y\u00e0ng (1+4)",
        spoken: "y\u00ed y\u00e0ng (2+4)",
        hanzi: "\u4e00\u6837",
        meaning: "igual / lo mismo",
      },
      {
        original: "y\u012b b\u0113i (1+1)",
        spoken: "y\u00ec b\u0113i (4+1)",
        hanzi: "\u4e00\u676f",
        meaning: "una taza / un vaso",
      },
      {
        original: "y\u012b ni\u00e1n (1+2)",
        spoken: "y\u00ec ni\u00e1n (4+2)",
        hanzi: "\u4e00\u5e74",
        meaning: "un a\u00f1o",
      },
      {
        original: "y\u012b q\u01d0 (1+3)",
        spoken: "y\u00ec q\u01d0 (4+3)",
        hanzi: "\u4e00\u8d77",
        meaning: "juntos",
      },
      {
        original: "y\u012b, \u00e8r, s\u0101n...",
        spoken: "y\u012b, \u00e8r, s\u0101n... (sin cambio)",
        hanzi: "\u4e00\u3001\u4e8c\u3001\u4e09...",
        meaning: "uno, dos, tres... (al contar, mantiene tono 1)",
      },
    ],
  },
  {
    id: "half-third-tone",
    title: "Medio tercer tono (antes de tonos 1, 2 y 4)",
    explanation:
      "Cuando una s\u00edlaba de tercer tono est\u00e1 seguida de una s\u00edlaba con tono 1, 2 o 4, el tercer tono se pronuncia solo con la parte descendente (sin la subida final). Se llama 'medio tercer tono' y es extremadamente com\u00fan en el habla natural. En la pr\u00e1ctica, el tercer tono completo (con bajada y subida) solo se escucha cuando la s\u00edlaba est\u00e1 sola o al final de una frase.",
    examples: [
      {
        original: "l\u01ceosh\u012b (3+1)",
        spoken: "l\u00e0o(bajada)sh\u012b",
        hanzi: "\u8001\u5e08",
        meaning: "profesor (solo se pronuncia la bajada del tono 3)",
      },
      {
        original: "m\u011big\u00f3ng (3+2)",
        spoken: "m\u00e8i(bajada)g\u00f3ng",
        hanzi: "\u7f8e\u56fd",
        meaning: "Estados Unidos",
      },
      {
        original: "x\u01d0\u00e0n (3+4)",
        spoken: "x\u00ec(bajada)\u00e0n",
        hanzi: "\u559c\u6b22",
        meaning: "gustar (la bajada del 3 es suave)",
      },
    ],
  },
];

// =============================================================================
// EJERCICIOS DE TONOS - 25 ejercicios para practicar identificaci\u00f3n de tonos
// =============================================================================

export const toneExercises: ToneExercise[] = [
  // Nivel 1: Distinguir entre pares de tonos
  { audio: "m\u0101", options: [1, 2, 3, 4], correct: 1 },
  { audio: "m\u00e1", options: [1, 2, 3, 4], correct: 2 },
  { audio: "m\u01ce", options: [1, 2, 3, 4], correct: 3 },
  { audio: "m\u00e0", options: [1, 2, 3, 4], correct: 4 },
  { audio: "sh\u012b", options: [1, 2, 3, 4], correct: 1 },
  { audio: "sh\u00ed", options: [1, 2, 3, 4], correct: 2 },
  { audio: "sh\u01d0", options: [1, 2, 3, 4], correct: 3 },
  { audio: "sh\u00ec", options: [1, 2, 3, 4], correct: 4 },
  { audio: "b\u0101", options: [1, 2, 3, 4], correct: 1 },
  { audio: "b\u00e0", options: [1, 2, 3, 4], correct: 4 },

  // Nivel 2: S\u00edlabas variadas
  { audio: "t\u0101ng", options: [1, 2, 3, 4], correct: 1 },
  { audio: "t\u00e1ng", options: [1, 2, 3, 4], correct: 2 },
  { audio: "t\u01ceng", options: [1, 2, 3, 4], correct: 3 },
  { audio: "t\u00e0ng", options: [1, 2, 3, 4], correct: 4 },
  { audio: "hu\u0101", options: [1, 2, 3, 4], correct: 1 },
  { audio: "hu\u00e1", options: [1, 2, 3, 4], correct: 2 },
  { audio: "hu\u00e0", options: [1, 2, 3, 4], correct: 4 },
  { audio: "f\u0101n", options: [1, 2, 3, 4], correct: 1 },
  { audio: "f\u00e1n", options: [1, 2, 3, 4], correct: 2 },
  { audio: "f\u00e0n", options: [1, 2, 3, 4], correct: 4 },

  // Nivel 3: Tonos m\u00e1s dif\u00edciles de distinguir (2 vs 3, 1 vs 4)
  { audio: "w\u00e9n", options: [2, 3], correct: 2 },
  { audio: "w\u011bn", options: [2, 3], correct: 3 },
  { audio: "ch\u012b", options: [1, 4], correct: 1 },
  { audio: "ch\u00ec", options: [1, 4], correct: 4 },
  { audio: "zh\u00fa", options: [2, 3], correct: 2 },

  // Nivel 4: S\u00edlabas nuevas - identificaci\u00f3n de tonos
  { audio: "gu\u014d", options: [1, 2, 3, 4], correct: 1 },
  { audio: "gu\u00f3", options: [1, 2, 3, 4], correct: 2 },
  { audio: "gu\u01d2", options: [1, 2, 3, 4], correct: 3 },
  { audio: "gu\u00f2", options: [1, 2, 3, 4], correct: 4 },
  { audio: "y\u00fa", options: [2, 3], correct: 2 },
  { audio: "y\u01d4", options: [2, 3], correct: 3 },
  { audio: "l\u00ec", options: [2, 4], correct: 4 },
  { audio: "l\u00ed", options: [2, 4], correct: 2 },
  { audio: "ji\u01ceo", options: [1, 3], correct: 3 },
  { audio: "ji\u00e0o", options: [3, 4], correct: 4 },
];

// =============================================================================
// CONSEJOS DE PRONUNCIACI\u00d3N PARA HISPANOHABLANTES
// =============================================================================

export const pronunciationTips = [
  {
    id: "general-approach",
    title: "C\u00f3mo abordar los tonos",
    content:
      "Los tonos son como la melod\u00eda de cada s\u00edlaba. En espa\u00f1ol usamos entonaci\u00f3n para preguntar o exclamar, pero en chino cada s\u00edlaba individual tiene su propia 'nota musical'. Cambiar el tono cambia completamente el significado de la palabra. No te desanimes: con pr\u00e1ctica constante, los tonos se vuelven autom\u00e1ticos.",
  },
  {
    id: "common-mistake-1",
    title: "Error com\u00fan: ignorar los tonos",
    content:
      "Muchos hispanohablantes pronuncian todas las s\u00edlabas con la misma entonaci\u00f3n plana. Esto es como hablar sin vocales en espa\u00f1ol: se pierde informaci\u00f3n cr\u00edtica. Exagera los tonos al principio; es mejor sonar dram\u00e1tico que plano.",
  },
  {
    id: "common-mistake-2",
    title: "Error com\u00fan: confundir tono 2 y tono 3",
    content:
      "El segundo tono SUBE directamente. El tercer tono primero BAJA y luego sube. Para practicar: el tono 2 es como '\u00bfEh?' (sorpresa), el tono 3 es como 'Hmm...' (duda). Si tu tercer tono suena igual que el segundo, aseg\u00farate de empezar m\u00e1s bajo.",
  },
  {
    id: "practice-method",
    title: "M\u00e9todo de pr\u00e1ctica recomendado",
    content:
      "1) Escucha un audio nativo. 2) Rep\u00edtelo imitando exactamente el tono. 3) Grav\u00e1bate y compara. 4) Practica en pares m\u00ednimos (palabras que solo difieren en el tono). 5) Avanza a frases completas. La clave es la repetici\u00f3n espaciada: mejor 10 minutos diarios que 1 hora semanal.",
  },
  {
    id: "spanish-analogy",
    title: "Analog\u00eda con el espa\u00f1ol",
    content:
      "Piensa en c\u00f3mo en espa\u00f1ol la entonaci\u00f3n cambia el significado: 'Vienes.' (afirmaci\u00f3n, voz baja) vs '\u00bfVienes?' (pregunta, voz sube). En chino, este principio se aplica a CADA s\u00edlaba. Es como si cada s\u00edlaba fuera su propia mini-pregunta o mini-afirmaci\u00f3n.",
  },
  {
    id: "tone-pairs-practice",
    title: "Practica con pares de tonos",
    content:
      "Una vez que domines los tonos individuales, el siguiente paso es practicar combinaciones de dos tonos. En la vida real, las palabras de dos s\u00edlabas son las m\u00e1s comunes. Practica las 20 combinaciones posibles (1+1, 1+2, 1+3, 1+4, 2+1, etc.) con palabras reales. Esto te ayudar\u00e1 a sonar mucho m\u00e1s natural. Empieza con combinaciones f\u00e1ciles como 1+1 (\u4eca\u5929) y avanza a las dif\u00edciles como 3+3 (\u4f60\u597d).",
  },
  {
    id: "singing-method",
    title: "M\u00e9todo del canto para memorizar tonos",
    content:
      "Un truco efectivo es asociar cada tono con una melod\u00eda o canci\u00f3n que ya conozcas. El tono 1 es como sostener una nota alta al cantar. El tono 2 es como la melod\u00eda ascendente de preguntar '\u00bfS\u00ed?' en espa\u00f1ol. El tono 3 es como el sonido de decir 'Hmm...' pensativo. El tono 4 es como gritar '\u00a1Basta!' con firmeza. Gr\u00e1bate cantando las s\u00edlabas con sus tonos y esc\u00fachate. Te sorprender\u00e1 lo r\u00e1pido que mejoras.",
  },
];
