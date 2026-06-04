// =============================================================================
// HSK1 Vocabulary Database - Chinese Learning App for Spanish Speakers
// Complete HSK1 word list with examples, tones, stroke counts, and radicals
// =============================================================================

export interface Word {
  id: number;
  hanzi: string;
  pinyin: string;
  meaning: string; // En espanol
  category: string;
  level: "HSK1" | "HSK2";
  tones: number[];
  examples: {
    hanzi: string;
    pinyin: string;
    meaning: string; // En espanol
  }[];
  strokeCount?: number;
  radical?: string;
}

export const hsk1Words: Word[] = [
  // ===========================================================================
  // SALUDOS (Greetings)
  // ===========================================================================
  {
    id: 1,
    hanzi: "你",
    pinyin: "nǐ",
    meaning: "Tu / Usted",
    category: "Saludos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "你是学生吗？",
        pinyin: "Nǐ shì xuéshēng ma?",
        meaning: "Eres estudiante?",
      },
    ],
    strokeCount: 7,
    radical: "亻",
  },
  {
    id: 2,
    hanzi: "好",
    pinyin: "hǎo",
    meaning: "Bien / Bueno",
    category: "Saludos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "今天天气很好。",
        pinyin: "Jīntiān tiānqì hěn hǎo.",
        meaning: "Hoy el clima esta muy bueno.",
      },
    ],
    strokeCount: 6,
    radical: "女",
  },
  {
    id: 3,
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "Hola",
    category: "Saludos",
    level: "HSK1",
    tones: [3, 3],
    examples: [
      {
        hanzi: "你好，我叫李明。",
        pinyin: "Nǐ hǎo, wǒ jiào Lǐ Míng.",
        meaning: "Hola, me llamo Li Ming.",
      },
    ],
  },
  {
    id: 4,
    hanzi: "谢谢",
    pinyin: "xiè xie",
    meaning: "Gracias",
    category: "Saludos",
    level: "HSK1",
    tones: [4, 0],
    examples: [
      {
        hanzi: "谢谢你的帮助。",
        pinyin: "Xièxie nǐ de bāngzhù.",
        meaning: "Gracias por tu ayuda.",
      },
    ],
  },
  {
    id: 5,
    hanzi: "再见",
    pinyin: "zài jiàn",
    meaning: "Adios / Hasta luego",
    category: "Saludos",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "明天见，再见！",
        pinyin: "Míngtiān jiàn, zàijiàn!",
        meaning: "Nos vemos manana, adios!",
      },
    ],
  },
  {
    id: 6,
    hanzi: "不客气",
    pinyin: "bú kè qi",
    meaning: "De nada",
    category: "Saludos",
    level: "HSK1",
    tones: [4, 4, 0],
    examples: [
      {
        hanzi: "不客气，这是我应该做的。",
        pinyin: "Bú kèqi, zhè shì wǒ yīnggāi zuò de.",
        meaning: "De nada, es lo que debia hacer.",
      },
    ],
  },
  {
    id: 7,
    hanzi: "对不起",
    pinyin: "duì bu qǐ",
    meaning: "Lo siento / Perdon",
    category: "Saludos",
    level: "HSK1",
    tones: [4, 0, 3],
    examples: [
      {
        hanzi: "对不起，我来晚了。",
        pinyin: "Duìbuqǐ, wǒ lái wǎn le.",
        meaning: "Lo siento, llegue tarde.",
      },
    ],
  },
  {
    id: 8,
    hanzi: "没关系",
    pinyin: "méi guān xi",
    meaning: "No importa / No pasa nada",
    category: "Saludos",
    level: "HSK1",
    tones: [2, 1, 0],
    examples: [
      {
        hanzi: "没关系，下次注意就好。",
        pinyin: "Méi guānxi, xià cì zhùyì jiù hǎo.",
        meaning: "No pasa nada, ten cuidado la proxima vez.",
      },
    ],
  },

  // ===========================================================================
  // PRONOMBRES (Pronouns)
  // ===========================================================================
  {
    id: 9,
    hanzi: "我",
    pinyin: "wǒ",
    meaning: "Yo",
    category: "Pronombres",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我是中国人。",
        pinyin: "Wǒ shì Zhōngguó rén.",
        meaning: "Yo soy chino.",
      },
    ],
    strokeCount: 7,
    radical: "戈",
  },
  {
    id: 10,
    hanzi: "他",
    pinyin: "tā",
    meaning: "El (masculino)",
    category: "Pronombres",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "他是我的朋友。",
        pinyin: "Tā shì wǒ de péngyǒu.",
        meaning: "El es mi amigo.",
      },
    ],
    strokeCount: 5,
    radical: "亻",
  },
  {
    id: 11,
    hanzi: "她",
    pinyin: "tā",
    meaning: "Ella (femenino)",
    category: "Pronombres",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "她很漂亮。",
        pinyin: "Tā hěn piàoliang.",
        meaning: "Ella es muy bonita.",
      },
    ],
    strokeCount: 6,
    radical: "女",
  },
  {
    id: 12,
    hanzi: "它",
    pinyin: "tā",
    meaning: "El / Ella (para animales u objetos)",
    category: "Pronombres",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "它是一只猫。",
        pinyin: "Tā shì yì zhī māo.",
        meaning: "Es un gato.",
      },
    ],
    strokeCount: 5,
    radical: "宀",
  },
  {
    id: 13,
    hanzi: "我们",
    pinyin: "wǒ men",
    meaning: "Nosotros / Nosotras",
    category: "Pronombres",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "我们是学生。",
        pinyin: "Wǒmen shì xuéshēng.",
        meaning: "Nosotros somos estudiantes.",
      },
    ],
  },
  {
    id: 14,
    hanzi: "你们",
    pinyin: "nǐ men",
    meaning: "Ustedes / Vosotros",
    category: "Pronombres",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "你们好！",
        pinyin: "Nǐmen hǎo!",
        meaning: "Hola a todos!",
      },
    ],
  },
  {
    id: 15,
    hanzi: "他们",
    pinyin: "tā men",
    meaning: "Ellos / Ellas",
    category: "Pronombres",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "他们在学校。",
        pinyin: "Tāmen zài xuéxiào.",
        meaning: "Ellos estan en la escuela.",
      },
    ],
  },

  // ===========================================================================
  // FAMILIA (Family)
  // ===========================================================================
  {
    id: 16,
    hanzi: "爸爸",
    pinyin: "bà ba",
    meaning: "Papa",
    category: "Familia",
    level: "HSK1",
    tones: [4, 0],
    examples: [
      {
        hanzi: "我爸爸是医生。",
        pinyin: "Wǒ bàba shì yīshēng.",
        meaning: "Mi papa es medico.",
      },
    ],
  },
  {
    id: 17,
    hanzi: "妈妈",
    pinyin: "mā ma",
    meaning: "Mama",
    category: "Familia",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "妈妈在做饭。",
        pinyin: "Māma zài zuò fàn.",
        meaning: "Mama esta cocinando.",
      },
    ],
  },
  {
    id: 18,
    hanzi: "哥哥",
    pinyin: "gē ge",
    meaning: "Hermano mayor",
    category: "Familia",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "我哥哥比我大三岁。",
        pinyin: "Wǒ gēge bǐ wǒ dà sān suì.",
        meaning: "Mi hermano mayor es tres anos mayor que yo.",
      },
    ],
  },
  {
    id: 19,
    hanzi: "姐姐",
    pinyin: "jiě jie",
    meaning: "Hermana mayor",
    category: "Familia",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "姐姐在北京工作。",
        pinyin: "Jiějie zài Běijīng gōngzuò.",
        meaning: "Mi hermana mayor trabaja en Pekin.",
      },
    ],
  },
  {
    id: 20,
    hanzi: "弟弟",
    pinyin: "dì di",
    meaning: "Hermano menor",
    category: "Familia",
    level: "HSK1",
    tones: [4, 0],
    examples: [
      {
        hanzi: "弟弟在上学。",
        pinyin: "Dìdi zài shàng xué.",
        meaning: "Mi hermano menor esta en la escuela.",
      },
    ],
  },
  {
    id: 21,
    hanzi: "妹妹",
    pinyin: "mèi mei",
    meaning: "Hermana menor",
    category: "Familia",
    level: "HSK1",
    tones: [4, 0],
    examples: [
      {
        hanzi: "我妹妹很可爱。",
        pinyin: "Wǒ mèimei hěn kě'ài.",
        meaning: "Mi hermana menor es muy linda.",
      },
    ],
  },
  {
    id: 22,
    hanzi: "儿子",
    pinyin: "ér zi",
    meaning: "Hijo",
    category: "Familia",
    level: "HSK1",
    tones: [2, 0],
    examples: [
      {
        hanzi: "他的儿子五岁了。",
        pinyin: "Tā de érzi wǔ suì le.",
        meaning: "Su hijo tiene cinco anos.",
      },
    ],
  },
  {
    id: 23,
    hanzi: "女儿",
    pinyin: "nǚ ér",
    meaning: "Hija",
    category: "Familia",
    level: "HSK1",
    tones: [3, 2],
    examples: [
      {
        hanzi: "她的女儿很聪明。",
        pinyin: "Tā de nǚ'ér hěn cōngmíng.",
        meaning: "Su hija es muy inteligente.",
      },
    ],
  },

  // ===========================================================================
  // NUMEROS (Numbers)
  // ===========================================================================
  {
    id: 24,
    hanzi: "一",
    pinyin: "yī",
    meaning: "Uno (1)",
    category: "Numeros",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我有一个苹果。",
        pinyin: "Wǒ yǒu yí gè píngguǒ.",
        meaning: "Tengo una manzana.",
      },
    ],
    strokeCount: 1,
    radical: "一",
  },
  {
    id: 25,
    hanzi: "二",
    pinyin: "èr",
    meaning: "Dos (2)",
    category: "Numeros",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我有二十块钱。",
        pinyin: "Wǒ yǒu èrshí kuài qián.",
        meaning: "Tengo veinte yuanes.",
      },
    ],
    strokeCount: 2,
    radical: "二",
  },
  {
    id: 26,
    hanzi: "三",
    pinyin: "sān",
    meaning: "Tres (3)",
    category: "Numeros",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "三个人在那里。",
        pinyin: "Sān gè rén zài nàlǐ.",
        meaning: "Tres personas estan alli.",
      },
    ],
    strokeCount: 3,
    radical: "一",
  },
  {
    id: 27,
    hanzi: "四",
    pinyin: "sì",
    meaning: "Cuatro (4)",
    category: "Numeros",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我家有四口人。",
        pinyin: "Wǒ jiā yǒu sì kǒu rén.",
        meaning: "En mi familia hay cuatro personas.",
      },
    ],
    strokeCount: 5,
    radical: "囗",
  },
  {
    id: 28,
    hanzi: "五",
    pinyin: "wǔ",
    meaning: "Cinco (5)",
    category: "Numeros",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "现在五点了。",
        pinyin: "Xiànzài wǔ diǎn le.",
        meaning: "Ahora son las cinco.",
      },
    ],
    strokeCount: 4,
    radical: "一",
  },
  {
    id: 29,
    hanzi: "六",
    pinyin: "liù",
    meaning: "Seis (6)",
    category: "Numeros",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "他六岁了。",
        pinyin: "Tā liù suì le.",
        meaning: "El tiene seis anos.",
      },
    ],
    strokeCount: 4,
    radical: "八",
  },
  {
    id: 30,
    hanzi: "七",
    pinyin: "qī",
    meaning: "Siete (7)",
    category: "Numeros",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "一个星期有七天。",
        pinyin: "Yí gè xīngqī yǒu qī tiān.",
        meaning: "Una semana tiene siete dias.",
      },
    ],
    strokeCount: 2,
    radical: "一",
  },
  {
    id: 31,
    hanzi: "八",
    pinyin: "bā",
    meaning: "Ocho (8)",
    category: "Numeros",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我八点上班。",
        pinyin: "Wǒ bā diǎn shàng bān.",
        meaning: "Entro a trabajar a las ocho.",
      },
    ],
    strokeCount: 2,
    radical: "八",
  },
  {
    id: 32,
    hanzi: "九",
    pinyin: "jiǔ",
    meaning: "Nueve (9)",
    category: "Numeros",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "九月是秋天。",
        pinyin: "Jiǔ yuè shì qiūtiān.",
        meaning: "Septiembre es otono.",
      },
    ],
    strokeCount: 2,
    radical: "丿",
  },
  {
    id: 33,
    hanzi: "十",
    pinyin: "shí",
    meaning: "Diez (10)",
    category: "Numeros",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我十点睡觉。",
        pinyin: "Wǒ shí diǎn shuì jiào.",
        meaning: "Me duermo a las diez.",
      },
    ],
    strokeCount: 2,
    radical: "十",
  },
  {
    id: 34,
    hanzi: "百",
    pinyin: "bǎi",
    meaning: "Cien (100)",
    category: "Numeros",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "这本书一百块。",
        pinyin: "Zhè běn shū yì bǎi kuài.",
        meaning: "Este libro cuesta cien yuanes.",
      },
    ],
    strokeCount: 6,
    radical: "白",
  },

  // ===========================================================================
  // COMIDA (Food & Drink)
  // ===========================================================================
  {
    id: 35,
    hanzi: "吃",
    pinyin: "chī",
    meaning: "Comer",
    category: "Comida",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我们去吃饭吧。",
        pinyin: "Wǒmen qù chī fàn ba.",
        meaning: "Vamos a comer.",
      },
    ],
    strokeCount: 6,
    radical: "口",
  },
  {
    id: 36,
    hanzi: "喝",
    pinyin: "hē",
    meaning: "Beber",
    category: "Comida",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "你想喝什么？",
        pinyin: "Nǐ xiǎng hē shénme?",
        meaning: "Que quieres beber?",
      },
    ],
    strokeCount: 12,
    radical: "口",
  },
  {
    id: 37,
    hanzi: "水",
    pinyin: "shuǐ",
    meaning: "Agua",
    category: "Comida",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "请给我一杯水。",
        pinyin: "Qǐng gěi wǒ yì bēi shuǐ.",
        meaning: "Por favor dame un vaso de agua.",
      },
    ],
    strokeCount: 4,
    radical: "水",
  },
  {
    id: 38,
    hanzi: "茶",
    pinyin: "chá",
    meaning: "Te (bebida)",
    category: "Comida",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "中国人喜欢喝茶。",
        pinyin: "Zhōngguó rén xǐhuan hē chá.",
        meaning: "A los chinos les gusta beber te.",
      },
    ],
    strokeCount: 9,
    radical: "艹",
  },
  {
    id: 39,
    hanzi: "米饭",
    pinyin: "mǐ fàn",
    meaning: "Arroz cocido",
    category: "Comida",
    level: "HSK1",
    tones: [3, 4],
    examples: [
      {
        hanzi: "我每天都吃米饭。",
        pinyin: "Wǒ měi tiān dōu chī mǐfàn.",
        meaning: "Como arroz todos los dias.",
      },
    ],
  },
  {
    id: 40,
    hanzi: "菜",
    pinyin: "cài",
    meaning: "Verdura / Plato de comida",
    category: "Comida",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "这个菜很好吃。",
        pinyin: "Zhège cài hěn hǎochī.",
        meaning: "Este plato esta muy rico.",
      },
    ],
    strokeCount: 11,
    radical: "艹",
  },
  {
    id: 41,
    hanzi: "苹果",
    pinyin: "píng guǒ",
    meaning: "Manzana",
    category: "Comida",
    level: "HSK1",
    tones: [2, 3],
    examples: [
      {
        hanzi: "我想买几个苹果。",
        pinyin: "Wǒ xiǎng mǎi jǐ gè píngguǒ.",
        meaning: "Quiero comprar unas manzanas.",
      },
    ],
  },

  // ===========================================================================
  // VERBOS (Verbs)
  // ===========================================================================
  {
    id: 42,
    hanzi: "是",
    pinyin: "shì",
    meaning: "Ser / Estar",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我是老师。",
        pinyin: "Wǒ shì lǎoshī.",
        meaning: "Yo soy profesor.",
      },
    ],
    strokeCount: 9,
    radical: "日",
  },
  {
    id: 43,
    hanzi: "有",
    pinyin: "yǒu",
    meaning: "Tener / Haber",
    category: "Verbos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我有两个哥哥。",
        pinyin: "Wǒ yǒu liǎng gè gēge.",
        meaning: "Tengo dos hermanos mayores.",
      },
    ],
    strokeCount: 6,
    radical: "月",
  },
  {
    id: 44,
    hanzi: "去",
    pinyin: "qù",
    meaning: "Ir",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "你去哪里？",
        pinyin: "Nǐ qù nǎlǐ?",
        meaning: "A donde vas?",
      },
    ],
    strokeCount: 5,
    radical: "厶",
  },
  {
    id: 45,
    hanzi: "来",
    pinyin: "lái",
    meaning: "Venir",
    category: "Verbos",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "请来我家吧。",
        pinyin: "Qǐng lái wǒ jiā ba.",
        meaning: "Por favor ven a mi casa.",
      },
    ],
    strokeCount: 7,
    radical: "木",
  },
  {
    id: 46,
    hanzi: "看",
    pinyin: "kàn",
    meaning: "Ver / Mirar / Leer",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我在看书。",
        pinyin: "Wǒ zài kàn shū.",
        meaning: "Estoy leyendo un libro.",
      },
    ],
    strokeCount: 9,
    radical: "目",
  },
  {
    id: 47,
    hanzi: "听",
    pinyin: "tīng",
    meaning: "Escuchar / Oir",
    category: "Verbos",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我喜欢听音乐。",
        pinyin: "Wǒ xǐhuan tīng yīnyuè.",
        meaning: "Me gusta escuchar musica.",
      },
    ],
    strokeCount: 7,
    radical: "口",
  },
  {
    id: 48,
    hanzi: "说",
    pinyin: "shuō",
    meaning: "Hablar / Decir",
    category: "Verbos",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "你会说中文吗？",
        pinyin: "Nǐ huì shuō Zhōngwén ma?",
        meaning: "Sabes hablar chino?",
      },
    ],
    strokeCount: 9,
    radical: "讠",
  },
  {
    id: 49,
    hanzi: "读",
    pinyin: "dú",
    meaning: "Leer (en voz alta)",
    category: "Verbos",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "请读这个句子。",
        pinyin: "Qǐng dú zhège jùzi.",
        meaning: "Por favor lee esta oracion.",
      },
    ],
    strokeCount: 10,
    radical: "讠",
  },
  {
    id: 50,
    hanzi: "写",
    pinyin: "xiě",
    meaning: "Escribir",
    category: "Verbos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我在写汉字。",
        pinyin: "Wǒ zài xiě hànzì.",
        meaning: "Estoy escribiendo caracteres chinos.",
      },
    ],
    strokeCount: 5,
    radical: "冖",
  },
  {
    id: 51,
    hanzi: "做",
    pinyin: "zuò",
    meaning: "Hacer",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "你在做什么？",
        pinyin: "Nǐ zài zuò shénme?",
        meaning: "Que estas haciendo?",
      },
    ],
    strokeCount: 11,
    radical: "亻",
  },
  {
    id: 52,
    hanzi: "买",
    pinyin: "mǎi",
    meaning: "Comprar",
    category: "Verbos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我想买一本书。",
        pinyin: "Wǒ xiǎng mǎi yì běn shū.",
        meaning: "Quiero comprar un libro.",
      },
    ],
    strokeCount: 6,
    radical: "乛",
  },
  {
    id: 53,
    hanzi: "想",
    pinyin: "xiǎng",
    meaning: "Querer / Pensar / Extranar",
    category: "Verbos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我想去中国。",
        pinyin: "Wǒ xiǎng qù Zhōngguó.",
        meaning: "Quiero ir a China.",
      },
    ],
    strokeCount: 13,
    radical: "心",
  },
  {
    id: 54,
    hanzi: "喜欢",
    pinyin: "xǐ huan",
    meaning: "Gustar",
    category: "Verbos",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "我喜欢学中文。",
        pinyin: "Wǒ xǐhuan xué Zhōngwén.",
        meaning: "Me gusta estudiar chino.",
      },
    ],
  },
  {
    id: 55,
    hanzi: "会",
    pinyin: "huì",
    meaning: "Saber (hacer algo) / Poder",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我会开车。",
        pinyin: "Wǒ huì kāi chē.",
        meaning: "Se conducir.",
      },
    ],
    strokeCount: 6,
    radical: "人",
  },
  {
    id: 56,
    hanzi: "能",
    pinyin: "néng",
    meaning: "Poder (capacidad / permiso)",
    category: "Verbos",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "你能帮我吗？",
        pinyin: "Nǐ néng bāng wǒ ma?",
        meaning: "Puedes ayudarme?",
      },
    ],
    strokeCount: 10,
    radical: "厶",
  },
  {
    id: 57,
    hanzi: "叫",
    pinyin: "jiào",
    meaning: "Llamarse / Llamar",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzi?",
        meaning: "Como te llamas?",
      },
    ],
    strokeCount: 5,
    radical: "口",
  },
  {
    id: 58,
    hanzi: "住",
    pinyin: "zhù",
    meaning: "Vivir / Residir",
    category: "Verbos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "你住在哪里？",
        pinyin: "Nǐ zhù zài nǎlǐ?",
        meaning: "Donde vives?",
      },
    ],
    strokeCount: 7,
    radical: "亻",
  },
  {
    id: 59,
    hanzi: "工作",
    pinyin: "gōng zuò",
    meaning: "Trabajar / Trabajo",
    category: "Verbos",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "他在医院工作。",
        pinyin: "Tā zài yīyuàn gōngzuò.",
        meaning: "El trabaja en el hospital.",
      },
    ],
  },
  {
    id: 60,
    hanzi: "学习",
    pinyin: "xué xí",
    meaning: "Estudiar / Aprender",
    category: "Verbos",
    level: "HSK1",
    tones: [2, 2],
    examples: [
      {
        hanzi: "我在学习中文。",
        pinyin: "Wǒ zài xuéxí Zhōngwén.",
        meaning: "Estoy estudiando chino.",
      },
    ],
  },

  // ===========================================================================
  // ADJETIVOS (Adjectives)
  // ===========================================================================
  {
    id: 61,
    hanzi: "大",
    pinyin: "dà",
    meaning: "Grande",
    category: "Adjetivos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "中国很大。",
        pinyin: "Zhōngguó hěn dà.",
        meaning: "China es muy grande.",
      },
    ],
    strokeCount: 3,
    radical: "大",
  },
  {
    id: 62,
    hanzi: "小",
    pinyin: "xiǎo",
    meaning: "Pequeno",
    category: "Adjetivos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "这只猫很小。",
        pinyin: "Zhè zhī māo hěn xiǎo.",
        meaning: "Este gato es muy pequeno.",
      },
    ],
    strokeCount: 3,
    radical: "小",
  },
  {
    id: 63,
    hanzi: "多",
    pinyin: "duō",
    meaning: "Mucho / Muchos",
    category: "Adjetivos",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "这里人很多。",
        pinyin: "Zhèlǐ rén hěn duō.",
        meaning: "Aqui hay mucha gente.",
      },
    ],
    strokeCount: 6,
    radical: "夕",
  },
  {
    id: 64,
    hanzi: "少",
    pinyin: "shǎo",
    meaning: "Poco / Pocos",
    category: "Adjetivos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "今天学生很少。",
        pinyin: "Jīntiān xuéshēng hěn shǎo.",
        meaning: "Hoy hay pocos estudiantes.",
      },
    ],
    strokeCount: 4,
    radical: "小",
  },
  {
    id: 65,
    hanzi: "高",
    pinyin: "gāo",
    meaning: "Alto",
    category: "Adjetivos",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "他很高。",
        pinyin: "Tā hěn gāo.",
        meaning: "El es muy alto.",
      },
    ],
    strokeCount: 10,
    radical: "高",
  },
  {
    id: 66,
    hanzi: "冷",
    pinyin: "lěng",
    meaning: "Frio",
    category: "Adjetivos",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "今天很冷。",
        pinyin: "Jīntiān hěn lěng.",
        meaning: "Hoy hace mucho frio.",
      },
    ],
    strokeCount: 7,
    radical: "冫",
  },
  {
    id: 67,
    hanzi: "热",
    pinyin: "rè",
    meaning: "Caliente / Calor",
    category: "Adjetivos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "夏天很热。",
        pinyin: "Xiàtiān hěn rè.",
        meaning: "El verano es muy caluroso.",
      },
    ],
    strokeCount: 10,
    radical: "灬",
  },
  {
    id: 68,
    hanzi: "漂亮",
    pinyin: "piào liang",
    meaning: "Bonito / Hermoso / Guapo",
    category: "Adjetivos",
    level: "HSK1",
    tones: [4, 0],
    examples: [
      {
        hanzi: "这朵花很漂亮。",
        pinyin: "Zhè duǒ huā hěn piàoliang.",
        meaning: "Esta flor es muy bonita.",
      },
    ],
  },

  // ===========================================================================
  // TIEMPO (Time)
  // ===========================================================================
  {
    id: 69,
    hanzi: "今天",
    pinyin: "jīn tiān",
    meaning: "Hoy",
    category: "Tiempo",
    level: "HSK1",
    tones: [1, 1],
    examples: [
      {
        hanzi: "今天是星期一。",
        pinyin: "Jīntiān shì xīngqī yī.",
        meaning: "Hoy es lunes.",
      },
    ],
  },
  {
    id: 70,
    hanzi: "明天",
    pinyin: "míng tiān",
    meaning: "Manana (dia siguiente)",
    category: "Tiempo",
    level: "HSK1",
    tones: [2, 1],
    examples: [
      {
        hanzi: "明天你有时间吗？",
        pinyin: "Míngtiān nǐ yǒu shíjiān ma?",
        meaning: "Tienes tiempo manana?",
      },
    ],
  },
  {
    id: 71,
    hanzi: "昨天",
    pinyin: "zuó tiān",
    meaning: "Ayer",
    category: "Tiempo",
    level: "HSK1",
    tones: [2, 1],
    examples: [
      {
        hanzi: "昨天我去了商店。",
        pinyin: "Zuótiān wǒ qù le shāngdiàn.",
        meaning: "Ayer fui a la tienda.",
      },
    ],
  },
  {
    id: 72,
    hanzi: "年",
    pinyin: "nián",
    meaning: "Ano",
    category: "Tiempo",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "今年是二零二六年。",
        pinyin: "Jīnnián shì èr líng èr liù nián.",
        meaning: "Este ano es 2026.",
      },
    ],
    strokeCount: 6,
    radical: "干",
  },
  {
    id: 73,
    hanzi: "月",
    pinyin: "yuè",
    meaning: "Mes / Luna",
    category: "Tiempo",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "一年有十二个月。",
        pinyin: "Yì nián yǒu shí'èr gè yuè.",
        meaning: "Un ano tiene doce meses.",
      },
    ],
    strokeCount: 4,
    radical: "月",
  },
  {
    id: 74,
    hanzi: "日",
    pinyin: "rì",
    meaning: "Dia / Sol",
    category: "Tiempo",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "今天是五月十一日。",
        pinyin: "Jīntiān shì wǔ yuè shíyī rì.",
        meaning: "Hoy es once de mayo.",
      },
    ],
    strokeCount: 4,
    radical: "日",
  },
  {
    id: 75,
    hanzi: "星期",
    pinyin: "xīng qī",
    meaning: "Semana",
    category: "Tiempo",
    level: "HSK1",
    tones: [1, 1],
    examples: [
      {
        hanzi: "这个星期你忙吗？",
        pinyin: "Zhège xīngqī nǐ máng ma?",
        meaning: "Estas ocupado esta semana?",
      },
    ],
  },
  {
    id: 76,
    hanzi: "现在",
    pinyin: "xiàn zài",
    meaning: "Ahora",
    category: "Tiempo",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "现在几点了？",
        pinyin: "Xiànzài jǐ diǎn le?",
        meaning: "Que hora es ahora?",
      },
    ],
  },
  {
    id: 77,
    hanzi: "上午",
    pinyin: "shàng wǔ",
    meaning: "Manana (periodo del dia)",
    category: "Tiempo",
    level: "HSK1",
    tones: [4, 3],
    examples: [
      {
        hanzi: "上午我有课。",
        pinyin: "Shàngwǔ wǒ yǒu kè.",
        meaning: "Por la manana tengo clase.",
      },
    ],
  },
  {
    id: 78,
    hanzi: "下午",
    pinyin: "xià wǔ",
    meaning: "Tarde (periodo del dia)",
    category: "Tiempo",
    level: "HSK1",
    tones: [4, 3],
    examples: [
      {
        hanzi: "下午我们去看电影。",
        pinyin: "Xiàwǔ wǒmen qù kàn diànyǐng.",
        meaning: "Por la tarde vamos a ver una pelicula.",
      },
    ],
  },

  // ===========================================================================
  // LUGARES (Places)
  // ===========================================================================
  {
    id: 79,
    hanzi: "中国",
    pinyin: "Zhōng guó",
    meaning: "China",
    category: "Lugares",
    level: "HSK1",
    tones: [1, 2],
    examples: [
      {
        hanzi: "中国有很多人。",
        pinyin: "Zhōngguó yǒu hěn duō rén.",
        meaning: "China tiene mucha gente.",
      },
    ],
  },
  {
    id: 80,
    hanzi: "学校",
    pinyin: "xué xiào",
    meaning: "Escuela",
    category: "Lugares",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "我们的学校很大。",
        pinyin: "Wǒmen de xuéxiào hěn dà.",
        meaning: "Nuestra escuela es muy grande.",
      },
    ],
  },
  {
    id: 81,
    hanzi: "医院",
    pinyin: "yī yuàn",
    meaning: "Hospital",
    category: "Lugares",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "他在医院工作。",
        pinyin: "Tā zài yīyuàn gōngzuò.",
        meaning: "El trabaja en el hospital.",
      },
    ],
  },
  {
    id: 82,
    hanzi: "商店",
    pinyin: "shāng diàn",
    meaning: "Tienda",
    category: "Lugares",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "商店几点关门？",
        pinyin: "Shāngdiàn jǐ diǎn guān mén?",
        meaning: "A que hora cierra la tienda?",
      },
    ],
  },
  {
    id: 83,
    hanzi: "家",
    pinyin: "jiā",
    meaning: "Casa / Hogar / Familia",
    category: "Lugares",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我想回家。",
        pinyin: "Wǒ xiǎng huí jiā.",
        meaning: "Quiero volver a casa.",
      },
    ],
    strokeCount: 10,
    radical: "宀",
  },
  {
    id: 84,
    hanzi: "饭店",
    pinyin: "fàn diàn",
    meaning: "Restaurante / Hotel",
    category: "Lugares",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "我们去饭店吃饭吧。",
        pinyin: "Wǒmen qù fàndiàn chī fàn ba.",
        meaning: "Vamos al restaurante a comer.",
      },
    ],
  },

  // ===========================================================================
  // PREGUNTAS (Question Words)
  // ===========================================================================
  {
    id: 85,
    hanzi: "什么",
    pinyin: "shén me",
    meaning: "Que",
    category: "Preguntas",
    level: "HSK1",
    tones: [2, 0],
    examples: [
      {
        hanzi: "你在做什么？",
        pinyin: "Nǐ zài zuò shénme?",
        meaning: "Que estas haciendo?",
      },
    ],
  },
  {
    id: 86,
    hanzi: "谁",
    pinyin: "shéi",
    meaning: "Quien",
    category: "Preguntas",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "他是谁？",
        pinyin: "Tā shì shéi?",
        meaning: "Quien es el?",
      },
    ],
    strokeCount: 10,
    radical: "讠",
  },
  {
    id: 87,
    hanzi: "哪",
    pinyin: "nǎ",
    meaning: "Cual / Que (interrogativo)",
    category: "Preguntas",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "你是哪国人？",
        pinyin: "Nǐ shì nǎ guó rén?",
        meaning: "De que pais eres?",
      },
    ],
    strokeCount: 9,
    radical: "口",
  },
  {
    id: 88,
    hanzi: "哪里",
    pinyin: "nǎ lǐ",
    meaning: "Donde",
    category: "Preguntas",
    level: "HSK1",
    tones: [3, 3],
    examples: [
      {
        hanzi: "你住在哪里？",
        pinyin: "Nǐ zhù zài nǎlǐ?",
        meaning: "Donde vives?",
      },
    ],
  },
  {
    id: 89,
    hanzi: "怎么",
    pinyin: "zěn me",
    meaning: "Como",
    category: "Preguntas",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "这个字怎么读？",
        pinyin: "Zhège zì zěnme dú?",
        meaning: "Como se lee este caracter?",
      },
    ],
  },
  {
    id: 90,
    hanzi: "多少",
    pinyin: "duō shǎo",
    meaning: "Cuanto / Cuantos",
    category: "Preguntas",
    level: "HSK1",
    tones: [1, 3],
    examples: [
      {
        hanzi: "这个多少钱？",
        pinyin: "Zhège duōshǎo qián?",
        meaning: "Cuanto cuesta esto?",
      },
    ],
  },
  {
    id: 91,
    hanzi: "几",
    pinyin: "jǐ",
    meaning: "Cuantos (numero pequeno) / Algunos",
    category: "Preguntas",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "你有几个孩子？",
        pinyin: "Nǐ yǒu jǐ gè háizi?",
        meaning: "Cuantos hijos tienes?",
      },
    ],
    strokeCount: 2,
    radical: "几",
  },

  // ===========================================================================
  // OTROS (Others - People, Objects, Professions)
  // ===========================================================================
  {
    id: 92,
    hanzi: "人",
    pinyin: "rén",
    meaning: "Persona / Gente",
    category: "Otros",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "那个人是谁？",
        pinyin: "Nàge rén shì shéi?",
        meaning: "Quien es esa persona?",
      },
    ],
    strokeCount: 2,
    radical: "人",
  },
  {
    id: 93,
    hanzi: "朋友",
    pinyin: "péng yǒu",
    meaning: "Amigo",
    category: "Otros",
    level: "HSK1",
    tones: [2, 3],
    examples: [
      {
        hanzi: "他是我最好的朋友。",
        pinyin: "Tā shì wǒ zuì hǎo de péngyǒu.",
        meaning: "El es mi mejor amigo.",
      },
    ],
  },
  {
    id: 94,
    hanzi: "老师",
    pinyin: "lǎo shī",
    meaning: "Profesor / Maestro",
    category: "Otros",
    level: "HSK1",
    tones: [3, 1],
    examples: [
      {
        hanzi: "老师，您好！",
        pinyin: "Lǎoshī, nín hǎo!",
        meaning: "Profesor, buenos dias!",
      },
    ],
  },
  {
    id: 95,
    hanzi: "学生",
    pinyin: "xué shēng",
    meaning: "Estudiante",
    category: "Otros",
    level: "HSK1",
    tones: [2, 1],
    examples: [
      {
        hanzi: "我是大学生。",
        pinyin: "Wǒ shì dàxuéshēng.",
        meaning: "Soy estudiante universitario.",
      },
    ],
  },
  {
    id: 96,
    hanzi: "医生",
    pinyin: "yī shēng",
    meaning: "Medico / Doctor",
    category: "Otros",
    level: "HSK1",
    tones: [1, 1],
    examples: [
      {
        hanzi: "医生说我很健康。",
        pinyin: "Yīshēng shuō wǒ hěn jiànkāng.",
        meaning: "El doctor dice que estoy muy saludable.",
      },
    ],
  },
  {
    id: 97,
    hanzi: "钱",
    pinyin: "qián",
    meaning: "Dinero",
    category: "Otros",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我没有钱。",
        pinyin: "Wǒ méi yǒu qián.",
        meaning: "No tengo dinero.",
      },
    ],
    strokeCount: 10,
    radical: "钅",
  },
  {
    id: 98,
    hanzi: "电话",
    pinyin: "diàn huà",
    meaning: "Telefono",
    category: "Otros",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "你的电话号码是多少？",
        pinyin: "Nǐ de diànhuà hàomǎ shì duōshǎo?",
        meaning: "Cual es tu numero de telefono?",
      },
    ],
  },
  {
    id: 99,
    hanzi: "电脑",
    pinyin: "diàn nǎo",
    meaning: "Computadora / Ordenador",
    category: "Otros",
    level: "HSK1",
    tones: [4, 3],
    examples: [
      {
        hanzi: "我用电脑学习中文。",
        pinyin: "Wǒ yòng diànnǎo xuéxí Zhōngwén.",
        meaning: "Uso la computadora para estudiar chino.",
      },
    ],
  },

  // ===========================================================================
  // TRANSPORTE (Transportation)
  // ===========================================================================
  {
    id: 100,
    hanzi: "车",
    pinyin: "chē",
    meaning: "Vehiculo / Coche",
    category: "Transporte",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "他的车很大。",
        pinyin: "Tā de chē hěn dà.",
        meaning: "Su coche es muy grande.",
      },
    ],
    strokeCount: 4,
    radical: "车",
  },
  {
    id: 101,
    hanzi: "出租车",
    pinyin: "chū zū chē",
    meaning: "Taxi",
    category: "Transporte",
    level: "HSK1",
    tones: [1, 1, 1],
    examples: [
      {
        hanzi: "我们坐出租车去吧。",
        pinyin: "Wǒmen zuò chūzūchē qù ba.",
        meaning: "Vamos en taxi.",
      },
    ],
  },
  {
    id: 102,
    hanzi: "坐",
    pinyin: "zuò",
    meaning: "Sentarse / Tomar (transporte)",
    category: "Transporte",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "请坐。",
        pinyin: "Qǐng zuò.",
        meaning: "Por favor, sientese.",
      },
    ],
    strokeCount: 7,
    radical: "土",
  },
  {
    id: 103,
    hanzi: "飞机",
    pinyin: "fēi jī",
    meaning: "Avion",
    category: "Transporte",
    level: "HSK1",
    tones: [1, 1],
    examples: [
      {
        hanzi: "我坐飞机去中国。",
        pinyin: "Wǒ zuò fēijī qù Zhōngguó.",
        meaning: "Voy a China en avion.",
      },
    ],
  },
  {
    id: 104,
    hanzi: "火车站",
    pinyin: "huǒ chē zhàn",
    meaning: "Estacion de tren",
    category: "Transporte",
    level: "HSK1",
    tones: [3, 1, 4],
    examples: [
      {
        hanzi: "火车站在哪里？",
        pinyin: "Huǒchē zhàn zài nǎlǐ?",
        meaning: "Donde esta la estacion de tren?",
      },
    ],
  },

  // ===========================================================================
  // ROPA Y OBJETOS (Clothing & Objects)
  // ===========================================================================
  {
    id: 105,
    hanzi: "衣服",
    pinyin: "yī fu",
    meaning: "Ropa",
    category: "Ropa",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "这件衣服很漂亮。",
        pinyin: "Zhè jiàn yīfu hěn piàoliang.",
        meaning: "Esta ropa es muy bonita.",
      },
    ],
  },
  {
    id: 106,
    hanzi: "书",
    pinyin: "shū",
    meaning: "Libro",
    category: "Objetos",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我在看书。",
        pinyin: "Wǒ zài kàn shū.",
        meaning: "Estoy leyendo un libro.",
      },
    ],
    strokeCount: 4,
    radical: "乛",
  },
  {
    id: 107,
    hanzi: "桌子",
    pinyin: "zhuō zi",
    meaning: "Mesa",
    category: "Objetos",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "书在桌子上。",
        pinyin: "Shū zài zhuōzi shàng.",
        meaning: "El libro esta en la mesa.",
      },
    ],
  },
  {
    id: 108,
    hanzi: "椅子",
    pinyin: "yǐ zi",
    meaning: "Silla",
    category: "Objetos",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "请坐这把椅子。",
        pinyin: "Qǐng zuò zhè bǎ yǐzi.",
        meaning: "Por favor sientese en esta silla.",
      },
    ],
  },
  {
    id: 109,
    hanzi: "杯子",
    pinyin: "bēi zi",
    meaning: "Vaso / Taza",
    category: "Objetos",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "给我一个杯子。",
        pinyin: "Gěi wǒ yí gè bēizi.",
        meaning: "Dame un vaso.",
      },
    ],
  },

  // ===========================================================================
  // ACCIONES Y ESTADOS (Actions & States)
  // ===========================================================================
  {
    id: 110,
    hanzi: "吃饭",
    pinyin: "chī fàn",
    meaning: "Comer (la comida)",
    category: "Acciones",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "你吃饭了吗？",
        pinyin: "Nǐ chī fàn le ma?",
        meaning: "Ya comiste?",
      },
    ],
  },
  {
    id: 111,
    hanzi: "睡觉",
    pinyin: "shuì jiào",
    meaning: "Dormir",
    category: "Acciones",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "我想睡觉了。",
        pinyin: "Wǒ xiǎng shuì jiào le.",
        meaning: "Quiero dormir.",
      },
    ],
  },
  {
    id: 112,
    hanzi: "走",
    pinyin: "zǒu",
    meaning: "Caminar / Irse",
    category: "Acciones",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我们走吧。",
        pinyin: "Wǒmen zǒu ba.",
        meaning: "Vamonos.",
      },
    ],
    strokeCount: 7,
    radical: "走",
  },
  {
    id: 113,
    hanzi: "跑",
    pinyin: "pǎo",
    meaning: "Correr",
    category: "Acciones",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "他跑得很快。",
        pinyin: "Tā pǎo de hěn kuài.",
        meaning: "El corre muy rapido.",
      },
    ],
    strokeCount: 12,
    radical: "足",
  },
  {
    id: 114,
    hanzi: "打电话",
    pinyin: "dǎ diàn huà",
    meaning: "Hacer una llamada / Llamar por telefono",
    category: "Acciones",
    level: "HSK1",
    tones: [3, 4, 4],
    examples: [
      {
        hanzi: "我给你打电话。",
        pinyin: "Wǒ gěi nǐ dǎ diànhuà.",
        meaning: "Te llamo por telefono.",
      },
    ],
  },
  {
    id: 115,
    hanzi: "回",
    pinyin: "huí",
    meaning: "Volver / Regresar",
    category: "Acciones",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我想回家。",
        pinyin: "Wǒ xiǎng huí jiā.",
        meaning: "Quiero volver a casa.",
      },
    ],
    strokeCount: 6,
    radical: "囗",
  },
  {
    id: 116,
    hanzi: "开",
    pinyin: "kāi",
    meaning: "Abrir / Conducir",
    category: "Acciones",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "请开门。",
        pinyin: "Qǐng kāi mén.",
        meaning: "Por favor abre la puerta.",
      },
    ],
    strokeCount: 4,
    radical: "廾",
  },

  // ===========================================================================
  // ADVERBIOS Y PARTICULAS (Adverbs & Particles)
  // ===========================================================================
  {
    id: 117,
    hanzi: "不",
    pinyin: "bù",
    meaning: "No (negacion)",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我不是老师。",
        pinyin: "Wǒ bú shì lǎoshī.",
        meaning: "No soy profesor.",
      },
    ],
    strokeCount: 4,
    radical: "一",
  },
  {
    id: 118,
    hanzi: "没",
    pinyin: "méi",
    meaning: "No (para 有) / No haber",
    category: "Particulas",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我没有钱。",
        pinyin: "Wǒ méi yǒu qián.",
        meaning: "No tengo dinero.",
      },
    ],
    strokeCount: 7,
    radical: "氵",
  },
  {
    id: 119,
    hanzi: "也",
    pinyin: "yě",
    meaning: "Tambien",
    category: "Particulas",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "我也是学生。",
        pinyin: "Wǒ yě shì xuéshēng.",
        meaning: "Yo tambien soy estudiante.",
      },
    ],
    strokeCount: 3,
    radical: "乙",
  },
  {
    id: 120,
    hanzi: "都",
    pinyin: "dōu",
    meaning: "Todos / Todo",
    category: "Particulas",
    level: "HSK1",
    tones: [1],
    examples: [
      {
        hanzi: "我们都是学生。",
        pinyin: "Wǒmen dōu shì xuéshēng.",
        meaning: "Todos somos estudiantes.",
      },
    ],
    strokeCount: 10,
    radical: "阝",
  },
  {
    id: 121,
    hanzi: "的",
    pinyin: "de",
    meaning: "Particula posesiva (de)",
    category: "Particulas",
    level: "HSK1",
    tones: [0],
    examples: [
      {
        hanzi: "我的书。",
        pinyin: "Wǒ de shū.",
        meaning: "Mi libro.",
      },
    ],
    strokeCount: 8,
    radical: "白",
  },
  {
    id: 122,
    hanzi: "了",
    pinyin: "le",
    meaning: "Particula de cambio de estado / pasado",
    category: "Particulas",
    level: "HSK1",
    tones: [0],
    examples: [
      {
        hanzi: "我吃了。",
        pinyin: "Wǒ chī le.",
        meaning: "Ya comi.",
      },
    ],
    strokeCount: 2,
    radical: "乛",
  },
  {
    id: 123,
    hanzi: "在",
    pinyin: "zài",
    meaning: "En / Estar en / Estar (haciendo)",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "我在家。",
        pinyin: "Wǒ zài jiā.",
        meaning: "Estoy en casa.",
      },
    ],
    strokeCount: 6,
    radical: "土",
  },
  {
    id: 124,
    hanzi: "和",
    pinyin: "hé",
    meaning: "Y / Con",
    category: "Particulas",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我和你。",
        pinyin: "Wǒ hé nǐ.",
        meaning: "Tu y yo.",
      },
    ],
    strokeCount: 8,
    radical: "口",
  },
  {
    id: 125,
    hanzi: "太",
    pinyin: "tài",
    meaning: "Demasiado / Muy",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "太贵了！",
        pinyin: "Tài guì le!",
        meaning: "Demasiado caro!",
      },
    ],
    strokeCount: 4,
    radical: "大",
  },
  {
    id: 126,
    hanzi: "这",
    pinyin: "zhè",
    meaning: "Este / Esta / Esto",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "这是什么？",
        pinyin: "Zhè shì shénme?",
        meaning: "Que es esto?",
      },
    ],
    strokeCount: 7,
    radical: "辶",
  },
  {
    id: 127,
    hanzi: "那",
    pinyin: "nà",
    meaning: "Ese / Esa / Eso / Aquel",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "那个人是谁？",
        pinyin: "Nàge rén shì shéi?",
        meaning: "Quien es esa persona?",
      },
    ],
    strokeCount: 6,
    radical: "阝",
  },
  {
    id: 128,
    hanzi: "个",
    pinyin: "gè",
    meaning: "Clasificador general (unidad de medida)",
    category: "Particulas",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "一个人。",
        pinyin: "Yí gè rén.",
        meaning: "Una persona.",
      },
    ],
    strokeCount: 3,
    radical: "人",
  },

  // ===========================================================================
  // COLORES (Colors)
  // ===========================================================================
  {
    id: 129,
    hanzi: "红色",
    pinyin: "hóng sè",
    meaning: "Rojo",
    category: "Colores",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "中国人喜欢红色。",
        pinyin: "Zhōngguó rén xǐhuan hóngsè.",
        meaning: "A los chinos les gusta el rojo.",
      },
    ],
  },
  {
    id: 130,
    hanzi: "蓝色",
    pinyin: "lán sè",
    meaning: "Azul",
    category: "Colores",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "天空是蓝色的。",
        pinyin: "Tiānkōng shì lánsè de.",
        meaning: "El cielo es azul.",
      },
    ],
  },
  {
    id: 131,
    hanzi: "绿色",
    pinyin: "lǜ sè",
    meaning: "Verde",
    category: "Colores",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "树叶是绿色的。",
        pinyin: "Shùyè shì lǜsè de.",
        meaning: "Las hojas de los arboles son verdes.",
      },
    ],
  },
  {
    id: 132,
    hanzi: "黄色",
    pinyin: "huáng sè",
    meaning: "Amarillo",
    category: "Colores",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "这朵花是黄色的。",
        pinyin: "Zhè duǒ huā shì huángsè de.",
        meaning: "Esta flor es amarilla.",
      },
    ],
  },
  {
    id: 133,
    hanzi: "白色",
    pinyin: "bái sè",
    meaning: "Blanco",
    category: "Colores",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "雪是白色的。",
        pinyin: "Xuě shì báisè de.",
        meaning: "La nieve es blanca.",
      },
    ],
  },
  {
    id: 134,
    hanzi: "黑色",
    pinyin: "hēi sè",
    meaning: "Negro",
    category: "Colores",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "她穿黑色衣服。",
        pinyin: "Tā chuān hēisè yīfu.",
        meaning: "Ella usa ropa negra.",
      },
    ],
  },

  // ===========================================================================
  // CLIMA Y NATURALEZA (Weather & Nature)
  // ===========================================================================
  {
    id: 135,
    hanzi: "天气",
    pinyin: "tiān qì",
    meaning: "Clima / Tiempo (meteorologico)",
    category: "Clima",
    level: "HSK1",
    tones: [1, 4],
    examples: [
      {
        hanzi: "今天天气很好。",
        pinyin: "Jīntiān tiānqì hěn hǎo.",
        meaning: "Hoy el clima esta muy bueno.",
      },
    ],
  },
  {
    id: 136,
    hanzi: "下雨",
    pinyin: "xià yǔ",
    meaning: "Llover",
    category: "Clima",
    level: "HSK1",
    tones: [4, 3],
    examples: [
      {
        hanzi: "今天下雨了。",
        pinyin: "Jīntiān xià yǔ le.",
        meaning: "Hoy llovio.",
      },
    ],
  },
  {
    id: 137,
    hanzi: "雪",
    pinyin: "xuě",
    meaning: "Nieve / Nevar",
    category: "Clima",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "冬天会下雪。",
        pinyin: "Dōngtiān huì xià xuě.",
        meaning: "En invierno nieva.",
      },
    ],
    strokeCount: 11,
    radical: "雨",
  },

  // ===========================================================================
  // CUERPO (Body Parts)
  // ===========================================================================
  {
    id: 138,
    hanzi: "头",
    pinyin: "tóu",
    meaning: "Cabeza",
    category: "Cuerpo",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "我头疼。",
        pinyin: "Wǒ tóu téng.",
        meaning: "Me duele la cabeza.",
      },
    ],
    strokeCount: 5,
    radical: "大",
  },
  {
    id: 139,
    hanzi: "眼睛",
    pinyin: "yǎn jing",
    meaning: "Ojos",
    category: "Cuerpo",
    level: "HSK1",
    tones: [3, 0],
    examples: [
      {
        hanzi: "她的眼睛很大。",
        pinyin: "Tā de yǎnjing hěn dà.",
        meaning: "Sus ojos son muy grandes.",
      },
    ],
  },
  {
    id: 140,
    hanzi: "手",
    pinyin: "shǒu",
    meaning: "Mano",
    category: "Cuerpo",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "请洗手。",
        pinyin: "Qǐng xǐ shǒu.",
        meaning: "Por favor lavate las manos.",
      },
    ],
    strokeCount: 4,
    radical: "手",
  },

  // ===========================================================================
  // MAS SUSTANTIVOS Y EXPRESIONES (More nouns & expressions)
  // ===========================================================================
  {
    id: 141,
    hanzi: "名字",
    pinyin: "míng zi",
    meaning: "Nombre",
    category: "Otros",
    level: "HSK1",
    tones: [2, 0],
    examples: [
      {
        hanzi: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzi?",
        meaning: "Como te llamas?",
      },
    ],
  },
  {
    id: 142,
    hanzi: "请",
    pinyin: "qǐng",
    meaning: "Por favor / Invitar",
    category: "Otros",
    level: "HSK1",
    tones: [3],
    examples: [
      {
        hanzi: "请进！",
        pinyin: "Qǐng jìn!",
        meaning: "Por favor, pase!",
      },
    ],
    strokeCount: 10,
    radical: "讠",
  },
  {
    id: 143,
    hanzi: "谁",
    pinyin: "shéi",
    meaning: "Quien",
    category: "Preguntas",
    level: "HSK1",
    tones: [2],
    examples: [
      {
        hanzi: "他是谁？",
        pinyin: "Tā shì shéi?",
        meaning: "Quien es el?",
      },
    ],
    strokeCount: 10,
    radical: "讠",
  },
  {
    id: 144,
    hanzi: "手机",
    pinyin: "shǒu jī",
    meaning: "Celular / Telefono movil",
    category: "Otros",
    level: "HSK1",
    tones: [3, 1],
    examples: [
      {
        hanzi: "我的手机在桌子上。",
        pinyin: "Wǒ de shǒujī zài zhuōzi shàng.",
        meaning: "Mi celular esta en la mesa.",
      },
    ],
  },
  {
    id: 145,
    hanzi: "东西",
    pinyin: "dōng xi",
    meaning: "Cosa / Cosas",
    category: "Otros",
    level: "HSK1",
    tones: [1, 0],
    examples: [
      {
        hanzi: "你买了什么东西？",
        pinyin: "Nǐ mǎi le shénme dōngxi?",
        meaning: "Que cosas compraste?",
      },
    ],
  },
  {
    id: 146,
    hanzi: "时候",
    pinyin: "shí hou",
    meaning: "Momento / Cuando",
    category: "Tiempo",
    level: "HSK1",
    tones: [2, 0],
    examples: [
      {
        hanzi: "你什么时候来？",
        pinyin: "Nǐ shénme shíhou lái?",
        meaning: "Cuando vienes?",
      },
    ],
  },
  {
    id: 147,
    hanzi: "前面",
    pinyin: "qián miàn",
    meaning: "Delante / Enfrente",
    category: "Lugares",
    level: "HSK1",
    tones: [2, 4],
    examples: [
      {
        hanzi: "学校在前面。",
        pinyin: "Xuéxiào zài qiánmiàn.",
        meaning: "La escuela esta enfrente.",
      },
    ],
  },
  {
    id: 148,
    hanzi: "后面",
    pinyin: "hòu miàn",
    meaning: "Detras / Atras",
    category: "Lugares",
    level: "HSK1",
    tones: [4, 4],
    examples: [
      {
        hanzi: "厕所在后面。",
        pinyin: "Cèsuǒ zài hòumiàn.",
        meaning: "El bano esta atras.",
      },
    ],
  },
  {
    id: 149,
    hanzi: "贵",
    pinyin: "guì",
    meaning: "Caro / Costoso",
    category: "Adjetivos",
    level: "HSK1",
    tones: [4],
    examples: [
      {
        hanzi: "这个太贵了。",
        pinyin: "Zhège tài guì le.",
        meaning: "Esto es demasiado caro.",
      },
    ],
    strokeCount: 9,
    radical: "贝",
  },
  {
    id: 150,
    hanzi: "便宜",
    pinyin: "pián yi",
    meaning: "Barato",
    category: "Adjetivos",
    level: "HSK1",
    tones: [2, 0],
    examples: [
      {
        hanzi: "这个很便宜。",
        pinyin: "Zhège hěn piányi.",
        meaning: "Esto es muy barato.",
      },
    ],
  },
];

// =============================================================================
// Helper: Get words by category
// =============================================================================
export const getWordsByCategory = (category: string): Word[] => {
  return hsk1Words.filter((word) => word.category === category);
};

// =============================================================================
// Helper: Get all unique categories
// =============================================================================
export const getCategories = (): string[] => {
  return [...new Set(hsk1Words.map((word) => word.category))];
};

// =============================================================================
// Helper: Get a word by ID
// =============================================================================
export const getWordById = (id: number): Word | undefined => {
  return hsk1Words.find((word) => word.id === id);
};

// =============================================================================
// Helper: Search words by hanzi, pinyin, or meaning
// =============================================================================
export const searchWords = (query: string): Word[] => {
  const lowerQuery = query.toLowerCase();
  return hsk1Words.filter(
    (word) =>
      word.hanzi.includes(query) ||
      word.pinyin.toLowerCase().includes(lowerQuery) ||
      word.meaning.toLowerCase().includes(lowerQuery)
  );
};

// =============================================================================
// Category metadata for UI display
// =============================================================================
export const categoryMeta: Record<string, { icon: string; color: string }> = {
  Saludos: { icon: "hand-wave", color: "#F59E0B" },
  Pronombres: { icon: "user", color: "#8B5CF6" },
  Familia: { icon: "users", color: "#EC4899" },
  Numeros: { icon: "hash", color: "#3B82F6" },
  Comida: { icon: "utensils", color: "#EF4444" },
  Verbos: { icon: "zap", color: "#10B981" },
  Adjetivos: { icon: "sliders", color: "#F97316" },
  Tiempo: { icon: "clock", color: "#6366F1" },
  Lugares: { icon: "map-pin", color: "#14B8A6" },
  Preguntas: { icon: "help-circle", color: "#A855F7" },
  Transporte: { icon: "car", color: "#0EA5E9" },
  Ropa: { icon: "shirt", color: "#D946EF" },
  Objetos: { icon: "package", color: "#78716C" },
  Acciones: { icon: "activity", color: "#22C55E" },
  Particulas: { icon: "puzzle", color: "#E11D48" },
  Colores: { icon: "palette", color: "#F43F5E" },
  Clima: { icon: "cloud-sun", color: "#38BDF8" },
  Cuerpo: { icon: "heart", color: "#FB923C" },
  Otros: { icon: "box", color: "#64748B" },
};
