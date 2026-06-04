// =============================================================================
// PATRONES GRAMATICALES DEL CHINO MANDARIN
// Organizados por nivel HSK - Explicaciones en espanol
// =============================================================================

export interface GrammarPattern {
  id: number;
  title: string;
  level: "HSK1" | "HSK2";
  category: string;
  structure: string; // Estructura del patron
  explanation: string; // Explicacion detallada en espanol
  examples: {
    hanzi: string;
    pinyin: string;
    meaning: string;
    highlight?: string; // Parte a resaltar
  }[];
  commonMistakes?: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
  relatedPatterns?: number[]; // IDs de patrones relacionados
}

export const grammarPatterns: GrammarPattern[] = [
  // ===========================================================================
  // ESTRUCTURA BASICA DE ORACIONES
  // ===========================================================================
  {
    id: 1,
    title: "Orden basico: Sujeto + Verbo + Objeto",
    level: "HSK1",
    category: "Estructura basica",
    structure: "Sujeto + Verbo + Objeto",
    explanation:
      "El chino tiene el mismo orden basico que el espanol: Sujeto + Verbo + Objeto. 'Yo como arroz' se dice exactamente en ese orden: 我 (yo) + 吃 (comer) + 米饭 (arroz). Lo bueno es que los verbos en chino NUNCA se conjugan. No importa si es yo, tu, el, nosotros, ayer o manana: el verbo siempre es igual. 我吃, 你吃, 他吃, 我们吃. Siempre 吃. Nunca cambia.",
    examples: [
      {
        hanzi: "我吃米饭。",
        pinyin: "Wǒ chī mǐfàn.",
        meaning: "Yo como arroz.",
        highlight: "我 + 吃 + 米饭",
      },
      {
        hanzi: "他喝茶。",
        pinyin: "Tā hē chá.",
        meaning: "El bebe te.",
        highlight: "他 + 喝 + 茶",
      },
      {
        hanzi: "我们学中文。",
        pinyin: "Wǒmen xué Zhōngwén.",
        meaning: "Nosotros estudiamos chino.",
        highlight: "我们 + 学 + 中文",
      },
    ],
    commonMistakes: [
      {
        wrong: "吃我米饭",
        correct: "我吃米饭",
        explanation: "El sujeto siempre va primero, luego el verbo, luego el objeto.",
      },
    ],
  },

  // ===========================================================================
  // PREGUNTAS
  // ===========================================================================
  {
    id: 2,
    title: "Preguntas si/no con 吗 (ma)",
    level: "HSK1",
    category: "Preguntas",
    structure: "Afirmacion + 吗？",
    explanation:
      "La forma mas facil de hacer preguntas en chino. Solo toma cualquier oracion afirmativa y agrega 吗 al final. No cambias nada mas: ni el orden de las palabras, ni la entonacion especial. Es como tener un boton magico de '?' en chino.",
    examples: [
      {
        hanzi: "你是学生吗？",
        pinyin: "Nǐ shì xuéshēng ma?",
        meaning: "Eres estudiante?",
        highlight: "你是学生 + 吗",
      },
      {
        hanzi: "他会说中文吗？",
        pinyin: "Tā huì shuō Zhōngwén ma?",
        meaning: "El sabe hablar chino?",
        highlight: "他会说中文 + 吗",
      },
      {
        hanzi: "你喜欢吃米饭吗？",
        pinyin: "Nǐ xǐhuan chī mǐfàn ma?",
        meaning: "Te gusta comer arroz?",
        highlight: "你喜欢吃米饭 + 吗",
      },
    ],
    relatedPatterns: [3, 4],
  },
  {
    id: 3,
    title: "Devolver la pregunta con 呢 (ne)",
    level: "HSK1",
    category: "Preguntas",
    structure: "Sujeto + 呢？",
    explanation:
      "Cuando alguien te pregunta algo y quieres hacer la misma pregunta de vuelta, no necesitas repetir toda la oracion. Solo di el sujeto + 呢. Es como decir 'Y tu?' o 'Y el?' en espanol. Super practico y lo usaras constantemente.",
    examples: [
      {
        hanzi: "我很好。你呢？",
        pinyin: "Wǒ hěn hǎo. Nǐ ne?",
        meaning: "Estoy bien. Y tu?",
        highlight: "你 + 呢",
      },
      {
        hanzi: "我是老师。你呢？",
        pinyin: "Wǒ shì lǎoshī. Nǐ ne?",
        meaning: "Soy profesor. Y tu?",
      },
    ],
    relatedPatterns: [2],
  },
  {
    id: 4,
    title: "Preguntas con palabras interrogativas",
    level: "HSK1",
    category: "Preguntas",
    structure: "Sujeto + Verbo + Palabra interrogativa",
    explanation:
      "En chino, la palabra interrogativa (que, quien, donde, cuando) se coloca EXACTAMENTE donde iria la respuesta. No se mueve al principio como en espanol. Si la respuesta es 'como arroz', la pregunta es 'como que?' → 你吃什么？ La palabra 什么 (que) queda donde estaria la respuesta (米饭). Es muy logico una vez que le agarras la onda.",
    examples: [
      {
        hanzi: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzi?",
        meaning: "Como te llamas? (Tu llamarse que nombre?)",
        highlight: "什么",
      },
      {
        hanzi: "你在哪里？",
        pinyin: "Nǐ zài nǎlǐ?",
        meaning: "Donde estas? (Tu estar donde?)",
        highlight: "哪里",
      },
      {
        hanzi: "他是谁？",
        pinyin: "Tā shì shéi?",
        meaning: "Quien es el? (El ser quien?)",
        highlight: "谁",
      },
      {
        hanzi: "你怎么去？",
        pinyin: "Nǐ zěnme qù?",
        meaning: "Como vas? (Tu como ir?)",
        highlight: "怎么",
      },
    ],
    commonMistakes: [
      {
        wrong: "什么你叫名字？",
        correct: "你叫什么名字？",
        explanation: "La palabra interrogativa NO va al principio como en espanol. Va donde iria la respuesta.",
      },
    ],
    relatedPatterns: [2],
  },

  // ===========================================================================
  // NEGACION
  // ===========================================================================
  {
    id: 5,
    title: "Negacion con 不 (bù)",
    level: "HSK1",
    category: "Negacion",
    structure: "Sujeto + 不 + Verbo",
    explanation:
      "不 (bu) es el 'no' mas comun en chino. Se pone antes del verbo para negarlo. Funciona con casi todos los verbos EXCEPTO 有 (tener). Dato curioso: 不 normalmente es tono 4 (bù), pero cuando le sigue otro tono 4, cambia a tono 2 (bú). Ejemplo: 不是 se pronuncia 'bú shì' (no 'bù shì').",
    examples: [
      {
        hanzi: "我不是学生。",
        pinyin: "Wǒ bú shì xuéshēng.",
        meaning: "No soy estudiante.",
        highlight: "不是",
      },
      {
        hanzi: "他不喝茶。",
        pinyin: "Tā bù hē chá.",
        meaning: "El no bebe te.",
        highlight: "不喝",
      },
      {
        hanzi: "我不想去。",
        pinyin: "Wǒ bù xiǎng qù.",
        meaning: "No quiero ir.",
        highlight: "不想",
      },
    ],
    commonMistakes: [
      {
        wrong: "我不有书。",
        correct: "我没有书。",
        explanation: "有 (tener) NUNCA se niega con 不. Siempre se usa 没有.",
      },
    ],
    relatedPatterns: [6],
  },
  {
    id: 6,
    title: "Negacion con 没 (méi) para 有",
    level: "HSK1",
    category: "Negacion",
    structure: "Sujeto + 没 + 有 + Objeto",
    explanation:
      "没 (mei) se usa especificamente para negar 有 (tener/haber). Esta es una regla que no tiene excepciones: NUNCA diras 不有, siempre 没有. Tambien se usa 没 para negar acciones en el pasado: 我没去 (no fui), 他没吃 (el no comio). En ese caso, no necesitas agregar 了.",
    examples: [
      {
        hanzi: "我没有钱。",
        pinyin: "Wǒ méi yǒu qián.",
        meaning: "No tengo dinero.",
        highlight: "没有",
      },
      {
        hanzi: "他没有哥哥。",
        pinyin: "Tā méi yǒu gēge.",
        meaning: "El no tiene hermano mayor.",
      },
      {
        hanzi: "我没去学校。",
        pinyin: "Wǒ méi qù xuéxiào.",
        meaning: "No fui a la escuela.",
        highlight: "没去",
      },
    ],
    relatedPatterns: [5],
  },

  // ===========================================================================
  // VERBOS AUXILIARES
  // ===========================================================================
  {
    id: 7,
    title: "会 (huì) - Saber hacer algo (habilidad)",
    level: "HSK1",
    category: "Verbos auxiliares",
    structure: "Sujeto + 会 + Verbo",
    explanation:
      "会 indica una habilidad que aprendiste. Es como 'saber' en espanol cuando dices 'se nadar', 'se cocinar'. Se pone antes del verbo principal. Para negar: 不会. Para preguntar: agrega 吗.",
    examples: [
      {
        hanzi: "我会说中文。",
        pinyin: "Wǒ huì shuō Zhōngwén.",
        meaning: "Se hablar chino.",
        highlight: "会说",
      },
      {
        hanzi: "你会开车吗？",
        pinyin: "Nǐ huì kāi chē ma?",
        meaning: "Sabes conducir?",
      },
      {
        hanzi: "他不会游泳。",
        pinyin: "Tā bú huì yóuyǒng.",
        meaning: "El no sabe nadar.",
        highlight: "不会",
      },
    ],
    relatedPatterns: [8, 9],
  },
  {
    id: 8,
    title: "能 (néng) - Poder (capacidad/permiso)",
    level: "HSK1",
    category: "Verbos auxiliares",
    structure: "Sujeto + 能 + Verbo",
    explanation:
      "能 se usa para expresar capacidad fisica o permiso. Es como 'poder' en espanol. La diferencia con 会 es que 会 es una habilidad aprendida, mientras que 能 es la capacidad o posibilidad de hacer algo en este momento. 'Se nadar' (会游泳) vs 'Puedo nadar ahora' (能游泳). Tambien se usa para pedir permiso: 我能进来吗？(Puedo entrar?).",
    examples: [
      {
        hanzi: "你能帮我吗？",
        pinyin: "Nǐ néng bāng wǒ ma?",
        meaning: "Puedes ayudarme?",
        highlight: "能帮",
      },
      {
        hanzi: "我今天不能去。",
        pinyin: "Wǒ jīntiān bù néng qù.",
        meaning: "Hoy no puedo ir.",
      },
    ],
    relatedPatterns: [7, 9],
  },
  {
    id: 9,
    title: "想 (xiǎng) - Querer / Pensar",
    level: "HSK1",
    category: "Verbos auxiliares",
    structure: "Sujeto + 想 + Verbo",
    explanation:
      "想 tiene dos usos principales: 'querer hacer algo' (deseo) y 'pensar/extranar'. Cuando va seguido de un verbo, significa 'querer': 我想去 (quiero ir). Cuando va solo o seguido de un sustantivo, puede significar 'extranar': 我想你 (te extrano) o 'pensar': 我想... (yo pienso que...).",
    examples: [
      {
        hanzi: "我想去中国。",
        pinyin: "Wǒ xiǎng qù Zhōngguó.",
        meaning: "Quiero ir a China.",
        highlight: "想去",
      },
      {
        hanzi: "你想吃什么？",
        pinyin: "Nǐ xiǎng chī shénme?",
        meaning: "Que quieres comer?",
      },
      {
        hanzi: "我不想睡觉。",
        pinyin: "Wǒ bù xiǎng shuì jiào.",
        meaning: "No quiero dormir.",
      },
    ],
    relatedPatterns: [7, 8],
  },

  // ===========================================================================
  // PARTICULAS Y ESTRUCTURA
  // ===========================================================================
  {
    id: 10,
    title: "的 (de) - Particula posesiva",
    level: "HSK1",
    category: "Particulas",
    structure: "Poseedor + 的 + Cosa poseida",
    explanation:
      "的 es la particula mas usada en chino. Funciona como 'de' en espanol para indicar posesion: 我的书 (mi libro, literalmente 'yo de libro'). Con pronombres y relaciones cercanas (familia, amigos intimos) a menudo se omite: 我妈妈 (mi mama) en vez de 我的妈妈.",
    examples: [
      {
        hanzi: "我的书。",
        pinyin: "Wǒ de shū.",
        meaning: "Mi libro.",
        highlight: "我 + 的 + 书",
      },
      {
        hanzi: "他的手机。",
        pinyin: "Tā de shǒujī.",
        meaning: "Su celular (de el).",
      },
      {
        hanzi: "这是谁的？",
        pinyin: "Zhè shì shéi de?",
        meaning: "De quien es esto?",
        highlight: "谁的",
      },
    ],
  },
  {
    id: 11,
    title: "了 (le) - Cambio de estado / Accion completada",
    level: "HSK1",
    category: "Particulas",
    structure: "Verbo + 了",
    explanation:
      "了 es una de las particulas mas dificiles del chino porque tiene multiples usos. Para principiantes, los dos mas importantes son: 1) Accion completada (como pasado): 我吃了 (ya comi). 2) Cambio de estado (algo nuevo): 下雨了 (empezo a llover / esta lloviendo ahora). No es exactamente un 'pasado' como en espanol, sino que indica que algo cambio o se completo.",
    examples: [
      {
        hanzi: "我吃了。",
        pinyin: "Wǒ chī le.",
        meaning: "Ya comi.",
        highlight: "吃了",
      },
      {
        hanzi: "他来了。",
        pinyin: "Tā lái le.",
        meaning: "El llego / El ya vino.",
      },
      {
        hanzi: "太贵了！",
        pinyin: "Tài guì le!",
        meaning: "Es demasiado caro!",
        highlight: "贵了",
      },
    ],
  },
  {
    id: 12,
    title: "在 (zài) - Estar en un lugar / Estar haciendo",
    level: "HSK1",
    category: "Particulas",
    structure: "Sujeto + 在 + Lugar  /  Sujeto + 在 + Verbo",
    explanation:
      "在 tiene dos usos muy importantes: 1) Como 'estar en': 我在家 (estoy en casa). 2) Como 'estar haciendo' (accion en progreso): 我在吃饭 (estoy comiendo). El segundo uso es como el '-ando/-endo' del espanol. Muy util para describir que esta pasando ahora mismo.",
    examples: [
      {
        hanzi: "我在家。",
        pinyin: "Wǒ zài jiā.",
        meaning: "Estoy en casa.",
        highlight: "在家",
      },
      {
        hanzi: "他在学校。",
        pinyin: "Tā zài xuéxiào.",
        meaning: "El esta en la escuela.",
      },
      {
        hanzi: "我在看书。",
        pinyin: "Wǒ zài kàn shū.",
        meaning: "Estoy leyendo un libro.",
        highlight: "在看",
      },
    ],
  },
  {
    id: 13,
    title: "也 (yě) y 都 (dōu) - Tambien y Todos",
    level: "HSK1",
    category: "Adverbios",
    structure: "Sujeto + 也/都 + Verbo",
    explanation:
      "也 (tambien) y 都 (todos/todo) van ANTES del verbo, no al final como a veces en espanol. 我也是学生 (Yo tambien soy estudiante). 我们都是学生 (Todos somos estudiantes). Cuando se usan juntos, el orden es 也都: 他们也都是学生 (Ellos tambien son todos estudiantes).",
    examples: [
      {
        hanzi: "我也喜欢。",
        pinyin: "Wǒ yě xǐhuan.",
        meaning: "A mi tambien me gusta.",
        highlight: "也",
      },
      {
        hanzi: "我们都是中国人。",
        pinyin: "Wǒmen dōu shì Zhōngguó rén.",
        meaning: "Todos somos chinos.",
        highlight: "都",
      },
    ],
    commonMistakes: [
      {
        wrong: "我喜欢也。",
        correct: "我也喜欢。",
        explanation: "也 va ANTES del verbo, nunca al final de la oracion.",
      },
    ],
  },

  // ===========================================================================
  // EXPRESIONES DE TIEMPO
  // ===========================================================================
  {
    id: 14,
    title: "Expresiones de tiempo van ANTES del verbo",
    level: "HSK1",
    category: "Tiempo",
    structure: "Sujeto + Tiempo + Verbo + Objeto",
    explanation:
      "En chino, las expresiones de tiempo (hoy, manana, a las 3, etc.) van ANTES del verbo, usualmente despues del sujeto. Es diferente al espanol donde puedes poner el tiempo al principio o al final. En chino: 我明天去 (Yo manana voy). El tiempo siempre se coloca entre el sujeto y el verbo.",
    examples: [
      {
        hanzi: "我明天去学校。",
        pinyin: "Wǒ míngtiān qù xuéxiào.",
        meaning: "Manana voy a la escuela.",
        highlight: "明天",
      },
      {
        hanzi: "他昨天来了。",
        pinyin: "Tā zuótiān lái le.",
        meaning: "El vino ayer.",
      },
      {
        hanzi: "我们今天学中文。",
        pinyin: "Wǒmen jīntiān xué Zhōngwén.",
        meaning: "Hoy estudiamos chino.",
      },
    ],
  },
  {
    id: 15,
    title: "很 (hěn) con adjetivos",
    level: "HSK1",
    category: "Adjetivos",
    structure: "Sujeto + 很 + Adjetivo",
    explanation:
      "En chino, cuando describes algo con un adjetivo, usualmente pones 很 (muy) entre el sujeto y el adjetivo: 她很漂亮 (ella es muy bonita). Pero ojo: en muchos casos, 很 no realmente significa 'muy', sino que es una palabra necesaria para que la oracion suene natural. Si dices 她漂亮 sin 很, suena como si estuvieras comparando. Piensa en 很 como un 'pegamento' entre sujeto y adjetivo.",
    examples: [
      {
        hanzi: "今天很冷。",
        pinyin: "Jīntiān hěn lěng.",
        meaning: "Hoy hace frio. (Hoy muy frio)",
        highlight: "很冷",
      },
      {
        hanzi: "中国很大。",
        pinyin: "Zhōngguó hěn dà.",
        meaning: "China es grande.",
      },
      {
        hanzi: "这个菜很好吃。",
        pinyin: "Zhège cài hěn hǎochī.",
        meaning: "Este plato esta muy rico.",
      },
    ],
    commonMistakes: [
      {
        wrong: "她是漂亮。",
        correct: "她很漂亮。",
        explanation: "No uses 是 con adjetivos. Los adjetivos en chino funcionan como verbos, no necesitan 是. Usa 很 + adjetivo.",
      },
    ],
  },

  // ===========================================================================
  // CLASIFICADORES
  // ===========================================================================
  {
    id: 16,
    title: "个 (gè) - El clasificador universal",
    level: "HSK1",
    category: "Clasificadores",
    structure: "Numero + 个 + Sustantivo",
    explanation:
      "En chino, entre un numero y un sustantivo siempre va una 'palabra de medida' o clasificador. Es como en espanol cuando dices 'dos TAZAS de cafe' o 'tres HOJAS de papel'. 个 (ge) es el clasificador mas basico y comun, como un comodin que funciona con casi todo. Si no sabes que clasificador usar, usa 个 y te entenderan. Un truco: siempre es Numero + Clasificador + Sustantivo.",
    examples: [
      {
        hanzi: "一个人",
        pinyin: "yí gè rén",
        meaning: "Una persona",
        highlight: "个",
      },
      {
        hanzi: "两个苹果",
        pinyin: "liǎng gè píngguǒ",
        meaning: "Dos manzanas",
      },
      {
        hanzi: "三个学生",
        pinyin: "sān gè xuéshēng",
        meaning: "Tres estudiantes",
      },
    ],
    commonMistakes: [
      {
        wrong: "两人",
        correct: "两个人",
        explanation: "Nunca pongas un numero directamente antes de un sustantivo. Siempre necesitas un clasificador en medio.",
      },
    ],
  },
];

// =============================================================================
// Helpers
// =============================================================================

export const getPatternsByLevel = (level: "HSK1" | "HSK2"): GrammarPattern[] => {
  return grammarPatterns.filter((p) => p.level === level);
};

export const getPatternsByCategory = (category: string): GrammarPattern[] => {
  return grammarPatterns.filter((p) => p.category === category);
};

export const getPatternById = (id: number): GrammarPattern | undefined => {
  return grammarPatterns.find((p) => p.id === id);
};

export const getGrammarCategories = (): string[] => {
  return [...new Set(grammarPatterns.map((p) => p.category))];
};
