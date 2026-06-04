// =============================================================================
// FRASES PRÁCTICAS DE CHINO MANDARÍN PARA HISPANOHABLANTES
// Organizadas por categoría de situación real de uso
// Todas las explicaciones y significados en español
// =============================================================================

export interface Phrase {
  id: number;
  category: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  context?: string;
}

export const phraseCategories = [
  "Saludos y despedidas",
  "En el restaurante",
  "De compras",
  "Transporte",
  "Emergencias",
  "En el hotel",
  "Direcciones",
  "Presentaciones",
  "Números y dinero",
  "Tiempo y clima",
  "En el hospital",
  "En la universidad",
  "Conversación telefónica",
  "Redes sociales y tecnología",
] as const;

export type PhraseCategory = (typeof phraseCategories)[number];

// =============================================================================
// TODAS LAS FRASES - 170+ frases prácticas organizadas por categoría
// =============================================================================

export const phrases: Phrase[] = [
  // =========================================================================
  // SALUDOS Y DESPEDIDAS (12 frases)
  // =========================================================================
  {
    id: 1,
    category: "Saludos y despedidas",
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "Hola",
    context: "El saludo más básico y universal. Úsalo con cualquier persona.",
  },
  {
    id: 2,
    category: "Saludos y despedidas",
    hanzi: "您好",
    pinyin: "nín hǎo",
    meaning: "Hola (formal / respetuoso)",
    context:
      "Versión formal de 你好. Úsalo con personas mayores, superiores o desconocidos para mostrar respeto.",
  },
  {
    id: 3,
    category: "Saludos y despedidas",
    hanzi: "你好吗？",
    pinyin: "nǐ hǎo ma?",
    meaning: "¿Cómo estás?",
    context:
      "Pregunta general sobre el bienestar. En China se usa menos que en español; es más común entre conocidos.",
  },
  {
    id: 4,
    category: "Saludos y despedidas",
    hanzi: "我很好，谢谢",
    pinyin: "wǒ hěn hǎo, xièxie",
    meaning: "Estoy muy bien, gracias",
    context: "Respuesta estándar a ¿cómo estás?",
  },
  {
    id: 5,
    category: "Saludos y despedidas",
    hanzi: "早上好",
    pinyin: "zǎoshang hǎo",
    meaning: "Buenos días (por la mañana)",
    context: "Se usa por la mañana, generalmente antes de las 10-11 am.",
  },
  {
    id: 6,
    category: "Saludos y despedidas",
    hanzi: "下午好",
    pinyin: "xiàwǔ hǎo",
    meaning: "Buenas tardes",
    context: "Se usa por la tarde, después del mediodía.",
  },
  {
    id: 7,
    category: "Saludos y despedidas",
    hanzi: "晚上好",
    pinyin: "wǎnshang hǎo",
    meaning: "Buenas noches (saludo)",
    context: "Se usa al llegar o encontrarse con alguien por la noche.",
  },
  {
    id: 8,
    category: "Saludos y despedidas",
    hanzi: "再见",
    pinyin: "zàijiàn",
    meaning: "Adiós / Hasta luego",
    context: "La despedida más común y versátil.",
  },
  {
    id: 9,
    category: "Saludos y despedidas",
    hanzi: "明天见",
    pinyin: "míngtiān jiàn",
    meaning: "Hasta mañana",
    context: "Cuando sabes que verás a la persona al día siguiente.",
  },
  {
    id: 10,
    category: "Saludos y despedidas",
    hanzi: "晚安",
    pinyin: "wǎn'ān",
    meaning: "Buenas noches (despedida)",
    context: "Se usa al despedirse para ir a dormir.",
  },
  {
    id: 11,
    category: "Saludos y despedidas",
    hanzi: "好久不见",
    pinyin: "hǎojiǔ bújiàn",
    meaning: "¡Cuánto tiempo sin verte!",
    context: "Cuando te encuentras con alguien que no veías hace tiempo.",
  },
  {
    id: 12,
    category: "Saludos y despedidas",
    hanzi: "你吃了吗？",
    pinyin: "nǐ chī le ma?",
    meaning: "¿Ya comiste?",
    context:
      "Saludo informal muy común en China. No es literal; es como preguntar '¿qué tal?'. Responde 吃了 (chī le, sí comí).",
  },

  // =========================================================================
  // EN EL RESTAURANTE (13 frases)
  // =========================================================================
  {
    id: 13,
    category: "En el restaurante",
    hanzi: "我要一个菜单",
    pinyin: "wǒ yào yí gè càidān",
    meaning: "Quiero un menú",
    context: "Al sentarte en un restaurante y necesitar la carta.",
  },
  {
    id: 14,
    category: "En el restaurante",
    hanzi: "请给我菜单",
    pinyin: "qǐng gěi wǒ càidān",
    meaning: "Por favor, dame el menú",
    context: "Forma más educada de pedir la carta.",
  },
  {
    id: 15,
    category: "En el restaurante",
    hanzi: "你们有什么推荐的？",
    pinyin: "nǐmen yǒu shénme tuījiàn de?",
    meaning: "¿Qué recomiendan?",
    context: "Para pedir sugerencias al mesero.",
  },
  {
    id: 16,
    category: "En el restaurante",
    hanzi: "我要这个",
    pinyin: "wǒ yào zhège",
    meaning: "Quiero esto",
    context:
      "Señala el plato en el menú o la foto mientras dices esto. Muy útil cuando no sabes pronunciar el nombre del plato.",
  },
  {
    id: 17,
    category: "En el restaurante",
    hanzi: "不要辣的",
    pinyin: "bú yào là de",
    meaning: "Sin picante, por favor",
    context:
      "Esencial en China, donde muchos platos son picantes. Úsalo siempre si no toleras el picante.",
  },
  {
    id: 18,
    category: "En el restaurante",
    hanzi: "少放盐",
    pinyin: "shǎo fàng yán",
    meaning: "Poca sal, por favor",
    context: "Para pedir que le pongan menos sal a tu plato.",
  },
  {
    id: 19,
    category: "En el restaurante",
    hanzi: "我吃素",
    pinyin: "wǒ chī sù",
    meaning: "Soy vegetariano/a",
    context: "Para informar que no comes carne.",
  },
  {
    id: 20,
    category: "En el restaurante",
    hanzi: "买单 / 结账",
    pinyin: "mǎidān / jiézhàng",
    meaning: "La cuenta, por favor",
    context:
      "买单 es más informal y común en el sur. 结账 es más formal. Ambos se entienden en todas partes.",
  },
  {
    id: 21,
    category: "En el restaurante",
    hanzi: "可以用微信支付吗？",
    pinyin: "kěyǐ yòng Wēixìn zhīfù ma?",
    meaning: "¿Puedo pagar con WeChat Pay?",
    context:
      "En China casi todo se paga con el móvil. WeChat Pay y Alipay son los métodos más comunes.",
  },
  {
    id: 22,
    category: "En el restaurante",
    hanzi: "非常好吃！",
    pinyin: "fēicháng hǎochī!",
    meaning: "¡Está delicioso!",
    context: "Para elogiar la comida. Los chinos aprecian mucho este cumplido.",
  },
  {
    id: 23,
    category: "En el restaurante",
    hanzi: "再来一瓶啤酒",
    pinyin: "zài lái yì píng píjiǔ",
    meaning: "Otra botella de cerveza, por favor",
    context: "Para pedir otra ronda de cerveza.",
  },
  {
    id: 24,
    category: "En el restaurante",
    hanzi: "请给我一杯水",
    pinyin: "qǐng gěi wǒ yì bēi shuǐ",
    meaning: "Un vaso de agua, por favor",
    context:
      "Nota: en China normalmente te sirven agua caliente (热水 rè shuǐ). Si quieres fría, pide 冰水 (bīng shuǐ).",
  },
  {
    id: 25,
    category: "En el restaurante",
    hanzi: "我对花生过敏",
    pinyin: "wǒ duì huāshēng guòmǐn",
    meaning: "Soy alérgico/a a los cacahuetes",
    context:
      "Cambia 花生 (cacahuete) por tu alérgeno: 海鲜 (hǎixiān, mariscos), 牛奶 (niúnǎi, leche), 鸡蛋 (jīdàn, huevo).",
  },

  // =========================================================================
  // DE COMPRAS (12 frases)
  // =========================================================================
  {
    id: 26,
    category: "De compras",
    hanzi: "这个多少钱？",
    pinyin: "zhège duōshao qián?",
    meaning: "¿Cuánto cuesta esto?",
    context: "La frase más importante para ir de compras. Señala el producto mientras la dices.",
  },
  {
    id: 27,
    category: "De compras",
    hanzi: "太贵了",
    pinyin: "tài guì le",
    meaning: "Es muy caro",
    context:
      "Primera frase para empezar a regatear. En mercados callejeros y tiendas pequeñas es normal negociar.",
  },
  {
    id: 28,
    category: "De compras",
    hanzi: "可以便宜一点吗？",
    pinyin: "kěyǐ piányi yìdiǎn ma?",
    meaning: "¿Puede ser un poco más barato?",
    context: "Forma educada de pedir descuento. Funciona en mercados y tiendas pequeñas.",
  },
  {
    id: 29,
    category: "De compras",
    hanzi: "我只是看看",
    pinyin: "wǒ zhǐ shì kànkan",
    meaning: "Solo estoy mirando",
    context: "Cuando un vendedor se acerca y no quieres comprar nada todavía.",
  },
  {
    id: 30,
    category: "De compras",
    hanzi: "有没有大一点的？",
    pinyin: "yǒu méiyǒu dà yìdiǎn de?",
    meaning: "¿Tienen uno más grande?",
    context: "Cambia 大 (grande) por 小 (xiǎo, pequeño) según necesites.",
  },
  {
    id: 31,
    category: "De compras",
    hanzi: "有别的颜色吗？",
    pinyin: "yǒu bié de yánsè ma?",
    meaning: "¿Hay otros colores?",
    context: "Para preguntar por variantes de color de un producto.",
  },
  {
    id: 32,
    category: "De compras",
    hanzi: "我可以试一下吗？",
    pinyin: "wǒ kěyǐ shì yíxià ma?",
    meaning: "¿Puedo probármelo?",
    context: "Para pedir probarte ropa o zapatos.",
  },
  {
    id: 33,
    category: "De compras",
    hanzi: "我要买这个",
    pinyin: "wǒ yào mǎi zhège",
    meaning: "Quiero comprar esto",
    context: "Cuando te has decidido por un producto.",
  },
  {
    id: 34,
    category: "De compras",
    hanzi: "可以刷卡吗？",
    pinyin: "kěyǐ shuā kǎ ma?",
    meaning: "¿Puedo pagar con tarjeta?",
    context: "Aunque el pago móvil domina en China, en tiendas grandes aceptan tarjetas.",
  },
  {
    id: 35,
    category: "De compras",
    hanzi: "需要袋子吗？",
    pinyin: "xūyào dàizi ma?",
    meaning: "¿Necesita bolsa?",
    context: "El cajero te hará esta pregunta. Las bolsas suelen cobrarse aparte.",
  },
  {
    id: 36,
    category: "De compras",
    hanzi: "打折吗？",
    pinyin: "dǎzhé ma?",
    meaning: "¿Tiene descuento?",
    context: "Para preguntar si hay ofertas o rebajas.",
  },
  {
    id: 37,
    category: "De compras",
    hanzi: "收据给我",
    pinyin: "shōujù gěi wǒ",
    meaning: "Dame el recibo, por favor",
    context: "Para pedir el comprobante de compra. Útil para devoluciones.",
  },

  // =========================================================================
  // TRANSPORTE (12 frases)
  // =========================================================================
  {
    id: 38,
    category: "Transporte",
    hanzi: "地铁站在哪里？",
    pinyin: "dìtiě zhàn zài nǎlǐ?",
    meaning: "¿Dónde está la estación de metro?",
    context:
      "El metro es el transporte más eficiente en las grandes ciudades chinas.",
  },
  {
    id: 39,
    category: "Transporte",
    hanzi: "我要去这个地方",
    pinyin: "wǒ yào qù zhège dìfāng",
    meaning: "Quiero ir a este lugar",
    context:
      "Muestra la dirección en tu teléfono al taxista mientras dices esto.",
  },
  {
    id: 40,
    category: "Transporte",
    hanzi: "请打表",
    pinyin: "qǐng dǎ biǎo",
    meaning: "Use el taxímetro, por favor",
    context:
      "Importante en taxis para asegurarte de que no te cobren de más.",
  },
  {
    id: 41,
    category: "Transporte",
    hanzi: "到了请告诉我",
    pinyin: "dào le qǐng gàosu wǒ",
    meaning: "Avíseme cuando lleguemos",
    context: "Muy útil cuando no conoces la zona y no sabes dónde bajar.",
  },
  {
    id: 42,
    category: "Transporte",
    hanzi: "我要买一张票",
    pinyin: "wǒ yào mǎi yì zhāng piào",
    meaning: "Quiero comprar un boleto",
    context: "En estaciones de tren, metro o autobús.",
  },
  {
    id: 43,
    category: "Transporte",
    hanzi: "这趟车去机场吗？",
    pinyin: "zhè tàng chē qù jīchǎng ma?",
    meaning: "¿Este autobús/tren va al aeropuerto?",
    context: "Para confirmar que estás tomando el transporte correcto.",
  },
  {
    id: 44,
    category: "Transporte",
    hanzi: "请在这里停车",
    pinyin: "qǐng zài zhèlǐ tíng chē",
    meaning: "Por favor, pare aquí",
    context: "Para indicar al taxista dónde quieres bajar.",
  },
  {
    id: 45,
    category: "Transporte",
    hanzi: "还有多远？",
    pinyin: "hái yǒu duō yuǎn?",
    meaning: "¿Cuánto falta para llegar?",
    context: "Para preguntar la distancia restante al destino.",
  },
  {
    id: 46,
    category: "Transporte",
    hanzi: "我要去火车站",
    pinyin: "wǒ yào qù huǒchē zhàn",
    meaning: "Quiero ir a la estación de tren",
    context: "Cambia 火车站 por 机场 (jīchǎng, aeropuerto) según necesites.",
  },
  {
    id: 47,
    category: "Transporte",
    hanzi: "请帮我叫一辆出租车",
    pinyin: "qǐng bāng wǒ jiào yí liàng chūzūchē",
    meaning: "Por favor, llámeme un taxi",
    context: "Para pedir en el hotel o restaurante que te consigan un taxi.",
  },
  {
    id: 48,
    category: "Transporte",
    hanzi: "几号线？",
    pinyin: "jǐ hào xiàn?",
    meaning: "¿Qué línea (de metro)?",
    context: "Para preguntar qué línea de metro tomar.",
  },
  {
    id: 49,
    category: "Transporte",
    hanzi: "在哪里换乘？",
    pinyin: "zài nǎlǐ huànchéng?",
    meaning: "¿Dónde hago transbordo?",
    context: "Cuando necesitas cambiar de línea de metro o autobús.",
  },

  // =========================================================================
  // EMERGENCIAS (12 frases)
  // =========================================================================
  {
    id: 50,
    category: "Emergencias",
    hanzi: "救命！",
    pinyin: "jiùmìng!",
    meaning: "¡Socorro! / ¡Ayuda!",
    context: "Grito de auxilio para situaciones de peligro grave.",
  },
  {
    id: 51,
    category: "Emergencias",
    hanzi: "请帮帮我",
    pinyin: "qǐng bāngbang wǒ",
    meaning: "Por favor, ayúdame",
    context: "Petición de ayuda menos urgente pero igualmente importante.",
  },
  {
    id: 52,
    category: "Emergencias",
    hanzi: "请叫救护车",
    pinyin: "qǐng jiào jiùhùchē",
    meaning: "Llame a una ambulancia, por favor",
    context: "El número de emergencias en China es 120 para ambulancias.",
  },
  {
    id: 53,
    category: "Emergencias",
    hanzi: "请叫警察",
    pinyin: "qǐng jiào jǐngchá",
    meaning: "Llame a la policía, por favor",
    context: "El número de policía en China es 110.",
  },
  {
    id: 54,
    category: "Emergencias",
    hanzi: "我需要去医院",
    pinyin: "wǒ xūyào qù yīyuàn",
    meaning: "Necesito ir al hospital",
    context: "Para pedir que te lleven a un centro médico.",
  },
  {
    id: 55,
    category: "Emergencias",
    hanzi: "我的护照丢了",
    pinyin: "wǒ de hùzhào diū le",
    meaning: "Perdí mi pasaporte",
    context:
      "Ve inmediatamente a la embajada o consulado de tu país si esto ocurre.",
  },
  {
    id: 56,
    category: "Emergencias",
    hanzi: "我迷路了",
    pinyin: "wǒ mílù le",
    meaning: "Estoy perdido/a",
    context: "Para pedir orientación cuando no sabes dónde estás.",
  },
  {
    id: 57,
    category: "Emergencias",
    hanzi: "我不舒服",
    pinyin: "wǒ bù shūfu",
    meaning: "No me siento bien / Estoy enfermo/a",
    context: "Para expresar malestar físico general.",
  },
  {
    id: 58,
    category: "Emergencias",
    hanzi: "我头疼",
    pinyin: "wǒ tóu téng",
    meaning: "Me duele la cabeza",
    context:
      "Cambia 头 (cabeza) por: 肚子 (dùzi, estómago), 牙 (yá, diente), 喉咙 (hóulóng, garganta).",
  },
  {
    id: 59,
    category: "Emergencias",
    hanzi: "有人偷了我的钱包",
    pinyin: "yǒu rén tōu le wǒ de qiánbāo",
    meaning: "Alguien robó mi cartera",
    context: "Para reportar un robo a la policía.",
  },
  {
    id: 60,
    category: "Emergencias",
    hanzi: "我对这个药过敏",
    pinyin: "wǒ duì zhège yào guòmǐn",
    meaning: "Soy alérgico/a a este medicamento",
    context: "Información médica crucial. Lleva esta frase escrita si tienes alergias.",
  },
  {
    id: 61,
    category: "Emergencias",
    hanzi: "请帮我联系大使馆",
    pinyin: "qǐng bāng wǒ liánxì dàshǐguǎn",
    meaning: "Por favor, contacte a la embajada",
    context: "En caso de emergencia grave, la embajada de tu país puede asistirte.",
  },

  // =========================================================================
  // EN EL HOTEL (12 frases)
  // =========================================================================
  {
    id: 62,
    category: "En el hotel",
    hanzi: "我有预订",
    pinyin: "wǒ yǒu yùdìng",
    meaning: "Tengo una reservación",
    context: "Al llegar a la recepción del hotel.",
  },
  {
    id: 63,
    category: "En el hotel",
    hanzi: "我要办理入住",
    pinyin: "wǒ yào bànlǐ rùzhù",
    meaning: "Quiero hacer el check-in",
    context: "Para registrarte al llegar al hotel.",
  },
  {
    id: 64,
    category: "En el hotel",
    hanzi: "我要退房",
    pinyin: "wǒ yào tuìfáng",
    meaning: "Quiero hacer el check-out",
    context: "Al momento de irte del hotel.",
  },
  {
    id: 65,
    category: "En el hotel",
    hanzi: "有空房间吗？",
    pinyin: "yǒu kòng fángjiān ma?",
    meaning: "¿Hay habitaciones disponibles?",
    context: "Cuando llegas sin reservación previa.",
  },
  {
    id: 66,
    category: "En el hotel",
    hanzi: "一晚多少钱？",
    pinyin: "yì wǎn duōshao qián?",
    meaning: "¿Cuánto cuesta por noche?",
    context: "Para preguntar el precio de la habitación.",
  },
  {
    id: 67,
    category: "En el hotel",
    hanzi: "WiFi密码是什么？",
    pinyin: "WiFi mìmǎ shì shénme?",
    meaning: "¿Cuál es la contraseña del WiFi?",
    context: "Una de las primeras preguntas al registrarte.",
  },
  {
    id: 68,
    category: "En el hotel",
    hanzi: "空调不工作",
    pinyin: "kōngtiáo bù gōngzuò",
    meaning: "El aire acondicionado no funciona",
    context:
      "Para reportar problemas en la habitación. Cambia 空调 por: 热水 (rè shuǐ, agua caliente), 电视 (diànshì, televisor).",
  },
  {
    id: 69,
    category: "En el hotel",
    hanzi: "请打扫房间",
    pinyin: "qǐng dǎsǎo fángjiān",
    meaning: "Limpien la habitación, por favor",
    context: "Para pedir servicio de limpieza.",
  },
  {
    id: 70,
    category: "En el hotel",
    hanzi: "可以换一个房间吗？",
    pinyin: "kěyǐ huàn yí gè fángjiān ma?",
    meaning: "¿Puedo cambiar de habitación?",
    context: "Si hay algún problema con tu habitación actual.",
  },
  {
    id: 71,
    category: "En el hotel",
    hanzi: "早餐几点开始？",
    pinyin: "zǎocān jǐ diǎn kāishǐ?",
    meaning: "¿A qué hora empieza el desayuno?",
    context: "Para saber el horario del buffet de desayuno.",
  },
  {
    id: 72,
    category: "En el hotel",
    hanzi: "请多给我一条毛巾",
    pinyin: "qǐng duō gěi wǒ yì tiáo máojīn",
    meaning: "Una toalla extra, por favor",
    context: "Para pedir artículos adicionales en la habitación.",
  },
  {
    id: 73,
    category: "En el hotel",
    hanzi: "行李可以先存放吗？",
    pinyin: "xíngli kěyǐ xiān cúnfàng ma?",
    meaning: "¿Puedo dejar mi equipaje guardado?",
    context: "Útil cuando tu check-out es temprano pero tu vuelo es más tarde.",
  },

  // =========================================================================
  // DIRECCIONES (12 frases)
  // =========================================================================
  {
    id: 74,
    category: "Direcciones",
    hanzi: "请问，厕所在哪里？",
    pinyin: "qǐngwèn, cèsuǒ zài nǎlǐ?",
    meaning: "Disculpe, ¿dónde está el baño?",
    context: "Probablemente la frase de direcciones más importante para cualquier viajero.",
  },
  {
    id: 75,
    category: "Direcciones",
    hanzi: "往左转",
    pinyin: "wǎng zuǒ zhuǎn",
    meaning: "Gire a la izquierda",
    context: "Instrucción de dirección básica.",
  },
  {
    id: 76,
    category: "Direcciones",
    hanzi: "往右转",
    pinyin: "wǎng yòu zhuǎn",
    meaning: "Gire a la derecha",
    context: "Instrucción de dirección básica.",
  },
  {
    id: 77,
    category: "Direcciones",
    hanzi: "一直走",
    pinyin: "yìzhí zǒu",
    meaning: "Siga derecho / recto",
    context: "Para indicar que continúes en la misma dirección.",
  },
  {
    id: 78,
    category: "Direcciones",
    hanzi: "离这里远吗？",
    pinyin: "lí zhèlǐ yuǎn ma?",
    meaning: "¿Está lejos de aquí?",
    context: "Para saber si puedes ir caminando o necesitas transporte.",
  },
  {
    id: 79,
    category: "Direcciones",
    hanzi: "走路大概要多久？",
    pinyin: "zǒulù dàgài yào duōjiǔ?",
    meaning: "¿Cuánto se tarda caminando?",
    context: "Para calcular si es factible ir a pie.",
  },
  {
    id: 80,
    category: "Direcciones",
    hanzi: "在前面",
    pinyin: "zài qiánmiàn",
    meaning: "Está adelante",
    context: "Dirección relativa: más adelante en el camino.",
  },
  {
    id: 81,
    category: "Direcciones",
    hanzi: "在后面",
    pinyin: "zài hòumiàn",
    meaning: "Está atrás / detrás",
    context: "Dirección relativa: detrás de donde estás.",
  },
  {
    id: 82,
    category: "Direcciones",
    hanzi: "在对面",
    pinyin: "zài duìmiàn",
    meaning: "Está enfrente / al otro lado",
    context: "Al otro lado de la calle o edificio.",
  },
  {
    id: 83,
    category: "Direcciones",
    hanzi: "在旁边",
    pinyin: "zài pángbiān",
    meaning: "Está al lado",
    context: "Muy cerca, junto a algo.",
  },
  {
    id: 84,
    category: "Direcciones",
    hanzi: "请问，附近有药店吗？",
    pinyin: "qǐngwèn, fùjìn yǒu yàodiàn ma?",
    meaning: "Disculpe, ¿hay una farmacia cerca?",
    context:
      "Cambia 药店 por: 超市 (chāoshì, supermercado), 银行 (yínháng, banco), 医院 (yīyuàn, hospital).",
  },
  {
    id: 85,
    category: "Direcciones",
    hanzi: "你能在地图上指给我看吗？",
    pinyin: "nǐ néng zài dìtú shàng zhǐ gěi wǒ kàn ma?",
    meaning: "¿Puede mostrármelo en el mapa?",
    context: "Cuando las instrucciones verbales son difíciles de entender.",
  },

  // =========================================================================
  // PRESENTACIONES (12 frases)
  // =========================================================================
  {
    id: 86,
    category: "Presentaciones",
    hanzi: "我叫……",
    pinyin: "wǒ jiào...",
    meaning: "Me llamo...",
    context: "La forma más directa de presentarte. Di tu nombre después.",
  },
  {
    id: 87,
    category: "Presentaciones",
    hanzi: "我是西班牙人",
    pinyin: "wǒ shì Xībānyá rén",
    meaning: "Soy español/a",
    context:
      "Cambia por tu nacionalidad: 墨西哥人 (Mòxīgē rén, mexicano), 阿根廷人 (Āgēntíng rén, argentino), 哥伦比亚人 (Gēlúnbǐyà rén, colombiano).",
  },
  {
    id: 88,
    category: "Presentaciones",
    hanzi: "认识你很高兴",
    pinyin: "rènshi nǐ hěn gāoxìng",
    meaning: "Encantado/a de conocerte",
    context: "Se dice después de presentarte o que te presenten a alguien.",
  },
  {
    id: 89,
    category: "Presentaciones",
    hanzi: "你是哪国人？",
    pinyin: "nǐ shì nǎ guó rén?",
    meaning: "¿De qué país eres?",
    context: "Pregunta muy común al conocer extranjeros.",
  },
  {
    id: 90,
    category: "Presentaciones",
    hanzi: "你做什么工作？",
    pinyin: "nǐ zuò shénme gōngzuò?",
    meaning: "¿A qué te dedicas? / ¿En qué trabajas?",
    context: "Pregunta habitual en conversaciones sociales.",
  },
  {
    id: 91,
    category: "Presentaciones",
    hanzi: "我是学生",
    pinyin: "wǒ shì xuéshēng",
    meaning: "Soy estudiante",
    context:
      "Cambia por tu profesión: 老师 (lǎoshī, profesor), 医生 (yīshēng, médico), 工程师 (gōngchéngshī, ingeniero).",
  },
  {
    id: 92,
    category: "Presentaciones",
    hanzi: "你会说英语吗？",
    pinyin: "nǐ huì shuō Yīngyǔ ma?",
    meaning: "¿Hablas inglés?",
    context: "Para saber si puedes comunicarte en otro idioma.",
  },
  {
    id: 93,
    category: "Presentaciones",
    hanzi: "我在学中文",
    pinyin: "wǒ zài xué Zhōngwén",
    meaning: "Estoy aprendiendo chino",
    context: "Los chinos suelen reaccionar con entusiasmo cuando un extranjero dice esto.",
  },
  {
    id: 94,
    category: "Presentaciones",
    hanzi: "你的中文说得很好！",
    pinyin: "nǐ de Zhōngwén shuō de hěn hǎo!",
    meaning: "¡Hablas muy bien chino!",
    context:
      "Te lo dirán mucho (incluso si solo sabes decir 你好). Es un cumplido amable.",
  },
  {
    id: 95,
    category: "Presentaciones",
    hanzi: "我今年二十五岁",
    pinyin: "wǒ jīnnián èrshíwǔ suì",
    meaning: "Tengo 25 años",
    context: "Cambia el número por tu edad. En China preguntar la edad es normal y no es descortés.",
  },
  {
    id: 96,
    category: "Presentaciones",
    hanzi: "这是我的名片",
    pinyin: "zhè shì wǒ de míngpiàn",
    meaning: "Esta es mi tarjeta de presentación",
    context:
      "En contextos profesionales, entrega la tarjeta con ambas manos como muestra de respeto.",
  },
  {
    id: 97,
    category: "Presentaciones",
    hanzi: "可以加你的微信吗？",
    pinyin: "kěyǐ jiā nǐ de Wēixìn ma?",
    meaning: "¿Puedo agregarte en WeChat?",
    context:
      "WeChat es la app de mensajería universal en China. Es el equivalente a pedir el WhatsApp.",
  },

  // =========================================================================
  // NÚMEROS Y DINERO (12 frases)
  // =========================================================================
  {
    id: 98,
    category: "Números y dinero",
    hanzi: "一、二、三、四、五",
    pinyin: "yī, èr, sān, sì, wǔ",
    meaning: "Uno, dos, tres, cuatro, cinco",
    context: "Los primeros cinco números. Practícalos hasta que salgan automáticos.",
  },
  {
    id: 99,
    category: "Números y dinero",
    hanzi: "六、七、八、九、十",
    pinyin: "liù, qī, bā, jiǔ, shí",
    meaning: "Seis, siete, ocho, nueve, diez",
    context: "Del seis al diez. Con estos diez números puedes formar cualquier cifra.",
  },
  {
    id: 100,
    category: "Números y dinero",
    hanzi: "一百",
    pinyin: "yì bǎi",
    meaning: "Cien (100)",
    context: "百 (bǎi) es la unidad de centena. 200 = 两百 (liǎng bǎi).",
  },
  {
    id: 101,
    category: "Números y dinero",
    hanzi: "一千",
    pinyin: "yì qiān",
    meaning: "Mil (1,000)",
    context: "千 (qiān) es la unidad de millar.",
  },
  {
    id: 102,
    category: "Números y dinero",
    hanzi: "一万",
    pinyin: "yí wàn",
    meaning: "Diez mil (10,000)",
    context:
      "¡Cuidado! En chino existe 万 (wàn = 10,000) que no tiene equivalente directo en español. Un millón = 一百万 (yì bǎi wàn, cien diez-miles).",
  },
  {
    id: 103,
    category: "Números y dinero",
    hanzi: "人民币",
    pinyin: "rénmínbì",
    meaning: "RMB / Yuan (moneda china)",
    context:
      "La moneda oficial de China. Coloquialmente se dice 块 (kuài) en lugar de 元 (yuán). 10 元 = 10 块.",
  },
  {
    id: 104,
    category: "Números y dinero",
    hanzi: "这里可以换钱吗？",
    pinyin: "zhèlǐ kěyǐ huàn qián ma?",
    meaning: "¿Se puede cambiar dinero aquí?",
    context: "Para casas de cambio o bancos.",
  },
  {
    id: 105,
    category: "Números y dinero",
    hanzi: "今天的汇率是多少？",
    pinyin: "jīntiān de huìlǜ shì duōshao?",
    meaning: "¿Cuál es el tipo de cambio de hoy?",
    context: "Para saber a cuánto está el cambio de divisas.",
  },
  {
    id: 106,
    category: "Números y dinero",
    hanzi: "太便宜了",
    pinyin: "tài piányi le",
    meaning: "¡Es muy barato!",
    context: "Para expresar que algo tiene un buen precio.",
  },
  {
    id: 107,
    category: "Números y dinero",
    hanzi: "找错钱了",
    pinyin: "zhǎo cuò qián le",
    meaning: "Me dio mal el cambio",
    context: "Cuando el cambio que te devuelven no es correcto.",
  },
  {
    id: 108,
    category: "Números y dinero",
    hanzi: "一共多少钱？",
    pinyin: "yígòng duōshao qián?",
    meaning: "¿Cuánto es en total?",
    context: "Para pedir el monto total de una compra o cuenta.",
  },
  {
    id: 109,
    category: "Números y dinero",
    hanzi: "我没有零钱",
    pinyin: "wǒ méiyǒu língqián",
    meaning: "No tengo cambio / monedas sueltas",
    context: "Cuando solo tienes billetes grandes.",
  },

  // =========================================================================
  // TIEMPO Y CLIMA (13 frases)
  // =========================================================================
  {
    id: 110,
    category: "Tiempo y clima",
    hanzi: "今天天气怎么样？",
    pinyin: "jīntiān tiānqì zěnmeyàng?",
    meaning: "¿Cómo está el clima hoy?",
    context: "Pregunta general sobre el estado del tiempo.",
  },
  {
    id: 111,
    category: "Tiempo y clima",
    hanzi: "今天很热",
    pinyin: "jīntiān hěn rè",
    meaning: "Hoy hace mucho calor",
    context: "Cambia 热 (calor) por 冷 (lěng, frío) según el clima.",
  },
  {
    id: 112,
    category: "Tiempo y clima",
    hanzi: "明天会下雨吗？",
    pinyin: "míngtiān huì xià yǔ ma?",
    meaning: "¿Lloverá mañana?",
    context: "Para planificar actividades al aire libre.",
  },
  {
    id: 113,
    category: "Tiempo y clima",
    hanzi: "下雪了！",
    pinyin: "xià xuě le!",
    meaning: "¡Está nevando!",
    context: "Común en el norte de China durante el invierno.",
  },
  {
    id: 114,
    category: "Tiempo y clima",
    hanzi: "风很大",
    pinyin: "fēng hěn dà",
    meaning: "Hace mucho viento",
    context: "Para describir condiciones ventosas.",
  },
  {
    id: 115,
    category: "Tiempo y clima",
    hanzi: "现在几点？",
    pinyin: "xiànzài jǐ diǎn?",
    meaning: "¿Qué hora es?",
    context: "Pregunta universal sobre la hora actual.",
  },
  {
    id: 116,
    category: "Tiempo y clima",
    hanzi: "今天是星期几？",
    pinyin: "jīntiān shì xīngqī jǐ?",
    meaning: "¿Qué día de la semana es hoy?",
    context:
      "Los días en chino se numeran: 星期一 (lunes) a 星期六 (sábado). Domingo = 星期天/星期日.",
  },
  {
    id: 117,
    category: "Tiempo y clima",
    hanzi: "今天几号？",
    pinyin: "jīntiān jǐ hào?",
    meaning: "¿Qué fecha es hoy?",
    context: "Para preguntar el día del mes.",
  },
  {
    id: 118,
    category: "Tiempo y clima",
    hanzi: "春天、夏天、秋天、冬天",
    pinyin: "chūntiān, xiàtiān, qiūtiān, dōngtiān",
    meaning: "Primavera, verano, otoño, invierno",
    context: "Las cuatro estaciones. Útil para hablar del clima y viajes.",
  },
  {
    id: 119,
    category: "Tiempo y clima",
    hanzi: "天气预报说明天晴天",
    pinyin: "tiānqì yùbào shuō míngtiān qíngtiān",
    meaning: "El pronóstico dice que mañana estará despejado",
    context: "Para compartir información del pronóstico del tiempo.",
  },
  {
    id: 120,
    category: "Tiempo y clima",
    hanzi: "我需要带伞吗？",
    pinyin: "wǒ xūyào dài sǎn ma?",
    meaning: "¿Necesito llevar paraguas?",
    context: "Pregunta práctica antes de salir.",
  },
  {
    id: 121,
    category: "Tiempo y clima",
    hanzi: "今天多少度？",
    pinyin: "jīntiān duōshao dù?",
    meaning: "¿Cuántos grados hay hoy?",
    context: "China usa grados Celsius. 30°C es caluroso, 0°C es el punto de congelación.",
  },
  {
    id: 122,
    category: "Tiempo y clima",
    hanzi: "空气质量不好",
    pinyin: "kōngqì zhìliàng bù hǎo",
    meaning: "La calidad del aire no es buena",
    context:
      "Relevante en algunas ciudades grandes de China. Revisa el índice AQI antes de salir.",
  },

  // =========================================================================
  // EN EL HOSPITAL (12 frases)
  // =========================================================================
  {
    id: 123,
    category: "En el hospital",
    hanzi: "我想看医生",
    pinyin: "wǒ xiǎng kàn yīshēng",
    meaning: "Quiero ver a un médico",
  },
  {
    id: 124,
    category: "En el hospital",
    hanzi: "请挂号",
    pinyin: "qǐng guàhào",
    meaning: "Quiero registrarme (en el hospital)",
  },
  {
    id: 125,
    category: "En el hospital",
    hanzi: "我肚子疼",
    pinyin: "wǒ dùzi téng",
    meaning: "Me duele el estómago",
    context: "Cambia 肚子 por la parte del cuerpo que te duela",
  },
  {
    id: 126,
    category: "En el hospital",
    hanzi: "我发烧了",
    pinyin: "wǒ fāshāo le",
    meaning: "Tengo fiebre",
  },
  {
    id: 127,
    category: "En el hospital",
    hanzi: "我感冒了",
    pinyin: "wǒ gǎnmào le",
    meaning: "Estoy resfriado/a",
  },
  {
    id: 128,
    category: "En el hospital",
    hanzi: "需要做检查吗？",
    pinyin: "xūyào zuò jiǎnchá ma?",
    meaning: "¿Necesito hacerme un examen?",
  },
  {
    id: 129,
    category: "En el hospital",
    hanzi: "这个药怎么吃？",
    pinyin: "zhège yào zěnme chī?",
    meaning: "¿Cómo se toma este medicamento?",
    context: "Los médicos chinos suelen recetar medicina tradicional y occidental",
  },
  {
    id: 130,
    category: "En el hospital",
    hanzi: "一天吃几次？",
    pinyin: "yì tiān chī jǐ cì?",
    meaning: "¿Cuántas veces al día?",
    context: "Para preguntar la dosis del medicamento",
  },
  {
    id: 131,
    category: "En el hospital",
    hanzi: "我需要住院吗？",
    pinyin: "wǒ xūyào zhùyuàn ma?",
    meaning: "¿Necesito quedarme en el hospital?",
  },
  {
    id: 132,
    category: "En el hospital",
    hanzi: "有医疗保险吗？",
    pinyin: "yǒu yīliáo bǎoxiǎn ma?",
    meaning: "¿Tiene seguro médico?",
  },
  {
    id: 133,
    category: "En el hospital",
    hanzi: "在哪里拿药？",
    pinyin: "zài nǎlǐ ná yào?",
    meaning: "¿Dónde recojo la medicina?",
    context:
      "En China, las farmacias del hospital están separadas de las consultas",
  },
  {
    id: 134,
    category: "En el hospital",
    hanzi: "我好多了，谢谢医生",
    pinyin: "wǒ hǎo duō le, xièxie yīshēng",
    meaning: "Me siento mucho mejor, gracias doctor",
  },

  // =========================================================================
  // EN LA UNIVERSIDAD (13 frases)
  // =========================================================================
  {
    id: 135,
    category: "En la universidad",
    hanzi: "你学什么专业？",
    pinyin: "nǐ xué shénme zhuānyè?",
    meaning: "¿Qué carrera estudias?",
  },
  {
    id: 136,
    category: "En la universidad",
    hanzi: "我学经济学",
    pinyin: "wǒ xué jīngjìxué",
    meaning: "Estudio economía",
    context: "Cambia por tu carrera",
  },
  {
    id: 137,
    category: "En la universidad",
    hanzi: "你在哪个大学？",
    pinyin: "nǐ zài nǎge dàxué?",
    meaning: "¿En qué universidad estás?",
  },
  {
    id: 138,
    category: "En la universidad",
    hanzi: "今天有几节课？",
    pinyin: "jīntiān yǒu jǐ jié kè?",
    meaning: "¿Cuántas clases hay hoy?",
  },
  {
    id: 139,
    category: "En la universidad",
    hanzi: "图书馆在哪里？",
    pinyin: "túshūguǎn zài nǎlǐ?",
    meaning: "¿Dónde está la biblioteca?",
  },
  {
    id: 140,
    category: "En la universidad",
    hanzi: "我要去上课了",
    pinyin: "wǒ yào qù shàng kè le",
    meaning: "Tengo que ir a clase",
  },
  {
    id: 141,
    category: "En la universidad",
    hanzi: "考试是什么时候？",
    pinyin: "kǎoshì shì shénme shíhou?",
    meaning: "¿Cuándo es el examen?",
  },
  {
    id: 142,
    category: "En la universidad",
    hanzi: "作业什么时候交？",
    pinyin: "zuòyè shénme shíhou jiāo?",
    meaning: "¿Cuándo se entrega la tarea?",
  },
  {
    id: 143,
    category: "En la universidad",
    hanzi: "我们一起复习吧",
    pinyin: "wǒmen yìqǐ fùxí ba",
    meaning: "Repasemos juntos",
  },
  {
    id: 144,
    category: "En la universidad",
    hanzi: "你的成绩怎么样？",
    pinyin: "nǐ de chéngjì zěnmeyàng?",
    meaning: "¿Cómo son tus calificaciones?",
  },
  {
    id: 145,
    category: "En la universidad",
    hanzi: "我要去食堂吃饭",
    pinyin: "wǒ yào qù shítáng chī fàn",
    meaning: "Voy a comer al comedor",
    context: "Las universidades chinas tienen comedores muy económicos",
  },
  {
    id: 146,
    category: "En la universidad",
    hanzi: "宿舍在哪栋楼？",
    pinyin: "sùshè zài nǎ dòng lóu?",
    meaning: "¿En qué edificio están los dormitorios?",
  },
  {
    id: 147,
    category: "En la universidad",
    hanzi: "我想申请奖学金",
    pinyin: "wǒ xiǎng shēnqǐng jiǎngxuéjīn",
    meaning: "Quiero solicitar una beca",
  },

  // =========================================================================
  // CONVERSACIÓN TELEFÓNICA (12 frases)
  // =========================================================================
  {
    id: 148,
    category: "Conversación telefónica",
    hanzi: "喂，你好",
    pinyin: "wéi, nǐ hǎo",
    meaning: "¿Hola? (al contestar el teléfono)",
    context:
      "喂 (wéi) es el saludo estándar al contestar el teléfono en China",
  },
  {
    id: 149,
    category: "Conversación telefónica",
    hanzi: "请问你是谁？",
    pinyin: "qǐngwèn nǐ shì shéi?",
    meaning: "¿Quién habla, por favor?",
  },
  {
    id: 150,
    category: "Conversación telefónica",
    hanzi: "我找王老师",
    pinyin: "wǒ zhǎo Wáng lǎoshī",
    meaning: "Busco al profesor Wang",
    context: "Cambia el nombre por la persona que buscas",
  },
  {
    id: 151,
    category: "Conversación telefónica",
    hanzi: "他不在，请留言",
    pinyin: "tā bú zài, qǐng liúyán",
    meaning: "No está, deje un mensaje",
  },
  {
    id: 152,
    category: "Conversación telefónica",
    hanzi: "请等一下",
    pinyin: "qǐng děng yíxià",
    meaning: "Espere un momento, por favor",
  },
  {
    id: 153,
    category: "Conversación telefónica",
    hanzi: "你能再说一遍吗？",
    pinyin: "nǐ néng zài shuō yí biàn ma?",
    meaning: "¿Puede repetir?",
  },
  {
    id: 154,
    category: "Conversación telefónica",
    hanzi: "信号不好，听不清楚",
    pinyin: "xìnhào bù hǎo, tīng bù qīngchǔ",
    meaning: "La señal es mala, no escucho bien",
  },
  {
    id: 155,
    category: "Conversación telefónica",
    hanzi: "我给你发短信",
    pinyin: "wǒ gěi nǐ fā duǎnxìn",
    meaning: "Te envío un mensaje de texto",
  },
  {
    id: 156,
    category: "Conversación telefónica",
    hanzi: "我一会儿给你回电话",
    pinyin: "wǒ yíhuìr gěi nǐ huí diànhuà",
    meaning: "Te devuelvo la llamada en un rato",
  },
  {
    id: 157,
    category: "Conversación telefónica",
    hanzi: "你的手机号是多少？",
    pinyin: "nǐ de shǒujī hào shì duōshao?",
    meaning: "¿Cuál es tu número de celular?",
  },
  {
    id: 158,
    category: "Conversación telefónica",
    hanzi: "我打错了，对不起",
    pinyin: "wǒ dǎ cuò le, duìbuqǐ",
    meaning: "Marqué mal, lo siento",
  },
  {
    id: 159,
    category: "Conversación telefónica",
    hanzi: "挂了，再见",
    pinyin: "guà le, zàijiàn",
    meaning: "Cuelgo, adiós",
  },

  // =========================================================================
  // REDES SOCIALES Y TECNOLOGÍA (13 frases)
  // =========================================================================
  {
    id: 160,
    category: "Redes sociales y tecnología",
    hanzi: "你有微信吗？",
    pinyin: "nǐ yǒu Wēixìn ma?",
    meaning: "¿Tienes WeChat?",
  },
  {
    id: 161,
    category: "Redes sociales y tecnología",
    hanzi: "扫一下二维码",
    pinyin: "sǎo yíxià èrwéimǎ",
    meaning: "Escanea el código QR",
    context: "En China todo funciona con códigos QR",
  },
  {
    id: 162,
    category: "Redes sociales y tecnología",
    hanzi: "WiFi密码是什么？",
    pinyin: "WiFi mìmǎ shì shénme?",
    meaning: "¿Cuál es la contraseña del WiFi?",
  },
  {
    id: 163,
    category: "Redes sociales y tecnología",
    hanzi: "我的手机没电了",
    pinyin: "wǒ de shǒujī méi diàn le",
    meaning: "Mi celular se quedó sin batería",
  },
  {
    id: 164,
    category: "Redes sociales y tecnología",
    hanzi: "这里有充电器吗？",
    pinyin: "zhèlǐ yǒu chōngdiànqì ma?",
    meaning: "¿Hay un cargador aquí?",
  },
  {
    id: 165,
    category: "Redes sociales y tecnología",
    hanzi: "请给我发一下位置",
    pinyin: "qǐng gěi wǒ fā yíxià wèizhì",
    meaning: "Envíame la ubicación",
  },
  {
    id: 166,
    category: "Redes sociales y tecnología",
    hanzi: "你在网上买的吗？",
    pinyin: "nǐ zài wǎngshàng mǎi de ma?",
    meaning: "¿Lo compraste por internet?",
  },
  {
    id: 167,
    category: "Redes sociales y tecnología",
    hanzi: "我用支付宝付款",
    pinyin: "wǒ yòng Zhīfùbǎo fùkuǎn",
    meaning: "Pago con Alipay",
  },
  {
    id: 168,
    category: "Redes sociales y tecnología",
    hanzi: "帮我拍一张照片",
    pinyin: "bāng wǒ pāi yì zhāng zhàopiàn",
    meaning: "Tómame una foto",
  },
  {
    id: 169,
    category: "Redes sociales y tecnología",
    hanzi: "我发到朋友圈了",
    pinyin: "wǒ fā dào péngyouquān le",
    meaning: "Lo publiqué en Momentos (WeChat)",
    context: "朋友圈 es la red social dentro de WeChat",
  },
  {
    id: 170,
    category: "Redes sociales y tecnología",
    hanzi: "你关注了吗？",
    pinyin: "nǐ guānzhù le ma?",
    meaning: "¿Ya lo seguiste? (en redes sociales)",
  },
  {
    id: 171,
    category: "Redes sociales y tecnología",
    hanzi: "外卖多久能到？",
    pinyin: "wàimài duōjiǔ néng dào?",
    meaning: "¿Cuánto tarda la comida a domicilio?",
    context: "Apps como 美团 y 饿了么 son muy populares",
  },
  {
    id: 172,
    category: "Redes sociales y tecnología",
    hanzi: "可以用手机支付吗？",
    pinyin: "kěyǐ yòng shǒujī zhīfù ma?",
    meaning: "¿Se puede pagar con el celular?",
  },
];

// =============================================================================
// FUNCIONES DE UTILIDAD
// =============================================================================

/** Obtiene todas las frases de una categoría específica */
export function getPhrasesByCategory(category: PhraseCategory): Phrase[] {
  return phrases.filter((phrase) => phrase.category === category);
}

/** Busca frases que contengan el texto dado en significado, pinyin o hanzi */
export function searchPhrases(query: string): Phrase[] {
  const lowerQuery = query.toLowerCase();
  return phrases.filter(
    (phrase) =>
      phrase.meaning.toLowerCase().includes(lowerQuery) ||
      phrase.pinyin.toLowerCase().includes(lowerQuery) ||
      phrase.hanzi.includes(query)
  );
}

/** Obtiene el conteo de frases por categoría */
export function getPhraseCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const category of phraseCategories) {
    counts[category] = phrases.filter((p) => p.category === category).length;
  }
  return counts;
}

/** Obtiene frases aleatorias para ejercicios de repaso */
export function getRandomPhrases(count: number): Phrase[] {
  const shuffled = [...phrases].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/** Obtiene frases aleatorias de una categoría específica */
export function getRandomPhrasesByCategory(
  category: PhraseCategory,
  count: number
): Phrase[] {
  const categoryPhrases = getPhrasesByCategory(category);
  const shuffled = categoryPhrases.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
