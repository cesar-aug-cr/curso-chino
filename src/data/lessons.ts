// ============================================================================
// LECCIONES DE CHINO MANDARIN PARA HISPANOHABLANTES
// Archivo de datos completo con 15 lecciones desarrolladas
// Todos los textos y explicaciones estan en espanol
// ============================================================================

export interface DialogLine {
  speaker: "A" | "B";
  hanzi: string;
  pinyin: string;
  meaning: string;
}

export interface VocabItem {
  hanzi: string;
  pinyin: string;
  meaning: string;
  tones: number[];
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: {
    hanzi: string;
    pinyin: string;
    meaning: string;
  }[];
}

export interface CulturalNote {
  title: string;
  content: string;
}

export interface Lesson {
  id: number;
  moduleId: number;
  title: string;
  description: string;
  dialog: DialogLine[];
  vocabulary: VocabItem[];
  grammar: GrammarPoint[];
  culturalNotes: CulturalNote[];
  exercises: {
    type:
      | "multiple-choice"
      | "fill-blank"
      | "order-words"
      | "listen-select"
      | "match";
    question: string;
    options?: string[];
    correctAnswer: string | number;
    explanation?: string;
  }[];
}

export const lessons: Lesson[] = [
  // ========================================================================
  // LECCION 1: SALUDOS BASICOS
  // ========================================================================
  {
    id: 1,
    moduleId: 0,
    title: "Saludos basicos",
    description:
      "Aprende a saludar, preguntar como esta alguien y despedirte en chino. Estas son las primeras palabras que usaras en cualquier conversacion.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好！",
        pinyin: "Ni hao!",
        meaning: "Hola!",
      },
      {
        speaker: "B",
        hanzi: "你好！你好吗？",
        pinyin: "Ni hao! Ni hao ma?",
        meaning: "Hola! Como estas?",
      },
      {
        speaker: "A",
        hanzi: "我很好，谢谢！你呢？",
        pinyin: "Wo hen hao, xiexie! Ni ne?",
        meaning: "Estoy muy bien, gracias! Y tu?",
      },
      {
        speaker: "B",
        hanzi: "我也很好，谢谢。",
        pinyin: "Wo ye hen hao, xiexie.",
        meaning: "Yo tambien estoy muy bien, gracias.",
      },
      {
        speaker: "A",
        hanzi: "再见！",
        pinyin: "Zaijian!",
        meaning: "Adios!",
      },
      {
        speaker: "B",
        hanzi: "再见！",
        pinyin: "Zaijian!",
        meaning: "Adios!",
      },
    ],
    vocabulary: [
      {
        hanzi: "你好",
        pinyin: "ni hao",
        meaning: "Hola",
        tones: [3, 3],
      },
      {
        hanzi: "你",
        pinyin: "ni",
        meaning: "Tu",
        tones: [3],
      },
      {
        hanzi: "好",
        pinyin: "hao",
        meaning: "Bien / bueno",
        tones: [3],
      },
      {
        hanzi: "吗",
        pinyin: "ma",
        meaning: "Particula de pregunta (como poner signos de interrogacion)",
        tones: [0],
      },
      {
        hanzi: "我",
        pinyin: "wo",
        meaning: "Yo",
        tones: [3],
      },
      {
        hanzi: "很",
        pinyin: "hen",
        meaning: "Muy",
        tones: [3],
      },
      {
        hanzi: "谢谢",
        pinyin: "xiexie",
        meaning: "Gracias",
        tones: [4, 4],
      },
      {
        hanzi: "再见",
        pinyin: "zaijian",
        meaning: "Adios (literalmente: otra vez + ver)",
        tones: [4, 4],
      },
    ],
    grammar: [
      {
        title: "La particula 吗 (ma) para hacer preguntas",
        explanation:
          "En chino, hacer una pregunta de si/no es facilisimo. Solo tienes que poner 吗 (ma) al final de cualquier frase. Es como si en espanol en vez de cambiar la entonacion, simplemente pusieras una palabra magica al final. Por ejemplo: 'Tu estas bien' + 吗 = 'Estas bien?' Asi de simple. No necesitas cambiar el orden de las palabras ni nada mas.",
        examples: [
          {
            hanzi: "你好吗？",
            pinyin: "Ni hao ma?",
            meaning: "Como estas? (literalmente: tu bien + ma?)",
          },
          {
            hanzi: "你好。",
            pinyin: "Ni hao.",
            meaning: "Hola / Estas bien. (sin 吗, es una afirmacion)",
          },
        ],
      },
      {
        title: "La particula 呢 (ne) para devolver la pregunta",
        explanation:
          "Cuando alguien te pregunta algo y tu quieres preguntar lo mismo de vuelta, en espanol dices 'Y tu?'. En chino es igual de facil: solo dices el pronombre + 呢 (ne). Por ejemplo, si alguien te pregunta como estas, tu respondes y luego dices 你呢？(ni ne?) que significa 'Y tu?'. Es un atajo super practico.",
        examples: [
          {
            hanzi: "你呢？",
            pinyin: "Ni ne?",
            meaning: "Y tu?",
          },
          {
            hanzi: "我很好。你呢？",
            pinyin: "Wo hen hao. Ni ne?",
            meaning: "Estoy muy bien. Y tu?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El saludo chino: mas que un 'hola'",
        content:
          "En la cultura china, 你好 (ni hao) se usa mas con desconocidos o en situaciones formales. Entre amigos cercanos, los chinos a menudo saludan de formas mas casuales, como preguntando '你吃了吗？' (Ni chi le ma? - Has comido?). Esto viene de una epoca en la que tener suficiente comida era una preocupacion real. Aunque hoy ya no es literal, refleja el valor que la cultura china da al bienestar del otro. Si un chino te pregunta si has comido, no es que te quiera invitar a cenar, simplemente te esta diciendo 'me importas'.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'Hola' en chino?",
        options: ["谢谢", "再见", "你好", "我好"],
        correctAnswer: 2,
        explanation:
          "你好 (ni hao) es la forma estandar de decir 'Hola' en chino mandarin.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 你好吗？",
        options: [
          "Hola",
          "Como estas?",
          "Adios",
          "Gracias",
        ],
        correctAnswer: 1,
        explanation:
          "你好吗 es 'tu bien ma?' que se traduce como 'Como estas?'. Recuerda: 吗 convierte cualquier frase en pregunta.",
      },
      {
        type: "fill-blank",
        question: "我很___，谢谢。(Estoy muy bien, gracias.)",
        options: ["好", "吗", "呢", "再"],
        correctAnswer: "好",
        explanation:
          "好 (hao) significa 'bien/bueno'. 我很好 = Yo muy bien = Estoy muy bien.",
      },
      {
        type: "order-words",
        question:
          "Ordena las palabras para decir 'Como estas?': 吗 / 好 / 你",
        options: ["你", "好", "吗"],
        correctAnswer: "你好吗",
        explanation:
          "En chino el orden es: sujeto + adjetivo + particula de pregunta. Es decir: Tu + bien + ma?",
      },
      {
        type: "match",
        question: "Relaciona: 再见 significa...",
        options: ["Hola", "Gracias", "Adios", "Bien"],
        correctAnswer: 2,
        explanation:
          "再见 (zaijian) significa 'adios'. Literalmente se descompone en 再 (otra vez) + 见 (ver) = 'nos vemos otra vez'.",
      },
    ],
  },

  // ========================================================================
  // LECCION 2: PRESENTARSE
  // ========================================================================
  {
    id: 2,
    moduleId: 0,
    title: "Presentarse",
    description:
      "Aprende a decir tu nombre, preguntar el nombre de otros y presentarte de forma basica. Despues de esta leccion podras tener tu primera mini-conversacion real en chino.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好！你叫什么名字？",
        pinyin: "Ni hao! Ni jiao shenme mingzi?",
        meaning: "Hola! Como te llamas?",
      },
      {
        speaker: "B",
        hanzi: "我叫李明。你呢？",
        pinyin: "Wo jiao Li Ming. Ni ne?",
        meaning: "Me llamo Li Ming. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我叫玛丽亚。认识你很高兴！",
        pinyin: "Wo jiao Maliya. Renshi ni hen gaoxing!",
        meaning: "Me llamo Maria. Mucho gusto en conocerte!",
      },
      {
        speaker: "B",
        hanzi: "认识你我也很高兴。你是学生吗？",
        pinyin: "Renshi ni wo ye hen gaoxing. Ni shi xuesheng ma?",
        meaning: "Mucho gusto tambien. Eres estudiante?",
      },
      {
        speaker: "A",
        hanzi: "是的，我是学生。你是老师吗？",
        pinyin: "Shi de, wo shi xuesheng. Ni shi laoshi ma?",
        meaning: "Si, soy estudiante. Eres profesor?",
      },
      {
        speaker: "B",
        hanzi: "不是，我是医生。",
        pinyin: "Bu shi, wo shi yisheng.",
        meaning: "No, soy medico.",
      },
    ],
    vocabulary: [
      {
        hanzi: "叫",
        pinyin: "jiao",
        meaning: "Llamarse",
        tones: [4],
      },
      {
        hanzi: "什么",
        pinyin: "shenme",
        meaning: "Que / cual",
        tones: [2, 0],
      },
      {
        hanzi: "名字",
        pinyin: "mingzi",
        meaning: "Nombre",
        tones: [2, 0],
      },
      {
        hanzi: "是",
        pinyin: "shi",
        meaning: "Ser / estar (para identidad)",
        tones: [4],
      },
      {
        hanzi: "学生",
        pinyin: "xuesheng",
        meaning: "Estudiante",
        tones: [2, 0],
      },
      {
        hanzi: "老师",
        pinyin: "laoshi",
        meaning: "Profesor / maestro",
        tones: [3, 1],
      },
      {
        hanzi: "认识",
        pinyin: "renshi",
        meaning: "Conocer",
        tones: [4, 0],
      },
      {
        hanzi: "高兴",
        pinyin: "gaoxing",
        meaning: "Contento / alegre",
        tones: [1, 4],
      },
    ],
    grammar: [
      {
        title: "我叫... vs 我是... (Dos formas de presentarte)",
        explanation:
          "En chino hay dos formas principales de presentarte, y cada una se usa para algo diferente. '我叫...' (wo jiao) significa 'me llamo...' y se usa para decir tu nombre. '我是...' (wo shi) significa 'yo soy...' y se usa para decir tu profesion, nacionalidad u otra identidad. Piensa en 叫 como 'llamarse' y en 是 como 'ser'. Nunca dirias '我是李明' para presentarte por primera vez (suena raro), usa '我叫李明'. Pero si dices tu profesion, usa 是: '我是学生' (Soy estudiante).",
        examples: [
          {
            hanzi: "我叫玛丽亚。",
            pinyin: "Wo jiao Maliya.",
            meaning: "Me llamo Maria. (para el nombre)",
          },
          {
            hanzi: "我是学生。",
            pinyin: "Wo shi xuesheng.",
            meaning: "Soy estudiante. (para la identidad/profesion)",
          },
          {
            hanzi: "我是老师。",
            pinyin: "Wo shi laoshi.",
            meaning: "Soy profesor.",
          },
        ],
      },
      {
        title: "Negar con 不 (bu): el 'no' del chino",
        explanation:
          "Para decir 'no' en chino, simplemente pones 不 (bu) antes del verbo. Es como el 'no' en espanol pero va pegadito al verbo. Si alguien te pregunta '你是学生吗？' (Eres estudiante?) y no lo eres, dices '不是' (bu shi = no soy). Asi de facil: 不 + verbo = negacion. Un detalle: 不 normalmente se pronuncia con tono 4 (bu), pero cuando le sigue otro tono 4, cambia a tono 2 (bu). Asi que 不是 se pronuncia 'bu shi' con tono 2+4.",
        examples: [
          {
            hanzi: "我不是老师。",
            pinyin: "Wo bu shi laoshi.",
            meaning: "No soy profesor.",
          },
          {
            hanzi: "不是。",
            pinyin: "Bu shi.",
            meaning: "No (no es asi / no soy).",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Los nombres chinos: apellido primero",
        content:
          "En chino, el apellido siempre va primero. Si alguien se llama '李明' (Li Ming), '李' (Li) es su apellido y '明' (Ming) es su nombre de pila. Es al reves que en espanol. Ademas, los nombres chinos suelen tener un significado. Por ejemplo, 明 significa 'brillante'. Los padres eligen los caracteres del nombre con mucho cuidado porque creen que influye en el destino de la persona. Los apellidos chinos mas comunes son 王 (Wang), 李 (Li), 张 (Zhang) y 刘 (Liu). Si quieres un nombre chino, un amigo chino puede ayudarte a elegir caracteres que suenen parecido a tu nombre en espanol y tengan un buen significado.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Me llamo Maria' en chino?",
        options: [
          "我是玛丽亚",
          "我叫玛丽亚",
          "你叫玛丽亚",
          "我好玛丽亚",
        ],
        correctAnswer: 1,
        explanation:
          "我叫... (wo jiao...) es la forma correcta de decir tu nombre. 我是 se usa para profesiones o identidades, no para presentarte con tu nombre.",
      },
      {
        type: "multiple-choice",
        question: "Si alguien te pregunta '你是学生吗？' y NO eres estudiante, como respondes?",
        options: [
          "是的",
          "不好",
          "不是",
          "没有",
        ],
        correctAnswer: 2,
        explanation:
          "不是 (bu shi) significa 'no soy/no es'. Para negar el verbo 是, ponemos 不 antes.",
      },
      {
        type: "fill-blank",
        question: "你___什么名字？(Como te llamas?)",
        options: ["是", "叫", "好", "有"],
        correctAnswer: "叫",
        explanation:
          "叫 (jiao) significa 'llamarse'. 你叫什么名字？= Tu llamarse que nombre? = Como te llamas?",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Soy profesor': 是 / 老师 / 我",
        options: ["我", "是", "老师"],
        correctAnswer: "我是老师",
        explanation:
          "El orden en chino es: Sujeto + Verbo + Complemento. Es decir: Yo + soy + profesor.",
      },
      {
        type: "match",
        question: "Que significa 认识你很高兴？",
        options: [
          "Como te llamas?",
          "Mucho gusto en conocerte",
          "Eres estudiante?",
          "Estoy bien gracias",
        ],
        correctAnswer: 1,
        explanation:
          "认识你很高兴 significa literalmente 'conocer tu muy contento' = Mucho gusto en conocerte.",
      },
    ],
  },

  // ========================================================================
  // LECCION 3: NACIONALIDAD Y PAIS
  // ========================================================================
  {
    id: 3,
    moduleId: 0,
    title: "Nacionalidad y pais",
    description:
      "Aprende a decir de que pais eres, preguntar la nacionalidad de otros y los nombres de paises importantes. Muy util para cuando conozcas hablantes de chino.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你是哪国人？",
        pinyin: "Ni shi na guo ren?",
        meaning: "De que pais eres?",
      },
      {
        speaker: "B",
        hanzi: "我是墨西哥人。你呢？",
        pinyin: "Wo shi Moxige ren. Ni ne?",
        meaning: "Soy mexicano. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我是中国人。你会说中文吗？",
        pinyin: "Wo shi Zhongguo ren. Ni hui shuo Zhongwen ma?",
        meaning: "Soy chino. Sabes hablar chino?",
      },
      {
        speaker: "B",
        hanzi: "我会说一点儿中文。",
        pinyin: "Wo hui shuo yidianr Zhongwen.",
        meaning: "Se hablar un poquito de chino.",
      },
      {
        speaker: "A",
        hanzi: "你的中文很好！",
        pinyin: "Ni de Zhongwen hen hao!",
        meaning: "Tu chino es muy bueno!",
      },
      {
        speaker: "B",
        hanzi: "谢谢！我在学中文。",
        pinyin: "Xiexie! Wo zai xue Zhongwen.",
        meaning: "Gracias! Estoy aprendiendo chino.",
      },
    ],
    vocabulary: [
      {
        hanzi: "哪",
        pinyin: "na",
        meaning: "Cual / que (interrogativo)",
        tones: [3],
      },
      {
        hanzi: "国",
        pinyin: "guo",
        meaning: "Pais",
        tones: [2],
      },
      {
        hanzi: "人",
        pinyin: "ren",
        meaning: "Persona",
        tones: [2],
      },
      {
        hanzi: "中国",
        pinyin: "Zhongguo",
        meaning: "China",
        tones: [1, 2],
      },
      {
        hanzi: "墨西哥",
        pinyin: "Moxige",
        meaning: "Mexico",
        tones: [4, 1, 1],
      },
      {
        hanzi: "西班牙",
        pinyin: "Xibanya",
        meaning: "Espana",
        tones: [1, 1, 2],
      },
      {
        hanzi: "中文",
        pinyin: "Zhongwen",
        meaning: "Idioma chino",
        tones: [1, 2],
      },
      {
        hanzi: "一点儿",
        pinyin: "yidianr",
        meaning: "Un poquito",
        tones: [1, 3, 2],
      },
    ],
    grammar: [
      {
        title: "Pais + 人 = Nacionalidad (tan facil como sumar)",
        explanation:
          "En chino, decir tu nacionalidad es como hacer una suma. Solo tomas el nombre del pais y le agregas 人 (ren = persona) al final. Mexico + persona = mexicano. China + persona = chino. Espana + persona = espanol. Es como si en espanol dijeras 'persona de Mexico'. No necesitas conjugar nada ni aprender terminaciones diferentes para masculino y femenino. Un solo patron para todo: 中国人 (chino/china), 墨西哥人 (mexicano/mexicana), 西班牙人 (espanol/espanola).",
        examples: [
          {
            hanzi: "我是墨西哥人。",
            pinyin: "Wo shi Moxige ren.",
            meaning: "Soy mexicano/mexicana.",
          },
          {
            hanzi: "他是西班牙人。",
            pinyin: "Ta shi Xibanya ren.",
            meaning: "El es espanol.",
          },
          {
            hanzi: "她是中国人。",
            pinyin: "Ta shi Zhongguo ren.",
            meaning: "Ella es china.",
          },
        ],
      },
      {
        title: "会 (hui) para expresar habilidades: 'saber hacer algo'",
        explanation:
          "Cuando quieres decir que sabes hacer algo (una habilidad aprendida), usas 会 (hui) antes del verbo. Es como decir 'se' en espanol: 'Se hablar chino', 'Se cocinar'. La estructura es super simple: sujeto + 会 + verbo. Y para preguntar, ya sabes: solo agrega 吗 al final. Si no sabes hacer algo, pon 不会 (bu hui). Es tu primer verbo auxiliar en chino, y veras que se usa muchisimo.",
        examples: [
          {
            hanzi: "我会说中文。",
            pinyin: "Wo hui shuo Zhongwen.",
            meaning: "Se hablar chino.",
          },
          {
            hanzi: "你会说中文吗？",
            pinyin: "Ni hui shuo Zhongwen ma?",
            meaning: "Sabes hablar chino?",
          },
          {
            hanzi: "我不会说中文。",
            pinyin: "Wo bu hui shuo Zhongwen.",
            meaning: "No se hablar chino.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "中国: el 'Pais del Centro'",
        content:
          "El nombre de China en chino es 中国 (Zhongguo), que literalmente significa 'pais del centro' o 'reino del medio'. Esto refleja la antigua vision que los chinos tenian de su civilizacion: se veian como el centro del mundo, rodeados por pueblos 'barbaros'. No es arrogancia moderna, es historia antigua. Curiosamente, Mexico en chino es 墨西哥 (Moxige), que es simplemente una transcripcion fonetica, al igual que 西班牙 (Xibanya) para Espana. Muchos paises occidentales en chino son solo imitaciones del sonido original. Pero algunos paises tienen nombres con significados bonitos: Estados Unidos es 美国 (Meiguo = pais hermoso) y Francia es 法国 (Faguo = pais de la ley).",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'Soy mexicano' en chino?",
        options: [
          "我叫墨西哥",
          "我是墨西哥人",
          "我是墨西哥",
          "我好墨西哥人",
        ],
        correctAnswer: 1,
        explanation:
          "我是墨西哥人 (Wo shi Moxige ren) = Yo soy Mexico-persona = Soy mexicano. Recuerda: pais + 人 = nacionalidad.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 你是哪国人？",
        options: [
          "Como te llamas?",
          "De donde eres?",
          "De que pais eres?",
          "Donde vives?",
        ],
        correctAnswer: 2,
        explanation:
          "你是哪国人 = Tu eres cual-pais-persona = De que pais eres? Es la forma estandar de preguntar la nacionalidad.",
      },
      {
        type: "fill-blank",
        question: "我___说一点儿中文。(Se hablar un poquito de chino.)",
        options: ["是", "会", "叫", "好"],
        correctAnswer: "会",
        explanation:
          "会 (hui) se usa para habilidades aprendidas. 我会说 = Yo se hablar.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Ella es espanola': 人 / 是 / 她 / 西班牙",
        options: ["她", "是", "西班牙", "人"],
        correctAnswer: "她是西班牙人",
        explanation:
          "Ella + ser + Espana + persona = Ella es espanola.",
      },
      {
        type: "match",
        question: "Que pais es 中国?",
        options: ["Mexico", "Espana", "China", "Estados Unidos"],
        correctAnswer: 2,
        explanation:
          "中国 (Zhongguo) es China. Literalmente significa 'pais del centro'.",
      },
    ],
  },

  // ========================================================================
  // LECCION 4: FAMILIA
  // ========================================================================
  {
    id: 4,
    moduleId: 0,
    title: "La familia",
    description:
      "Aprende los nombres de los miembros de la familia en chino. Descubriras que el chino tiene palabras distintas para 'hermano mayor' y 'hermano menor', algo que el espanol no tiene.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你家有几口人？",
        pinyin: "Ni jia you ji kou ren?",
        meaning: "Cuantas personas hay en tu familia?",
      },
      {
        speaker: "B",
        hanzi: "我家有五口人。",
        pinyin: "Wo jia you wu kou ren.",
        meaning: "En mi familia somos cinco personas.",
      },
      {
        speaker: "A",
        hanzi: "都有谁？",
        pinyin: "Dou you shei?",
        meaning: "Quienes son?",
      },
      {
        speaker: "B",
        hanzi: "爸爸、妈妈、哥哥、妹妹和我。",
        pinyin: "Baba, mama, gege, meimei he wo.",
        meaning: "Papa, mama, mi hermano mayor, mi hermana menor y yo.",
      },
      {
        speaker: "A",
        hanzi: "你哥哥多大？",
        pinyin: "Ni gege duo da?",
        meaning: "Cuantos anos tiene tu hermano mayor?",
      },
      {
        speaker: "B",
        hanzi: "他二十五岁。",
        pinyin: "Ta ershiwu sui.",
        meaning: "Tiene veinticinco anos.",
      },
    ],
    vocabulary: [
      {
        hanzi: "家",
        pinyin: "jia",
        meaning: "Familia / hogar / casa",
        tones: [1],
      },
      {
        hanzi: "爸爸",
        pinyin: "baba",
        meaning: "Papa",
        tones: [4, 0],
      },
      {
        hanzi: "妈妈",
        pinyin: "mama",
        meaning: "Mama",
        tones: [1, 0],
      },
      {
        hanzi: "哥哥",
        pinyin: "gege",
        meaning: "Hermano mayor",
        tones: [1, 0],
      },
      {
        hanzi: "姐姐",
        pinyin: "jiejie",
        meaning: "Hermana mayor",
        tones: [3, 0],
      },
      {
        hanzi: "弟弟",
        pinyin: "didi",
        meaning: "Hermano menor",
        tones: [4, 0],
      },
      {
        hanzi: "妹妹",
        pinyin: "meimei",
        meaning: "Hermana menor",
        tones: [4, 0],
      },
      {
        hanzi: "有",
        pinyin: "you",
        meaning: "Tener / haber",
        tones: [3],
      },
    ],
    grammar: [
      {
        title: "有 (you): el verbo 'tener' y 'haber'",
        explanation:
          "有 (you) es uno de los verbos mas usados en chino. Funciona igual que 'tener' en espanol: 我有 (wo you) = yo tengo. Pero tambien funciona como 'hay': un lugar + 有 = hay algo ahi. Para negarlo, OJO: no se usa 不 (bu) sino 没 (mei). Asi que 'no tengo' es 没有 (mei you), nunca '不有'. Esta es una excepcion importante que debes recordar.",
        examples: [
          {
            hanzi: "我有哥哥。",
            pinyin: "Wo you gege.",
            meaning: "Tengo un hermano mayor.",
          },
          {
            hanzi: "我没有姐姐。",
            pinyin: "Wo mei you jiejie.",
            meaning: "No tengo hermana mayor.",
          },
          {
            hanzi: "你有弟弟吗？",
            pinyin: "Ni you didi ma?",
            meaning: "Tienes hermano menor?",
          },
        ],
      },
      {
        title: "几 (ji) para preguntar 'cuantos' (numeros pequenos)",
        explanation:
          "Cuando esperas una respuesta con un numero pequeno (generalmente menos de 10), usas 几 (ji) para preguntar 'cuantos'. Es muy comun para preguntar sobre miembros de la familia, la hora o cosas que normalmente son pocas. Nota que se usa con un 'clasificador' o 'palabra de medida' despues (como 口 para personas de familia, 个 para cosas generales). No te preocupes mucho por los clasificadores ahora, los iras aprendiendo poco a poco.",
        examples: [
          {
            hanzi: "你家有几口人？",
            pinyin: "Ni jia you ji kou ren?",
            meaning: "Cuantas personas hay en tu familia?",
          },
          {
            hanzi: "你有几个哥哥？",
            pinyin: "Ni you ji ge gege?",
            meaning: "Cuantos hermanos mayores tienes?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "La familia china: un sistema complejo de parentesco",
        content:
          "A diferencia del espanol, el chino tiene palabras diferentes para cada relacion familiar dependiendo de si la persona es mayor o menor que tu, y de si es del lado paterno o materno. Por ejemplo, 'abuelo paterno' es 爷爷 (yeye) pero 'abuelo materno' es 外公 (waigong). 'Tio' del lado de papa puede ser 伯伯 (bobo, si es mayor que papa) o 叔叔 (shushu, si es menor). Esto refleja la importancia historica de la jerarquia y el respeto a los mayores en la cultura china. La politica del hijo unico (1979-2015) hizo que muchos chinos jovenes no tengan hermanos, por eso la pregunta '你有兄弟姐妹吗？' (Tienes hermanos?) es muy comun y puede generar conversaciones interesantes.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'hermano mayor' en chino?",
        options: ["弟弟", "哥哥", "姐姐", "妹妹"],
        correctAnswer: 1,
        explanation:
          "哥哥 (gege) es hermano mayor. 弟弟 (didi) es hermano menor. En chino siempre se distingue si es mayor o menor que tu.",
      },
      {
        type: "multiple-choice",
        question: "Como se niega el verbo 有 (tener)?",
        options: ["不有", "没有", "不是有", "不好有"],
        correctAnswer: 1,
        explanation:
          "有 es especial: se niega con 没 (mei), no con 不 (bu). Nunca se dice 不有. Siempre 没有 (mei you).",
      },
      {
        type: "fill-blank",
        question: "我家___五口人。(En mi familia somos cinco.)",
        options: ["是", "有", "叫", "好"],
        correctAnswer: "有",
        explanation:
          "有 (you) aqui funciona como 'hay'. Mi familia tiene (hay) cinco personas.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Tengo una hermana menor': 妹妹 / 有 / 我",
        options: ["我", "有", "妹妹"],
        correctAnswer: "我有妹妹",
        explanation:
          "Sujeto + verbo + objeto: Yo + tener + hermana menor.",
      },
      {
        type: "match",
        question: "Que significa 妈妈?",
        options: ["Papa", "Mama", "Hermana mayor", "Hermano menor"],
        correctAnswer: 1,
        explanation:
          "妈妈 (mama) significa mama. Se pronuncia muy parecido al espanol.",
      },
    ],
  },

  // ========================================================================
  // LECCION 5: NUMEROS Y EDAD
  // ========================================================================
  {
    id: 5,
    moduleId: 0,
    title: "Numeros y edad",
    description:
      "Aprende los numeros del 1 al 99 y como preguntar y decir tu edad. Los numeros chinos son muy logicos: una vez que sepas del 1 al 10, puedes contar hasta 99 sin problema.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你多大？",
        pinyin: "Ni duo da?",
        meaning: "Cuantos anos tienes?",
      },
      {
        speaker: "B",
        hanzi: "我二十三岁。你呢？",
        pinyin: "Wo ershi san sui. Ni ne?",
        meaning: "Tengo veintitres anos. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我二十五岁。你的电话号码是多少？",
        pinyin: "Wo ershiwu sui. Ni de dianhua haoma shi duoshao?",
        meaning: "Tengo veinticinco anos. Cual es tu numero de telefono?",
      },
      {
        speaker: "B",
        hanzi: "我的电话号码是 138-5567-9012。",
        pinyin: "Wo de dianhua haoma shi yao san ba, wu wu liu qi, jiu ling yao er.",
        meaning: "Mi numero de telefono es 138-5567-9012.",
      },
      {
        speaker: "A",
        hanzi: "好的，谢谢！",
        pinyin: "Hao de, xiexie!",
        meaning: "De acuerdo, gracias!",
      },
    ],
    vocabulary: [
      {
        hanzi: "一",
        pinyin: "yi",
        meaning: "Uno (1)",
        tones: [1],
      },
      {
        hanzi: "二",
        pinyin: "er",
        meaning: "Dos (2)",
        tones: [4],
      },
      {
        hanzi: "三",
        pinyin: "san",
        meaning: "Tres (3)",
        tones: [1],
      },
      {
        hanzi: "十",
        pinyin: "shi",
        meaning: "Diez (10)",
        tones: [2],
      },
      {
        hanzi: "岁",
        pinyin: "sui",
        meaning: "Anos de edad",
        tones: [4],
      },
      {
        hanzi: "多大",
        pinyin: "duo da",
        meaning: "Cuantos anos / que tan grande",
        tones: [1, 4],
      },
      {
        hanzi: "多少",
        pinyin: "duoshao",
        meaning: "Cuanto / cuantos (para numeros grandes)",
        tones: [1, 3],
      },
      {
        hanzi: "电话",
        pinyin: "dianhua",
        meaning: "Telefono",
        tones: [4, 4],
      },
    ],
    grammar: [
      {
        title: "El sistema numerico chino: logica pura",
        explanation:
          "Los numeros chinos son increiblemente logicos, mucho mas que en espanol. Aprende del 1 al 10 y ya puedes decir cualquier numero hasta 99. Como? Mira: 11 es literalmente 'diez-uno' (十一), 12 es 'diez-dos' (十二), 20 es 'dos-diez' (二十), 21 es 'dos-diez-uno' (二十一). Es como si en espanol dijeras 'dos-dieces-y-uno' para 21. Piensa en ello como una formula matematica: para cualquier numero, solo describes la operacion. 35 = tres dieces + cinco = 三十五. Es genial, no?",
        examples: [
          {
            hanzi: "十一",
            pinyin: "shiyi",
            meaning: "Once (diez + uno)",
          },
          {
            hanzi: "二十",
            pinyin: "ershi",
            meaning: "Veinte (dos + diez)",
          },
          {
            hanzi: "三十五",
            pinyin: "sanshiwu",
            meaning: "Treinta y cinco (tres + diez + cinco)",
          },
        ],
      },
      {
        title: "Preguntar la edad: 你多大？",
        explanation:
          "Para preguntar 'Cuantos anos tienes?' dices 你多大？(Ni duo da?) que literalmente significa 'Tu, que tan grande?'. Es informal y se usa entre personas de edad similar. Para responder, dices tu numero + 岁 (sui), que es la palabra para 'anos de edad'. Nota que 岁 solo se usa para la edad, no para contar anos en general. Es como decir 'Tengo 23 primaveras' pero en version china: 我二十三岁 (Wo ershisan sui).",
        examples: [
          {
            hanzi: "你多大？",
            pinyin: "Ni duo da?",
            meaning: "Cuantos anos tienes?",
          },
          {
            hanzi: "我二十三岁。",
            pinyin: "Wo ershisan sui.",
            meaning: "Tengo 23 anos.",
          },
          {
            hanzi: "她十八岁。",
            pinyin: "Ta shiba sui.",
            meaning: "Ella tiene 18 anos.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Los numeros de la suerte y la mala suerte",
        content:
          "En China, los numeros tienen significados simbolicos muy importantes. El 8 (八, ba) es el numero mas afortunado porque suena parecido a 发 (fa) que significa 'prosperar/hacerse rico'. Por eso los chinos adoran el 8: los Juegos Olimpicos de Beijing empezaron el 08/08/2008 a las 8:08 PM. El 6 (六, liu) tambien es bueno porque suena como 'fluir' (todo fluye bien). Pero el 4 (四, si) es terrible porque suena igual que 死 (si = morir). Muchos edificios en China no tienen piso 4, igual que algunos edificios occidentales saltan el piso 13. Si le das un regalo de dinero a alguien chino, evita cantidades con 4 y prefiere las que tengan 8.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice el numero 25 en chino?",
        options: ["十二五", "二十五", "五二十", "二五十"],
        correctAnswer: 1,
        explanation:
          "25 = dos + diez + cinco = 二十五 (ershiwu). Piensa: 2x10 + 5.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 你多大？",
        options: [
          "Eres grande?",
          "Cuantos anos tienes?",
          "Cuantos son?",
          "Que numero es?",
        ],
        correctAnswer: 1,
        explanation:
          "你多大 (ni duo da) es la forma informal de preguntar la edad: 'Tu que-tan grande?'.",
      },
      {
        type: "fill-blank",
        question: "我二十三___。(Tengo 23 anos.)",
        options: ["年", "岁", "大", "多"],
        correctAnswer: "岁",
        explanation:
          "岁 (sui) es la palabra especifica para 'anos de edad'. Se pone despues del numero.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Ella tiene 18 anos': 岁 / 十八 / 她",
        options: ["她", "十八", "岁"],
        correctAnswer: "她十八岁",
        explanation:
          "Sujeto + numero + 岁: Ella + dieciocho + anos-de-edad.",
      },
      {
        type: "multiple-choice",
        question: "Como se dice 42 en chino?",
        options: ["十四二", "四二十", "四十二", "二四十"],
        correctAnswer: 2,
        explanation:
          "42 = cuatro + diez + dos = 四十二 (sishi'er). La formula: decenas + 十 + unidades.",
      },
    ],
  },

  // ========================================================================
  // LECCION 6: FECHAS Y DIAS
  // ========================================================================
  {
    id: 6,
    moduleId: 0,
    title: "Fechas y dias de la semana",
    description:
      "Aprende a decir los dias de la semana, las fechas y palabras como 'hoy', 'manana' y 'ayer'. Los dias de la semana en chino son simplemente numeros, asi que con lo que ya sabes es pan comido.",
    dialog: [
      {
        speaker: "A",
        hanzi: "今天星期几？",
        pinyin: "Jintian xingqi ji?",
        meaning: "Que dia de la semana es hoy?",
      },
      {
        speaker: "B",
        hanzi: "今天星期三。",
        pinyin: "Jintian xingqi san.",
        meaning: "Hoy es miercoles.",
      },
      {
        speaker: "A",
        hanzi: "明天你有空吗？",
        pinyin: "Mingtian ni you kong ma?",
        meaning: "Manana estas libre?",
      },
      {
        speaker: "B",
        hanzi: "明天星期四，我没有空。星期六可以吗？",
        pinyin: "Mingtian xingqi si, wo mei you kong. Xingqi liu keyi ma?",
        meaning: "Manana es jueves, no estoy libre. El sabado se puede?",
      },
      {
        speaker: "A",
        hanzi: "好的，星期六见！",
        pinyin: "Hao de, xingqi liu jian!",
        meaning: "De acuerdo, nos vemos el sabado!",
      },
      {
        speaker: "B",
        hanzi: "好的，星期六见！",
        pinyin: "Hao de, xingqi liu jian!",
        meaning: "De acuerdo, nos vemos el sabado!",
      },
    ],
    vocabulary: [
      {
        hanzi: "今天",
        pinyin: "jintian",
        meaning: "Hoy",
        tones: [1, 1],
      },
      {
        hanzi: "明天",
        pinyin: "mingtian",
        meaning: "Manana",
        tones: [2, 1],
      },
      {
        hanzi: "昨天",
        pinyin: "zuotian",
        meaning: "Ayer",
        tones: [2, 1],
      },
      {
        hanzi: "星期",
        pinyin: "xingqi",
        meaning: "Semana / dia de la semana",
        tones: [1, 1],
      },
      {
        hanzi: "月",
        pinyin: "yue",
        meaning: "Mes / luna",
        tones: [4],
      },
      {
        hanzi: "号",
        pinyin: "hao",
        meaning: "Dia del mes (en lenguaje hablado)",
        tones: [4],
      },
      {
        hanzi: "年",
        pinyin: "nian",
        meaning: "Ano",
        tones: [2],
      },
      {
        hanzi: "有空",
        pinyin: "you kong",
        meaning: "Estar libre / tener tiempo",
        tones: [3, 4],
      },
    ],
    grammar: [
      {
        title: "Dias de la semana: star期 + numero (no podria ser mas facil)",
        explanation:
          "Los dias de la semana en chino son simplemente 星期 (xingqi = semana) + un numero del 1 al 6. Lunes es 'semana-uno' (星期一), martes es 'semana-dos' (星期二), y asi hasta sabado que es 'semana-seis' (星期六). El unico diferente es domingo: 星期天 (xingqitian) o 星期日 (xingqiri), donde 天 significa 'dia/cielo' y 日 significa 'sol/dia'. Nada de memorizar nombres raros como en espanol. Si sabes los numeros, ya sabes los dias.",
        examples: [
          {
            hanzi: "星期一",
            pinyin: "xingqi yi",
            meaning: "Lunes (semana + uno)",
          },
          {
            hanzi: "星期五",
            pinyin: "xingqi wu",
            meaning: "Viernes (semana + cinco)",
          },
          {
            hanzi: "星期天",
            pinyin: "xingqitian",
            meaning: "Domingo (semana + dia/cielo)",
          },
        ],
      },
      {
        title: "El orden de las fechas en chino: de grande a pequeno",
        explanation:
          "En chino, las fechas van de lo mas grande a lo mas pequeno: primero el ano, luego el mes, despues el dia. Es lo opuesto al espanol. Por ejemplo, el 15 de marzo de 2024 seria: 2024年3月15号. Piensalo asi: chino va de lo general a lo especifico (ano > mes > dia), mientras que el espanol va de lo especifico a lo general (dia > mes > ano). Los meses tambien son facilisimos: enero es 'mes-uno' (一月), febrero es 'mes-dos' (二月), etc. Igual que los dias de la semana, solo numero + 月.",
        examples: [
          {
            hanzi: "三月十五号",
            pinyin: "san yue shiwu hao",
            meaning: "15 de marzo",
          },
          {
            hanzi: "一月",
            pinyin: "yi yue",
            meaning: "Enero (mes uno)",
          },
          {
            hanzi: "十二月",
            pinyin: "shi'er yue",
            meaning: "Diciembre (mes doce)",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El calendario chino y el Ano Nuevo Chino",
        content:
          "China usa el calendario gregoriano para la vida diaria, pero el calendario lunar tradicional sigue siendo muy importante para las festividades. La mas grande es el Ano Nuevo Chino (春节, Chunjie), que cae entre enero y febrero. Cada ano se asocia con uno de los 12 animales del zodiaco chino: rata, buey, tigre, conejo, dragon, serpiente, caballo, cabra, mono, gallo, perro y cerdo. Es la migracion humana mas grande del mundo: millones de chinos viajan a sus pueblos natales para celebrar en familia. Se comen dumplings (饺子), se dan sobres rojos con dinero (红包) y hay fuegos artificiales por todas partes. Si un chino te pregunta tu ano de nacimiento, probablemente quiere saber tu signo del zodiaco chino.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'miercoles' en chino?",
        options: ["星期一", "星期三", "星期五", "星期天"],
        correctAnswer: 1,
        explanation:
          "Miercoles = semana + tres = 星期三 (xingqi san). Lunes=1, martes=2, miercoles=3, etc.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 昨天?",
        options: ["Hoy", "Manana", "Ayer", "Semana"],
        correctAnswer: 2,
        explanation:
          "昨天 (zuotian) = ayer. 今天 (jintian) = hoy. 明天 (mingtian) = manana.",
      },
      {
        type: "fill-blank",
        question: "今天___几？(Que dia de la semana es hoy?)",
        options: ["月", "号", "星期", "年"],
        correctAnswer: "星期",
        explanation:
          "星期几 = semana + cual-numero = que dia de la semana.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Manana estas libre?': 吗 / 你 / 明天 / 有空",
        options: ["明天", "你", "有空", "吗"],
        correctAnswer: "明天你有空吗",
        explanation:
          "Tiempo + sujeto + verbo + 吗: Manana + tu + estar libre + ma?",
      },
      {
        type: "multiple-choice",
        question: "Como se dice 'marzo' en chino?",
        options: ["三星期", "三天", "三月", "三年"],
        correctAnswer: 2,
        explanation:
          "Los meses son numero + 月: marzo = tres + mes = 三月 (san yue).",
      },
    ],
  },

  // ========================================================================
  // LECCION 7: LA HORA
  // ========================================================================
  {
    id: 7,
    moduleId: 0,
    title: "La hora",
    description:
      "Aprende a preguntar y decir la hora en chino, y las partes del dia (manana, tarde, noche). Muy practico para quedar con alguien o entender horarios.",
    dialog: [
      {
        speaker: "A",
        hanzi: "现在几点？",
        pinyin: "Xianzai ji dian?",
        meaning: "Que hora es?",
      },
      {
        speaker: "B",
        hanzi: "现在上午十点半。",
        pinyin: "Xianzai shangwu shi dian ban.",
        meaning: "Ahora son las 10:30 de la manana.",
      },
      {
        speaker: "A",
        hanzi: "你几点上班？",
        pinyin: "Ni ji dian shangban?",
        meaning: "A que hora entras a trabajar?",
      },
      {
        speaker: "B",
        hanzi: "我上午九点上班，下午五点下班。",
        pinyin: "Wo shangwu jiu dian shangban, xiawu wu dian xiaban.",
        meaning: "Entro a las 9 de la manana y salgo a las 5 de la tarde.",
      },
      {
        speaker: "A",
        hanzi: "我们下午两点见面，好吗？",
        pinyin: "Women xiawu liang dian jianmian, hao ma?",
        meaning: "Nos vemos a las 2 de la tarde, te parece?",
      },
      {
        speaker: "B",
        hanzi: "好的，下午两点见！",
        pinyin: "Hao de, xiawu liang dian jian!",
        meaning: "De acuerdo, nos vemos a las 2 de la tarde!",
      },
    ],
    vocabulary: [
      {
        hanzi: "现在",
        pinyin: "xianzai",
        meaning: "Ahora / actualmente",
        tones: [4, 4],
      },
      {
        hanzi: "点",
        pinyin: "dian",
        meaning: "Hora (en punto) / punto",
        tones: [3],
      },
      {
        hanzi: "半",
        pinyin: "ban",
        meaning: "Media (hora) / mitad",
        tones: [4],
      },
      {
        hanzi: "上午",
        pinyin: "shangwu",
        meaning: "Manana (AM, antes del mediodia)",
        tones: [4, 3],
      },
      {
        hanzi: "下午",
        pinyin: "xiawu",
        meaning: "Tarde (PM, despues del mediodia)",
        tones: [4, 3],
      },
      {
        hanzi: "晚上",
        pinyin: "wanshang",
        meaning: "Noche",
        tones: [3, 4],
      },
      {
        hanzi: "上班",
        pinyin: "shangban",
        meaning: "Ir a trabajar / entrar al trabajo",
        tones: [4, 1],
      },
      {
        hanzi: "分",
        pinyin: "fen",
        meaning: "Minuto",
        tones: [1],
      },
    ],
    grammar: [
      {
        title: "Decir la hora: numero + 点 (dian)",
        explanation:
          "Decir la hora en chino es muy directo. La estructura basica es: numero + 点 (dian = hora en punto). Para las 3, dices 三点 (san dian). Para decir 'y media', agregas 半 (ban) al final: 三点半 (san dian ban = 3:30). Para los minutos, agregas el numero + 分 (fen): 三点十五分 (san dian shiwu fen = 3:15). OJO importante: para las 2 en punto se dice 两点 (liang dian) con 两 en vez de 二. Esto es porque 两 (liang) se usa para contar cosas y 二 (er) es mas para matematicas.",
        examples: [
          {
            hanzi: "三点",
            pinyin: "san dian",
            meaning: "Las 3 en punto",
          },
          {
            hanzi: "三点半",
            pinyin: "san dian ban",
            meaning: "Las 3:30 (tres y media)",
          },
          {
            hanzi: "三点十五分",
            pinyin: "san dian shiwu fen",
            meaning: "Las 3:15 (tres y quince)",
          },
        ],
      },
      {
        title: "El tiempo va antes del verbo (regla de oro)",
        explanation:
          "En chino, las expresiones de tiempo siempre van ANTES del verbo, generalmente despues del sujeto. Esto es diferente al espanol, donde puedes poner el tiempo al final. En chino no puedes decir 'Yo trabajo a las nueve', tienes que decir 'Yo a-las-nueve trabajo'. La estructura es: Sujeto + Tiempo + Verbo. Esta regla es importantisima y aplica para todas las expresiones de tiempo: horas, dias, fechas, 'manana', 'ayer', etc. Si recuerdas esta regla, evitaras muchos errores.",
        examples: [
          {
            hanzi: "我九点上班。",
            pinyin: "Wo jiu dian shangban.",
            meaning: "Yo a-las-9 trabajo. (Entro a trabajar a las 9.)",
          },
          {
            hanzi: "他明天来。",
            pinyin: "Ta mingtian lai.",
            meaning: "El manana viene. (El viene manana.)",
          },
          {
            hanzi: "我们下午见面。",
            pinyin: "Women xiawu jianmian.",
            meaning: "Nosotros en-la-tarde nos-vemos. (Nos vemos en la tarde.)",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El concepto chino del tiempo y la puntualidad",
        content:
          "En China, la puntualidad es muy valorada, especialmente en contextos de negocios. Llegar tarde se considera una falta de respeto. De hecho, es comun que los chinos lleguen 5-10 minutos antes a una cita de negocios. Sin embargo, en contextos sociales informales, hay un poco mas de flexibilidad. Un dato curioso: toda China usa un solo huso horario (UTC+8, la hora de Beijing), a pesar de que geograficamente deberia tener cinco. Esto significa que en el extremo oeste de China (como Xinjiang), el sol puede salir a las 10 de la manana hora oficial. Los locales a menudo usan un horario no oficial dos horas atras. Ademas, los chinos suelen dividir el dia en mas partes que nosotros: 早上 (temprano en la manana), 上午 (manana), 中午 (mediodia), 下午 (tarde), 傍晚 (atardecer) y 晚上 (noche).",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'las 3:30' en chino?",
        options: ["三十点", "三点三十", "三点半", "半三点"],
        correctAnswer: 2,
        explanation:
          "3:30 = tres + punto/hora + media = 三点半 (san dian ban). 半 (ban) significa 'media/mitad'.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 下午?",
        options: [
          "Manana (AM)",
          "Tarde (PM)",
          "Noche",
          "Mediodia",
        ],
        correctAnswer: 1,
        explanation:
          "下午 (xiawu) = tarde/PM. 上午 (shangwu) = manana/AM. 晚上 (wanshang) = noche.",
      },
      {
        type: "fill-blank",
        question: "现在几___？(Que hora es?)",
        options: ["时", "点", "分", "半"],
        correctAnswer: "点",
        explanation:
          "几点 (ji dian) = que hora. 点 es la palabra para 'en punto/hora' cuando dices la hora.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Yo a las 9 entro a trabajar': 上班 / 九点 / 我",
        options: ["我", "九点", "上班"],
        correctAnswer: "我九点上班",
        explanation:
          "Sujeto + tiempo + verbo: Yo + nueve-punto + trabajar. Recuerda: en chino el tiempo va antes del verbo.",
      },
      {
        type: "multiple-choice",
        question: "Para decir 'las 2 en punto', cual es correcto?",
        options: ["二点", "两点", "贰点", "俩点"],
        correctAnswer: 1,
        explanation:
          "Para las 2 en punto se usa 两点 (liang dian), no 二点. Cuando cuentas cosas o dices horas, se usa 两 en vez de 二.",
      },
    ],
  },

  // ========================================================================
  // LECCION 8: EL CLIMA
  // ========================================================================
  {
    id: 8,
    moduleId: 0,
    title: "El clima",
    description:
      "Aprende a hablar sobre el clima: si hace calor, frio, si llueve o si hace buen tiempo. Es uno de los temas de conversacion mas universales.",
    dialog: [
      {
        speaker: "A",
        hanzi: "今天天气怎么样？",
        pinyin: "Jintian tianqi zenmeyang?",
        meaning: "Como esta el clima hoy?",
      },
      {
        speaker: "B",
        hanzi: "今天很热！三十五度。",
        pinyin: "Jintian hen re! Sanshiwu du.",
        meaning: "Hoy hace mucho calor! 35 grados.",
      },
      {
        speaker: "A",
        hanzi: "是啊，太热了。明天会下雨吗？",
        pinyin: "Shi a, tai re le. Mingtian hui xia yu ma?",
        meaning: "Si, hace demasiado calor. Manana llovera?",
      },
      {
        speaker: "B",
        hanzi: "会的，明天下雨，会凉快一点。",
        pinyin: "Hui de, mingtian xia yu, hui liangkuai yidian.",
        meaning: "Si, manana llueve, estara un poco mas fresco.",
      },
      {
        speaker: "A",
        hanzi: "太好了！我不喜欢热天。",
        pinyin: "Tai hao le! Wo bu xihuan re tian.",
        meaning: "Que bien! No me gustan los dias calurosos.",
      },
      {
        speaker: "B",
        hanzi: "我也是，我喜欢冷天。",
        pinyin: "Wo ye shi, wo xihuan leng tian.",
        meaning: "Yo tambien, me gustan los dias frios.",
      },
    ],
    vocabulary: [
      {
        hanzi: "天气",
        pinyin: "tianqi",
        meaning: "Clima / tiempo (meteorologico)",
        tones: [1, 4],
      },
      {
        hanzi: "热",
        pinyin: "re",
        meaning: "Caliente / calor",
        tones: [4],
      },
      {
        hanzi: "冷",
        pinyin: "leng",
        meaning: "Frio",
        tones: [3],
      },
      {
        hanzi: "下雨",
        pinyin: "xia yu",
        meaning: "Llover (literalmente: caer lluvia)",
        tones: [4, 3],
      },
      {
        hanzi: "太",
        pinyin: "tai",
        meaning: "Demasiado",
        tones: [4],
      },
      {
        hanzi: "喜欢",
        pinyin: "xihuan",
        meaning: "Gustar",
        tones: [3, 1],
      },
      {
        hanzi: "度",
        pinyin: "du",
        meaning: "Grado (temperatura)",
        tones: [4],
      },
      {
        hanzi: "怎么样",
        pinyin: "zenmeyang",
        meaning: "Como / que tal",
        tones: [3, 0, 4],
      },
    ],
    grammar: [
      {
        title: "太...了 (tai...le): el 'demasiado' del chino",
        explanation:
          "Cuando algo es excesivo (demasiado caliente, demasiado caro, demasiado grande), usas la estructura 太 + adjetivo + 了. Es como poner un 'sandwich' alrededor del adjetivo: 太 por delante y 了 por detras. Curiosamente, esta estructura tambien se usa para cosas positivas como exclamacion: 太好了 (tai hao le) no es 'demasiado bien' sino 'genial! / fantastico!'. El contexto te dira si es queja o elogio. Piensa en 太...了 como nuestro 'que + adjetivo!' en espanol.",
        examples: [
          {
            hanzi: "太热了！",
            pinyin: "Tai re le!",
            meaning: "Hace demasiado calor! / Que calor!",
          },
          {
            hanzi: "太好了！",
            pinyin: "Tai hao le!",
            meaning: "Genial! / Fantastico!",
          },
          {
            hanzi: "太冷了！",
            pinyin: "Tai leng le!",
            meaning: "Hace demasiado frio! / Que frio!",
          },
        ],
      },
      {
        title: "喜欢 (xihuan) y 不喜欢: decir lo que te gusta y no te gusta",
        explanation:
          "喜欢 (xihuan) significa 'gustar' pero funciona diferente al espanol. En espanol decimos 'me gusta el cafe' (el cafe es el sujeto). En chino, TU eres el sujeto: 我喜欢咖啡 (wo xihuan kafei) = 'yo gusto cafe'. Es mas como el ingles 'I like coffee'. Para decir que no te gusta algo, simplemente pon 不 antes: 我不喜欢 (wo bu xihuan) = no me gusta. Es mucho mas simple que la gramatica espanola del 'gustar'.",
        examples: [
          {
            hanzi: "我喜欢冷天。",
            pinyin: "Wo xihuan leng tian.",
            meaning: "Me gustan los dias frios.",
          },
          {
            hanzi: "我不喜欢热天。",
            pinyin: "Wo bu xihuan re tian.",
            meaning: "No me gustan los dias calurosos.",
          },
          {
            hanzi: "你喜欢下雨吗？",
            pinyin: "Ni xihuan xia yu ma?",
            meaning: "Te gusta la lluvia?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El clima en China: un pais de extremos",
        content:
          "China es un pais enorme con climas muy diversos. Beijing tiene inviernos gelidos (-10 grados C) y veranos sofocantes (+40 grados C). Shanghai tiene un clima subtropical humedo. Guangzhou en el sur es tropical. Y Tibet tiene clima de alta montana. Un dato cultural interesante: los chinos creen mucho en el efecto del clima sobre la salud. Beber agua caliente (热水, reshui) es una practica universal en China, incluso en verano. Si un chino te ofrece agua caliente cuando tienes fiebre o dolor de estomago, viene de la medicina tradicional china que enfatiza el equilibrio entre el 'calor' y el 'frio' en el cuerpo. La frase '多喝热水' (duo he reshui = bebe mas agua caliente) es tan comun que se ha convertido en un meme en internet chino.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se pregunta 'Como esta el clima hoy?'",
        options: [
          "今天天气好吗",
          "今天天气怎么样",
          "今天很热吗",
          "今天你好吗",
        ],
        correctAnswer: 1,
        explanation:
          "今天天气怎么样？(Jintian tianqi zenmeyang?) = Hoy clima como? = Como esta el clima hoy?",
      },
      {
        type: "multiple-choice",
        question: "Que significa 太冷了?",
        options: [
          "Hace un poco de frio",
          "No hace frio",
          "Hace demasiado frio",
          "Hara frio",
        ],
        correctAnswer: 2,
        explanation:
          "太...了 expresa exceso o exclamacion. 太冷了 = demasiado frio / que frio!",
      },
      {
        type: "fill-blank",
        question: "明天会___雨。(Manana llovera.)",
        options: ["上", "下", "有", "在"],
        correctAnswer: "下",
        explanation:
          "下雨 (xia yu) = llover. 下 significa 'caer/bajar', asi que literalmente es 'cae lluvia'.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'No me gustan los dias calurosos': 不 / 热天 / 喜欢 / 我",
        options: ["我", "不", "喜欢", "热天"],
        correctAnswer: "我不喜欢热天",
        explanation:
          "Sujeto + 不 + verbo + objeto: Yo + no + gustar + dias calurosos.",
      },
      {
        type: "match",
        question: "Que significa 天气?",
        options: ["Dia", "Cielo", "Clima", "Temperatura"],
        correctAnswer: 2,
        explanation:
          "天气 (tianqi) significa 'clima/tiempo meteorologico'. 天 = cielo/dia, 气 = aire/energia.",
      },
    ],
  },

  // ========================================================================
  // LECCION 9: COLORES
  // ========================================================================
  {
    id: 9,
    moduleId: 0,
    title: "Los colores",
    description:
      "Aprende los colores basicos en chino y como usarlos para describir cosas. Los colores en China tienen significados culturales muy interesantes.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你喜欢什么颜色？",
        pinyin: "Ni xihuan shenme yanse?",
        meaning: "Que color te gusta?",
      },
      {
        speaker: "B",
        hanzi: "我喜欢蓝色。你呢？",
        pinyin: "Wo xihuan lanse. Ni ne?",
        meaning: "Me gusta el azul. Y a ti?",
      },
      {
        speaker: "A",
        hanzi: "我喜欢红色。那件黑色的衣服很好看。",
        pinyin: "Wo xihuan hongse. Na jian heise de yifu hen haokan.",
        meaning: "Me gusta el rojo. Esa ropa negra es muy bonita.",
      },
      {
        speaker: "B",
        hanzi: "谢谢！你的白色鞋子也很好看。",
        pinyin: "Xiexie! Ni de baise xiezi ye hen haokan.",
        meaning: "Gracias! Tus zapatos blancos tambien son muy bonitos.",
      },
      {
        speaker: "A",
        hanzi: "我想买一件绿色的衣服。",
        pinyin: "Wo xiang mai yi jian luse de yifu.",
        meaning: "Quiero comprar una prenda de ropa verde.",
      },
      {
        speaker: "B",
        hanzi: "绿色很好看！我们去看看吧。",
        pinyin: "Luse hen haokan! Women qu kankan ba.",
        meaning: "El verde es muy bonito! Vamos a echar un vistazo.",
      },
    ],
    vocabulary: [
      {
        hanzi: "颜色",
        pinyin: "yanse",
        meaning: "Color",
        tones: [2, 4],
      },
      {
        hanzi: "红色",
        pinyin: "hongse",
        meaning: "Rojo",
        tones: [2, 4],
      },
      {
        hanzi: "蓝色",
        pinyin: "lanse",
        meaning: "Azul",
        tones: [2, 4],
      },
      {
        hanzi: "绿色",
        pinyin: "luse",
        meaning: "Verde",
        tones: [4, 4],
      },
      {
        hanzi: "黄色",
        pinyin: "huangse",
        meaning: "Amarillo",
        tones: [2, 4],
      },
      {
        hanzi: "白色",
        pinyin: "baise",
        meaning: "Blanco",
        tones: [2, 4],
      },
      {
        hanzi: "黑色",
        pinyin: "heise",
        meaning: "Negro",
        tones: [1, 4],
      },
      {
        hanzi: "好看",
        pinyin: "haokan",
        meaning: "Bonito / de buen aspecto",
        tones: [3, 4],
      },
    ],
    grammar: [
      {
        title: "Color + 的 (de) + sustantivo: describir cosas con colores",
        explanation:
          "Para decir algo como 'el coche rojo' o 'la camisa azul', en chino pones el color ANTES del sustantivo y los conectas con 的 (de). Es como la 'de' posesiva pero para descripciones. La estructura es: color + 的 + cosa. Por ejemplo: 红色的车 (hongse de che = rojo de coche = coche rojo). En espanol el adjetivo suele ir despues ('coche rojo'), pero en chino siempre va antes. Piensalo como: 'roja de camisa' en vez de 'camisa roja'. Cuando el contexto es claro, a veces se puede omitir 的, pero por ahora siempre usalo.",
        examples: [
          {
            hanzi: "红色的车",
            pinyin: "hongse de che",
            meaning: "Coche rojo",
          },
          {
            hanzi: "蓝色的天空",
            pinyin: "lanse de tiankong",
            meaning: "Cielo azul",
          },
          {
            hanzi: "白色的鞋子",
            pinyin: "baise de xiezi",
            meaning: "Zapatos blancos",
          },
        ],
      },
      {
        title: "想 (xiang): querer / desear hacer algo",
        explanation:
          "想 (xiang) se pone antes de un verbo para decir 'quiero hacer algo'. Es como 'quiero' + verbo en espanol. 我想吃 = quiero comer. 我想买 = quiero comprar. 我想去 = quiero ir. Es un verbo auxiliar muy util que usaras todo el tiempo. Para negarlo: 我不想 (wo bu xiang) = no quiero. Para preguntar: 你想...吗？(Ni xiang...ma?) = Quieres...?",
        examples: [
          {
            hanzi: "我想买一件衣服。",
            pinyin: "Wo xiang mai yi jian yifu.",
            meaning: "Quiero comprar una prenda de ropa.",
          },
          {
            hanzi: "你想喝什么？",
            pinyin: "Ni xiang he shenme?",
            meaning: "Que quieres beber?",
          },
          {
            hanzi: "我不想去。",
            pinyin: "Wo bu xiang qu.",
            meaning: "No quiero ir.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El significado de los colores en China",
        content:
          "Los colores en China tienen significados muy diferentes a los occidentales. El ROJO (红色) es el color mas importante: representa suerte, alegria, prosperidad y celebracion. Se usa en bodas, Ano Nuevo y todo evento feliz. Los sobres de dinero de regalo son rojos (红包, hongbao). El AMARILLO (黄色) era el color del emperador y simboliza poder y riqueza. Pero ojo: 'ver contenido amarillo' (看黄色) se refiere a contenido para adultos. El BLANCO (白色) es el color del luto y los funerales, al contrario de Occidente. Nunca regales algo envuelto en papel blanco. El NEGRO (黑色) tambien tiene connotaciones negativas. El VERDE (绿色) tiene un significado peculiar: un 'sombrero verde' (绿帽子, lu maozi) significa que tu pareja te es infiel, asi que nunca regales un sombrero verde a un hombre chino.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'rojo' en chino?",
        options: ["蓝色", "绿色", "红色", "黑色"],
        correctAnswer: 2,
        explanation:
          "红色 (hongse) = rojo. Es el color mas importante y afortunado en la cultura china.",
      },
      {
        type: "multiple-choice",
        question: "Como dices 'zapatos blancos'?",
        options: [
          "鞋子白色",
          "白色的鞋子",
          "鞋子的白色",
          "的白色鞋子",
        ],
        correctAnswer: 1,
        explanation:
          "Color + 的 + cosa: blanco + de + zapatos = 白色的鞋子. El adjetivo siempre va antes en chino.",
      },
      {
        type: "fill-blank",
        question: "我___买一件衣服。(Quiero comprar una prenda.)",
        options: ["要", "想", "会", "是"],
        correctAnswer: "想",
        explanation:
          "想 (xiang) = querer. Se pone antes del verbo: 我想买 = quiero comprar.",
      },
      {
        type: "match",
        question: "Que color es 蓝色?",
        options: ["Rojo", "Verde", "Azul", "Amarillo"],
        correctAnswer: 2,
        explanation:
          "蓝色 (lanse) = azul.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Que color te gusta?': 喜欢 / 你 / 颜色 / 什么",
        options: ["你", "喜欢", "什么", "颜色"],
        correctAnswer: "你喜欢什么颜色",
        explanation:
          "Tu + gustar + que + color = Que color te gusta?",
      },
    ],
  },

  // ========================================================================
  // LECCION 10: COMIDA BASICA
  // ========================================================================
  {
    id: 10,
    moduleId: 0,
    title: "Comida y bebida basica",
    description:
      "Aprende vocabulario esencial sobre comida y bebida: comer, beber, arroz, agua, te y mas. La comida es central en la cultura china, asi que este vocabulario te sera utilisisimo.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你饿吗？我们去吃饭吧。",
        pinyin: "Ni e ma? Women qu chifan ba.",
        meaning: "Tienes hambre? Vamos a comer.",
      },
      {
        speaker: "B",
        hanzi: "好的！你想吃什么？",
        pinyin: "Hao de! Ni xiang chi shenme?",
        meaning: "Dale! Que quieres comer?",
      },
      {
        speaker: "A",
        hanzi: "我想吃米饭和鸡肉。你呢？",
        pinyin: "Wo xiang chi mifan he jirou. Ni ne?",
        meaning: "Quiero comer arroz y pollo. Y tu?",
      },
      {
        speaker: "B",
        hanzi: "我想吃面条。你想喝什么？",
        pinyin: "Wo xiang chi miantiao. Ni xiang he shenme?",
        meaning: "Quiero comer fideos. Que quieres beber?",
      },
      {
        speaker: "A",
        hanzi: "我想喝茶。你喝水还是茶？",
        pinyin: "Wo xiang he cha. Ni he shui haishi cha?",
        meaning: "Quiero beber te. Tu bebes agua o te?",
      },
      {
        speaker: "B",
        hanzi: "我喝水。我们走吧！",
        pinyin: "Wo he shui. Women zou ba!",
        meaning: "Yo bebo agua. Vamonos!",
      },
    ],
    vocabulary: [
      {
        hanzi: "吃",
        pinyin: "chi",
        meaning: "Comer",
        tones: [1],
      },
      {
        hanzi: "喝",
        pinyin: "he",
        meaning: "Beber",
        tones: [1],
      },
      {
        hanzi: "米饭",
        pinyin: "mifan",
        meaning: "Arroz cocido",
        tones: [3, 4],
      },
      {
        hanzi: "水",
        pinyin: "shui",
        meaning: "Agua",
        tones: [3],
      },
      {
        hanzi: "茶",
        pinyin: "cha",
        meaning: "Te",
        tones: [2],
      },
      {
        hanzi: "面条",
        pinyin: "miantiao",
        meaning: "Fideos",
        tones: [4, 2],
      },
      {
        hanzi: "饿",
        pinyin: "e",
        meaning: "Hambriento / tener hambre",
        tones: [4],
      },
      {
        hanzi: "吃饭",
        pinyin: "chifan",
        meaning: "Comer (una comida) / comer arroz",
        tones: [1, 4],
      },
    ],
    grammar: [
      {
        title: "吧 (ba): la particula para sugerir y animar",
        explanation:
          "吧 (ba) es una particula que se pone al final de la frase para hacer sugerencias amigables. Es como decir 'vamos', 'va?', 'dale' o 'anda' en espanol. Cuando dices 我们走吧 (women zou ba), no es una orden ('vamonos!'), es mas como 'vamonos, va?' o 'venga, vamonos'. Le da un tono amable y participativo a la frase. Tambien se usa cuando asumes algo y pides confirmacion: 你是学生吧？(Ni shi xuesheng ba?) = Eres estudiante, verdad? / Supongo que eres estudiante.",
        examples: [
          {
            hanzi: "我们去吃饭吧。",
            pinyin: "Women qu chifan ba.",
            meaning: "Vamos a comer. (sugerencia amigable)",
          },
          {
            hanzi: "我们走吧！",
            pinyin: "Women zou ba!",
            meaning: "Vamonos! (invitation amigable)",
          },
          {
            hanzi: "你是中国人吧？",
            pinyin: "Ni shi Zhongguo ren ba?",
            meaning: "Eres chino, verdad? (suposicion)",
          },
        ],
      },
      {
        title: "还是 (haishi): 'o' para preguntas con opciones",
        explanation:
          "En chino hay dos formas de decir 'o'. Cuando das opciones en una pregunta (esto O aquello?), usas 还是 (haishi). Es como preguntar 'prefieres A o B?'. La estructura es: Opcion A + 还是 + Opcion B? No confundas con 或者 (huozhe) que es 'o' en frases normales (no preguntas). Por ahora recuerda: si es una pregunta con opciones, 还是. Es como en espanol cuando preguntas 'quieres cafe o te?' - esa 'o' seria 还是.",
        examples: [
          {
            hanzi: "你喝水还是茶？",
            pinyin: "Ni he shui haishi cha?",
            meaning: "Bebes agua o te? (elige una)",
          },
          {
            hanzi: "你吃米饭还是面条？",
            pinyin: "Ni chi mifan haishi miantiao?",
            meaning: "Comes arroz o fideos? (elige uno)",
          },
          {
            hanzi: "你是中国人还是日本人？",
            pinyin: "Ni shi Zhongguo ren haishi Riben ren?",
            meaning: "Eres chino o japones? (elige uno)",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "La cultura de la comida en China: mucho mas que alimentarse",
        content:
          "En China, la comida es probablemente el aspecto cultural mas importante. El saludo '你吃了吗？' (Ni chi le ma? = Has comido?) es tan comun como nuestro 'Como estas?'. Comer es un acto social: los platos se ponen al centro de la mesa y todos comparten (a diferencia de Occidente donde cada quien tiene su plato). Es una falta de educacion empezar a comer antes que la persona mas mayor de la mesa. Cuando comes con chinos, ellos insistiran en pagar la cuenta: es una muestra de generosidad y 'cara' (面子, mianzi). Tu debes insistir en pagar tambien (al menos 3 veces) antes de aceptar. El te (茶, cha) tiene miles de anos de historia en China y es una forma de arte. El arroz (米饭, mifan) es tan central que '吃饭' (chifan) literalmente significa 'comer arroz' pero se usa para decir 'comer' en general. Nunca claves los palillos verticalmente en el arroz: se parece al incienso de los funerales.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'Vamos a comer' (como sugerencia amigable)?",
        options: [
          "我们吃饭",
          "我们去吃饭吧",
          "吃饭我们去",
          "去吃饭吧我们",
        ],
        correctAnswer: 1,
        explanation:
          "我们去吃饭吧 = Nosotros ir comer + ba. La particula 吧 le da el tono de sugerencia amigable.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 你喝水还是茶？",
        options: [
          "Te gusta el agua y el te?",
          "Quieres agua y te?",
          "Bebes agua o te?",
          "Tienes agua y te?",
        ],
        correctAnswer: 2,
        explanation:
          "还是 (haishi) es 'o' cuando das opciones. 你喝水还是茶 = Tu bebes agua o te?",
      },
      {
        type: "fill-blank",
        question: "我想___茶。(Quiero beber te.)",
        options: ["吃", "喝", "是", "有"],
        correctAnswer: "喝",
        explanation:
          "喝 (he) = beber. Se usa para liquidos: te, agua, cafe, etc. 吃 (chi) es para comida solida.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Que quieres comer?': 什么 / 你 / 想 / 吃",
        options: ["你", "想", "吃", "什么"],
        correctAnswer: "你想吃什么",
        explanation:
          "Tu + querer + comer + que = Que quieres comer? En chino, '什么' (que) va al final.",
      },
      {
        type: "match",
        question: "Que significa 米饭?",
        options: ["Fideos", "Arroz cocido", "Te", "Pan"],
        correctAnswer: 1,
        explanation:
          "米饭 (mifan) = arroz cocido. Es el alimento basico de China, especialmente del sur.",
      },
    ],
  },

  // ========================================================================
  // LECCION 11: EN EL RESTAURANTE
  // ========================================================================
  {
    id: 11,
    moduleId: 0,
    title: "En el restaurante",
    description:
      "Aprende a pedir comida en un restaurante chino, preguntar precios, pedir la cuenta y desenvolverte con confianza. Despues de esta leccion podras sobrevivir en cualquier restaurante en China.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好，请给我菜单。",
        pinyin: "Ni hao, qing gei wo caidan.",
        meaning: "Hola, por favor deme el menu.",
      },
      {
        speaker: "B",
        hanzi: "好的，请看。你要什么？",
        pinyin: "Hao de, qing kan. Ni yao shenme?",
        meaning: "De acuerdo, mire por favor. Que quiere?",
      },
      {
        speaker: "A",
        hanzi: "我要一碗米饭和一个鸡肉。",
        pinyin: "Wo yao yi wan mifan he yi ge jirou.",
        meaning: "Quiero un tazon de arroz y un pollo.",
      },
      {
        speaker: "B",
        hanzi: "好的，还要别的吗？",
        pinyin: "Hao de, hai yao bie de ma?",
        meaning: "De acuerdo, quiere algo mas?",
      },
      {
        speaker: "A",
        hanzi: "不要了，谢谢。多少钱？",
        pinyin: "Bu yao le, xiexie. Duoshao qian?",
        meaning: "No, gracias. Cuanto cuesta?",
      },
      {
        speaker: "B",
        hanzi: "一共三十五块。",
        pinyin: "Yigong sanshiwu kuai.",
        meaning: "En total son treinta y cinco yuanes.",
      },
    ],
    vocabulary: [
      {
        hanzi: "菜单",
        pinyin: "caidan",
        meaning: "Menu / carta",
        tones: [4, 1],
      },
      {
        hanzi: "要",
        pinyin: "yao",
        meaning: "Querer / necesitar / pedir",
        tones: [4],
      },
      {
        hanzi: "多少钱",
        pinyin: "duoshao qian",
        meaning: "Cuanto cuesta? / cuanto dinero?",
        tones: [1, 3, 2],
      },
      {
        hanzi: "买单",
        pinyin: "maidan",
        meaning: "Pedir la cuenta / pagar",
        tones: [3, 1],
      },
      {
        hanzi: "碗",
        pinyin: "wan",
        meaning: "Tazon / cuenco (clasificador para platos de arroz, sopa, etc.)",
        tones: [3],
      },
      {
        hanzi: "鸡肉",
        pinyin: "jirou",
        meaning: "Carne de pollo",
        tones: [1, 4],
      },
      {
        hanzi: "块",
        pinyin: "kuai",
        meaning: "Yuan (forma coloquial de la moneda china)",
        tones: [4],
      },
      {
        hanzi: "一共",
        pinyin: "yigong",
        meaning: "En total",
        tones: [1, 4],
      },
    ],
    grammar: [
      {
        title: "要 (yao): querer, necesitar o pedir algo",
        explanation:
          "要 (yao) es una de esas palabras super utiles que vas a usar todo el tiempo. Significa 'querer' o 'necesitar', y se usa exactamente como en espanol: sujeto + 要 + lo que quieres. Por ejemplo, 我要水 (wo yao shui) = 'Quiero agua'. Facilisimo, verdad? Tambien puedes usarlo para pedir cosas en un restaurante o tienda. Si quieres decir que NO quieres algo, dices 不要 (bu yao) = 'no quiero'. Ojo: 不要 tambien puede significar 'no hagas eso!' dependiendo del contexto, es como nuestro 'no!' contundente.",
        examples: [
          {
            hanzi: "我要一杯茶。",
            pinyin: "Wo yao yi bei cha.",
            meaning: "Quiero una taza de te.",
          },
          {
            hanzi: "你要什么？",
            pinyin: "Ni yao shenme?",
            meaning: "Que quieres? / Que desea?",
          },
          {
            hanzi: "我不要。",
            pinyin: "Wo bu yao.",
            meaning: "No quiero. / No, gracias.",
          },
        ],
      },
      {
        title: "多少 (duoshao): preguntar cantidades y precios",
        explanation:
          "Cuando necesitas preguntar 'cuanto?' o 'cuantos?', usas 多少 (duoshao). Es tu mejor amigo para ir de compras o comer fuera. La estructura clasica para preguntar el precio es: cosa + 多少钱 (duoshao qian) = 'cuanto cuesta la cosa?'. Tambien puedes ir directo y preguntar 多少钱？sin especificar la cosa si es obvio por el contexto. A diferencia de 几 (ji), que se usa para numeros pequenos (menos de 10), 多少 se usa para cualquier cantidad. Asi que si no sabes que tan grande es el numero, usa 多少 y nunca te equivocas.",
        examples: [
          {
            hanzi: "这个多少钱？",
            pinyin: "Zhege duoshao qian?",
            meaning: "Cuanto cuesta esto?",
          },
          {
            hanzi: "你有多少钱？",
            pinyin: "Ni you duoshao qian?",
            meaning: "Cuanto dinero tienes?",
          },
          {
            hanzi: "你要多少？",
            pinyin: "Ni yao duoshao?",
            meaning: "Cuanto quieres? / Cuantos quieres?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Pedir comida en un restaurante chino: una experiencia diferente",
        content:
          "En los restaurantes chinos, la experiencia es bastante diferente a la occidental. Primero, no te sorprendas si el menu tiene fotos: es muy comun y super util cuando no lees chino. Para llamar al mesero, puedes decir '服务员！' (fuwuyuan!) que significa 'mesero/a!'. No se considera maleducado llamarlos asi, es lo normal. Los platos se piden para compartir y se ponen en el centro de la mesa, muchas veces en una 'mesa giratoria' (lazy susan). Al pedir la cuenta dices '买单！' (maidan!) o '结账！' (jiezhang!). Recuerda: en China se pelea por pagar la cuenta. Si comes con chinos, ellos insistiran en pagar. Es de buena educacion intentar pagar al menos 2-3 veces antes de aceptar. La propina NO existe en la cultura china tradicional, asi que no dejes propina o podrias confundir al mesero.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como pides el menu en un restaurante chino?",
        options: [
          "给我买单",
          "请给我菜单",
          "多少钱",
          "我要吃饭",
        ],
        correctAnswer: 1,
        explanation:
          "请给我菜单 (qing gei wo caidan) = Por favor deme el menu. 菜单 (caidan) es la palabra para menu o carta.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 多少钱?",
        options: [
          "Cuantas personas?",
          "Cuanto tiempo?",
          "Cuanto cuesta?",
          "Cuantos anos?",
        ],
        correctAnswer: 2,
        explanation:
          "多少钱 (duoshao qian) = Cuanto dinero? / Cuanto cuesta? Es la frase esencial para ir de compras o comer fuera.",
      },
      {
        type: "fill-blank",
        question: "我___一碗米饭。(Quiero un tazon de arroz.)",
        options: ["是", "要", "有", "去"],
        correctAnswer: "要",
        explanation:
          "要 (yao) = querer/necesitar. 我要 = yo quiero. Es la forma directa de pedir algo.",
      },
      {
        type: "order-words",
        question:
          "Ordena para preguntar 'Cuanto cuesta esto?': 多少 / 这个 / 钱",
        options: ["这个", "多少", "钱"],
        correctAnswer: "这个多少钱",
        explanation:
          "这个 + 多少 + 钱 = Esto + cuanto + dinero = Cuanto cuesta esto? La cosa va primero, luego la pregunta.",
      },
      {
        type: "match",
        question: "Que significa 买单?",
        options: ["Pedir comida", "Pedir la cuenta", "Pedir el menu", "Pedir agua"],
        correctAnswer: 1,
        explanation:
          "买单 (maidan) significa pedir la cuenta o pagar. Es la palabra que necesitas al final de tu comida.",
      },
    ],
  },

  // ========================================================================
  // LECCION 12: FRUTAS Y VERDURAS
  // ========================================================================
  {
    id: 12,
    moduleId: 0,
    title: "Frutas y verduras",
    description:
      "Aprende los nombres de las frutas y verduras mas comunes en chino. Podras ir al mercado, pedir fruta y hablar sobre tus frutas favoritas.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你喜欢吃什么水果？",
        pinyin: "Ni xihuan chi shenme shuiguo?",
        meaning: "Que frutas te gusta comer?",
      },
      {
        speaker: "B",
        hanzi: "我喜欢吃苹果和香蕉。你呢？",
        pinyin: "Wo xihuan chi pingguo he xiangjiao. Ni ne?",
        meaning: "Me gusta comer manzanas y platanos. Y a ti?",
      },
      {
        speaker: "A",
        hanzi: "我最喜欢西瓜！夏天吃西瓜很好。",
        pinyin: "Wo zui xihuan xigua! Xiatian chi xigua hen hao.",
        meaning: "Mi favorita es la sandia! Comer sandia en verano es genial.",
      },
      {
        speaker: "B",
        hanzi: "对，西瓜很好吃。你喜欢吃蔬菜吗？",
        pinyin: "Dui, xigua hen hao chi. Ni xihuan chi shucai ma?",
        meaning: "Si, la sandia es muy rica. Te gusta comer verduras?",
      },
      {
        speaker: "A",
        hanzi: "我喜欢吃白菜，但是不喜欢吃胡萝卜。",
        pinyin: "Wo xihuan chi baicai, danshi bu xihuan chi huluobo.",
        meaning: "Me gusta comer col china, pero no me gustan las zanahorias.",
      },
    ],
    vocabulary: [
      {
        hanzi: "水果",
        pinyin: "shuiguo",
        meaning: "Fruta",
        tones: [3, 3],
      },
      {
        hanzi: "苹果",
        pinyin: "pingguo",
        meaning: "Manzana",
        tones: [2, 3],
      },
      {
        hanzi: "香蕉",
        pinyin: "xiangjiao",
        meaning: "Platano / banana",
        tones: [1, 1],
      },
      {
        hanzi: "西瓜",
        pinyin: "xigua",
        meaning: "Sandia",
        tones: [1, 1],
      },
      {
        hanzi: "蔬菜",
        pinyin: "shucai",
        meaning: "Verduras / vegetales",
        tones: [1, 4],
      },
      {
        hanzi: "白菜",
        pinyin: "baicai",
        meaning: "Col china / repollo chino",
        tones: [2, 4],
      },
      {
        hanzi: "胡萝卜",
        pinyin: "huluobo",
        meaning: "Zanahoria",
        tones: [2, 2, 5],
      },
      {
        hanzi: "最",
        pinyin: "zui",
        meaning: "El/la mas (superlativo)",
        tones: [4],
      },
    ],
    grammar: [
      {
        title: "最 (zui): el superlativo, decir 'el mas...'",
        explanation:
          "En espanol dices 'el mas grande', 'la mas bonita', 'mi favorito'. En chino es igual de facil: solo pones 最 (zui) delante del adjetivo o verbo. Asi, 好 (hao) = bueno, pero 最好 (zui hao) = el mejor. 喜欢 (xihuan) = gustar, pero 最喜欢 (zui xihuan) = lo que mas te gusta, tu favorito. No necesitas cambiar nada mas, solo anades 最 al principio y listo. Es como si tuvieras una varita magica que convierte todo en 'el mas...'.",
        examples: [
          {
            hanzi: "我最喜欢苹果。",
            pinyin: "Wo zui xihuan pingguo.",
            meaning: "Lo que mas me gusta es la manzana. / Mi fruta favorita es la manzana.",
          },
          {
            hanzi: "西瓜最好吃。",
            pinyin: "Xigua zui hao chi.",
            meaning: "La sandia es la mas deliciosa.",
          },
          {
            hanzi: "他是最好的老师。",
            pinyin: "Ta shi zui hao de laoshi.",
            meaning: "El es el mejor profesor.",
          },
        ],
      },
      {
        title: "但是 (danshi): 'pero' para contrastar ideas",
        explanation:
          "但是 (danshi) es simplemente 'pero' en chino. Lo usas exactamente igual que en espanol: pones una idea, luego 但是, y luego la idea que contrasta. Por ejemplo: 'Me gusta la manzana, pero no me gusta el platano'. En chino seria: 我喜欢苹果，但是不喜欢香蕉. Facil, no? Tambien existe una version corta: 但 (dan) sin el 是, que se usa mas en textos escritos. En conversacion, usa 但是 que suena mas natural.",
        examples: [
          {
            hanzi: "我喜欢苹果，但是不喜欢香蕉。",
            pinyin: "Wo xihuan pingguo, danshi bu xihuan xiangjiao.",
            meaning: "Me gustan las manzanas, pero no me gustan los platanos.",
          },
          {
            hanzi: "西瓜很好吃，但是很大。",
            pinyin: "Xigua hen hao chi, danshi hen da.",
            meaning: "La sandia es deliciosa, pero es muy grande.",
          },
          {
            hanzi: "中国菜很好吃，但是有的很辣。",
            pinyin: "Zhongguo cai hen hao chi, danshi you de hen la.",
            meaning: "La comida china es deliciosa, pero parte de ella es muy picante.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Las frutas en la cultura china: mas que comida",
        content:
          "En China, las frutas tienen significados simbolicos muy importantes. La manzana (苹果, pingguo) suena parecido a 'paz' (平, ping), por eso regalar manzanas en Navidad (Nochebuena se llama 平安夜, ping'an ye, 'noche de paz') se ha vuelto una tradicion moderna en China. La sandia (西瓜, xigua) es la reina del verano chino: se come en todas partes, a todas horas, y es increiblemente barata en temporada. En los mercados chinos, la fruta se vende por 斤 (jin), una unidad de peso china que equivale a medio kilo (500 gramos). Cuando vayas a un mercado en China, veras montanas de fruta fresca a precios muy bajos. Los vendedores suelen dejarte probar antes de comprar. Las frutas tambien se regalan cuando visitas a alguien: nunca vayas a casa de alguien con las manos vacias, un poco de fruta es siempre un buen regalo.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'manzana' en chino?",
        options: ["西瓜", "香蕉", "苹果", "水果"],
        correctAnswer: 2,
        explanation:
          "苹果 (pingguo) = manzana. 西瓜 es sandia, 香蕉 es platano, y 水果 es fruta en general.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 我最喜欢西瓜?",
        options: [
          "No me gusta la sandia",
          "Quiero comprar sandia",
          "La sandia es la que mas me gusta",
          "La sandia es grande",
        ],
        correctAnswer: 2,
        explanation:
          "最喜欢 = lo que mas me gusta (favorito). 我最喜欢西瓜 = La sandia es mi favorita / Lo que mas me gusta es la sandia.",
      },
      {
        type: "fill-blank",
        question: "我喜欢苹果，___不喜欢香蕉。(Me gustan las manzanas, pero no los platanos.)",
        options: ["和", "但是", "还是", "也"],
        correctAnswer: "但是",
        explanation:
          "但是 (danshi) = pero. Se usa para contrastar dos ideas. 和 (he) = y, 还是 (haishi) = o (en preguntas), 也 (ye) = tambien.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Que fruta te gusta comer?': 什么 / 水果 / 你 / 吃 / 喜欢",
        options: ["你", "喜欢", "吃", "什么", "水果"],
        correctAnswer: "你喜欢吃什么水果",
        explanation:
          "Tu + gustar + comer + que + fruta = Que fruta te gusta comer? En chino, la palabra interrogativa va donde iria la respuesta.",
      },
      {
        type: "match",
        question: "Que significa 蔬菜?",
        options: ["Frutas", "Verduras", "Carne", "Arroz"],
        correctAnswer: 1,
        explanation:
          "蔬菜 (shucai) = verduras/vegetales. No confundir con 水果 (shuiguo) que es fruta.",
      },
    ],
  },

  // ========================================================================
  // LECCION 13: IR DE COMPRAS
  // ========================================================================
  {
    id: 13,
    moduleId: 0,
    title: "Ir de compras",
    description:
      "Aprende el vocabulario esencial para ir de compras en China: comprar, vender, regatear, hablar de precios y decir si algo es caro o barato.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好！这件衣服多少钱？",
        pinyin: "Ni hao! Zhe jian yifu duoshao qian?",
        meaning: "Hola! Cuanto cuesta esta ropa?",
      },
      {
        speaker: "B",
        hanzi: "这件两百块。",
        pinyin: "Zhe jian liang bai kuai.",
        meaning: "Esta cuesta doscientos yuanes.",
      },
      {
        speaker: "A",
        hanzi: "太贵了！可以便宜一点吗？",
        pinyin: "Tai gui le! Keyi pianyi yidian ma?",
        meaning: "Es muy caro! Puede ser un poco mas barato?",
      },
      {
        speaker: "B",
        hanzi: "好吧，一百五十块。",
        pinyin: "Hao ba, yi bai wushi kuai.",
        meaning: "Esta bien, ciento cincuenta yuanes.",
      },
      {
        speaker: "A",
        hanzi: "好的，我买了。",
        pinyin: "Hao de, wo mai le.",
        meaning: "De acuerdo, lo compro.",
      },
      {
        speaker: "B",
        hanzi: "谢谢！欢迎下次再来！",
        pinyin: "Xiexie! Huanying xia ci zai lai!",
        meaning: "Gracias! Bienvenido a volver la proxima vez!",
      },
    ],
    vocabulary: [
      {
        hanzi: "买",
        pinyin: "mai",
        meaning: "Comprar",
        tones: [3],
      },
      {
        hanzi: "卖",
        pinyin: "mai",
        meaning: "Vender",
        tones: [4],
      },
      {
        hanzi: "贵",
        pinyin: "gui",
        meaning: "Caro",
        tones: [4],
      },
      {
        hanzi: "便宜",
        pinyin: "pianyi",
        meaning: "Barato",
        tones: [2, 2],
      },
      {
        hanzi: "钱",
        pinyin: "qian",
        meaning: "Dinero",
        tones: [2],
      },
      {
        hanzi: "衣服",
        pinyin: "yifu",
        meaning: "Ropa",
        tones: [1, 2],
      },
      {
        hanzi: "太",
        pinyin: "tai",
        meaning: "Demasiado / muy",
        tones: [4],
      },
      {
        hanzi: "件",
        pinyin: "jian",
        meaning: "Clasificador para ropa y asuntos",
        tones: [4],
      },
    ],
    grammar: [
      {
        title: "太...了 (tai...le): 'demasiado...'",
        explanation:
          "Cuando quieres decir que algo es 'demasiado' de algo, usas la estructura 太 + adjetivo + 了. Es como un sandwich: 太 abre, el adjetivo va en medio, y 了 cierra. Por ejemplo: 太贵了 (tai gui le) = demasiado caro. 太好了 (tai hao le) = genial! (literalmente: demasiado bueno). Ojo: aunque la estructura dice 'demasiado', a veces se usa en sentido positivo, como 太好了 que es como nuestro 'genial!' o 'fantastico!'. Depende del adjetivo: si es algo positivo como 好, entonces es una exclamacion de alegria.",
        examples: [
          {
            hanzi: "太贵了！",
            pinyin: "Tai gui le!",
            meaning: "Es demasiado caro!",
          },
          {
            hanzi: "太好了！",
            pinyin: "Tai hao le!",
            meaning: "Genial! / Fantastico!",
          },
          {
            hanzi: "太大了。",
            pinyin: "Tai da le.",
            meaning: "Es demasiado grande.",
          },
        ],
      },
      {
        title: "可以...吗？(keyi...ma?): pedir permiso o posibilidad",
        explanation:
          "可以 (keyi) significa 'poder' en el sentido de 'es posible' o 'esta permitido'. Cuando quieres pedir permiso o preguntar si algo es posible, usas: 可以 + verbo + 吗？Es como decir 'se puede...?'. Es super util para regatear: 可以便宜一点吗？(keyi pianyi yidian ma?) = Puede ser un poco mas barato? 一点 (yidian) significa 'un poco'. Asi que literalmente es: 'Posible + barato + un poco + ma?' Y eso es todo lo que necesitas para regatear como un campeon.",
        examples: [
          {
            hanzi: "可以便宜一点吗？",
            pinyin: "Keyi pianyi yidian ma?",
            meaning: "Puede ser un poco mas barato?",
          },
          {
            hanzi: "可以试一下吗？",
            pinyin: "Keyi shi yixia ma?",
            meaning: "Puedo probarmelo? (ropa)",
          },
          {
            hanzi: "这里可以吃饭吗？",
            pinyin: "Zheli keyi chifan ma?",
            meaning: "Se puede comer aqui?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El arte de regatear en China",
        content:
          "Regatear (讨价还价, taojiia huanjia) es una parte fundamental de la cultura comercial china, especialmente en mercados callejeros, mercados de ropa y tiendas de souvenirs. En centros comerciales y supermercados los precios son fijos, pero en mercados puedes (y debes!) regatear. La regla general: empieza ofreciendo un 30-50% del precio que te dicen. El vendedor bajara un poco, tu subes un poco, y al final llegan a un acuerdo. Frases utiles: '太贵了！' (Tai gui le! = Muy caro!), '便宜一点' (pianyi yidian = un poco mas barato), y si el vendedor no baja el precio, simplemente empieza a irte: muchas veces te llamaran de vuelta con un mejor precio. Recuerda: regatear es un juego social en China, hazlo con sonrisas y buen humor. Eso si, nunca regatees en restaurantes, supermercados o tiendas con precios marcados.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Es demasiado caro!' en chino?",
        options: [
          "很贵的",
          "太贵了",
          "不贵了",
          "贵太了",
        ],
        correctAnswer: 1,
        explanation:
          "太贵了 (tai gui le) = Demasiado caro! Recuerda la estructura: 太 + adjetivo + 了.",
      },
      {
        type: "multiple-choice",
        question: "买 y 卖 se pronuncian parecido. Cual es la diferencia?",
        options: [
          "买 (tono 3) = vender, 卖 (tono 4) = comprar",
          "买 (tono 3) = comprar, 卖 (tono 4) = vender",
          "Son sinonimos, significan lo mismo",
          "买 = dinero, 卖 = precio",
        ],
        correctAnswer: 1,
        explanation:
          "买 (mai, tono 3) = comprar. 卖 (mai, tono 4) = vender. Solo cambia el tono! Por eso los tonos son tan importantes en chino.",
      },
      {
        type: "fill-blank",
        question: "这件衣服太___了！(Esta ropa es demasiado cara!)",
        options: ["便宜", "贵", "好", "大"],
        correctAnswer: "贵",
        explanation:
          "贵 (gui) = caro. 太贵了 = demasiado caro. 便宜 (pianyi) es lo contrario: barato.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Puede ser un poco mas barato?': 一点 / 便宜 / 可以 / 吗",
        options: ["可以", "便宜", "一点", "吗"],
        correctAnswer: "可以便宜一点吗",
        explanation:
          "可以 + 便宜 + 一点 + 吗 = Puede + barato + un poco + ma? = Puede ser un poco mas barato?",
      },
      {
        type: "match",
        question: "Que significa 便宜?",
        options: ["Caro", "Barato", "Bonito", "Grande"],
        correctAnswer: 1,
        explanation:
          "便宜 (pianyi) = barato. Es lo contrario de 贵 (gui) = caro.",
      },
    ],
  },

  // ========================================================================
  // LECCION 14: TRANSPORTE
  // ========================================================================
  {
    id: 14,
    moduleId: 0,
    title: "Transporte",
    description:
      "Aprende a hablar sobre medios de transporte en chino: taxi, metro, autobus y mas. Despues de esta leccion podras moverte por cualquier ciudad china.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你怎么去上班？",
        pinyin: "Ni zenme qu shangban?",
        meaning: "Como vas al trabajo?",
      },
      {
        speaker: "B",
        hanzi: "我每天坐地铁去上班。你呢？",
        pinyin: "Wo meitian zuo ditie qu shangban. Ni ne?",
        meaning: "Todos los dias tomo el metro para ir al trabajo. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我坐公交车。地铁太挤了。",
        pinyin: "Wo zuo gongjiaoche. Ditie tai ji le.",
        meaning: "Tomo el autobus. El metro esta demasiado lleno.",
      },
      {
        speaker: "B",
        hanzi: "下雨的时候呢？",
        pinyin: "Xia yu de shihou ne?",
        meaning: "Y cuando llueve?",
      },
      {
        speaker: "A",
        hanzi: "下雨我坐出租车。",
        pinyin: "Xia yu wo zuo chuzuche.",
        meaning: "Cuando llueve tomo un taxi.",
      },
      {
        speaker: "B",
        hanzi: "出租车很贵啊！",
        pinyin: "Chuzuche hen gui a!",
        meaning: "Los taxis son caros!",
      },
    ],
    vocabulary: [
      {
        hanzi: "坐",
        pinyin: "zuo",
        meaning: "Sentarse / tomar (transporte)",
        tones: [4],
      },
      {
        hanzi: "车",
        pinyin: "che",
        meaning: "Vehiculo / coche / carro",
        tones: [1],
      },
      {
        hanzi: "出租车",
        pinyin: "chuzuche",
        meaning: "Taxi",
        tones: [1, 1, 1],
      },
      {
        hanzi: "地铁",
        pinyin: "ditie",
        meaning: "Metro / subterraneo",
        tones: [4, 3],
      },
      {
        hanzi: "公交车",
        pinyin: "gongjiaoche",
        meaning: "Autobus / camion (transporte publico)",
        tones: [1, 1, 1],
      },
      {
        hanzi: "怎么",
        pinyin: "zenme",
        meaning: "Como? / de que manera?",
        tones: [3, 5],
      },
      {
        hanzi: "上班",
        pinyin: "shangban",
        meaning: "Ir al trabajo / trabajar",
        tones: [4, 1],
      },
      {
        hanzi: "每天",
        pinyin: "meitian",
        meaning: "Todos los dias / cada dia",
        tones: [3, 1],
      },
    ],
    grammar: [
      {
        title: "坐 (zuo) + transporte: como decir que tomas un medio de transporte",
        explanation:
          "En espanol dices 'tomo el metro', 'voy en taxi', 'agarro el bus'. En chino todo eso se simplifica con un solo verbo: 坐 (zuo). Literalmente 坐 significa 'sentarse', pero cuando lo usas con transportes significa 'tomar/ir en'. La estructura es facilisima: 坐 + medio de transporte. 坐地铁 = tomar el metro. 坐出租车 = tomar un taxi. 坐公交车 = tomar el autobus. Si quieres decir a donde vas, anades el destino al final: 坐地铁去上班 = tomar el metro para ir al trabajo. Piensa que en chino, cuando te subes a un transporte, basicamente te 'sientas' en el.",
        examples: [
          {
            hanzi: "我坐地铁去上班。",
            pinyin: "Wo zuo ditie qu shangban.",
            meaning: "Tomo el metro para ir al trabajo.",
          },
          {
            hanzi: "你坐出租车去吗？",
            pinyin: "Ni zuo chuzuche qu ma?",
            meaning: "Vas en taxi?",
          },
          {
            hanzi: "我们坐公交车去吧。",
            pinyin: "Women zuo gongjiaoche qu ba.",
            meaning: "Vamos en autobus. (sugerencia)",
          },
        ],
      },
      {
        title: "怎么 (zenme): preguntar 'como?'",
        explanation:
          "怎么 (zenme) es la palabra para preguntar 'como?' o 'de que manera?'. Es super versatil. La estructura basica es: sujeto + 怎么 + verbo? Por ejemplo: 你怎么去？(Ni zenme qu?) = Como vas? / Como llegas? Tambien se puede usar para expresar sorpresa: 怎么这么贵！(zenme zheme gui!) = Como es tan caro! / Por que es tan caro! En ese caso no es realmente una pregunta, sino una exclamacion. Piensa en 怎么 como el 'como' universal del chino.",
        examples: [
          {
            hanzi: "你怎么去学校？",
            pinyin: "Ni zenme qu xuexiao?",
            meaning: "Como vas a la escuela?",
          },
          {
            hanzi: "这个字怎么写？",
            pinyin: "Zhege zi zenme xie?",
            meaning: "Como se escribe este caracter?",
          },
          {
            hanzi: "你怎么知道的？",
            pinyin: "Ni zenme zhidao de?",
            meaning: "Como lo sabes? / Como te enteraste?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El transporte en China: rapido, barato y en todos lados",
        content:
          "China tiene uno de los sistemas de transporte publico mas impresionantes del mundo. El metro (地铁, ditie) existe en todas las ciudades grandes y es increiblemente limpio, puntual y barato (un viaje cuesta entre 3-10 yuanes, menos de 2 dolares). Los autobuses (公交车, gongjiaoche) cubren toda la ciudad y cuestan solo 1-2 yuanes. Los taxis (出租车, chuzuche) son relativamente baratos comparados con Occidente, pero hoy en dia casi todos usan apps como DiDi (el Uber chino). Un dato curioso: China tiene la red de trenes de alta velocidad (高铁, gaotie) mas grande del mundo, con trenes que viajan a mas de 350 km/h. Puedes ir de Beijing a Shanghai (1,300 km) en solo 4.5 horas. Las bicicletas compartidas tambien estan por todas partes: escaneas un codigo QR con el telefono y puedes usar la bici. El transporte en China es tan bueno que muchos chinos no necesitan coche propio.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como se dice 'Tomo el metro para ir al trabajo'?",
        options: [
          "我去地铁上班",
          "我坐地铁去上班",
          "地铁坐我去上班",
          "我上班坐地铁去",
        ],
        correctAnswer: 1,
        explanation:
          "我坐地铁去上班 = Yo + tomar + metro + ir + trabajo. El verbo 坐 (zuo) se usa para 'tomar' cualquier medio de transporte.",
      },
      {
        type: "multiple-choice",
        question: "Que significa 出租车?",
        options: [
          "Autobus",
          "Metro",
          "Taxi",
          "Bicicleta",
        ],
        correctAnswer: 2,
        explanation:
          "出租车 (chuzuche) = taxi. Literalmente: 出租 (alquilar) + 车 (vehiculo) = vehiculo de alquiler.",
      },
      {
        type: "fill-blank",
        question: "你___去上班？(Como vas al trabajo?)",
        options: ["什么", "怎么", "哪里", "多少"],
        correctAnswer: "怎么",
        explanation:
          "怎么 (zenme) = como? Se usa para preguntar la manera o metodo de hacer algo.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Vamos en autobus': 公交车 / 坐 / 我们 / 去 / 吧",
        options: ["我们", "坐", "公交车", "去", "吧"],
        correctAnswer: "我们坐公交车去吧",
        explanation:
          "我们 + 坐 + 公交车 + 去 + 吧 = Nosotros + tomar + autobus + ir + ba (sugerencia). La particula 吧 le da tono de sugerencia amigable.",
      },
      {
        type: "match",
        question: "Que significa 每天?",
        options: ["A veces", "Todos los dias", "Nunca", "La semana pasada"],
        correctAnswer: 1,
        explanation:
          "每天 (meitian) = todos los dias / cada dia. 每 (mei) = cada, 天 (tian) = dia.",
      },
    ],
  },

  // ========================================================================
  // LECCION 15: DIRECCIONES
  // ========================================================================
  {
    id: 15,
    moduleId: 0,
    title: "Direcciones",
    description:
      "Aprende a preguntar y dar direcciones en chino: izquierda, derecha, adelante, atras y como preguntar donde estan las cosas. Nunca mas te perderas en una ciudad china.",
    dialog: [
      {
        speaker: "A",
        hanzi: "请问，银行在哪里？",
        pinyin: "Qingwen, yinhang zai nali?",
        meaning: "Disculpe, donde esta el banco?",
      },
      {
        speaker: "B",
        hanzi: "银行在前面，往左走。",
        pinyin: "Yinhang zai qianmian, wang zuo zou.",
        meaning: "El banco esta adelante, camine hacia la izquierda.",
      },
      {
        speaker: "A",
        hanzi: "离这里远吗？",
        pinyin: "Li zheli yuan ma?",
        meaning: "Esta lejos de aqui?",
      },
      {
        speaker: "B",
        hanzi: "不远，很近。走五分钟就到了。",
        pinyin: "Bu yuan, hen jin. Zou wu fenzhong jiu dao le.",
        meaning: "No esta lejos, esta muy cerca. Caminas cinco minutos y llegas.",
      },
      {
        speaker: "A",
        hanzi: "超市在哪里？在银行后面吗？",
        pinyin: "Chaoshi zai nali? Zai yinhang houmian ma?",
        meaning: "Donde esta el supermercado? Esta detras del banco?",
      },
      {
        speaker: "B",
        hanzi: "不是，超市在银行右边。",
        pinyin: "Bu shi, chaoshi zai yinhang youbian.",
        meaning: "No, el supermercado esta a la derecha del banco.",
      },
    ],
    vocabulary: [
      {
        hanzi: "在哪里",
        pinyin: "zai nali",
        meaning: "Donde esta?",
        tones: [4, 3, 3],
      },
      {
        hanzi: "左",
        pinyin: "zuo",
        meaning: "Izquierda",
        tones: [3],
      },
      {
        hanzi: "右",
        pinyin: "you",
        meaning: "Derecha",
        tones: [4],
      },
      {
        hanzi: "前面",
        pinyin: "qianmian",
        meaning: "Adelante / delante / enfrente",
        tones: [2, 4],
      },
      {
        hanzi: "后面",
        pinyin: "houmian",
        meaning: "Detras / atras",
        tones: [4, 4],
      },
      {
        hanzi: "远",
        pinyin: "yuan",
        meaning: "Lejos",
        tones: [3],
      },
      {
        hanzi: "近",
        pinyin: "jin",
        meaning: "Cerca",
        tones: [4],
      },
      {
        hanzi: "走",
        pinyin: "zou",
        meaning: "Caminar / andar / ir a pie",
        tones: [3],
      },
    ],
    grammar: [
      {
        title: "在哪里 (zai nali): preguntar donde estan las cosas",
        explanation:
          "Para preguntar 'donde esta algo?' en chino, usas la estructura: cosa + 在哪里？(zai nali?). Es bastante directo: la cosa que buscas va primero, y luego 在哪里. Por ejemplo, 银行在哪里？(yinhang zai nali?) = Donde esta el banco? Literalmente: banco + en + donde? Nota que en chino no dices 'donde esta el banco?' sino 'el banco esta donde?'. El orden es diferente al espanol, pero te acostumbras rapido. Tambien puedes usar 在哪儿 (zai nar) que significa exactamente lo mismo, solo que 哪儿 es mas comun en el norte de China (especialmente Beijing) y 哪里 en el sur.",
        examples: [
          {
            hanzi: "银行在哪里？",
            pinyin: "Yinhang zai nali?",
            meaning: "Donde esta el banco?",
          },
          {
            hanzi: "厕所在哪里？",
            pinyin: "Cesuo zai nali?",
            meaning: "Donde esta el bano?",
          },
          {
            hanzi: "地铁站在哪里？",
            pinyin: "Ditie zhan zai nali?",
            meaning: "Donde esta la estacion de metro?",
          },
        ],
      },
      {
        title: "Palabras de ubicacion: 前面, 后面, 左边, 右边",
        explanation:
          "Las direcciones en chino son bastante logicas. Las cuatro que necesitas saber son: 前面 (qianmian) = adelante/delante, 后面 (houmian) = atras/detras, 左边 (zuobian) = lado izquierdo, 右边 (youbian) = lado derecho. Para decir donde esta algo en relacion a otra cosa, usas: cosa A + 在 + cosa B + (的) + direccion. Por ejemplo: 超市在银行右边 = El supermercado esta a la derecha del banco. Para dar instrucciones de como llegar, usas 往 (wang) + direccion + 走 (zou): 往左走 = camina hacia la izquierda, 往右走 = camina hacia la derecha, 往前走 = camina hacia adelante.",
        examples: [
          {
            hanzi: "往左走。",
            pinyin: "Wang zuo zou.",
            meaning: "Camina hacia la izquierda.",
          },
          {
            hanzi: "超市在银行后面。",
            pinyin: "Chaoshi zai yinhang houmian.",
            meaning: "El supermercado esta detras del banco.",
          },
          {
            hanzi: "往前走，然后往右走。",
            pinyin: "Wang qian zou, ranhou wang you zou.",
            meaning: "Camina hacia adelante, luego gira a la derecha.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Pedir direcciones en China: apps vs. personas",
        content:
          "En la China moderna, casi nadie pide direcciones en la calle porque todos usan apps de mapas en sus telefonos, principalmente 高德地图 (Gaode Ditu, tambien conocido como Amap) o 百度地图 (Baidu Ditu). Sin embargo, como extranjero, es muy util saber preguntar direcciones porque estas apps estan en chino y Google Maps no funciona bien en China (esta bloqueado). Los chinos son generalmente muy amables cuando les pides ayuda: muchas veces no solo te diran como llegar, sino que te acompanaran hasta el lugar! Una frase magica es 请问 (qingwen), que significa 'disculpe, puedo preguntar...'. Es la forma educada de iniciar cualquier pregunta a un desconocido. Si no hablas chino y necesitas encontrar un lugar, muestra la direccion escrita en chino en tu telefono: los chinos entenderan de inmediato y te ayudaran. Recuerda que en las grandes ciudades chinas, las estaciones de metro tienen los nombres en pinyin ademas de en caracteres, lo que facilita mucho la navegacion.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como preguntas 'Donde esta el banco?'",
        options: [
          "银行是什么？",
          "银行在哪里？",
          "银行多少钱？",
          "银行怎么样？",
        ],
        correctAnswer: 1,
        explanation:
          "银行在哪里？(yinhang zai nali?) = Donde esta el banco? La estructura es: cosa + 在哪里?",
      },
      {
        type: "multiple-choice",
        question: "Que significa 往左走?",
        options: [
          "Gira a la derecha",
          "Camina hacia adelante",
          "Camina hacia la izquierda",
          "Da la vuelta",
        ],
        correctAnswer: 2,
        explanation:
          "往左走 (wang zuo zou) = Camina hacia la izquierda. 往 = hacia, 左 = izquierda, 走 = caminar.",
      },
      {
        type: "fill-blank",
        question: "超市在银行___。(El supermercado esta detras del banco.)",
        options: ["前面", "后面", "左边", "右边"],
        correctAnswer: "后面",
        explanation:
          "后面 (houmian) = detras / atras. 前面 = adelante, 左边 = izquierda, 右边 = derecha.",
      },
      {
        type: "order-words",
        question:
          "Ordena para preguntar 'Donde esta la estacion de metro?': 在 / 地铁站 / 哪里",
        options: ["地铁站", "在", "哪里"],
        correctAnswer: "地铁站在哪里",
        explanation:
          "地铁站 + 在 + 哪里 = Estacion de metro + estar en + donde = Donde esta la estacion de metro?",
      },
      {
        type: "match",
        question: "Que significa 近?",
        options: ["Lejos", "Cerca", "Izquierda", "Derecha"],
        correctAnswer: 1,
        explanation:
          "近 (jin) = cerca. Es lo contrario de 远 (yuan) = lejos.",
      },
    ],
  },

  // ========================================================================
  // LECCION 16: RUTINA DIARIA
  // ========================================================================
  {
    id: 16,
    moduleId: 1,
    title: "Rutina diaria",
    description:
      "Aprende a hablar sobre tu rutina diaria en chino: levantarte, comer, ir al trabajo o a la escuela y regresar a casa. Vocabulario esencial para describir tu dia a dia.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你每天几点起床？",
        pinyin: "Ni meitian ji dian qichuang?",
        meaning: "A que hora te levantas todos los dias?",
      },
      {
        speaker: "B",
        hanzi: "我每天七点起床，先刷牙洗脸。",
        pinyin: "Wo meitian qi dian qichuang, xian shuaya xilian.",
        meaning: "Me levanto a las siete todos los dias, primero me cepillo los dientes y me lavo la cara.",
      },
      {
        speaker: "A",
        hanzi: "然后呢？你吃早饭吗？",
        pinyin: "Ranhou ne? Ni chi zaofan ma?",
        meaning: "Y luego? Desayunas?",
      },
      {
        speaker: "B",
        hanzi: "吃，我先吃早饭，然后去上班。",
        pinyin: "Chi, wo xian chi zaofan, ranhou qu shangban.",
        meaning: "Si, primero desayuno y luego voy al trabajo.",
      },
      {
        speaker: "A",
        hanzi: "你几点下班？",
        pinyin: "Ni ji dian xiaban?",
        meaning: "A que hora sales del trabajo?",
      },
      {
        speaker: "B",
        hanzi: "我六点下班，回家吃晚饭，然后休息。",
        pinyin: "Wo liu dian xiaban, huijia chi wanfan, ranhou xiuxi.",
        meaning: "Salgo a las seis, vuelvo a casa a cenar y luego descanso.",
      },
    ],
    vocabulary: [
      {
        hanzi: "起床",
        pinyin: "qichuang",
        meaning: "Levantarse",
        tones: [3, 2],
      },
      {
        hanzi: "刷牙",
        pinyin: "shuaya",
        meaning: "Cepillarse los dientes",
        tones: [1, 2],
      },
      {
        hanzi: "洗脸",
        pinyin: "xilian",
        meaning: "Lavarse la cara",
        tones: [3, 3],
      },
      {
        hanzi: "早饭",
        pinyin: "zaofan",
        meaning: "Desayuno",
        tones: [3, 4],
      },
      {
        hanzi: "午饭",
        pinyin: "wufan",
        meaning: "Almuerzo",
        tones: [3, 4],
      },
      {
        hanzi: "晚饭",
        pinyin: "wanfan",
        meaning: "Cena",
        tones: [3, 4],
      },
      {
        hanzi: "下班",
        pinyin: "xiaban",
        meaning: "Salir del trabajo",
        tones: [4, 1],
      },
      {
        hanzi: "休息",
        pinyin: "xiuxi",
        meaning: "Descansar",
        tones: [1, 1],
      },
    ],
    grammar: [
      {
        title: "每天 (meitian): hablar de rutinas diarias",
        explanation:
          "每天 (meitian) significa 'todos los dias' o 'cada dia'. Se coloca generalmente despues del sujeto y antes del verbo. Es la palabra clave para describir acciones habituales. En chino no existe una conjugacion especial para habitos como en espanol (yo 'desayuno' vs yo 'desayune'), asi que 每天 es la forma principal de indicar que algo es una rutina. Tambien puedes usar 每 con otras palabras de tiempo: 每年 (meinian) = cada ano, 每个月 (meige yue) = cada mes, 每个星期 (meige xingqi) = cada semana.",
        examples: [
          {
            hanzi: "我每天七点起床。",
            pinyin: "Wo meitian qi dian qichuang.",
            meaning: "Me levanto a las siete todos los dias.",
          },
          {
            hanzi: "他每天吃三顿饭。",
            pinyin: "Ta meitian chi san dun fan.",
            meaning: "El come tres comidas todos los dias.",
          },
          {
            hanzi: "我们每天上班。",
            pinyin: "Women meitian shangban.",
            meaning: "Nosotros vamos al trabajo todos los dias.",
          },
        ],
      },
      {
        title: "先...然后... (xian...ranhou...): secuencia de acciones",
        explanation:
          "Para expresar el orden en que haces las cosas, usas 先 (xian) = primero, y 然后 (ranhou) = luego/despues. La estructura es: 先 + accion 1 + 然后 + accion 2. Es como decir en espanol 'primero hago X, luego hago Y'. Esta estructura es muy util para describir rutinas, recetas, instrucciones o cualquier secuencia de pasos. Puedes encadenar varias acciones usando multiples 然后.",
        examples: [
          {
            hanzi: "我先刷牙，然后吃早饭。",
            pinyin: "Wo xian shuaya, ranhou chi zaofan.",
            meaning: "Primero me cepillo los dientes, luego desayuno.",
          },
          {
            hanzi: "先写作业，然后看电视。",
            pinyin: "Xian xie zuoye, ranhou kan dianshi.",
            meaning: "Primero haz la tarea, luego mira television.",
          },
          {
            hanzi: "我们先吃饭，然后去散步。",
            pinyin: "Women xian chifan, ranhou qu sanbu.",
            meaning: "Primero comemos, luego vamos a caminar.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Las tres comidas en China y los horarios",
        content:
          "En China, los horarios de comida son bastante fijos y la comida es una parte central de la cultura. El desayuno (早饭 zaofan) suele ser entre las 7 y las 8 de la manana. Los chinos desayunan cosas que a los occidentales les parecen 'de almuerzo': sopa de fideos, baozi (panecillos al vapor rellenos), huevos cocidos con salsa de soya, congee (papilla de arroz) y leche de soya. El almuerzo (午饭 wufan) es entre las 11:30 y la 1 de la tarde. En muchas empresas y escuelas chinas existe una pausa de almuerzo de hasta dos horas, y es comun que la gente tome una siesta corta (午休 wuxiu) despues de comer. La cena (晚饭 wanfan) suele ser entre las 6 y las 7 de la tarde y es la comida mas importante del dia para la familia. Una frase clasica china dice: 早吃好，午吃饱，晚吃少 (desayuna bien, almuerza hasta llenarte, cena poco), aunque en la practica muchos chinos cenan abundantemente.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Que significa 起床?",
        options: ["Dormir", "Levantarse", "Desayunar", "Trabajar"],
        correctAnswer: 1,
        explanation:
          "起床 (qichuang) significa 'levantarse'. 起 = levantarse, 床 = cama.",
      },
      {
        type: "fill-blank",
        question: "我___刷牙，然后吃早饭。(Primero me cepillo los dientes, luego desayuno.)",
        options: ["先", "后", "再", "也"],
        correctAnswer: "先",
        explanation:
          "先 (xian) = primero. La estructura 先...然后... se usa para indicar el orden de acciones.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Me levanto a las siete todos los dias': 七点 / 每天 / 起床 / 我",
        options: ["我", "每天", "七点", "起床"],
        correctAnswer: "我每天七点起床",
        explanation:
          "El orden es: sujeto + tiempo habitual + hora + verbo. Yo + todos los dias + siete + levantarse.",
      },
      {
        type: "listen-select",
        question: "Cual es la palabra para 'cena' en chino?",
        options: ["早饭", "午饭", "晚饭", "吃饭"],
        correctAnswer: 2,
        explanation:
          "晚饭 (wanfan) = cena. 晚 = tarde/noche, 饭 = comida. 早饭 = desayuno, 午饭 = almuerzo.",
      },
      {
        type: "match",
        question: "Que significa 休息?",
        options: ["Trabajar", "Descansar", "Comer", "Caminar"],
        correctAnswer: 1,
        explanation:
          "休息 (xiuxi) = descansar. Es una palabra muy comun en la vida diaria china.",
      },
    ],
  },

  // ========================================================================
  // LECCION 17: PASATIEMPOS
  // ========================================================================
  {
    id: 17,
    moduleId: 1,
    title: "Pasatiempos",
    description:
      "Aprende a hablar sobre tus pasatiempos y actividades de tiempo libre en chino. Podras decir que te gusta hacer, que deportes practicas y como pasas tu tiempo libre.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你有什么爱好？",
        pinyin: "Ni you shenme aihao?",
        meaning: "Que pasatiempos tienes?",
      },
      {
        speaker: "B",
        hanzi: "我喜欢看电影和听音乐。你呢？",
        pinyin: "Wo xihuan kan dianying he ting yinyue. Ni ne?",
        meaning: "Me gusta ver peliculas y escuchar musica. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我喜欢运动，有时候游泳，有时候打篮球。",
        pinyin: "Wo xihuan yundong, youshihou youyong, youshihou da lanqiu.",
        meaning: "Me gusta hacer ejercicio, a veces nado, a veces juego basquetbol.",
      },
      {
        speaker: "B",
        hanzi: "你也喜欢画画吗？",
        pinyin: "Ni ye xihuan huahua ma?",
        meaning: "Tambien te gusta pintar?",
      },
      {
        speaker: "A",
        hanzi: "不太喜欢，但是我喜欢唱歌。",
        pinyin: "Bu tai xihuan, danshi wo xihuan changge.",
        meaning: "No mucho, pero me gusta cantar.",
      },
      {
        speaker: "B",
        hanzi: "周末我们去散步吧！",
        pinyin: "Zhoumo women qu sanbu ba!",
        meaning: "El fin de semana vamos a caminar!",
      },
    ],
    vocabulary: [
      {
        hanzi: "看电影",
        pinyin: "kan dianying",
        meaning: "Ver peliculas",
        tones: [4, 4, 3],
      },
      {
        hanzi: "听音乐",
        pinyin: "ting yinyue",
        meaning: "Escuchar musica",
        tones: [1, 1, 4],
      },
      {
        hanzi: "运动",
        pinyin: "yundong",
        meaning: "Hacer ejercicio / deporte",
        tones: [4, 4],
      },
      {
        hanzi: "游泳",
        pinyin: "youyong",
        meaning: "Nadar",
        tones: [2, 3],
      },
      {
        hanzi: "画画",
        pinyin: "huahua",
        meaning: "Pintar / dibujar",
        tones: [4, 4],
      },
      {
        hanzi: "唱歌",
        pinyin: "changge",
        meaning: "Cantar",
        tones: [4, 1],
      },
      {
        hanzi: "打篮球",
        pinyin: "da lanqiu",
        meaning: "Jugar basquetbol",
        tones: [3, 2, 2],
      },
      {
        hanzi: "散步",
        pinyin: "sanbu",
        meaning: "Caminar / pasear",
        tones: [4, 4],
      },
    ],
    grammar: [
      {
        title: "喜欢 + Verbo: expresar gustos",
        explanation:
          "Para decir que te gusta hacer algo en chino, usas 喜欢 (xihuan) + verbo. Es muy similar al espanol: 'me gusta' + verbo. La estructura basica es: sujeto + 喜欢 + actividad. Para decir que no te gusta algo, simplemente agregas 不 (bu) antes: 不喜欢. Si quieres decir que algo te gusta mucho, puedes agregar 很 (hen) antes de 喜欢: 我很喜欢唱歌 = Me gusta mucho cantar. Tambien puedes usar 不太喜欢 (bu tai xihuan) para decir 'no me gusta mucho', que es una forma mas suave y educada de expresar que algo no te agrada.",
        examples: [
          {
            hanzi: "我喜欢听音乐。",
            pinyin: "Wo xihuan ting yinyue.",
            meaning: "Me gusta escuchar musica.",
          },
          {
            hanzi: "他不喜欢运动。",
            pinyin: "Ta bu xihuan yundong.",
            meaning: "A el no le gusta hacer ejercicio.",
          },
          {
            hanzi: "你喜欢看电影吗？",
            pinyin: "Ni xihuan kan dianying ma?",
            meaning: "Te gusta ver peliculas?",
          },
        ],
      },
      {
        title: "有时候...有时候... (youshihou...youshihou...): a veces...a veces...",
        explanation:
          "有时候 (youshihou) significa 'a veces'. Cuando lo repites dos veces en la misma oracion, creas la estructura 'a veces hago X, a veces hago Y', que sirve para expresar que alternas entre diferentes actividades. Es muy util para hablar de pasatiempos porque rara vez hacemos lo mismo todo el tiempo. Tambien puedes usar un solo 有时候 para decir simplemente 'a veces': 我有时候去游泳 = A veces voy a nadar.",
        examples: [
          {
            hanzi: "我有时候看书，有时候看电影。",
            pinyin: "Wo youshihou kan shu, youshihou kan dianying.",
            meaning: "A veces leo, a veces veo peliculas.",
          },
          {
            hanzi: "他有时候跑步，有时候游泳。",
            pinyin: "Ta youshihou paobu, youshihou youyong.",
            meaning: "El a veces corre, a veces nada.",
          },
          {
            hanzi: "周末我有时候在家休息。",
            pinyin: "Zhoumo wo youshihou zai jia xiuxi.",
            meaning: "Los fines de semana a veces descanso en casa.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Pasatiempos populares en China",
        content:
          "Los pasatiempos en China reflejan una mezcla fascinante de tradicion y modernidad. El KTV (karaoke) es enorme en China: los chinos van a salones privados de karaoke con amigos o familia, y es una actividad social fundamental. 广场舞 (guangchangwu), o 'baile de plaza', es una actividad donde grupos de personas (generalmente senoras mayores, llamadas cariosamente 大妈 dama) se reunen en plazas publicas para bailar en grupo, generalmente al atardecer. El badminton y el tenis de mesa (ping pong) son los deportes mas populares, mucho mas que el futbol. Tambien es muy comun jugar ajedrez chino (象棋 xiangqi) o el juego de Go (围棋 weiqi) en los parques. Los jovenes chinos pasan mucho tiempo en redes sociales como WeChat y Douyin (la version china de TikTok). Jugar videojuegos en el celular tambien es extremadamente popular, especialmente juegos como 王者荣耀 (Wang Zhe Rongyao, Honor of Kings).",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Me gusta nadar' en chino?",
        options: [
          "我喜欢唱歌",
          "我喜欢游泳",
          "我喜欢散步",
          "我喜欢画画",
        ],
        correctAnswer: 1,
        explanation:
          "我喜欢游泳 (wo xihuan youyong) = Me gusta nadar. 游泳 = nadar.",
      },
      {
        type: "fill-blank",
        question: "我___看书，有时候看电影。(A veces leo, a veces veo peliculas.)",
        options: ["每天", "有时候", "喜欢", "不太"],
        correctAnswer: "有时候",
        explanation:
          "有时候 (youshihou) = a veces. La estructura 有时候...有时候... se usa para alternar actividades.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Me gusta ver peliculas': 电影 / 我 / 看 / 喜欢",
        options: ["我", "喜欢", "看", "电影"],
        correctAnswer: "我喜欢看电影",
        explanation:
          "El orden es: sujeto + 喜欢 + verbo + objeto. Yo + gustar + ver + peliculas.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'cantar'?",
        options: ["画画", "唱歌", "散步", "游泳"],
        correctAnswer: 1,
        explanation:
          "唱歌 (changge) = cantar. 唱 = cantar, 歌 = cancion.",
      },
      {
        type: "match",
        question: "Que significa 打篮球?",
        options: ["Nadar", "Correr", "Jugar basquetbol", "Ver peliculas"],
        correctAnswer: 2,
        explanation:
          "打篮球 (da lanqiu) = jugar basquetbol. 打 = golpear/jugar, 篮球 = basquetbol.",
      },
    ],
  },

  // ========================================================================
  // LECCION 18: EN EL HOSPITAL
  // ========================================================================
  {
    id: 18,
    moduleId: 1,
    title: "En el hospital",
    description:
      "Aprende a describir sintomas, visitar al medico y hablar sobre enfermedades en chino. Vocabulario esencial para situaciones de salud que podrias necesitar en China.",
    dialog: [
      {
        speaker: "A",
        hanzi: "医生，我不舒服。",
        pinyin: "Yisheng, wo bu shufu.",
        meaning: "Doctor, no me siento bien.",
      },
      {
        speaker: "B",
        hanzi: "你哪里不舒服？",
        pinyin: "Ni nali bu shufu?",
        meaning: "Donde te sientes mal?",
      },
      {
        speaker: "A",
        hanzi: "我头疼，而且发烧了。",
        pinyin: "Wo tou teng, erqie fashao le.",
        meaning: "Me duele la cabeza y ademas tengo fiebre.",
      },
      {
        speaker: "B",
        hanzi: "我给你检查一下。你感冒了。",
        pinyin: "Wo gei ni jiancha yixia. Ni ganmao le.",
        meaning: "Dejame revisarte. Tienes un resfriado.",
      },
      {
        speaker: "A",
        hanzi: "严重吗？我要吃药吗？",
        pinyin: "Yanzhong ma? Wo yao chi yao ma?",
        meaning: "Es grave? Necesito tomar medicina?",
      },
      {
        speaker: "B",
        hanzi: "不严重。你要多休息，护士给你拿药。",
        pinyin: "Bu yanzhong. Ni yao duo xiuxi, hushi gei ni na yao.",
        meaning: "No es grave. Necesitas descansar mas, la enfermera te dara la medicina.",
      },
    ],
    vocabulary: [
      {
        hanzi: "生病",
        pinyin: "shengbing",
        meaning: "Enfermarse / estar enfermo",
        tones: [1, 4],
      },
      {
        hanzi: "发烧",
        pinyin: "fashao",
        meaning: "Tener fiebre",
        tones: [1, 1],
      },
      {
        hanzi: "感冒",
        pinyin: "ganmao",
        meaning: "Resfriado / resfriarse",
        tones: [3, 4],
      },
      {
        hanzi: "药",
        pinyin: "yao",
        meaning: "Medicina / medicamento",
        tones: [4],
      },
      {
        hanzi: "检查",
        pinyin: "jiancha",
        meaning: "Examinar / revisar",
        tones: [3, 2],
      },
      {
        hanzi: "舒服",
        pinyin: "shufu",
        meaning: "Comodo / sentirse bien",
        tones: [1, 2],
      },
      {
        hanzi: "疼",
        pinyin: "teng",
        meaning: "Doler / dolor",
        tones: [2],
      },
      {
        hanzi: "护士",
        pinyin: "hushi",
        meaning: "Enfermera / enfermero",
        tones: [4, 4],
      },
    ],
    grammar: [
      {
        title: "哪里不舒服？(nali bu shufu): preguntar donde duele",
        explanation:
          "Cuando vas al medico en China, la primera pregunta que te haran es 你哪里不舒服？(ni nali bu shufu?) que literalmente significa 'tu donde no comodo?', es decir 'donde te sientes mal?'. Para responder, dices la parte del cuerpo + 疼 (teng, doler): 头疼 (tou teng) = me duele la cabeza, 肚子疼 (duzi teng) = me duele el estomago. Tambien puedes usar 不舒服 con una parte del cuerpo: 我胃不舒服 (wo wei bu shufu) = mi estomago no se siente bien. Esta estructura es fundamental para comunicarte en situaciones medicas.",
        examples: [
          {
            hanzi: "我头疼。",
            pinyin: "Wo tou teng.",
            meaning: "Me duele la cabeza.",
          },
          {
            hanzi: "我肚子不舒服。",
            pinyin: "Wo duzi bu shufu.",
            meaning: "Mi estomago no se siente bien.",
          },
          {
            hanzi: "你哪里疼？",
            pinyin: "Ni nali teng?",
            meaning: "Donde te duele?",
          },
        ],
      },
      {
        title: "要 + verbo: expresar necesidad",
        explanation:
          "要 (yao) es una palabra muy versatil en chino. Cuando se usa antes de un verbo, puede significar 'necesitar', 'deber' o 'querer' hacer algo. En contexto medico, 要 se usa frecuentemente para indicar lo que el paciente necesita hacer: 你要多休息 (ni yao duo xiuxi) = necesitas descansar mas. 你要吃药 (ni yao chi yao) = necesitas tomar medicina. La negacion es 不要 (buyao), que tambien puede significar 'no hagas eso': 不要吃辣的 (buyao chi la de) = no comas picante. 要 tambien se usa para expresar deseo: 我要喝水 = quiero beber agua.",
        examples: [
          {
            hanzi: "你要多喝水。",
            pinyin: "Ni yao duo he shui.",
            meaning: "Necesitas beber mas agua.",
          },
          {
            hanzi: "我要吃药。",
            pinyin: "Wo yao chi yao.",
            meaning: "Necesito tomar medicina.",
          },
          {
            hanzi: "你不要吃辣的。",
            pinyin: "Ni buyao chi la de.",
            meaning: "No comas (cosas) picantes.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Los hospitales en China: una experiencia diferente",
        content:
          "Ir al hospital en China es una experiencia muy diferente a la de paises occidentales. En China, la gente va directamente al hospital para cualquier problema de salud, incluso cosas menores como un resfriado. No existe un sistema de 'medico de cabecera' como en muchos paises hispanohablantes. Los hospitales chinos pueden ser muy concurridos, con largas filas. Es comun ver a cientos de personas esperando en las salas. Para evitar esto, muchos usan apps como WeChat para reservar citas con antelacion. La medicina tradicional china (中医 zhongyi) sigue siendo muy popular junto con la medicina occidental (西医 xiyi). Muchos hospitales tienen departamentos de ambas. Es comun que un medico te recete tanto pastillas occidentales como te de hierbas chinas. Algo que sorprende a los extranjeros: en China, los antibioticos se usan mucho mas frecuentemente, y muchas veces te ponen una infusion intravenosa (打点滴 da diandi) incluso para un simple resfriado.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como le dices al doctor que te duele la cabeza?",
        options: [
          "我头疼",
          "我发烧了",
          "我感冒了",
          "我不舒服",
        ],
        correctAnswer: 0,
        explanation:
          "我头疼 (wo tou teng) = me duele la cabeza. 头 = cabeza, 疼 = doler.",
      },
      {
        type: "fill-blank",
        question: "你___不舒服？(Donde te sientes mal?)",
        options: ["什么", "哪里", "怎么", "几"],
        correctAnswer: "哪里",
        explanation:
          "哪里 (nali) = donde. 你哪里不舒服？es la pregunta estandar del medico para saber donde te sientes mal.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Necesitas tomar medicina': 药 / 你 / 要 / 吃",
        options: ["你", "要", "吃", "药"],
        correctAnswer: "你要吃药",
        explanation:
          "El orden es: sujeto + 要 + verbo + objeto. Tu + necesitar + comer/tomar + medicina.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'fiebre'?",
        options: ["感冒", "发烧", "疼", "药"],
        correctAnswer: 1,
        explanation:
          "发烧 (fashao) = tener fiebre. 发 = emitir/producir, 烧 = quemar/caliente.",
      },
      {
        type: "match",
        question: "Que significa 护士?",
        options: ["Doctor", "Enfermera", "Paciente", "Farmacia"],
        correctAnswer: 1,
        explanation:
          "护士 (hushi) = enfermera/enfermero. 护 = proteger/cuidar, 士 = persona.",
      },
    ],
  },

  // ========================================================================
  // LECCION 19: DESCRIBIR PERSONAS
  // ========================================================================
  {
    id: 19,
    moduleId: 1,
    title: "Describir personas",
    description:
      "Aprende a describir la apariencia fisica y la personalidad de las personas en chino. Podras hablar de como se ven y como son tus amigos, familiares y conocidos.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你的新同事长什么样？",
        pinyin: "Ni de xin tongshi zhang shenme yang?",
        meaning: "Como se ve tu nuevo companero de trabajo?",
      },
      {
        speaker: "B",
        hanzi: "他长得又高又帅。",
        pinyin: "Ta zhang de you gao you shuai.",
        meaning: "Es alto y guapo.",
      },
      {
        speaker: "A",
        hanzi: "他胖还是瘦？",
        pinyin: "Ta pang haishi shou?",
        meaning: "Es gordo o delgado?",
      },
      {
        speaker: "B",
        hanzi: "他很瘦，有短头发，戴眼镜。",
        pinyin: "Ta hen shou, you duan toufa, dai yanjing.",
        meaning: "Es delgado, tiene cabello corto y usa lentes.",
      },
      {
        speaker: "A",
        hanzi: "他聪明吗？",
        pinyin: "Ta congming ma?",
        meaning: "Es inteligente?",
      },
      {
        speaker: "B",
        hanzi: "很聪明，而且人很好。",
        pinyin: "Hen congming, erqie ren hen hao.",
        meaning: "Muy inteligente, y ademas es muy buena persona.",
      },
    ],
    vocabulary: [
      {
        hanzi: "高",
        pinyin: "gao",
        meaning: "Alto",
        tones: [1],
      },
      {
        hanzi: "矮",
        pinyin: "ai",
        meaning: "Bajo / chaparro",
        tones: [3],
      },
      {
        hanzi: "胖",
        pinyin: "pang",
        meaning: "Gordo",
        tones: [4],
      },
      {
        hanzi: "瘦",
        pinyin: "shou",
        meaning: "Delgado / flaco",
        tones: [4],
      },
      {
        hanzi: "帅",
        pinyin: "shuai",
        meaning: "Guapo",
        tones: [4],
      },
      {
        hanzi: "聪明",
        pinyin: "congming",
        meaning: "Inteligente / listo",
        tones: [1, 2],
      },
      {
        hanzi: "头发",
        pinyin: "toufa",
        meaning: "Cabello / pelo",
        tones: [2, 4],
      },
      {
        hanzi: "眼镜",
        pinyin: "yanjing",
        meaning: "Lentes / gafas",
        tones: [3, 4],
      },
    ],
    grammar: [
      {
        title: "长得 + adjetivo: describir apariencia fisica",
        explanation:
          "En chino, para describir como se ve una persona fisicamente, usas 长得 (zhang de) seguido de un adjetivo. 长得 literalmente significa 'crecer de (tal manera)' y se usa exclusivamente para la apariencia. Por ejemplo: 她长得很漂亮 (ta zhang de hen piaoliang) = ella es muy bonita. Para preguntar como se ve alguien, dices: 他长什么样？(ta zhang shenme yang?) = como se ve el? o 他长得怎么样？(ta zhang de zenmeyang?). Es importante notar que 长得 se usa solo para rasgos fisicos, no para la personalidad. Para personalidad simplemente usas 他很 + adjetivo: 他很聪明 = el es muy inteligente.",
        examples: [
          {
            hanzi: "她长得很漂亮。",
            pinyin: "Ta zhang de hen piaoliang.",
            meaning: "Ella es muy bonita.",
          },
          {
            hanzi: "他长得很高。",
            pinyin: "Ta zhang de hen gao.",
            meaning: "El es muy alto.",
          },
          {
            hanzi: "他长什么样？",
            pinyin: "Ta zhang shenme yang?",
            meaning: "Como se ve el?",
          },
        ],
      },
      {
        title: "又...又... (you...you...): expresar dos cualidades a la vez",
        explanation:
          "La estructura 又...又... (you...you...) se usa para decir que algo o alguien tiene dos cualidades al mismo tiempo. Es como decir 'es tanto X como Y' o 'es X y tambien Y'. Las dos cualidades suelen ser del mismo tipo (ambas positivas o ambas negativas). Por ejemplo: 又高又帅 (you gao you shuai) = alto y guapo, 又便宜又好吃 (you pianyi you haochi) = barato y delicioso. Es una estructura muy natural y comun en chino para hacer descripciones completas.",
        examples: [
          {
            hanzi: "他又高又帅。",
            pinyin: "Ta you gao you shuai.",
            meaning: "El es alto y guapo.",
          },
          {
            hanzi: "这个菜又便宜又好吃。",
            pinyin: "Zhege cai you pianyi you haochi.",
            meaning: "Este platillo es barato y delicioso.",
          },
          {
            hanzi: "她又聪明又漂亮。",
            pinyin: "Ta you congming you piaoliang.",
            meaning: "Ella es inteligente y bonita.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Describir personas en China: lo que es normal y lo que no",
        content:
          "En China, hablar del peso y la apariencia de alguien es mucho mas comun y aceptable que en paises occidentales. Es perfectamente normal que alguien te diga 你胖了 (ni pang le, 'engordaste') como un comentario casual, sin mala intencion. De hecho, en la cultura china tradicional, decir que alguien esta 'gordito' podia ser un cumplido, pues significaba que vivia bien. Sin embargo, los estandares de belleza modernos en China tienden a valorar la delgadez, especialmente para las mujeres. La palabra 帅 (shuai, guapo) se usa mucho para hombres, mientras que para mujeres se usa 漂亮 (piaoliang, bonita) o 美 (mei, bella). Un dato curioso: en China se considera que tener la piel blanca es muy atractivo, lo cual viene de tradiciones historicas donde la piel clara indicaba que no trabajabas bajo el sol. Por eso veras muchos productos blanqueadores de piel en las tiendas chinas.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'El es alto y guapo'?",
        options: [
          "他又胖又矮",
          "他又高又帅",
          "他很聪明",
          "他长得不好看",
        ],
        correctAnswer: 1,
        explanation:
          "他又高又帅 (ta you gao you shuai) = el es alto y guapo. La estructura 又...又... une dos cualidades.",
      },
      {
        type: "fill-blank",
        question: "她长___很漂亮。(Ella es muy bonita.)",
        options: ["的", "得", "地", "了"],
        correctAnswer: "得",
        explanation:
          "长得 (zhang de) usa 得 para conectar el verbo 长 con la descripcion de apariencia.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'El es delgado': 很 / 他 / 瘦",
        options: ["他", "很", "瘦"],
        correctAnswer: "他很瘦",
        explanation:
          "El orden es: sujeto + 很 + adjetivo. El + muy + delgado.",
      },
      {
        type: "listen-select",
        question: "Cual es el opuesto de 高 (alto)?",
        options: ["瘦", "矮", "胖", "帅"],
        correctAnswer: 1,
        explanation:
          "矮 (ai) = bajo/chaparro, es el opuesto de 高 (gao) = alto.",
      },
      {
        type: "match",
        question: "Que significa 聪明?",
        options: ["Guapo", "Alto", "Inteligente", "Gordo"],
        correctAnswer: 2,
        explanation:
          "聪明 (congming) = inteligente/listo. Es una de las palabras mas comunes para describir personalidad.",
      },
    ],
  },

  // ========================================================================
  // LECCION 20: TELEFONO Y TECNOLOGIA
  // ========================================================================
  {
    id: 20,
    moduleId: 1,
    title: "Telefono y tecnologia",
    description:
      "Aprende vocabulario y frases sobre tecnologia, telefonos, internet y aplicaciones en chino. En la China moderna, la tecnologia es parte esencial de la vida diaria.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你在做什么？",
        pinyin: "Ni zai zuo shenme?",
        meaning: "Que estas haciendo?",
      },
      {
        speaker: "B",
        hanzi: "我正在用手机上网。",
        pinyin: "Wo zhengzai yong shouji shangwang.",
        meaning: "Estoy navegando en internet con mi celular.",
      },
      {
        speaker: "A",
        hanzi: "你能帮我下载一个app吗？",
        pinyin: "Ni neng bang wo xiazai yige app ma?",
        meaning: "Puedes ayudarme a descargar una app?",
      },
      {
        speaker: "B",
        hanzi: "可以，你的密码是什么？",
        pinyin: "Keyi, ni de mima shi shenme?",
        meaning: "Claro, cual es tu contrasena?",
      },
      {
        speaker: "A",
        hanzi: "等一下，我先给他打电话。",
        pinyin: "Deng yixia, wo xian gei ta da dianhua.",
        meaning: "Espera un momento, primero le llamo a el.",
      },
      {
        speaker: "B",
        hanzi: "好，我先拍照，你打完电话发短信给我。",
        pinyin: "Hao, wo xian paizhao, ni da wan dianhua fa duanxin gei wo.",
        meaning: "Ok, yo primero tomo fotos, cuando termines de llamar enviame un mensaje.",
      },
    ],
    vocabulary: [
      {
        hanzi: "打电话",
        pinyin: "da dianhua",
        meaning: "Hacer una llamada telefonica",
        tones: [3, 4, 4],
      },
      {
        hanzi: "发短信",
        pinyin: "fa duanxin",
        meaning: "Enviar un mensaje de texto",
        tones: [1, 3, 4],
      },
      {
        hanzi: "上网",
        pinyin: "shangwang",
        meaning: "Navegar en internet / conectarse",
        tones: [4, 3],
      },
      {
        hanzi: "手机",
        pinyin: "shouji",
        meaning: "Celular / telefono movil",
        tones: [3, 1],
      },
      {
        hanzi: "电脑",
        pinyin: "diannao",
        meaning: "Computadora",
        tones: [4, 3],
      },
      {
        hanzi: "密码",
        pinyin: "mima",
        meaning: "Contrasena",
        tones: [4, 3],
      },
      {
        hanzi: "下载",
        pinyin: "xiazai",
        meaning: "Descargar",
        tones: [4, 3],
      },
      {
        hanzi: "拍照",
        pinyin: "paizhao",
        meaning: "Tomar una foto",
        tones: [1, 4],
      },
    ],
    grammar: [
      {
        title: "给 + persona + verbo: hacer algo para/a alguien",
        explanation:
          "La palabra 给 (gei) se usa antes de una persona para indicar que la accion se dirige hacia ella. Es como decir 'a alguien' o 'para alguien' en espanol. La estructura es: sujeto + 给 + persona + verbo. Por ejemplo: 我给你打电话 (wo gei ni da dianhua) = te llamo (literalmente: yo a-ti hacer llamada). 给他发短信 (gei ta fa duanxin) = enviale un mensaje. Es una estructura extremadamente comun en chino diario, especialmente con verbos de comunicacion como llamar, enviar, dar, etc.",
        examples: [
          {
            hanzi: "我给你打电话。",
            pinyin: "Wo gei ni da dianhua.",
            meaning: "Te hago una llamada.",
          },
          {
            hanzi: "请给我发短信。",
            pinyin: "Qing gei wo fa duanxin.",
            meaning: "Por favor enviame un mensaje de texto.",
          },
          {
            hanzi: "他给妈妈拍照。",
            pinyin: "Ta gei mama paizhao.",
            meaning: "El le toma una foto a mama.",
          },
        ],
      },
      {
        title: "正在 + verbo: accion en progreso",
        explanation:
          "正在 (zhengzai) se coloca antes del verbo para indicar que la accion esta ocurriendo en este momento, como el gerundio en espanol (-ando, -endo). 我正在吃饭 = Estoy comiendo. Tambien puedes usar solo 在 (zai) con el mismo significado: 我在看电影 = Estoy viendo una pelicula. Opcionalmente puedes agregar 呢 (ne) al final de la oracion para enfatizar que la accion continua: 我正在上网呢 = Estoy navegando en internet (en este momento). La negacion es 没在: 我没在上网 = No estoy navegando en internet.",
        examples: [
          {
            hanzi: "我正在上网。",
            pinyin: "Wo zhengzai shangwang.",
            meaning: "Estoy navegando en internet.",
          },
          {
            hanzi: "她在打电话呢。",
            pinyin: "Ta zai da dianhua ne.",
            meaning: "Ella esta hablando por telefono.",
          },
          {
            hanzi: "他们正在下载电影。",
            pinyin: "Tamen zhengzai xiazai dianying.",
            meaning: "Ellos estan descargando una pelicula.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "China digital: un pais donde todo es con el celular",
        content:
          "China es probablemente el pais mas digitalizado del mundo. Casi todo se hace con el celular, especialmente a traves de dos super-apps: 微信 (WeChat/Weixin) y 支付宝 (Alipay/Zhifubao). Con estas apps puedes pagar en cualquier tienda (incluso puestos callejeros), pedir comida a domicilio, reservar taxis, pagar servicios, transferir dinero, y mucho mas. El efectivo casi ha desaparecido en las grandes ciudades chinas. En China no se usa WhatsApp, Instagram, Facebook ni Google (estan bloqueados por el 'Gran Firewall'). En su lugar, usan WeChat para mensajes, Douyin (TikTok chino) para videos cortos, Weibo para microblogging, y Baidu como buscador. Si viajas a China, lo primero que necesitas es descargar WeChat y configurar un metodo de pago, porque sin eso es muy dificil funcionar en la vida diaria. Los codigos QR (二维码 erweima) estan absolutamente en todas partes: en restaurantes para ver el menu, en tiendas para pagar, en bicicletas compartidas para desbloquearlas.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Estoy navegando en internet'?",
        options: [
          "我打电话",
          "我正在上网",
          "我下载了",
          "我发短信",
        ],
        correctAnswer: 1,
        explanation:
          "我正在上网 (wo zhengzai shangwang) = Estoy navegando en internet. 正在 indica accion en progreso.",
      },
      {
        type: "fill-blank",
        question: "我___你打电话。(Te llamo.)",
        options: ["在", "给", "要", "正"],
        correctAnswer: "给",
        explanation:
          "给 (gei) indica a quien va dirigida la accion. 我给你打电话 = yo a-ti hago llamada = te llamo.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'El esta tomando fotos': 正在 / 他 / 拍照",
        options: ["他", "正在", "拍照"],
        correctAnswer: "他正在拍照",
        explanation:
          "El orden es: sujeto + 正在 + verbo. El + estar haciendo + tomar fotos.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'contrasena'?",
        options: ["手机", "电脑", "密码", "下载"],
        correctAnswer: 2,
        explanation:
          "密码 (mima) = contrasena. 密 = secreto, 码 = codigo.",
      },
      {
        type: "match",
        question: "Que significa 下载?",
        options: ["Subir", "Descargar", "Enviar", "Recibir"],
        correctAnswer: 1,
        explanation:
          "下载 (xiazai) = descargar. 下 = abajo, 载 = cargar. Es lo opuesto a 上传 (shangchuan) = subir/cargar.",
      },
    ],
  },

  // ========================================================================
  // LECCION 21: EXPRESAR OPINIONES
  // ========================================================================
  {
    id: 21,
    moduleId: 1,
    title: "Expresar opiniones",
    description:
      "Aprende a expresar tus opiniones, hacer comparaciones y decir que piensas sobre cosas en chino. Muy util para conversaciones cotidianas sobre comida, peliculas, lugares y mas.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你觉得这个电影怎么样？",
        pinyin: "Ni juede zhege dianying zenmeyang?",
        meaning: "Que opinas de esta pelicula?",
      },
      {
        speaker: "B",
        hanzi: "我觉得很有意思。你呢？",
        pinyin: "Wo juede hen you yisi. Ni ne?",
        meaning: "Creo que es muy interesante. Y tu?",
      },
      {
        speaker: "A",
        hanzi: "我认为有点儿无聊。",
        pinyin: "Wo renwei youdianr wuliao.",
        meaning: "Yo considero que es un poco aburrida.",
      },
      {
        speaker: "B",
        hanzi: "那你觉得中国菜比墨西哥菜好吃吗？",
        pinyin: "Na ni juede Zhongguo cai bi Moxige cai haochi ma?",
        meaning: "Entonces crees que la comida china es mas rica que la mexicana?",
      },
      {
        speaker: "A",
        hanzi: "我觉得都好吃，但是中国菜比较难做。",
        pinyin: "Wo juede dou haochi, danshi Zhongguo cai bijiao nan zuo.",
        meaning: "Creo que ambas son deliciosas, pero la comida china es mas dificil de hacer.",
      },
      {
        speaker: "B",
        hanzi: "我同意，中文也比西班牙语难。",
        pinyin: "Wo tongyi, Zhongwen ye bi Xibanyayu nan.",
        meaning: "Estoy de acuerdo, el chino tambien es mas dificil que el espanol.",
      },
    ],
    vocabulary: [
      {
        hanzi: "觉得",
        pinyin: "juede",
        meaning: "Pensar / creer / opinar",
        tones: [2, 2],
      },
      {
        hanzi: "认为",
        pinyin: "renwei",
        meaning: "Considerar / opinar (mas formal)",
        tones: [4, 2],
      },
      {
        hanzi: "同意",
        pinyin: "tongyi",
        meaning: "Estar de acuerdo",
        tones: [2, 4],
      },
      {
        hanzi: "有意思",
        pinyin: "you yisi",
        meaning: "Interesante / divertido",
        tones: [3, 4, 1],
      },
      {
        hanzi: "无聊",
        pinyin: "wuliao",
        meaning: "Aburrido",
        tones: [2, 2],
      },
      {
        hanzi: "容易",
        pinyin: "rongyi",
        meaning: "Facil",
        tones: [2, 4],
      },
      {
        hanzi: "难",
        pinyin: "nan",
        meaning: "Dificil",
        tones: [2],
      },
      {
        hanzi: "一般",
        pinyin: "yiban",
        meaning: "Regular / normal / mas o menos",
        tones: [4, 1],
      },
    ],
    grammar: [
      {
        title: "觉得 (juede): expresar opiniones",
        explanation:
          "觉得 (juede) es la forma mas comun de expresar una opinion en chino. Significa 'creer', 'pensar' u 'opinar'. La estructura es: sujeto + 觉得 + opinion. Por ejemplo: 我觉得很好 (wo juede hen hao) = creo que esta muy bien. Para preguntar la opinion de alguien: 你觉得怎么样？(ni juede zenmeyang?) = que opinas? / que te parece? Tambien existe 认为 (renwei), que es mas formal y se usa para opiniones mas serias o razonadas. 觉得 es mas casual y subjetivo, como 'siento que...', mientras que 认为 es mas como 'considero que...'.",
        examples: [
          {
            hanzi: "我觉得中文很有意思。",
            pinyin: "Wo juede Zhongwen hen you yisi.",
            meaning: "Creo que el chino es muy interesante.",
          },
          {
            hanzi: "你觉得这个菜怎么样？",
            pinyin: "Ni juede zhege cai zenmeyang?",
            meaning: "Que opinas de este platillo?",
          },
          {
            hanzi: "我觉得不太难。",
            pinyin: "Wo juede bu tai nan.",
            meaning: "Creo que no es muy dificil.",
          },
        ],
      },
      {
        title: "比 (bi): hacer comparaciones",
        explanation:
          "比 (bi) es la particula de comparacion en chino. La estructura es: A + 比 + B + adjetivo. Esto significa 'A es mas [adjetivo] que B'. Por ejemplo: 中文比英文难 (Zhongwen bi Yingwen nan) = el chino es mas dificil que el ingles. Nota que NO necesitas una palabra para 'mas': el adjetivo solo ya implica la comparacion gracias a 比. Si quieres decir 'un poco mas', agregas 一点儿 despues del adjetivo: 贵一点儿 = un poco mas caro. Si quieres decir 'mucho mas', agregas 多了 o 得多: 难多了 = mucho mas dificil.",
        examples: [
          {
            hanzi: "中国菜比日本菜便宜。",
            pinyin: "Zhongguo cai bi Riben cai pianyi.",
            meaning: "La comida china es mas barata que la japonesa.",
          },
          {
            hanzi: "他比我高。",
            pinyin: "Ta bi wo gao.",
            meaning: "El es mas alto que yo.",
          },
          {
            hanzi: "今天比昨天热。",
            pinyin: "Jintian bi zuotian re.",
            meaning: "Hoy esta mas caluroso que ayer.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Expresar opiniones en China: el arte de la indirecta",
        content:
          "En la cultura china, expresar opiniones directas y fuertes no siempre es bien visto, especialmente si son negativas. Los chinos tienden a ser mas indirectos para evitar conflictos y 'salvar la cara' (保面子 bao mianzi). En lugar de decir '这个很难吃' (esto sabe horrible), un chino diria '还可以' (hai keyi, esta bien) o '一般般' (yibanban, mas o menos). Si un chino te dice que algo esta '还行' (hai xing, va bien), probablemente no le gusto mucho. Por otro lado, cuando a un chino le gusta algo de verdad, lo expresara con entusiasmo: '太好吃了！' (tai haochi le, esta deliciosisimo!). En ambientes de trabajo, es comun que la gente diga 我考虑一下 (wo kaolv yixia, dejame pensarlo) en lugar de decir 'no' directamente. Aprender a leer estas senales indirectas es clave para entender las verdaderas opiniones de los chinos.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Creo que es muy interesante'?",
        options: [
          "我同意很有意思",
          "我觉得很有意思",
          "我认为很无聊",
          "我觉得很难",
        ],
        correctAnswer: 1,
        explanation:
          "我觉得很有意思 (wo juede hen you yisi) = creo que es muy interesante. 觉得 + opinion.",
      },
      {
        type: "fill-blank",
        question: "中文___英文难。(El chino es mas dificil que el ingles.)",
        options: ["和", "比", "跟", "也"],
        correctAnswer: "比",
        explanation:
          "比 (bi) es la particula de comparacion. A + 比 + B + adjetivo = A es mas [adj] que B.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'El es mas alto que yo': 高 / 他 / 比 / 我",
        options: ["他", "比", "我", "高"],
        correctAnswer: "他比我高",
        explanation:
          "La estructura de comparacion es: A + 比 + B + adjetivo. El + bi + yo + alto.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'aburrido'?",
        options: ["有意思", "容易", "无聊", "一般"],
        correctAnswer: 2,
        explanation:
          "无聊 (wuliao) = aburrido. Es lo opuesto de 有意思 (you yisi) = interesante.",
      },
      {
        type: "match",
        question: "Que significa 同意?",
        options: ["No estoy de acuerdo", "Estar de acuerdo", "Pensar", "Considerar"],
        correctAnswer: 1,
        explanation:
          "同意 (tongyi) = estar de acuerdo. 同 = mismo, 意 = opinion/significado.",
      },
    ],
  },

  // ========================================================================
  // LECCION 22: PLANES Y FUTURO
  // ========================================================================
  {
    id: 22,
    moduleId: 1,
    title: "Planes y futuro",
    description:
      "Aprende a hablar sobre tus planes para el fin de semana, vacaciones y el futuro en chino. Podras expresar lo que planeas hacer y lo que esta por suceder.",
    dialog: [
      {
        speaker: "A",
        hanzi: "周末你打算做什么？",
        pinyin: "Zhoumo ni dasuan zuo shenme?",
        meaning: "Que planeas hacer el fin de semana?",
      },
      {
        speaker: "B",
        hanzi: "我打算和朋友去旅游。",
        pinyin: "Wo dasuan he pengyou qu lvyou.",
        meaning: "Planeo ir de viaje con amigos.",
      },
      {
        speaker: "A",
        hanzi: "真好！你们准备去哪里？",
        pinyin: "Zhen hao! Nimen zhunbei qu nali?",
        meaning: "Que bien! A donde se preparan para ir?",
      },
      {
        speaker: "B",
        hanzi: "我们计划去成都，下个星期要放假了。",
        pinyin: "Women jihua qu Chengdu, xia ge xingqi yao fangjia le.",
        meaning: "Planeamos ir a Chengdu, la proxima semana vamos a tener vacaciones.",
      },
      {
        speaker: "A",
        hanzi: "我也希望去旅游，但是这个假期我要工作。",
        pinyin: "Wo ye xiwang qu lvyou, danshi zhege jiaqi wo yao gongzuo.",
        meaning: "Yo tambien espero ir de viaje, pero estas vacaciones tengo que trabajar.",
      },
      {
        speaker: "B",
        hanzi: "没关系，下个假期我们一起去吧！",
        pinyin: "Mei guanxi, xia ge jiaqi women yiqi qu ba!",
        meaning: "No importa, las proximas vacaciones vamos juntos!",
      },
    ],
    vocabulary: [
      {
        hanzi: "打算",
        pinyin: "dasuan",
        meaning: "Planear / tener la intencion de",
        tones: [3, 4],
      },
      {
        hanzi: "准备",
        pinyin: "zhunbei",
        meaning: "Preparar / prepararse",
        tones: [3, 4],
      },
      {
        hanzi: "放假",
        pinyin: "fangjia",
        meaning: "Tener vacaciones / dia libre",
        tones: [4, 4],
      },
      {
        hanzi: "旅游",
        pinyin: "lvyou",
        meaning: "Viajar / turismo",
        tones: [3, 2],
      },
      {
        hanzi: "计划",
        pinyin: "jihua",
        meaning: "Plan / planificar",
        tones: [4, 4],
      },
      {
        hanzi: "希望",
        pinyin: "xiwang",
        meaning: "Esperar / desear",
        tones: [1, 4],
      },
      {
        hanzi: "周末",
        pinyin: "zhoumo",
        meaning: "Fin de semana",
        tones: [1, 4],
      },
      {
        hanzi: "假期",
        pinyin: "jiaqi",
        meaning: "Vacaciones / periodo de descanso",
        tones: [4, 1],
      },
    ],
    grammar: [
      {
        title: "打算 + verbo: expresar planes",
        explanation:
          "打算 (dasuan) significa 'planear' o 'tener la intencion de'. Se usa para hablar de planes futuros que ya has decidido. La estructura es: sujeto + 打算 + verbo + complemento. Por ejemplo: 我打算明天去北京 (wo dasuan mingtian qu Beijing) = planeo ir a Beijing manana. Es similar a 准备 (zhunbei), pero 打算 se enfoca mas en la intencion mientras que 准备 implica que ya estas preparandote activamente. 计划 (jihua) es mas formal y se usa para planes mas elaborados o a largo plazo.",
        examples: [
          {
            hanzi: "我打算学中文。",
            pinyin: "Wo dasuan xue Zhongwen.",
            meaning: "Planeo estudiar chino.",
          },
          {
            hanzi: "你打算什么时候去？",
            pinyin: "Ni dasuan shenme shihou qu?",
            meaning: "Cuando planeas ir?",
          },
          {
            hanzi: "他们打算明年结婚。",
            pinyin: "Tamen dasuan mingnian jiehun.",
            meaning: "Ellos planean casarse el proximo ano.",
          },
        ],
      },
      {
        title: "要...了 (yao...le): algo esta por suceder",
        explanation:
          "La estructura 要...了 (yao...le) indica que algo esta a punto de suceder o va a ocurrir pronto. 要 se coloca antes del verbo y 了 al final. Es como decir 'ya va a...' o 'esta por...' en espanol. Por ejemplo: 要下雨了 (yao xiayu le) = va a llover. 我们要放假了 (women yao fangjia le) = ya vamos a tener vacaciones. Esta estructura transmite inmediatez, algo que sucedera muy pronto. Tambien puedes usar 快要...了 (kuaiyao...le) para enfatizar aun mas que es inminente: 快要下课了 = la clase esta por terminar.",
        examples: [
          {
            hanzi: "要下雨了。",
            pinyin: "Yao xiayu le.",
            meaning: "Va a llover.",
          },
          {
            hanzi: "我们要放假了！",
            pinyin: "Women yao fangjia le!",
            meaning: "Ya vamos a tener vacaciones!",
          },
          {
            hanzi: "飞机要起飞了。",
            pinyin: "Feiji yao qifei le.",
            meaning: "El avion esta por despegar.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Las 'Semanas Doradas' de China",
        content:
          "China tiene dos periodos vacacionales masivos llamados 黄金周 (huangjinzhou, Semana Dorada). El primero es durante el Ano Nuevo Chino (春节 Chunjie), generalmente en enero o febrero, cuando practicamente todo el pais se detiene durante una o dos semanas. Es la migracion humana mas grande del mundo: cientos de millones de personas viajan a sus ciudades natales para reunirse con sus familias. El segundo es la Semana Nacional (国庆节 Guoqingjie) del 1 al 7 de octubre. Durante estas semanas, los lugares turisticos estan absolutamente abarrotados. El Muro de la Muralla China puede tener filas de horas para entrar. Los trenes y aviones se agotan con semanas de anticipacion. Si planeas viajar a China, evita estas fechas a toda costa, a menos que quieras experimentar las multitudes chinas en su maxima expresion. Los precios de hoteles y vuelos suben drasticamente durante estos periodos.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Planeo ir de viaje'?",
        options: [
          "我希望旅游",
          "我打算去旅游",
          "我准备放假",
          "我计划工作",
        ],
        correctAnswer: 1,
        explanation:
          "我打算去旅游 (wo dasuan qu lvyou) = planeo ir de viaje. 打算 + verbo expresa planes.",
      },
      {
        type: "fill-blank",
        question: "要下雨___。(Va a llover.)",
        options: ["吗", "了", "呢", "吧"],
        correctAnswer: "了",
        explanation:
          "要...了 indica que algo esta por suceder. 要下雨了 = va a llover (pronto).",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Que planeas hacer el fin de semana?': 做 / 打算 / 周末 / 你 / 什么",
        options: ["周末", "你", "打算", "做", "什么"],
        correctAnswer: "周末你打算做什么",
        explanation:
          "El orden es: tiempo + sujeto + 打算 + verbo + que. Fin de semana + tu + planear + hacer + que.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'vacaciones'?",
        options: ["周末", "假期", "计划", "旅游"],
        correctAnswer: 1,
        explanation:
          "假期 (jiaqi) = vacaciones / periodo de descanso. 假 = descanso/libre, 期 = periodo.",
      },
      {
        type: "match",
        question: "Que significa 希望?",
        options: ["Planear", "Preparar", "Esperar/desear", "Viajar"],
        correctAnswer: 2,
        explanation:
          "希望 (xiwang) = esperar/desear. Expresa un deseo o esperanza sobre algo futuro.",
      },
    ],
  },

  // ========================================================================
  // LECCION 23: EXPERIENCIAS PASADAS
  // ========================================================================
  {
    id: 23,
    moduleId: 1,
    title: "Experiencias pasadas",
    description:
      "Aprende a hablar sobre experiencias pasadas en chino: lugares que has visitado, cosas que has probado y recuerdos. Domina la particula 过 para hablar de lo que has vivido.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你去过中国吗？",
        pinyin: "Ni quguo Zhongguo ma?",
        meaning: "Has ido a China?",
      },
      {
        speaker: "B",
        hanzi: "去过，我以前去过北京和上海。",
        pinyin: "Quguo, wo yiqian quguo Beijing he Shanghai.",
        meaning: "Si, antes fui a Beijing y Shanghai.",
      },
      {
        speaker: "A",
        hanzi: "你吃过北京烤鸭吗？",
        pinyin: "Ni chiguo Beijing kaoya ma?",
        meaning: "Has comido pato laqueado de Beijing?",
      },
      {
        speaker: "B",
        hanzi: "吃过！那是我第一次吃，非常有趣。",
        pinyin: "Chiguo! Na shi wo diyici chi, feichang youqu.",
        meaning: "Si! Fue mi primera vez comiendolo, muy divertido.",
      },
      {
        speaker: "A",
        hanzi: "你还记得那个经历吗？",
        pinyin: "Ni hai jide nage jingli ma?",
        meaning: "Todavia recuerdas esa experiencia?",
      },
      {
        speaker: "B",
        hanzi: "当然记得，我忘不了！是在北京吃的。",
        pinyin: "Dangran jide, wo wang bu liao! Shi zai Beijing chi de.",
        meaning: "Claro que recuerdo, no lo puedo olvidar! Fue en Beijing donde lo comi.",
      },
    ],
    vocabulary: [
      {
        hanzi: "以前",
        pinyin: "yiqian",
        meaning: "Antes / anteriormente",
        tones: [3, 2],
      },
      {
        hanzi: "经历",
        pinyin: "jingli",
        meaning: "Experiencia / vivencia",
        tones: [1, 4],
      },
      {
        hanzi: "去过",
        pinyin: "quguo",
        meaning: "Haber ido (a algun lugar)",
        tones: [4, 4],
      },
      {
        hanzi: "吃过",
        pinyin: "chiguo",
        meaning: "Haber comido / haber probado",
        tones: [1, 4],
      },
      {
        hanzi: "第一次",
        pinyin: "diyici",
        meaning: "Primera vez",
        tones: [4, 1, 4],
      },
      {
        hanzi: "忘了",
        pinyin: "wang le",
        meaning: "Olvidar / se olvido",
        tones: [4, 0],
      },
      {
        hanzi: "记得",
        pinyin: "jide",
        meaning: "Recordar / acordarse",
        tones: [4, 2],
      },
      {
        hanzi: "有趣",
        pinyin: "youqu",
        meaning: "Interesante / divertido",
        tones: [3, 4],
      },
    ],
    grammar: [
      {
        title: "Verbo + 过 (guo): hablar de experiencias",
        explanation:
          "La particula 过 (guo) se coloca despues de un verbo para indicar que has tenido la experiencia de hacer algo alguna vez en tu vida. Es similar a decir 'he hecho...' o 'alguna vez he...' en espanol. La estructura es: sujeto + verbo + 过 + objeto. Por ejemplo: 我去过中国 (wo quguo Zhongguo) = he ido a China (alguna vez). La negacion es 没 + verbo + 过: 我没去过日本 (wo mei quguo Riben) = nunca he ido a Japon. Para preguntar: 你吃过寿司吗？(ni chiguo shousi ma?) = has comido sushi alguna vez? Es importante distinguir 过 de 了: 过 habla de la experiencia en general, mientras que 了 se refiere a una accion completada especifica.",
        examples: [
          {
            hanzi: "我去过北京。",
            pinyin: "Wo quguo Beijing.",
            meaning: "He ido a Beijing (alguna vez).",
          },
          {
            hanzi: "你看过这个电影吗？",
            pinyin: "Ni kanguo zhege dianying ma?",
            meaning: "Has visto esta pelicula?",
          },
          {
            hanzi: "我没吃过四川菜。",
            pinyin: "Wo mei chiguo Sichuan cai.",
            meaning: "Nunca he comido comida de Sichuan.",
          },
        ],
      },
      {
        title: "是...的 (shi...de): enfatizar cuando/donde/como",
        explanation:
          "La estructura 是...的 (shi...de) se usa para enfatizar un detalle especifico de una accion pasada, como cuando ocurrio, donde ocurrio, como ocurrio o con quien. El detalle que quieres enfatizar va entre 是 y 的. Por ejemplo: 我是在北京吃的 (wo shi zai Beijing chi de) = fue en Beijing donde comi (enfatiza el lugar). 我是去年来的 (wo shi qunian lai de) = fue el ano pasado cuando vine (enfatiza el tiempo). Es una estructura muy comun cuando ya se sabe que algo paso y quieres dar detalles especificos. A menudo 是 se puede omitir y la oracion mantiene su significado.",
        examples: [
          {
            hanzi: "我是去年去的中国。",
            pinyin: "Wo shi qunian qu de Zhongguo.",
            meaning: "Fue el ano pasado cuando fui a China.",
          },
          {
            hanzi: "你是怎么来的？",
            pinyin: "Ni shi zenme lai de?",
            meaning: "Como viniste? (enfatiza el medio)",
          },
          {
            hanzi: "我是和朋友一起去的。",
            pinyin: "Wo shi he pengyou yiqi qu de.",
            meaning: "Fui con amigos (enfatiza con quien).",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Compartir experiencias: la cultura de 'probar cosas' en China",
        content:
          "En la cultura china, haber 'experimentado' o 'probado' cosas es muy valorado. Los chinos adoran preguntar '你吃过...吗？' (has comido...?) y '你去过...吗？' (has ido a...?) como forma de conversacion. Si dices que nunca has probado algo, especialmente comida, un chino se sentira casi obligado a que lo pruebes. La hospitalidad china se manifiesta fuertemente en compartir experiencias gastronomicas. 北京烤鸭 (Beijing kaoya, pato laqueado de Beijing) es una de las experiencias culinarias mas iconicas: el pato se cocina colgado en un horno especial y se sirve con tortillas finas, cebolleta y salsa hoisin. Otra tradicion muy china es que al viajar, siempre debes traer 特产 (techan, productos locales/recuerdos tipicos) para regalarselos a amigos, familia y colegas. No hacerlo se considera descortes.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como preguntas 'Has ido a China?'",
        options: [
          "你去中国吗？",
          "你去过中国吗？",
          "你在中国吗？",
          "你要去中国吗？",
        ],
        correctAnswer: 1,
        explanation:
          "你去过中国吗？usa 过 despues del verbo para preguntar sobre la experiencia de haber ido.",
      },
      {
        type: "fill-blank",
        question: "我没吃___寿司。(Nunca he comido sushi.)",
        options: ["了", "过", "的", "着"],
        correctAnswer: "过",
        explanation:
          "没 + verbo + 过 = nunca he hecho algo. 过 indica experiencia de vida.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Fue el ano pasado cuando fui': 去年 / 的 / 我 / 去 / 是",
        options: ["我", "是", "去年", "去", "的"],
        correctAnswer: "我是去年去的",
        explanation:
          "La estructura 是...的 enfatiza un detalle. Aqui enfatiza cuando: fue el ano pasado.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'recordar'?",
        options: ["忘了", "记得", "经历", "以前"],
        correctAnswer: 1,
        explanation:
          "记得 (jide) = recordar/acordarse. Es lo opuesto de 忘 (wang) = olvidar.",
      },
      {
        type: "match",
        question: "Que significa 第一次?",
        options: ["Ultima vez", "Primera vez", "Muchas veces", "A veces"],
        correctAnswer: 1,
        explanation:
          "第一次 (diyici) = primera vez. 第一 = primero, 次 = vez.",
      },
    ],
  },

  // ========================================================================
  // LECCION 24: EN EL HOTEL
  // ========================================================================
  {
    id: 24,
    moduleId: 1,
    title: "En el hotel",
    description:
      "Aprende a registrarte en un hotel, pedir cosas a la recepcion y resolver problemas con tu habitacion en chino. Vocabulario indispensable para cualquier viajero.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好，我有预订。",
        pinyin: "Ni hao, wo you yuding.",
        meaning: "Hola, tengo una reservacion.",
      },
      {
        speaker: "B",
        hanzi: "好的，请给我看一下您的护照。这是您的房间钥匙。",
        pinyin: "Hao de, qing gei wo kan yixia nin de huzhao. Zhe shi nin de fangjian yaoshi.",
        meaning: "De acuerdo, por favor muestreme su pasaporte. Esta es la llave de su habitacion.",
      },
      {
        speaker: "A",
        hanzi: "请问，房间有没有空调？",
        pinyin: "Qingwen, fangjian you meiyou kongtiao?",
        meaning: "Disculpe, la habitacion tiene aire acondicionado?",
      },
      {
        speaker: "B",
        hanzi: "有的，也有热水。电梯在右边。",
        pinyin: "You de, ye you reshui. Dianti zai youbian.",
        meaning: "Si, tambien tiene agua caliente. El elevador esta a la derecha.",
      },
      {
        speaker: "A",
        hanzi: "我可以把行李放在这里吗？",
        pinyin: "Wo keyi ba xingli fang zai zheli ma?",
        meaning: "Puedo dejar mi equipaje aqui?",
      },
      {
        speaker: "B",
        hanzi: "可以。退房时间是明天中午十二点。",
        pinyin: "Keyi. Tuifang shijian shi mingtian zhongwu shi'er dian.",
        meaning: "Si. La hora de check-out es manana a las doce del mediodia.",
      },
    ],
    vocabulary: [
      {
        hanzi: "预订",
        pinyin: "yuding",
        meaning: "Reservar / reservacion",
        tones: [4, 4],
      },
      {
        hanzi: "房间",
        pinyin: "fangjian",
        meaning: "Habitacion / cuarto",
        tones: [2, 1],
      },
      {
        hanzi: "钥匙",
        pinyin: "yaoshi",
        meaning: "Llave",
        tones: [4, 0],
      },
      {
        hanzi: "电梯",
        pinyin: "dianti",
        meaning: "Elevador / ascensor",
        tones: [4, 1],
      },
      {
        hanzi: "空调",
        pinyin: "kongtiao",
        meaning: "Aire acondicionado",
        tones: [1, 2],
      },
      {
        hanzi: "热水",
        pinyin: "reshui",
        meaning: "Agua caliente",
        tones: [4, 3],
      },
      {
        hanzi: "退房",
        pinyin: "tuifang",
        meaning: "Check-out / dejar la habitacion",
        tones: [4, 2],
      },
      {
        hanzi: "行李",
        pinyin: "xingli",
        meaning: "Equipaje / maletas",
        tones: [2, 3],
      },
    ],
    grammar: [
      {
        title: "有没有 (you meiyou): preguntar si hay o si tiene",
        explanation:
          "有没有 (you meiyou) es una forma muy comun de hacer preguntas de si/no en chino. Literalmente significa 'hay o no hay' / 'tiene o no tiene'. Se usa para preguntar si algo existe o si alguien tiene algo. La estructura es: sujeto + 有没有 + objeto. Por ejemplo: 你有没有钱？(ni you meiyou qian?) = tienes dinero? 房间有没有空调？(fangjian you meiyou kongtiao?) = la habitacion tiene aire acondicionado? Esta forma es una alternativa a usar 吗: 你有钱吗？ y 你有没有钱？ significan lo mismo. La respuesta afirmativa es 有 (you) y la negativa es 没有 (meiyou).",
        examples: [
          {
            hanzi: "你有没有护照？",
            pinyin: "Ni you meiyou huzhao?",
            meaning: "Tienes pasaporte?",
          },
          {
            hanzi: "酒店有没有WiFi？",
            pinyin: "Jiudian you meiyou WiFi?",
            meaning: "El hotel tiene WiFi?",
          },
          {
            hanzi: "附近有没有饭馆？",
            pinyin: "Fujin you meiyou fanguan?",
            meaning: "Hay restaurantes cerca?",
          },
        ],
      },
      {
        title: "可以...吗？(keyi...ma): pedir permiso",
        explanation:
          "可以 (keyi) significa 'poder' en el sentido de tener permiso. 可以...吗？ se usa para pedir permiso educadamente, como decir 'puedo...?' en espanol. La estructura es: 我可以 + verbo + 吗？Por ejemplo: 我可以坐这里吗？(wo keyi zuo zheli ma?) = puedo sentarme aqui? La respuesta afirmativa es simplemente 可以 (si, puedes) y la negativa es 不可以 (bu keyi, no puedes) o de forma mas suave 不行 (buxing, no se puede). Ten en cuenta que 可以 es diferente de 能 (neng), que se refiere mas a la capacidad fisica o habilidad.",
        examples: [
          {
            hanzi: "我可以看一下房间吗？",
            pinyin: "Wo keyi kan yixia fangjian ma?",
            meaning: "Puedo ver la habitacion?",
          },
          {
            hanzi: "可以用信用卡吗？",
            pinyin: "Keyi yong xinyongka ma?",
            meaning: "Puedo usar tarjeta de credito?",
          },
          {
            hanzi: "我可以晚一点退房吗？",
            pinyin: "Wo keyi wan yidian tuifang ma?",
            meaning: "Puedo hacer el check-out un poco mas tarde?",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Hoteles en China: lo que debes saber",
        content:
          "Los hoteles en China tienen algunas particularidades que sorprenden a los viajeros. Primero, todos los hoteles por ley deben registrar a los huespedes extranjeros y reportarlos a la policia local en un plazo de 24 horas, asi que siempre te pediran el pasaporte. No todos los hoteles aceptan extranjeros; algunos hoteles economicos solo pueden alojar a ciudadanos chinos. Los hoteles chinos siempre proporcionan agua caliente, tanto en el bano como un termo electrico en la habitacion para hervir agua. Los chinos casi nunca beben agua fria; siempre beben agua caliente o tibia (热水 reshui o 开水 kaishui), ya que segun la medicina tradicional china, el agua fria es mala para la salud. Las habitaciones suelen tener zapatillas desechables, cepillo y pasta de dientes, y te verde. Si necesitas algo, puedes llamar al 前台 (qiantai, recepcion). Un dato curioso: muchos hoteles chinos no tienen piso 4, porque el numero 4 (四 si) suena similar a 'muerte' (死 si), por lo que se considera de mala suerte.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como preguntas 'La habitacion tiene aire acondicionado?'",
        options: [
          "房间是空调吗？",
          "房间有没有空调？",
          "房间在哪里？",
          "房间多少钱？",
        ],
        correctAnswer: 1,
        explanation:
          "房间有没有空调？(fangjian you meiyou kongtiao?) usa la estructura 有没有 para preguntar si hay algo.",
      },
      {
        type: "fill-blank",
        question: "我___坐这里吗？(Puedo sentarme aqui?)",
        options: ["会", "能", "可以", "要"],
        correctAnswer: "可以",
        explanation:
          "可以 (keyi) se usa para pedir permiso. 可以...吗？= Puedo...?",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Tengo una reservacion': 有 / 我 / 预订",
        options: ["我", "有", "预订"],
        correctAnswer: "我有预订",
        explanation:
          "El orden es: sujeto + 有 + objeto. Yo + tener + reservacion.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'llave'?",
        options: ["房间", "钥匙", "电梯", "行李"],
        correctAnswer: 1,
        explanation:
          "钥匙 (yaoshi) = llave. Es indispensable en un hotel.",
      },
      {
        type: "match",
        question: "Que significa 退房?",
        options: ["Check-in", "Check-out", "Reservar", "Cancelar"],
        correctAnswer: 1,
        explanation:
          "退房 (tuifang) = check-out / dejar la habitacion. 退 = devolver/salir, 房 = habitacion.",
      },
    ],
  },

  // ========================================================================
  // LECCION 25: VIAJAR POR CHINA
  // ========================================================================
  {
    id: 25,
    moduleId: 1,
    title: "Viajar por China",
    description:
      "Aprende vocabulario y frases esenciales para viajar por China: comprar boletos de tren, visitar atracciones turisticas, pedir un mapa y mas. Todo lo que necesitas para moverte por el pais.",
    dialog: [
      {
        speaker: "A",
        hanzi: "我想买两张去西安的火车票。",
        pinyin: "Wo xiang mai liang zhang qu Xi'an de huochepiao.",
        meaning: "Quiero comprar dos boletos de tren a Xi'an.",
      },
      {
        speaker: "B",
        hanzi: "你要坐高铁吗？从北京到西安四个小时。",
        pinyin: "Ni yao zuo gaotie ma? Cong Beijing dao Xi'an si ge xiaoshi.",
        meaning: "Quieres tomar el tren bala? De Beijing a Xi'an son cuatro horas.",
      },
      {
        speaker: "A",
        hanzi: "好的。西安有什么景点？",
        pinyin: "Hao de. Xi'an you shenme jingdian?",
        meaning: "De acuerdo. Que atracciones turisticas tiene Xi'an?",
      },
      {
        speaker: "B",
        hanzi: "兵马俑很有名。你需要地图吗？",
        pinyin: "Bingmayong hen youming. Ni xuyao ditu ma?",
        meaning: "Los Guerreros de Terracota son muy famosos. Necesitas un mapa?",
      },
      {
        speaker: "A",
        hanzi: "要，我也想找一个导游。还想买纪念品。",
        pinyin: "Yao, wo ye xiang zhao yige daoyou. Hai xiang mai jinianpin.",
        meaning: "Si, tambien quiero encontrar un guia turistico. Y comprar souvenirs.",
      },
      {
        speaker: "B",
        hanzi: "别忘了带签证和护照，还要多照相！",
        pinyin: "Bie wang le dai qianzheng he huzhao, hai yao duo zhaoxiang!",
        meaning: "No olvides llevar tu visa y pasaporte, y toma muchas fotos!",
      },
    ],
    vocabulary: [
      {
        hanzi: "火车票",
        pinyin: "huochepiao",
        meaning: "Boleto de tren",
        tones: [3, 1, 4],
      },
      {
        hanzi: "高铁",
        pinyin: "gaotie",
        meaning: "Tren bala / tren de alta velocidad",
        tones: [1, 3],
      },
      {
        hanzi: "景点",
        pinyin: "jingdian",
        meaning: "Atraccion turistica / sitio de interes",
        tones: [3, 3],
      },
      {
        hanzi: "地图",
        pinyin: "ditu",
        meaning: "Mapa",
        tones: [4, 2],
      },
      {
        hanzi: "导游",
        pinyin: "daoyou",
        meaning: "Guia turistico",
        tones: [3, 2],
      },
      {
        hanzi: "照相",
        pinyin: "zhaoxiang",
        meaning: "Tomar fotos / fotografiar",
        tones: [4, 4],
      },
      {
        hanzi: "纪念品",
        pinyin: "jinianpin",
        meaning: "Souvenir / recuerdo",
        tones: [4, 4, 3],
      },
      {
        hanzi: "签证",
        pinyin: "qianzheng",
        meaning: "Visa",
        tones: [1, 4],
      },
    ],
    grammar: [
      {
        title: "从...到... (cong...dao...): de un lugar a otro",
        explanation:
          "La estructura 从...到... (cong...dao...) se usa para expresar 'desde...hasta...' o 'de...a...', tanto para lugares como para tiempos. 从 (cong) = desde/de, 到 (dao) = hasta/a. Para distancias: 从北京到上海 (cong Beijing dao Shanghai) = de Beijing a Shanghai. Para tiempo: 从九点到五点 (cong jiu dian dao wu dian) = de las nueve a las cinco. Es una estructura indispensable para hablar de viajes, rutas y horarios. Puedes combinarla con medios de transporte: 从这里到机场坐出租车要三十分钟 = de aqui al aeropuerto en taxi toma treinta minutos.",
        examples: [
          {
            hanzi: "从北京到西安坐高铁。",
            pinyin: "Cong Beijing dao Xi'an zuo gaotie.",
            meaning: "De Beijing a Xi'an se toma el tren bala.",
          },
          {
            hanzi: "从这里到火车站远吗？",
            pinyin: "Cong zheli dao huochezhan yuan ma?",
            meaning: "De aqui a la estacion de tren esta lejos?",
          },
          {
            hanzi: "从早上到晚上都在旅游。",
            pinyin: "Cong zaoshang dao wanshang dou zai lvyou.",
            meaning: "Desde la manana hasta la noche estuvimos de turismo.",
          },
        ],
      },
      {
        title: "多长时间 (duo chang shijian): preguntar cuanto tiempo",
        explanation:
          "多长时间 (duo chang shijian) significa 'cuanto tiempo'. Se usa para preguntar la duracion de algo: un viaje, una actividad, una espera, etc. La estructura para preguntar es: verbo + 多长时间？Por ejemplo: 坐高铁要多长时间？(zuo gaotie yao duo chang shijian?) = cuanto tiempo toma en tren bala? Para responder, das el tiempo directamente: 四个小时 (si ge xiaoshi) = cuatro horas. Tambien puedes usar la version corta 多久 (duojiu) con el mismo significado: 要多久？= cuanto tiempo toma?",
        examples: [
          {
            hanzi: "从这里到机场要多长时间？",
            pinyin: "Cong zheli dao jichang yao duo chang shijian?",
            meaning: "De aqui al aeropuerto cuanto tiempo toma?",
          },
          {
            hanzi: "你学中文学了多长时间？",
            pinyin: "Ni xue Zhongwen xue le duo chang shijian?",
            meaning: "Cuanto tiempo llevas estudiando chino?",
          },
          {
            hanzi: "坐飞机要十二个小时。",
            pinyin: "Zuo feiji yao shi'er ge xiaoshi.",
            meaning: "En avion toma doce horas.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El tren bala chino: una maravilla de la ingenieria",
        content:
          "La red de trenes bala de China (高铁 gaotie) es la mas extensa del mundo, con mas de 40,000 kilometros de vias. Los trenes alcanzan velocidades de hasta 350 km/h y conectan practicamente todas las ciudades importantes del pais. Es la forma preferida de viajar para distancias medias (300-1500 km) porque es mas rapido que volar si cuentas el tiempo en el aeropuerto, y mucho mas comodo. Los boletos se pueden comprar en la app 12306 (la app oficial), en las estaciones o a traves de apps como Ctrip/Trip.com. Necesitas tu pasaporte para comprar y abordar. Las estaciones de tren bala son enormes y modernas, parecidas a aeropuertos. Hay tres clases: segunda clase (二等座 erdengzuo), primera clase (一等座 yidengzuo) y clase de negocios (商务座 shangwuzuo). La segunda clase es comoda y la mas popular. Un viaje Beijing-Shanghai (1,300 km) toma solo 4.5 horas y cuesta aproximadamente 550 yuan (unos 75 dolares).",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'De Beijing a Shanghai'?",
        options: [
          "北京和上海",
          "从北京到上海",
          "在北京在上海",
          "去北京去上海",
        ],
        correctAnswer: 1,
        explanation:
          "从北京到上海 (cong Beijing dao Shanghai) = de Beijing a Shanghai. 从...到... = de...a...",
      },
      {
        type: "fill-blank",
        question: "坐高铁要___长时间？(Cuanto tiempo toma en tren bala?)",
        options: ["几", "多", "什么", "哪"],
        correctAnswer: "多",
        explanation:
          "多长时间 (duo chang shijian) = cuanto tiempo. 多 aqui significa 'que tan' o 'cuanto'.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Quiero comprar un boleto de tren': 火车票 / 我 / 买 / 想",
        options: ["我", "想", "买", "火车票"],
        correctAnswer: "我想买火车票",
        explanation:
          "El orden es: sujeto + 想 + verbo + objeto. Yo + querer + comprar + boleto de tren.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'mapa'?",
        options: ["签证", "地图", "导游", "景点"],
        correctAnswer: 1,
        explanation:
          "地图 (ditu) = mapa. 地 = tierra/lugar, 图 = imagen/grafico.",
      },
      {
        type: "match",
        question: "Que significa 纪念品?",
        options: ["Boleto", "Visa", "Souvenir", "Mapa"],
        correctAnswer: 2,
        explanation:
          "纪念品 (jinianpin) = souvenir/recuerdo. 纪念 = conmemorar, 品 = articulo.",
      },
    ],
  },

  // ========================================================================
  // LECCION 26: CUERPO Y SALUD
  // ========================================================================
  {
    id: 26,
    moduleId: 1,
    title: "Cuerpo y salud",
    description:
      "Aprende a hablar sobre habitos saludables, ejercicio, nutricion y el cuidado del cuerpo en chino. Vocabulario para mantener un estilo de vida sano.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你的身体很健康，你有什么习惯？",
        pinyin: "Ni de shenti hen jiankang, ni you shenme xiguan?",
        meaning: "Tu cuerpo es muy saludable, que habitos tienes?",
      },
      {
        speaker: "B",
        hanzi: "我每天锻炼，有时候跑步，有时候游泳。",
        pinyin: "Wo meitian duanlian, youshihou paobu, youshihou youyong.",
        meaning: "Hago ejercicio todos los dias, a veces corro, a veces nado.",
      },
      {
        speaker: "A",
        hanzi: "运动对身体很好。你也早睡吗？",
        pinyin: "Yundong dui shenti hen hao. Ni ye zaoshui ma?",
        meaning: "El ejercicio es bueno para el cuerpo. Tambien duermes temprano?",
      },
      {
        speaker: "B",
        hanzi: "对，我每天十点睡觉。你应该多锻炼。",
        pinyin: "Dui, wo meitian shi dian shuijiao. Ni yinggai duo duanlian.",
        meaning: "Si, duermo a las diez todos los dias. Tu deberias hacer mas ejercicio.",
      },
      {
        speaker: "A",
        hanzi: "我想减肥，但是很难坚持。",
        pinyin: "Wo xiang jianfei, danshi hen nan jianchi.",
        meaning: "Quiero bajar de peso, pero es dificil mantenerlo.",
      },
      {
        speaker: "B",
        hanzi: "注意营养也很重要，不要只靠运动。",
        pinyin: "Zhuyi yingyang ye hen zhongyao, buyao zhi kao yundong.",
        meaning: "Prestar atencion a la nutricion tambien es muy importante, no dependas solo del ejercicio.",
      },
    ],
    vocabulary: [
      {
        hanzi: "身体",
        pinyin: "shenti",
        meaning: "Cuerpo",
        tones: [1, 3],
      },
      {
        hanzi: "健康",
        pinyin: "jiankang",
        meaning: "Saludable / salud",
        tones: [4, 1],
      },
      {
        hanzi: "锻炼",
        pinyin: "duanlian",
        meaning: "Ejercitarse / hacer ejercicio",
        tones: [4, 4],
      },
      {
        hanzi: "跑步",
        pinyin: "paobu",
        meaning: "Correr",
        tones: [3, 4],
      },
      {
        hanzi: "早睡",
        pinyin: "zaoshui",
        meaning: "Dormir temprano",
        tones: [3, 4],
      },
      {
        hanzi: "减肥",
        pinyin: "jianfei",
        meaning: "Bajar de peso / hacer dieta",
        tones: [3, 2],
      },
      {
        hanzi: "营养",
        pinyin: "yingyang",
        meaning: "Nutricion",
        tones: [2, 3],
      },
      {
        hanzi: "习惯",
        pinyin: "xiguan",
        meaning: "Habito / costumbre",
        tones: [2, 4],
      },
    ],
    grammar: [
      {
        title: "对...好/不好 (dui...hao/bu hao): bueno o malo para algo",
        explanation:
          "La estructura 对...好 (dui...hao) significa 'bueno para...' y 对...不好 (dui...bu hao) significa 'malo para...'. Se usa para expresar si algo es beneficioso o perjudicial. La estructura completa es: A + 对 + B + 好/不好. Por ejemplo: 运动对身体好 (yundong dui shenti hao) = el ejercicio es bueno para el cuerpo. 吸烟对健康不好 (xiyan dui jiankang bu hao) = fumar es malo para la salud. 对 funciona como 'para' o 'respecto a'. Puedes usar esta estructura para dar consejos de salud, hablar de habitos y recomendar actividades.",
        examples: [
          {
            hanzi: "运动对身体很好。",
            pinyin: "Yundong dui shenti hen hao.",
            meaning: "El ejercicio es muy bueno para el cuerpo.",
          },
          {
            hanzi: "吃太多糖对牙齿不好。",
            pinyin: "Chi tai duo tang dui yachi bu hao.",
            meaning: "Comer demasiada azucar es malo para los dientes.",
          },
          {
            hanzi: "早睡对健康很好。",
            pinyin: "Zaoshui dui jiankang hen hao.",
            meaning: "Dormir temprano es muy bueno para la salud.",
          },
        ],
      },
      {
        title: "应该 + verbo (yinggai): expresar 'deberia'",
        explanation:
          "应该 (yinggai) significa 'deberia' o 'deberia de'. Se coloca antes del verbo para expresar una recomendacion, un consejo o algo que se espera que hagas. La estructura es: sujeto + 应该 + verbo. Por ejemplo: 你应该多喝水 (ni yinggai duo he shui) = deberias beber mas agua. La negacion es 不应该 (bu yinggai) = no deberia. 应该 es mas suave que 必须 (bixu, deber/tener que) y mas fuerte que 可以 (keyi, poder). Se usa mucho para dar consejos sobre salud, comportamiento y decisiones de vida.",
        examples: [
          {
            hanzi: "你应该多休息。",
            pinyin: "Ni yinggai duo xiuxi.",
            meaning: "Deberias descansar mas.",
          },
          {
            hanzi: "我们应该每天锻炼。",
            pinyin: "Women yinggai meitian duanlian.",
            meaning: "Deberiamos hacer ejercicio todos los dias.",
          },
          {
            hanzi: "你不应该吃太多。",
            pinyin: "Ni bu yinggai chi tai duo.",
            meaning: "No deberias comer demasiado.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Salud y bienestar a la manera china",
        content:
          "La cultura china tiene una relacion muy especial con la salud y el bienestar. La medicina tradicional china (中医 zhongyi) tiene miles de anos de historia y sigue siendo muy relevante. Conceptos como el 气 (qi, energia vital) y el equilibrio entre 阴 (yin) y 阳 (yang) guian muchas decisiones de salud cotidianas. Los chinos creen firmemente que los alimentos pueden ser 'calientes' o 'frios' (no en temperatura sino en naturaleza), y que hay que mantener un equilibrio. Por ejemplo, si comes mucha comida 'caliente' como el picante, necesitas equilibrar con algo 'frio' como te verde. El agua caliente (热水 reshui) se considera curativa; si le dices a un chino que estas enfermo, lo primero que te dira es '多喝热水' (duo he reshui, bebe mas agua caliente). Cada manana, en los parques de China, podras ver a miles de personas mayores practicando 太极 (taiji, tai chi), haciendo ejercicios de estiramiento o caminando hacia atras (se cree que es bueno para la espalda).",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'El ejercicio es bueno para el cuerpo'?",
        options: [
          "运动是身体",
          "运动对身体很好",
          "运动和身体好",
          "运动在身体好",
        ],
        correctAnswer: 1,
        explanation:
          "运动对身体很好 usa la estructura 对...好 para decir que algo es bueno para algo.",
      },
      {
        type: "fill-blank",
        question: "你___多喝水。(Deberias beber mas agua.)",
        options: ["可以", "应该", "想要", "喜欢"],
        correctAnswer: "应该",
        explanation:
          "应该 (yinggai) = deberia. Se usa para dar consejos y recomendaciones.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Hago ejercicio todos los dias': 锻炼 / 我 / 每天",
        options: ["我", "每天", "锻炼"],
        correctAnswer: "我每天锻炼",
        explanation:
          "El orden es: sujeto + tiempo + verbo. Yo + todos los dias + ejercitarse.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'bajar de peso'?",
        options: ["锻炼", "减肥", "跑步", "健康"],
        correctAnswer: 1,
        explanation:
          "减肥 (jianfei) = bajar de peso / hacer dieta. 减 = reducir, 肥 = grasa.",
      },
      {
        type: "match",
        question: "Que significa 习惯?",
        options: ["Ejercicio", "Nutricion", "Habito/costumbre", "Salud"],
        correctAnswer: 2,
        explanation:
          "习惯 (xiguan) = habito/costumbre. Puede ser verbo (acostumbrarse) o sustantivo (habito).",
      },
    ],
  },

  // ========================================================================
  // LECCION 27: EN LA ESCUELA
  // ========================================================================
  {
    id: 27,
    moduleId: 1,
    title: "En la escuela",
    description:
      "Aprende vocabulario y frases sobre la vida escolar en chino: clases, examenes, tareas y calificaciones. Ideal para estudiantes o para hablar sobre tu experiencia educativa.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你今天有几节课？",
        pinyin: "Ni jintian you ji jie ke?",
        meaning: "Cuantas clases tienes hoy?",
      },
      {
        speaker: "B",
        hanzi: "四节课。虽然很多，但是我很喜欢。",
        pinyin: "Si jie ke. Suiran hen duo, danshi wo hen xihuan.",
        meaning: "Cuatro clases. Aunque son muchas, me gustan mucho.",
      },
      {
        speaker: "A",
        hanzi: "明天有考试，你复习了吗？",
        pinyin: "Mingtian you kaoshi, ni fuxi le ma?",
        meaning: "Manana hay examen, ya repasaste?",
      },
      {
        speaker: "B",
        hanzi: "还没有，我先要做完作业。",
        pinyin: "Hai meiyou, wo xian yao zuowan zuoye.",
        meaning: "Todavia no, primero necesito terminar la tarea.",
      },
      {
        speaker: "A",
        hanzi: "快要期末考试了，你的成绩怎么样？",
        pinyin: "Kuaiyao qimo kaoshi le, ni de chengji zenmeyang?",
        meaning: "Ya casi son los examenes finales, como van tus calificaciones?",
      },
      {
        speaker: "B",
        hanzi: "还不错，我希望能及格，明年毕业。",
        pinyin: "Hai bucuo, wo xiwang neng jige, mingnian biye.",
        meaning: "No estan mal, espero poder aprobar y graduarme el proximo ano.",
      },
    ],
    vocabulary: [
      {
        hanzi: "上课",
        pinyin: "shangke",
        meaning: "Tener clase / asistir a clase",
        tones: [4, 4],
      },
      {
        hanzi: "下课",
        pinyin: "xiake",
        meaning: "Terminar la clase / salir de clase",
        tones: [4, 4],
      },
      {
        hanzi: "考试",
        pinyin: "kaoshi",
        meaning: "Examen / tomar un examen",
        tones: [3, 4],
      },
      {
        hanzi: "作业",
        pinyin: "zuoye",
        meaning: "Tarea / deberes",
        tones: [4, 4],
      },
      {
        hanzi: "复习",
        pinyin: "fuxi",
        meaning: "Repasar / revisar (para examen)",
        tones: [4, 2],
      },
      {
        hanzi: "成绩",
        pinyin: "chengji",
        meaning: "Calificaciones / notas",
        tones: [2, 4],
      },
      {
        hanzi: "及格",
        pinyin: "jige",
        meaning: "Aprobar (un examen)",
        tones: [2, 2],
      },
      {
        hanzi: "毕业",
        pinyin: "biye",
        meaning: "Graduarse",
        tones: [4, 4],
      },
    ],
    grammar: [
      {
        title: "快要...了 (kuaiyao...le): algo esta por ocurrir pronto",
        explanation:
          "快要...了 (kuaiyao...le) es una estructura que indica que algo esta a punto de suceder o va a pasar muy pronto. Es mas enfatica que 要...了 en cuanto a la inminencia. 快 (kuai) significa 'rapido/pronto' y refuerza la idea de que es inminente. La estructura es: 快要 + verbo/evento + 了. Por ejemplo: 快要下课了 (kuaiyao xiake le) = la clase esta por terminar. 快要下雨了 (kuaiyao xiayu le) = esta a punto de llover. Tambien puedes usar solo 快...了 sin 要: 快下课了 tiene el mismo significado. Esta estructura es muy usada en la vida cotidiana para avisar que algo va a suceder.",
        examples: [
          {
            hanzi: "快要下课了！",
            pinyin: "Kuaiyao xiake le!",
            meaning: "La clase esta por terminar!",
          },
          {
            hanzi: "快要考试了，你准备好了吗？",
            pinyin: "Kuaiyao kaoshi le, ni zhunbei hao le ma?",
            meaning: "Ya casi es el examen, estas listo?",
          },
          {
            hanzi: "他快要毕业了。",
            pinyin: "Ta kuaiyao biye le.",
            meaning: "El esta por graduarse.",
          },
        ],
      },
      {
        title: "虽然...但是... (suiran...danshi...): aunque...pero...",
        explanation:
          "虽然...但是... (suiran...danshi...) es la estructura para expresar concesion, equivalente a 'aunque...pero...' en espanol. En espanol normalmente decimos solo 'aunque' o solo 'pero', pero en chino es muy comun usar ambos juntos. La estructura es: 虽然 + situacion A, 但是 + situacion B. Por ejemplo: 虽然很难，但是很有意思 (suiran hen nan, danshi hen you yisi) = aunque es dificil, es muy interesante. A veces 虽然 puede ir al principio de la oracion y el sujeto despues, o al reves. 但是 se puede reemplazar por 可是 (keshi) con el mismo significado.",
        examples: [
          {
            hanzi: "虽然很难，但是我不放弃。",
            pinyin: "Suiran hen nan, danshi wo bu fangqi.",
            meaning: "Aunque es dificil, no me rindo.",
          },
          {
            hanzi: "虽然他很累，但是还在学习。",
            pinyin: "Suiran ta hen lei, danshi hai zai xuexi.",
            meaning: "Aunque esta cansado, sigue estudiando.",
          },
          {
            hanzi: "虽然考试很多，但是我喜欢上课。",
            pinyin: "Suiran kaoshi hen duo, danshi wo xihuan shangke.",
            meaning: "Aunque hay muchos examenes, me gusta ir a clases.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "El sistema educativo chino: exigencia y competencia",
        content:
          "El sistema educativo chino es conocido por ser extremadamente exigente y competitivo. El evento mas importante en la vida de un estudiante chino es el 高考 (gaokao), el examen nacional de ingreso a la universidad, que se realiza en junio. Este examen determina a que universidad puedes entrar y, en gran medida, tu futuro profesional. La presion es inmensa: los estudiantes de preparatoria estudian hasta 16 horas diarias durante el ultimo ano. Los padres chinos invierten enormes cantidades en educacion extra (补习班 buxiban, clases particulares). El concepto de 'padres tigre' (虎妈 huma) viene de China: padres que exigen excelencia academica absoluta. Las calificaciones se miden en un sistema de 100 puntos, y generalmente 60 es la calificacion minima para aprobar (及格). Los estudiantes suelen tener mucha tarea (作业 zuoye), incluyendo los fines de semana. Sin embargo, el gobierno chino ha estado implementando reformas recientes para reducir la presion academica sobre los ninos, como la politica de '双减' (shuangjian) que limita las clases particulares.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'La clase esta por terminar'?",
        options: [
          "上课了",
          "快要下课了",
          "我喜欢上课",
          "考试开始了",
        ],
        correctAnswer: 1,
        explanation:
          "快要下课了 (kuaiyao xiake le) = la clase esta por terminar. 快要...了 indica algo inminente.",
      },
      {
        type: "fill-blank",
        question: "___很难，但是很有意思。(Aunque es dificil, es muy interesante.)",
        options: ["因为", "虽然", "所以", "但是"],
        correctAnswer: "虽然",
        explanation:
          "虽然 (suiran) = aunque. La estructura completa es 虽然...但是... (aunque...pero...).",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Manana hay examen': 考试 / 有 / 明天",
        options: ["明天", "有", "考试"],
        correctAnswer: "明天有考试",
        explanation:
          "El orden es: tiempo + 有 + evento. Manana + hay + examen.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'graduarse'?",
        options: ["考试", "作业", "毕业", "上课"],
        correctAnswer: 2,
        explanation:
          "毕业 (biye) = graduarse. 毕 = completar, 业 = estudios/carrera.",
      },
      {
        type: "match",
        question: "Que significa 复习?",
        options: ["Estudiar por primera vez", "Repasar", "Hacer tarea", "Tomar examen"],
        correctAnswer: 1,
        explanation:
          "复习 (fuxi) = repasar/revisar. 复 = repetir, 习 = estudiar/practicar.",
      },
    ],
  },

  // ========================================================================
  // LECCION 28: RELACIONES SOCIALES
  // ========================================================================
  {
    id: 28,
    moduleId: 1,
    title: "Relaciones sociales",
    description:
      "Aprende a hablar sobre eventos sociales, invitaciones, fiestas y celebraciones en chino. Vocabulario para la vida social y las relaciones interpersonales.",
    dialog: [
      {
        speaker: "A",
        hanzi: "下周六是我的生日，我想邀请你来参加聚会。",
        pinyin: "Xia zhouliu shi wo de shengri, wo xiang yaoqing ni lai canjia juhui.",
        meaning: "El proximo sabado es mi cumpleanos, quiero invitarte a una fiesta.",
      },
      {
        speaker: "B",
        hanzi: "太好了！我一定去。我应该带什么礼物？",
        pinyin: "Tai hao le! Wo yiding qu. Wo yinggai dai shenme liwu?",
        meaning: "Genial! Seguro que voy. Que regalo deberia llevar?",
      },
      {
        speaker: "A",
        hanzi: "不用带礼物，因为你来我就很开心了。",
        pinyin: "Buyong dai liwu, yinwei ni lai wo jiu hen kaixin le.",
        meaning: "No necesitas traer regalo, porque con que tu vengas ya estoy muy contento.",
      },
      {
        speaker: "B",
        hanzi: "那我带一瓶酒吧。请问还有谁参加？",
        pinyin: "Na wo dai yi ping jiu ba. Qingwen hai you shei canjia?",
        meaning: "Entonces llevo una botella de vino. Quien mas va a ir?",
      },
      {
        speaker: "A",
        hanzi: "我请了很多朋友，所以会很热闹。",
        pinyin: "Wo qing le hen duo pengyou, suoyi hui hen renao.",
        meaning: "Invite a muchos amigos, asi que estara muy animado.",
      },
      {
        speaker: "B",
        hanzi: "好的！祝贺你生日快乐！到时候我们干杯！",
        pinyin: "Hao de! Zhuhe ni shengri kuaile! Dao shihou women ganbei!",
        meaning: "Bueno! Te felicito, feliz cumpleanos! Cuando llegue el momento brindamos!",
      },
    ],
    vocabulary: [
      {
        hanzi: "邀请",
        pinyin: "yaoqing",
        meaning: "Invitar",
        tones: [1, 3],
      },
      {
        hanzi: "参加",
        pinyin: "canjia",
        meaning: "Participar / asistir a",
        tones: [1, 1],
      },
      {
        hanzi: "聚会",
        pinyin: "juhui",
        meaning: "Reunion / fiesta",
        tones: [4, 4],
      },
      {
        hanzi: "生日",
        pinyin: "shengri",
        meaning: "Cumpleanos",
        tones: [1, 4],
      },
      {
        hanzi: "礼物",
        pinyin: "liwu",
        meaning: "Regalo",
        tones: [3, 4],
      },
      {
        hanzi: "祝贺",
        pinyin: "zhuhe",
        meaning: "Felicitar / felicitaciones",
        tones: [4, 4],
      },
      {
        hanzi: "干杯",
        pinyin: "ganbei",
        meaning: "Salud / brindis (literalmente: vaso seco)",
        tones: [1, 1],
      },
      {
        hanzi: "开心",
        pinyin: "kaixin",
        meaning: "Feliz / contento",
        tones: [1, 1],
      },
    ],
    grammar: [
      {
        title: "因为...所以... (yinwei...suoyi...): causa y efecto",
        explanation:
          "因为...所以... (yinwei...suoyi...) es la estructura para expresar causa y efecto, equivalente a 'porque...por lo tanto...' o 'como...entonces...' en espanol. 因为 (yinwei) introduce la causa y 所以 (suoyi) introduce el resultado. En chino, a diferencia del espanol, es comun usar ambas partes juntas. La estructura es: 因为 + causa, 所以 + resultado. Por ejemplo: 因为下雨了，所以我没去 (yinwei xiayu le, suoyi wo mei qu) = porque llovio, no fui. A veces en el habla informal se omite una de las dos partes.",
        examples: [
          {
            hanzi: "因为下雨了，所以我们在家。",
            pinyin: "Yinwei xiayu le, suoyi women zai jia.",
            meaning: "Porque llovio, nos quedamos en casa.",
          },
          {
            hanzi: "因为他很努力，所以成绩很好。",
            pinyin: "Yinwei ta hen nuli, suoyi chengji hen hao.",
            meaning: "Porque se esfuerza mucho, sus calificaciones son buenas.",
          },
          {
            hanzi: "因为我喜欢中国文化，所以学中文。",
            pinyin: "Yinwei wo xihuan Zhongguo wenhua, suoyi xue Zhongwen.",
            meaning: "Porque me gusta la cultura china, estudio chino.",
          },
        ],
      },
      {
        title: "请 + persona + verbo: invitar o pedir a alguien que haga algo",
        explanation:
          "请 (qing) tiene dos usos principales. Como verbo, significa 'invitar': 我请你吃饭 (wo qing ni chifan) = te invito a comer (y yo pago). Como palabra de cortesia antes de un verbo, significa 'por favor': 请坐 (qing zuo) = por favor sientate. Cuando usas 请 + persona + verbo, estas pidiendo o invitando a alguien a hacer algo. Es una forma educada y muy usada en situaciones sociales. En China, cuando dices '我请你' (wo qing ni, yo te invito), implica que tu pagas la cuenta. La cultura china tiene una fuerte tradicion de '请客' (qingke), que significa invitar y pagar por otros.",
        examples: [
          {
            hanzi: "我请你喝咖啡。",
            pinyin: "Wo qing ni he kafei.",
            meaning: "Te invito un cafe (yo pago).",
          },
          {
            hanzi: "请你帮我一下。",
            pinyin: "Qing ni bang wo yixia.",
            meaning: "Por favor ayudame.",
          },
          {
            hanzi: "他请了很多人来聚会。",
            pinyin: "Ta qing le hen duo ren lai juhui.",
            meaning: "El invito a mucha gente a la fiesta.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "La vida social china: fiestas, brindis y 'salvar la cara'",
        content:
          "Las reuniones sociales en China tienen reglas no escritas muy importantes. En las cenas, 干杯 (ganbei, literalmente 'vaso seco') es el equivalente a 'salud'. Tradicionalmente, se espera que vacies tu vaso completamente, especialmente si alguien brinda contigo directamente. En los negocios, los brindis con 白酒 (baijiu, licor fuerte chino) son fundamentales para construir relaciones. Cuando das un regalo en China, nunca des relojes (送钟 songzhong suena como 送终 songzhong, que significa 'acompanar al funeral') ni uses papel de regalo blanco o negro (colores de luto). El rojo es el mejor color para regalos. Un fenomeno muy chino es la 'pelea por la cuenta' (抢着买单 qiangzhe maidan): cuando comes con amigos o colegas chinos, todos insistiran en pagar la cuenta. Es una muestra de generosidad y 面子 (mianzi, 'cara'). Como extranjero, al menos intenta pagar; aunque te rechacen, el gesto es muy apreciado.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Como dices 'Porque llovio, no fui'?",
        options: [
          "虽然下雨了，但是我没去",
          "因为下雨了，所以我没去",
          "下雨了，我要去",
          "如果下雨了，我不去",
        ],
        correctAnswer: 1,
        explanation:
          "因为...所以... expresa causa y efecto. 因为下雨了 = porque llovio, 所以我没去 = no fui.",
      },
      {
        type: "fill-blank",
        question: "我___你吃饭。(Te invito a comer.)",
        options: ["给", "请", "让", "叫"],
        correctAnswer: "请",
        explanation:
          "请 (qing) = invitar. 我请你吃饭 implica que tu pagas la cuenta.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'Feliz cumpleanos': 快乐 / 生日",
        options: ["生日", "快乐"],
        correctAnswer: "生日快乐",
        explanation:
          "生日快乐 (shengri kuaile) = feliz cumpleanos. Literalmente: cumpleanos + feliz.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'regalo'?",
        options: ["聚会", "生日", "礼物", "邀请"],
        correctAnswer: 2,
        explanation:
          "礼物 (liwu) = regalo. 礼 = cortesia/ceremonia, 物 = objeto.",
      },
      {
        type: "match",
        question: "Que significa 干杯?",
        options: ["Feliz cumpleanos", "Salud/brindis", "Gracias", "Bienvenido"],
        correctAnswer: 1,
        explanation:
          "干杯 (ganbei) = salud/brindis. Literalmente: 干 = seco, 杯 = vaso. O sea, 'vacia tu vaso'.",
      },
    ],
  },

  // ========================================================================
  // LECCION 29: CULTURA COTIDIANA CHINA
  // ========================================================================
  {
    id: 29,
    moduleId: 1,
    title: "Cultura cotidiana china",
    description:
      "Aprende sobre costumbres, tradiciones y aspectos culturales de la vida diaria en China. Desde los sobres rojos hasta la etiqueta con palillos, descubre como es la vida cotidiana china.",
    dialog: [
      {
        speaker: "A",
        hanzi: "过年的时候，你们给红包吗？",
        pinyin: "Guonian de shihou, nimen gei hongbao ma?",
        meaning: "En Ano Nuevo, ustedes dan sobres rojos?",
      },
      {
        speaker: "B",
        hanzi: "对，这是中国的传统。大人给小孩红包。",
        pinyin: "Dui, zhe shi Zhongguo de chuantong. Daren gei xiaohai hongbao.",
        meaning: "Si, es una tradicion china. Los adultos les dan sobres rojos a los ninos.",
      },
      {
        speaker: "A",
        hanzi: "中国的节日真热闹！有很多风俗。",
        pinyin: "Zhongguo de jieri zhen renao! You hen duo fengsu.",
        meaning: "Los festivales chinos son muy animados! Tienen muchas costumbres.",
      },
      {
        speaker: "B",
        hanzi: "是的。你会用筷子吗？",
        pinyin: "Shi de. Ni hui yong kuaizi ma?",
        meaning: "Si. Sabes usar palillos?",
      },
      {
        speaker: "A",
        hanzi: "不太会，不好意思。",
        pinyin: "Bu tai hui, bu hao yisi.",
        meaning: "No muy bien, que pena.",
      },
      {
        speaker: "B",
        hanzi: "没关系！入乡随俗，慢慢学就好。别太客气。",
        pinyin: "Mei guanxi! Ru xiang sui su, manman xue jiu hao. Bie tai keqi.",
        meaning: "No te preocupes! Cuando en Roma haz como los romanos, poco a poco aprenderas. No seas tan formal.",
      },
    ],
    vocabulary: [
      {
        hanzi: "红包",
        pinyin: "hongbao",
        meaning: "Sobre rojo (con dinero, regalo tradicional)",
        tones: [2, 1],
      },
      {
        hanzi: "面子",
        pinyin: "mianzi",
        meaning: "'Cara' / reputacion / dignidad social",
        tones: [4, 0],
      },
      {
        hanzi: "客气",
        pinyin: "keqi",
        meaning: "Cortes / formal / educado",
        tones: [4, 4],
      },
      {
        hanzi: "热闹",
        pinyin: "renao",
        meaning: "Animado / bullicioso / con mucha vida",
        tones: [4, 4],
      },
      {
        hanzi: "传统",
        pinyin: "chuantong",
        meaning: "Tradicion / tradicional",
        tones: [2, 3],
      },
      {
        hanzi: "风俗",
        pinyin: "fengsu",
        meaning: "Costumbre / tradicion popular",
        tones: [1, 2],
      },
      {
        hanzi: "节日",
        pinyin: "jieri",
        meaning: "Festividad / dia festivo",
        tones: [2, 4],
      },
      {
        hanzi: "筷子",
        pinyin: "kuaizi",
        meaning: "Palillos (para comer)",
        tones: [4, 0],
      },
    ],
    grammar: [
      {
        title: "不好意思 (bu hao yisi): expresiones de cortesia y verguenza",
        explanation:
          "不好意思 (bu hao yisi) es una expresion muy versatil que se usa para mostrar verguenza, pena o disculpa leve. Puede significar 'que pena', 'disculpa', 'me da verguenza' o 'perdon por la molestia'. Se usa en muchas situaciones: cuando llegas tarde (不好意思，我来晚了), cuando no sabes hacer algo (不好意思，我不会), cuando necesitas pedir un favor (不好意思，请问...) o cuando accidentalmente molestas a alguien. Es diferente de 对不起 (duibuqi), que es una disculpa mas seria. 不好意思 es mas leve y cotidiano. Tambien existe 不好意思 como adjetivo: 我很不好意思 = me da mucha pena/verguenza.",
        examples: [
          {
            hanzi: "不好意思，我迟到了。",
            pinyin: "Bu hao yisi, wo chidao le.",
            meaning: "Disculpa, llegue tarde.",
          },
          {
            hanzi: "不好意思，请问洗手间在哪里？",
            pinyin: "Bu hao yisi, qingwen xishoujian zai nali?",
            meaning: "Disculpe, donde esta el bano?",
          },
          {
            hanzi: "不好意思，我不会说中文。",
            pinyin: "Bu hao yisi, wo bu hui shuo Zhongwen.",
            meaning: "Que pena, no se hablar chino.",
          },
        ],
      },
      {
        title: "入乡随俗 (ru xiang sui su): proverbios y expresiones culturales",
        explanation:
          "入乡随俗 (ru xiang sui su) es un proverbio chino que significa literalmente 'al entrar a un lugar, sigue sus costumbres', equivalente a 'donde fueres, haz lo que vieres' o 'cuando en Roma, haz como los romanos'. Los chinos usan muchos proverbios (成语 chengyu) en la vida diaria, generalmente de cuatro caracteres. Estos proverbios son una parte importante de la cultura y el idioma. Otros proverbios utiles son: 慢慢来 (manman lai) = poco a poco / con calma, 加油 (jiayou) = animo / echale ganas, y 不客气 (bu keqi) = de nada (respuesta a 'gracias'). Usar proverbios chinos correctamente impresionara mucho a los hablantes nativos.",
        examples: [
          {
            hanzi: "入乡随俗，到了中国就用筷子吧。",
            pinyin: "Ru xiang sui su, dao le Zhongguo jiu yong kuaizi ba.",
            meaning: "Cuando en Roma..., al llegar a China usa palillos.",
          },
          {
            hanzi: "慢慢来，不要着急。",
            pinyin: "Manman lai, buyao zhaoji.",
            meaning: "Poco a poco, no te apures.",
          },
          {
            hanzi: "加油！你可以的！",
            pinyin: "Jiayou! Ni keyi de!",
            meaning: "Animo! Tu puedes!",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "La vida cotidiana en China: costumbres que te sorprenderan",
        content:
          "La vida cotidiana en China esta llena de costumbres que pueden sorprender a los hispanoamericanos. Los 红包 (hongbao, sobres rojos) se dan en Ano Nuevo, bodas y otras ocasiones especiales; contienen dinero y son simbolo de buena suerte. El concepto de 面子 (mianzi, 'cara') es central en la cultura china: perder la cara publica es una de las peores cosas que pueden pasar, y hacer que alguien pierda la cara se considera muy grosero. Por eso los chinos evitan criticar en publico y buscan formas indirectas de expresar desacuerdo. Con los 筷子 (kuaizi, palillos) hay reglas importantes: nunca los claves verticalmente en el arroz (parece incienso funeral), no los uses para senalar a alguien, y no los golpees contra el plato. La hora de comer es sagrada: si alguien te pregunta '你吃了吗？' (ni chi le ma?, has comido?), no es una invitacion literal, es un saludo que muestra preocupacion por tu bienestar. Otra costumbre: en muchos restaurantes chinos se sirve te gratis, y es costumbre servir te a los demas antes de servirte a ti mismo.",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Que significa 不好意思?",
        options: [
          "No es interesante",
          "Que pena / disculpa",
          "No entiendo",
          "No me gusta",
        ],
        correctAnswer: 1,
        explanation:
          "不好意思 (bu hao yisi) = que pena / disculpa. Es una expresion de cortesia para situaciones leves.",
      },
      {
        type: "fill-blank",
        question: "这是中国的___。(Esta es una tradicion china.)",
        options: ["风俗", "传统", "节日", "面子"],
        correctAnswer: "传统",
        explanation:
          "传统 (chuantong) = tradicion. 这是中国的传统 = esta es una tradicion china.",
      },
      {
        type: "order-words",
        question:
          "Ordena el proverbio 'Cuando en Roma, haz como los romanos': 随俗 / 入乡",
        options: ["入乡", "随俗"],
        correctAnswer: "入乡随俗",
        explanation:
          "入乡随俗 (ru xiang sui su) = al entrar a un lugar, sigue sus costumbres.",
      },
      {
        type: "listen-select",
        question: "Cual de estas palabras significa 'palillos'?",
        options: ["红包", "筷子", "面子", "客气"],
        correctAnswer: 1,
        explanation:
          "筷子 (kuaizi) = palillos para comer. Son el utensilio principal en la mesa china.",
      },
      {
        type: "match",
        question: "Que es un 红包?",
        options: ["Un regalo cualquiera", "Un sobre rojo con dinero", "Una caja de dulces", "Una tarjeta de felicitacion"],
        correctAnswer: 1,
        explanation:
          "红包 (hongbao) = sobre rojo con dinero. Es un regalo tradicional en festividades y celebraciones chinas.",
      },
    ],
  },

  // ========================================================================
  // LECCION 30: REPASO INTEGRAL
  // ========================================================================
  {
    id: 30,
    moduleId: 1,
    title: "Repaso integral",
    description:
      "Leccion de repaso que integra vocabulario y estructuras gramaticales de todas las lecciones anteriores. Practica conocerse, pedir comida, pedir direcciones, hablar de experiencias y mas.",
    dialog: [
      {
        speaker: "A",
        hanzi: "你好！你叫什么名字？你是哪国人？",
        pinyin: "Ni hao! Ni jiao shenme mingzi? Ni shi na guo ren?",
        meaning: "Hola! Como te llamas? De que pais eres?",
      },
      {
        speaker: "B",
        hanzi: "我叫李明，我是中国人。你去过中国吗？",
        pinyin: "Wo jiao Li Ming, wo shi Zhongguo ren. Ni quguo Zhongguo ma?",
        meaning: "Me llamo Li Ming, soy chino. Has ido a China?",
      },
      {
        speaker: "A",
        hanzi: "去过一次。我觉得中国菜特别好吃。请问，附近有好的饭馆吗？",
        pinyin: "Quguo yi ci. Wo juede Zhongguo cai tebie haochi. Qingwen, fujin you hao de fanguan ma?",
        meaning: "Fui una vez. Creo que la comida china es especialmente deliciosa. Disculpe, hay un buen restaurante cerca?",
      },
      {
        speaker: "B",
        hanzi: "有，从这里往前走，然后往左走，五分钟就到了。",
        pinyin: "You, cong zheli wang qian zou, ranhou wang zuo zou, wu fenzhong jiu dao le.",
        meaning: "Si, de aqui camina hacia adelante, luego gira a la izquierda, en cinco minutos llegas.",
      },
      {
        speaker: "A",
        hanzi: "太好了！你打算什么时候去旅游？",
        pinyin: "Tai hao le! Ni dasuan shenme shihou qu lvyou?",
        meaning: "Genial! Cuando planeas ir de viaje?",
      },
      {
        speaker: "B",
        hanzi: "我打算下个月去，因为快要放假了。一起去吧！",
        pinyin: "Wo dasuan xia ge yue qu, yinwei kuaiyao fangjia le. Yiqi qu ba!",
        meaning: "Planeo ir el proximo mes, porque ya casi son vacaciones. Vamos juntos!",
      },
    ],
    vocabulary: [
      {
        hanzi: "你好",
        pinyin: "ni hao",
        meaning: "Hola",
        tones: [3, 3],
      },
      {
        hanzi: "谢谢",
        pinyin: "xiexie",
        meaning: "Gracias",
        tones: [4, 4],
      },
      {
        hanzi: "多少钱",
        pinyin: "duoshao qian",
        meaning: "Cuanto cuesta?",
        tones: [1, 3, 2],
      },
      {
        hanzi: "好吃",
        pinyin: "haochi",
        meaning: "Delicioso / rico",
        tones: [3, 1],
      },
      {
        hanzi: "在哪里",
        pinyin: "zai nali",
        meaning: "Donde esta?",
        tones: [4, 3, 3],
      },
      {
        hanzi: "喜欢",
        pinyin: "xihuan",
        meaning: "Gustar",
        tones: [3, 1],
      },
      {
        hanzi: "可以",
        pinyin: "keyi",
        meaning: "Poder / se puede",
        tones: [3, 3],
      },
      {
        hanzi: "非常",
        pinyin: "feichang",
        meaning: "Muy / extremadamente",
        tones: [1, 2],
      },
    ],
    grammar: [
      {
        title: "Repaso: 是...的 (shi...de) para enfatizar detalles",
        explanation:
          "La estructura 是...的 (shi...de) se usa cuando ya sabemos que algo ocurrio y queremos enfatizar un detalle especifico: cuando, donde, como o con quien. El detalle enfatizado va entre 是 y el verbo, o entre el verbo y 的. Por ejemplo: 你是什么时候来的？(ni shi shenme shihou lai de?) = cuando fue que viniste? 我是坐飞机来的 (wo shi zuo feiji lai de) = vine en avion (enfatiza el medio). 我是和朋友一起去的 (wo shi he pengyou yiqi qu de) = fui con amigos (enfatiza la compania). Recuerda que esta estructura NO se usa para acciones que aun no han ocurrido, solo para las que ya pasaron. Es una de las estructuras mas utiles del chino intermedio.",
        examples: [
          {
            hanzi: "你是在哪里学的中文？",
            pinyin: "Ni shi zai nali xue de Zhongwen?",
            meaning: "Donde fue que aprendiste chino?",
          },
          {
            hanzi: "我是在大学学的。",
            pinyin: "Wo shi zai daxue xue de.",
            meaning: "Fue en la universidad donde lo aprendi.",
          },
          {
            hanzi: "他是昨天到的。",
            pinyin: "Ta shi zuotian dao de.",
            meaning: "Fue ayer cuando el llego.",
          },
        ],
      },
      {
        title: "Repaso: 得 (de) como complemento de grado",
        explanation:
          "得 (de) se usa despues de un verbo para describir como se realiza la accion, es decir, para dar una evaluacion o descripcion de la calidad de la accion. La estructura es: verbo + 得 + descripcion. Por ejemplo: 你说得很好 (ni shuo de hen hao) = hablas muy bien (literalmente: tu hablar de muy bien). 他跑得很快 (ta pao de hen kuai) = el corre muy rapido. Para preguntar como alguien hace algo: 你中文说得怎么样？(ni Zhongwen shuo de zenmeyang?) = como hablas chino? La negacion se pone en la descripcion, no en el verbo: 他写得不好 (ta xie de bu hao) = el escribe mal (no bien). Esta estructura es esencial para evaluar habilidades y describir la calidad de acciones.",
        examples: [
          {
            hanzi: "你中文说得很好！",
            pinyin: "Ni Zhongwen shuo de hen hao!",
            meaning: "Hablas chino muy bien!",
          },
          {
            hanzi: "她唱歌唱得非常好听。",
            pinyin: "Ta changge chang de feichang haoting.",
            meaning: "Ella canta muy bonito.",
          },
          {
            hanzi: "他吃得太多了。",
            pinyin: "Ta chi de tai duo le.",
            meaning: "El comio demasiado.",
          },
        ],
      },
    ],
    culturalNotes: [
      {
        title: "Tu viaje de aprendizaje del chino: lo que has logrado y lo que viene",
        content:
          "Felicidades por completar estas 30 lecciones de chino mandarin! Has recorrido un camino impresionante. Ahora puedes saludar, presentarte, pedir comida, comprar cosas, pedir direcciones, hablar de tus pasatiempos, expresar opiniones, describir personas, hablar de tus planes, compartir experiencias pasadas y entender aspectos fundamentales de la cultura china. Estas en el nivel A1-A2 del marco de referencia, lo cual es un logro significativo. Para seguir progresando, te recomiendo: sumergirte en contenido en chino (musica, series como 我的前半生, podcasts como ChinesePod), practicar con hablantes nativos (apps como HelloTalk o Tandem), aprender a leer y escribir caracteres (la app Pleco es excelente para diccionario), y considerar clases formales para aprender los tonos correctamente. Recuerda el proverbio chino 千里之行始于足下 (qianli zhi xing shi yu zu xia): un viaje de mil millas comienza con un solo paso. Ya diste ese primer paso, ahora sigue caminando!",
      },
    ],
    exercises: [
      {
        type: "multiple-choice",
        question: "Si quieres enfatizar DONDE aprendiste chino, que estructura usas?",
        options: [
          "我学了中文",
          "我在学中文",
          "我是在大学学的中文",
          "我要学中文",
        ],
        correctAnswer: 2,
        explanation:
          "是...的 enfatiza detalles de acciones pasadas. 我是在大学学的中文 enfatiza que fue en la universidad.",
      },
      {
        type: "fill-blank",
        question: "你中文说___很好！(Hablas chino muy bien!)",
        options: ["了", "的", "得", "过"],
        correctAnswer: "得",
        explanation:
          "得 (de) es el complemento de grado. Verbo + 得 + evaluacion describe como se hace algo.",
      },
      {
        type: "order-words",
        question:
          "Ordena para decir 'De aqui al restaurante esta cerca': 很近 / 饭馆 / 到 / 从 / 这里",
        options: ["从", "这里", "到", "饭馆", "很近"],
        correctAnswer: "从这里到饭馆很近",
        explanation:
          "从...到... = de...a... Desde aqui hasta el restaurante + esta cerca.",
      },
      {
        type: "listen-select",
        question: "Si alguien te pregunta 你吃过北京烤鸭吗?, que te esta preguntando?",
        options: [
          "Si quieres comer pato",
          "Si alguna vez has comido pato de Beijing",
          "Si te gusta el pato",
          "Si sabes cocinar pato",
        ],
        correctAnswer: 1,
        explanation:
          "吃过 usa 过 para preguntar sobre experiencias. Te pregunta si alguna vez has comido pato laqueado de Beijing.",
      },
      {
        type: "match",
        question: "Cual de estas oraciones expresa una comparacion?",
        options: [
          "中文很难",
          "中文比英文难",
          "中文和英文",
          "我学中文",
        ],
        correctAnswer: 1,
        explanation:
          "中文比英文难 usa 比 para comparar: el chino es mas dificil que el ingles. A + 比 + B + adjetivo.",
      },
    ],
  },
];

// ============================================================================
// FUNCIONES AUXILIARES
// ============================================================================

/** Obtiene una leccion por su ID */
export function getLessonById(id: number): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

/** Obtiene todas las lecciones de un modulo especifico */
export function getLessonsByModule(moduleId: number): Lesson[] {
  return lessons.filter((lesson) => lesson.moduleId === moduleId);
}

/** Obtiene el total de lecciones disponibles */
export function getTotalLessons(): number {
  return lessons.length;
}

/** Obtiene la leccion siguiente dado un ID */
export function getNextLesson(currentId: number): Lesson | undefined {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return undefined;
  }
  return lessons[currentIndex + 1];
}

/** Obtiene la leccion anterior dado un ID */
export function getPreviousLesson(currentId: number): Lesson | undefined {
  const currentIndex = lessons.findIndex((lesson) => lesson.id === currentId);
  if (currentIndex <= 0) {
    return undefined;
  }
  return lessons[currentIndex - 1];
}

/** Obtiene todo el vocabulario de una leccion */
export function getLessonVocabulary(lessonId: number): VocabItem[] {
  const lesson = getLessonById(lessonId);
  return lesson ? lesson.vocabulary : [];
}

/** Obtiene el vocabulario acumulado hasta una leccion dada (para repaso) */
export function getCumulativeVocabulary(upToLessonId: number): VocabItem[] {
  const allVocab: VocabItem[] = [];
  for (const lesson of lessons) {
    if (lesson.id <= upToLessonId) {
      allVocab.push(...lesson.vocabulary);
    }
  }
  return allVocab;
}

/** Cuenta el total de caracteres unicos en todas las lecciones */
export function getTotalUniqueCharacters(): number {
  const chars = new Set<string>();
  for (const lesson of lessons) {
    for (const vocab of lesson.vocabulary) {
      for (const char of vocab.hanzi) {
        chars.add(char);
      }
    }
  }
  return chars.size;
}
