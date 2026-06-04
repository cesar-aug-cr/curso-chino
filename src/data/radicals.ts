// =============================================================================
// RADICALES CHINOS MAS COMUNES
// Los radicales son los "bloques de construccion" de los caracteres chinos.
// Conocerlos te ayuda a adivinar el significado de caracteres nuevos.
// =============================================================================

export interface Radical {
  id: number;
  radical: string;
  pinyin: string;
  meaning: string;
  strokeCount: number;
  position: "izquierda" | "derecha" | "arriba" | "abajo" | "envolvente" | "variable";
  examples: {
    hanzi: string;
    pinyin: string;
    meaning: string;
  }[];
  mnemonic: string; // Ayuda para recordar
}

export const radicals: Radical[] = [
  // ===========================================================================
  // RADICALES DE PERSONAS Y CUERPO
  // ===========================================================================
  {
    id: 1,
    radical: "人 / 亻",
    pinyin: "rén",
    meaning: "Persona",
    strokeCount: 2,
    position: "izquierda",
    examples: [
      { hanzi: "他", pinyin: "tā", meaning: "El" },
      { hanzi: "你", pinyin: "nǐ", meaning: "Tu" },
      { hanzi: "住", pinyin: "zhù", meaning: "Vivir" },
      { hanzi: "做", pinyin: "zuò", meaning: "Hacer" },
    ],
    mnemonic: "Parece una persona caminando con las piernas abiertas. Cuando aparece a la izquierda se 'adelgaza' y se escribe 亻.",
  },
  {
    id: 2,
    radical: "女",
    pinyin: "nǚ",
    meaning: "Mujer",
    strokeCount: 3,
    position: "izquierda",
    examples: [
      { hanzi: "好", pinyin: "hǎo", meaning: "Bueno (mujer + hijo = bueno)" },
      { hanzi: "妈", pinyin: "mā", meaning: "Mama" },
      { hanzi: "姐", pinyin: "jiě", meaning: "Hermana mayor" },
      { hanzi: "她", pinyin: "tā", meaning: "Ella" },
    ],
    mnemonic: "Parece una mujer arrodillada con los brazos cruzados. Muchos caracteres con este radical estan relacionados con mujeres o cualidades femeninas.",
  },
  {
    id: 3,
    radical: "口",
    pinyin: "kǒu",
    meaning: "Boca",
    strokeCount: 3,
    position: "izquierda",
    examples: [
      { hanzi: "吃", pinyin: "chī", meaning: "Comer" },
      { hanzi: "喝", pinyin: "hē", meaning: "Beber" },
      { hanzi: "叫", pinyin: "jiào", meaning: "Llamar" },
      { hanzi: "听", pinyin: "tīng", meaning: "Escuchar" },
    ],
    mnemonic: "Es literalmente un cuadrado que representa una boca abierta. Los caracteres con este radical suelen estar relacionados con hablar, comer o sonidos.",
  },
  {
    id: 4,
    radical: "心 / 忄",
    pinyin: "xīn",
    meaning: "Corazon / Mente",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "想", pinyin: "xiǎng", meaning: "Pensar / Querer" },
      { hanzi: "忙", pinyin: "máng", meaning: "Ocupado" },
      { hanzi: "快", pinyin: "kuài", meaning: "Rapido / Contento" },
    ],
    mnemonic: "Cuando aparece a la izquierda se simplifica a 忄 (tres trazos). Los caracteres con corazon expresan sentimientos, emociones o estados mentales.",
  },
  {
    id: 5,
    radical: "手 / 扌",
    pinyin: "shǒu",
    meaning: "Mano",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "打", pinyin: "dǎ", meaning: "Golpear / Hacer" },
      { hanzi: "找", pinyin: "zhǎo", meaning: "Buscar" },
      { hanzi: "拿", pinyin: "ná", meaning: "Tomar / Agarrar" },
    ],
    mnemonic: "A la izquierda se escribe 扌. Los caracteres con mano implican acciones hechas con las manos.",
  },
  {
    id: 6,
    radical: "目",
    pinyin: "mù",
    meaning: "Ojo",
    strokeCount: 5,
    position: "izquierda",
    examples: [
      { hanzi: "看", pinyin: "kàn", meaning: "Ver / Mirar" },
      { hanzi: "眼", pinyin: "yǎn", meaning: "Ojo" },
      { hanzi: "睡", pinyin: "shuì", meaning: "Dormir" },
    ],
    mnemonic: "Parece un ojo girado 90 grados. Los caracteres con este radical estan relacionados con la vision.",
  },
  {
    id: 7,
    radical: "足",
    pinyin: "zú",
    meaning: "Pie",
    strokeCount: 7,
    position: "izquierda",
    examples: [
      { hanzi: "跑", pinyin: "pǎo", meaning: "Correr" },
      { hanzi: "跳", pinyin: "tiào", meaning: "Saltar" },
      { hanzi: "路", pinyin: "lù", meaning: "Camino" },
    ],
    mnemonic: "Acciones que se hacen con los pies: correr, saltar, caminar.",
  },
  {
    id: 8,
    radical: "耳",
    pinyin: "ěr",
    meaning: "Oreja",
    strokeCount: 6,
    position: "izquierda",
    examples: [
      { hanzi: "听", pinyin: "tīng", meaning: "Escuchar (version simplificada)" },
    ],
    mnemonic: "Parece una oreja vista de frente. Relacionado con escuchar y sonidos.",
  },

  // ===========================================================================
  // RADICALES DE NATURALEZA
  // ===========================================================================
  {
    id: 9,
    radical: "水 / 氵",
    pinyin: "shuǐ",
    meaning: "Agua",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "河", pinyin: "hé", meaning: "Rio" },
      { hanzi: "海", pinyin: "hǎi", meaning: "Mar" },
      { hanzi: "没", pinyin: "méi", meaning: "No haber (hundido en agua)" },
      { hanzi: "汉", pinyin: "hàn", meaning: "Han (etnia china)" },
    ],
    mnemonic: "A la izquierda se escribe como tres gotitas 氵. Todo lo relacionado con liquidos y agua usa este radical.",
  },
  {
    id: 10,
    radical: "火 / 灬",
    pinyin: "huǒ",
    meaning: "Fuego",
    strokeCount: 4,
    position: "variable",
    examples: [
      { hanzi: "热", pinyin: "rè", meaning: "Caliente" },
      { hanzi: "烤", pinyin: "kǎo", meaning: "Asar" },
      { hanzi: "煮", pinyin: "zhǔ", meaning: "Hervir" },
    ],
    mnemonic: "Abajo aparece como cuatro puntos 灬 (llamas). Relacionado con calor, cocinar y fuego.",
  },
  {
    id: 11,
    radical: "日",
    pinyin: "rì",
    meaning: "Sol / Dia",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "明", pinyin: "míng", meaning: "Brillante (sol + luna)" },
      { hanzi: "时", pinyin: "shí", meaning: "Tiempo / Hora" },
      { hanzi: "早", pinyin: "zǎo", meaning: "Temprano / Manana" },
      { hanzi: "是", pinyin: "shì", meaning: "Ser" },
    ],
    mnemonic: "Un rectangulo que representa el sol. Aparece en palabras de tiempo, luz y dias.",
  },
  {
    id: 12,
    radical: "月",
    pinyin: "yuè",
    meaning: "Luna / Mes / Carne",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "明", pinyin: "míng", meaning: "Brillante (sol + luna)" },
      { hanzi: "朋", pinyin: "péng", meaning: "Amigo" },
      { hanzi: "有", pinyin: "yǒu", meaning: "Tener" },
    ],
    mnemonic: "Parece una luna creciente. Curiosamente, cuando aparece a la izquierda en partes del cuerpo (肚, 脚) viene del radical de carne, no de luna.",
  },
  {
    id: 13,
    radical: "木",
    pinyin: "mù",
    meaning: "Arbol / Madera",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "树", pinyin: "shù", meaning: "Arbol" },
      { hanzi: "桌", pinyin: "zhuō", meaning: "Mesa" },
      { hanzi: "椅", pinyin: "yǐ", meaning: "Silla" },
      { hanzi: "林", pinyin: "lín", meaning: "Bosque (dos arboles)" },
    ],
    mnemonic: "Parece un arbol con ramas arriba y raices abajo. Dos arboles juntos (林) = bosque, tres (森) = selva densa.",
  },
  {
    id: 14,
    radical: "土",
    pinyin: "tǔ",
    meaning: "Tierra / Suelo",
    strokeCount: 3,
    position: "izquierda",
    examples: [
      { hanzi: "地", pinyin: "dì", meaning: "Tierra / Suelo" },
      { hanzi: "在", pinyin: "zài", meaning: "Estar en" },
      { hanzi: "坐", pinyin: "zuò", meaning: "Sentarse" },
    ],
    mnemonic: "Una cruz con la linea de abajo mas larga, como una planta saliendo de la tierra.",
  },
  {
    id: 15,
    radical: "山",
    pinyin: "shān",
    meaning: "Montana",
    strokeCount: 3,
    position: "izquierda",
    examples: [
      { hanzi: "山", pinyin: "shān", meaning: "Montana" },
    ],
    mnemonic: "Tres picos: parece montanas vistas desde lejos. Muy pictografico.",
  },
  {
    id: 16,
    radical: "雨",
    pinyin: "yǔ",
    meaning: "Lluvia",
    strokeCount: 8,
    position: "arriba",
    examples: [
      { hanzi: "雪", pinyin: "xuě", meaning: "Nieve" },
      { hanzi: "雷", pinyin: "léi", meaning: "Trueno" },
      { hanzi: "电", pinyin: "diàn", meaning: "Electricidad / Rayo" },
    ],
    mnemonic: "Una ventana con gotas cayendo dentro. Los caracteres con este radical arriba se relacionan con fenomenos meteorologicos.",
  },
  {
    id: 17,
    radical: "艹",
    pinyin: "cǎo",
    meaning: "Hierba / Planta",
    strokeCount: 3,
    position: "arriba",
    examples: [
      { hanzi: "花", pinyin: "huā", meaning: "Flor" },
      { hanzi: "茶", pinyin: "chá", meaning: "Te" },
      { hanzi: "菜", pinyin: "cài", meaning: "Verdura" },
      { hanzi: "苹", pinyin: "píng", meaning: "Manzana (苹果)" },
    ],
    mnemonic: "Dos brotes saliendo de la tierra. Aparece arriba del caracter en todo lo relacionado con plantas, flores y vegetales.",
  },

  // ===========================================================================
  // RADICALES DE OBJETOS Y CONCEPTOS
  // ===========================================================================
  {
    id: 18,
    radical: "讠",
    pinyin: "yán",
    meaning: "Palabra / Habla",
    strokeCount: 2,
    position: "izquierda",
    examples: [
      { hanzi: "说", pinyin: "shuō", meaning: "Hablar / Decir" },
      { hanzi: "读", pinyin: "dú", meaning: "Leer" },
      { hanzi: "谢", pinyin: "xiè", meaning: "Agradecer" },
      { hanzi: "请", pinyin: "qǐng", meaning: "Por favor / Invitar" },
    ],
    mnemonic: "Version simplificada de 言 (palabra). Los caracteres con este radical estan relacionados con hablar, idiomas y comunicacion.",
  },
  {
    id: 19,
    radical: "钅",
    pinyin: "jīn",
    meaning: "Metal / Oro",
    strokeCount: 5,
    position: "izquierda",
    examples: [
      { hanzi: "钱", pinyin: "qián", meaning: "Dinero" },
      { hanzi: "铁", pinyin: "tiě", meaning: "Hierro" },
      { hanzi: "银", pinyin: "yín", meaning: "Plata" },
    ],
    mnemonic: "Version simplificada de 金 (oro/metal). Los caracteres con este radical son metales, monedas o cosas metalicas.",
  },
  {
    id: 20,
    radical: "宀",
    pinyin: "mián",
    meaning: "Techo / Casa",
    strokeCount: 3,
    position: "arriba",
    examples: [
      { hanzi: "家", pinyin: "jiā", meaning: "Casa / Familia" },
      { hanzi: "字", pinyin: "zì", meaning: "Caracter / Letra" },
      { hanzi: "安", pinyin: "ān", meaning: "Paz / Seguridad" },
    ],
    mnemonic: "Parece el techo de una casa. Los caracteres con este radical suelen estar relacionados con hogares, refugio y proteccion.",
  },
  {
    id: 21,
    radical: "门",
    pinyin: "mén",
    meaning: "Puerta",
    strokeCount: 3,
    position: "envolvente",
    examples: [
      { hanzi: "们", pinyin: "men", meaning: "Sufijo de plural (nosotros, ellos)" },
      { hanzi: "问", pinyin: "wèn", meaning: "Preguntar (boca en la puerta)" },
      { hanzi: "间", pinyin: "jiān", meaning: "Entre / Habitacion" },
    ],
    mnemonic: "Una puerta simplificada. Forma un marco alrededor de otros elementos.",
  },
  {
    id: 22,
    radical: "辶",
    pinyin: "chuò",
    meaning: "Caminar / Movimiento",
    strokeCount: 3,
    position: "envolvente",
    examples: [
      { hanzi: "这", pinyin: "zhè", meaning: "Este" },
      { hanzi: "那", pinyin: "nà", meaning: "Ese" },
      { hanzi: "还", pinyin: "hái", meaning: "Todavia" },
      { hanzi: "进", pinyin: "jìn", meaning: "Entrar" },
    ],
    mnemonic: "Un camino que envuelve por abajo y a la izquierda. Indica movimiento, caminar o desplazamiento.",
  },
  {
    id: 23,
    radical: "囗",
    pinyin: "wéi",
    meaning: "Recinto / Encerrar",
    strokeCount: 3,
    position: "envolvente",
    examples: [
      { hanzi: "国", pinyin: "guó", meaning: "Pais (jade dentro de murallas)" },
      { hanzi: "回", pinyin: "huí", meaning: "Volver" },
      { hanzi: "四", pinyin: "sì", meaning: "Cuatro" },
    ],
    mnemonic: "Un cuadrado grande que encierra otros elementos, como murallas alrededor de una ciudad.",
  },
  {
    id: 24,
    radical: "贝",
    pinyin: "bèi",
    meaning: "Concha / Tesoro",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "贵", pinyin: "guì", meaning: "Caro" },
      { hanzi: "买", pinyin: "mǎi", meaning: "Comprar" },
      { hanzi: "卖", pinyin: "mài", meaning: "Vender" },
    ],
    mnemonic: "En la antigua China se usaban conchas como moneda. Por eso este radical aparece en todo lo relacionado con dinero y valor.",
  },
  {
    id: 25,
    radical: "车",
    pinyin: "chē",
    meaning: "Vehiculo / Carro",
    strokeCount: 4,
    position: "izquierda",
    examples: [
      { hanzi: "车", pinyin: "chē", meaning: "Coche" },
    ],
    mnemonic: "Version simplificada de un carro antiguo visto desde arriba.",
  },
  {
    id: 26,
    radical: "食 / 饣",
    pinyin: "shí",
    meaning: "Comida / Comer",
    strokeCount: 3,
    position: "izquierda",
    examples: [
      { hanzi: "饭", pinyin: "fàn", meaning: "Arroz / Comida" },
      { hanzi: "饿", pinyin: "è", meaning: "Hambriento" },
      { hanzi: "饮", pinyin: "yǐn", meaning: "Beber" },
    ],
    mnemonic: "A la izquierda se simplifica a 饣. Todo lo relacionado con alimentos y comer.",
  },
  {
    id: 27,
    radical: "衤",
    pinyin: "yī",
    meaning: "Ropa",
    strokeCount: 5,
    position: "izquierda",
    examples: [
      { hanzi: "衣", pinyin: "yī", meaning: "Ropa" },
      { hanzi: "裤", pinyin: "kù", meaning: "Pantalon" },
      { hanzi: "被", pinyin: "bèi", meaning: "Cobija / Ser (pasiva)" },
    ],
    mnemonic: "Version simplificada de 衣 (ropa). Los caracteres con este radical se relacionan con prendas de vestir.",
  },
  {
    id: 28,
    radical: "大",
    pinyin: "dà",
    meaning: "Grande",
    strokeCount: 3,
    position: "variable",
    examples: [
      { hanzi: "大", pinyin: "dà", meaning: "Grande" },
      { hanzi: "太", pinyin: "tài", meaning: "Demasiado" },
      { hanzi: "天", pinyin: "tiān", meaning: "Cielo / Dia" },
    ],
    mnemonic: "Una persona con los brazos extendidos, mostrando algo grande. 天 (cielo) es lo que esta sobre algo grande.",
  },
  {
    id: 29,
    radical: "小",
    pinyin: "xiǎo",
    meaning: "Pequeno",
    strokeCount: 3,
    position: "variable",
    examples: [
      { hanzi: "小", pinyin: "xiǎo", meaning: "Pequeno" },
      { hanzi: "少", pinyin: "shǎo", meaning: "Poco" },
    ],
    mnemonic: "Una cosa dividida en partes cada vez mas pequenas.",
  },
  {
    id: 30,
    radical: "力",
    pinyin: "lì",
    meaning: "Fuerza",
    strokeCount: 2,
    position: "derecha",
    examples: [
      { hanzi: "力", pinyin: "lì", meaning: "Fuerza" },
      { hanzi: "办", pinyin: "bàn", meaning: "Hacer / Manejar" },
      { hanzi: "加", pinyin: "jiā", meaning: "Agregar / Sumar" },
    ],
    mnemonic: "Un brazo musculoso flexionado. Representa fuerza y esfuerzo.",
  },
];

// =============================================================================
// Helper: Get radicals by position
// =============================================================================
export const getRadicalsByPosition = (position: Radical["position"]): Radical[] => {
  return radicals.filter((r) => r.position === position);
};

// =============================================================================
// Helper: Search radicals
// =============================================================================
export const searchRadicals = (query: string): Radical[] => {
  const lowerQuery = query.toLowerCase();
  return radicals.filter(
    (r) =>
      r.radical.includes(query) ||
      r.pinyin.toLowerCase().includes(lowerQuery) ||
      r.meaning.toLowerCase().includes(lowerQuery)
  );
};
