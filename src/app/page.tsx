"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Brain,
  BookOpen,
  Clock,
  ArrowRight,
  Layers,
  HelpCircle,
  Music,
  Mic,
  PenTool,
  BookMarked,
  Sparkles,
  Quote,
} from "lucide-react";
import { useProgressStore } from "@/stores/useProgressStore";
import { getWeeklyActivity } from "@/lib/progress";
import { cn } from "@/lib/utils";
import ProgressBar from "@/components/ui/ProgressBar";
import TextToSpeech from "@/components/audio/TextToSpeech";

// -------------------------------------------------------------------------
// Frases del dia - se selecciona una distinta cada dia del mes
// -------------------------------------------------------------------------
const dailyPhrases = [
  {
    hanzi: "\u5343\u91CC\u4E4B\u884C\uFF0C\u59CB\u4E8E\u8DB3\u4E0B",
    pinyin: "qi\u0101n l\u01D0 zh\u012B x\u00EDng, sh\u01D0 y\u00FA z\u00FA xi\u00E0",
    meaning: "Un viaje de mil millas comienza con un solo paso",
  },
  {
    hanzi: "\u5B66\u800C\u65F6\u4E60\u4E4B",
    pinyin: "xu\u00E9 \u00E9r sh\u00ED x\u00ED zh\u012B",
    meaning: "Aprender y practicar constantemente",
  },
  {
    hanzi: "\u6D3B\u5230\u8001\u5B66\u5230\u8001",
    pinyin: "hu\u00F3 d\u00E0o l\u01CEo xu\u00E9 d\u00E0o l\u01CEo",
    meaning: "Nunca es tarde para aprender",
  },
  {
    hanzi: "\u719F\u80FD\u751F\u5DE7",
    pinyin: "sh\u00FA n\u00E9ng sh\u0113ng qi\u01CEo",
    meaning: "La pr\u00E1ctica hace al maestro",
  },
  {
    hanzi: "\u6709\u5FD7\u8005\u4E8B\u7ADF\u6210",
    pinyin: "y\u01D2u zh\u00EC zh\u011B sh\u00EC j\u00ECng ch\u00E9ng",
    meaning: "Donde hay voluntad, hay un camino",
  },
  {
    hanzi: "\u4E0D\u6015\u6162\uFF0C\u5C31\u6015\u7AD9",
    pinyin: "b\u00F9 p\u00E0 m\u00E0n, ji\u00F9 p\u00E0 zh\u00E0n",
    meaning: "No temas ir despacio, solo teme quedarte quieto",
  },
  {
    hanzi: "\u4E66\u5C71\u6709\u8DEF\u52E4\u4E3A\u5F84",
    pinyin: "sh\u016B sh\u0101n y\u01D2u l\u00F9 q\u00EDn w\u00E9i j\u00ECng",
    meaning: "En la montana de libros, la diligencia es el camino",
  },
  {
    hanzi: "\u5931\u8D25\u662F\u6210\u529F\u4E4B\u6BCD",
    pinyin: "sh\u012B b\u00E0i sh\u00EC ch\u00E9ng g\u014Dng zh\u012B m\u01D4",
    meaning: "El fracaso es la madre del exito",
  },
  {
    hanzi: "\u4E16\u4E0A\u65E0\u96BE\u4E8B\uFF0C\u53EA\u6015\u6709\u5FC3\u4EBA",
    pinyin: "sh\u00EC sh\u00E0ng w\u00FA n\u00E1n sh\u00EC, zh\u01D0 p\u00E0 y\u01D2u x\u012Bn r\u00E9n",
    meaning: "Nada es imposible para quien tiene determinacion",
  },
  {
    hanzi: "\u65E9\u8D77\u7684\u9E1F\u513F\u6709\u866B\u5403",
    pinyin: "z\u01CEo q\u01D0 de ni\u01CEo \u00E9r y\u01D2u ch\u00F3ng ch\u012B",
    meaning: "Al que madruga, Dios le ayuda",
  },
  {
    hanzi: "\u5165\u4E61\u968F\u4FD7",
    pinyin: "r\u00F9 xi\u0101ng su\u00ED s\u00FA",
    meaning: "Donde fueres, haz lo que vieres",
  },
  {
    hanzi: "\u4E00\u5206\u8015\u8018\uFF0C\u4E00\u5206\u6536\u83B7",
    pinyin: "y\u012B f\u0113n g\u0113ng y\u00FAn, y\u012B f\u0113n sh\u014Du hu\u00F2",
    meaning: "Quien siembra, cosecha",
  },
  {
    hanzi: "\u5929\u4E0B\u65E0\u4E0D\u6563\u7684\u5BB4\u5E2D",
    pinyin: "ti\u0101n xi\u00E0 w\u00FA b\u00F9 s\u00E0n de y\u00E0n x\u00ED",
    meaning: "Toda fiesta tiene su fin (nada dura para siempre)",
  },
  {
    hanzi: "\u4E07\u4E8B\u5F00\u5934\u96BE",
    pinyin: "w\u00E0n sh\u00EC k\u0101i t\u00F3u n\u00E1n",
    meaning: "Todo comienzo es dificil",
  },
  {
    hanzi: "\u65F6\u95F4\u5C31\u662F\u91D1\u94B1",
    pinyin: "sh\u00ED ji\u0101n ji\u00F9 sh\u00EC j\u012Bn qi\u00E1n",
    meaning: "El tiempo es oro",
  },
  {
    hanzi: "\u4E09\u4EBA\u884C\uFF0C\u5FC5\u6709\u6211\u5E08",
    pinyin: "s\u0101n r\u00E9n x\u00EDng, b\u00EC y\u01D2u w\u01D2 sh\u012B",
    meaning: "De tres personas que caminan juntas, una puede ser mi maestro",
  },
  {
    hanzi: "\u77E5\u5DF1\u77E5\u5F7C\uFF0C\u767E\u6218\u767E\u80DC",
    pinyin: "zh\u012B j\u01D0 zh\u012B b\u01D0, b\u01CEi zh\u00E0n b\u01CEi sh\u00E8ng",
    meaning: "Conocete a ti mismo y a tu enemigo, y ganaras cien batallas",
  },
  {
    hanzi: "\u5FC3\u6025\u5403\u4E0D\u4E86\u70ED\u8C46\u8150",
    pinyin: "x\u012Bn j\u00ED ch\u012B b\u00F9 li\u01CEo r\u00E8 d\u00F2u fu",
    meaning: "La prisa no permite comer tofu caliente (la paciencia es una virtud)",
  },
  {
    hanzi: "\u5B9E\u8DF5\u51FA\u771F\u77E5",
    pinyin: "sh\u00ED ji\u00E0n ch\u016B zh\u0113n zh\u012B",
    meaning: "La practica es el origen del verdadero conocimiento",
  },
  {
    hanzi: "\u597D\u597D\u5B66\u4E60\uFF0C\u5929\u5929\u5411\u4E0A",
    pinyin: "h\u01CEo h\u01CEo xu\u00E9 x\u00ED, ti\u0101n ti\u0101n xi\u00E0ng sh\u00E0ng",
    meaning: "Estudia bien, mejora cada dia",
  },
  {
    hanzi: "\u4E0D\u8BDD\u4E0D\u77E5\u9053",
    pinyin: "b\u00F9 hu\u00E0 b\u00F9 zh\u012B d\u00E0o",
    meaning: "Sin hablar no se puede saber (la comunicacion es clave)",
  },
  {
    hanzi: "\u5B66\u65E0\u6B62\u5883",
    pinyin: "xu\u00E9 w\u00FA zh\u01D0 j\u00ECng",
    meaning: "El aprendizaje no tiene limites",
  },
  {
    hanzi: "\u6EF4\u6C34\u7A7F\u77F3",
    pinyin: "d\u012B shu\u01D0 chu\u0101n sh\u00ED",
    meaning: "Las gotas de agua perforan la piedra (la persistencia vence)",
  },
  {
    hanzi: "\u4E00\u65E5\u4E4B\u8BA1\u5728\u4E8E\u6668",
    pinyin: "y\u012B r\u00EC zh\u012B j\u00EC z\u00E0i y\u00FA ch\u00E9n",
    meaning: "La planificacion del dia empieza por la manana",
  },
  {
    hanzi: "\u529F\u592B\u4E0D\u8D1F\u6709\u5FC3\u4EBA",
    pinyin: "g\u014Dng fu b\u00F9 f\u00F9 y\u01D2u x\u012Bn r\u00E9n",
    meaning: "El esfuerzo no decepciona a quien tiene determinacion",
  },
  {
    hanzi: "\u767E\u95FB\u4E0D\u5982\u4E00\u89C1",
    pinyin: "b\u01CEi w\u00E9n b\u00F9 r\u00FA y\u012B ji\u00E0n",
    meaning: "Ver una vez vale mas que escuchar cien veces",
  },
  {
    hanzi: "\u8DEF\u9065\u77E5\u9A6C\u529B",
    pinyin: "l\u00F9 y\u00E1o zh\u012B m\u01CE l\u00EC",
    meaning: "Un largo camino revela la fuerza del caballo (el tiempo demuestra el caracter)",
  },
  {
    hanzi: "\u6709\u670B\u81EA\u8FDC\u65B9\u6765\uFF0C\u4E0D\u4EA6\u4E50\u4E4E",
    pinyin: "y\u01D2u p\u00E9ng z\u00EC yu\u01CEn f\u0101ng l\u00E1i, b\u00F9 y\u00EC l\u00E8 h\u016B",
    meaning: "Que alegria cuando amigos vienen de lejos",
  },
  {
    hanzi: "\u8BFB\u4E07\u5377\u4E66\uFF0C\u884C\u4E07\u91CC\u8DEF",
    pinyin: "d\u00FA w\u00E0n ju\u01CEn sh\u016B, x\u00EDng w\u00E0n l\u01D0 l\u00F9",
    meaning: "Lee diez mil libros, recorre diez mil caminos",
  },
  {
    hanzi: "\u7B11\u4E00\u7B11\uFF0C\u5341\u5E74\u5C11",
    pinyin: "xi\u00E0o y\u012B xi\u00E0o, sh\u00ED ni\u00E1n sh\u00E0o",
    meaning: "Una sonrisa te rejuvenece diez anos",
  },
  {
    hanzi: "\u5403\u4E00\u5854\uFF0C\u957F\u4E00\u667A",
    pinyin: "ch\u012B y\u012B qi\u00E0n, zh\u01CEng y\u012B zh\u00EC",
    meaning: "De los errores se aprende",
  },
];

// -------------------------------------------------------------------------
// Datos de las tarjetas de acceso rapido
// -------------------------------------------------------------------------
const quickAccessItems = [
  {
    title: "Flashcards",
    description: "Repasa vocabulario con tarjetas inteligentes de repetici\u00F3n espaciada",
    href: "/practica/flashcards",
    icon: Layers,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    hoverColor: "hover:border-amber-200 dark:hover:border-amber-800",
  },
  {
    title: "Quiz R\u00E1pido",
    description: "Pon a prueba tus conocimientos con preguntas interactivas",
    href: "/practica/quiz",
    icon: HelpCircle,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    hoverColor: "hover:border-blue-200 dark:hover:border-blue-800",
  },
  {
    title: "Entrenador de Tonos",
    description: "Domina los 4 tonos del mandar\u00EDn con ejercicios pr\u00E1cticos",
    href: "/tonos",
    icon: Music,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    hoverColor: "hover:border-purple-200 dark:hover:border-purple-800",
  },
  {
    title: "Pronunciaci\u00F3n",
    description: "Mejora tu acento escuchando y repitiendo sonidos nativos",
    href: "/practica/pronunciacion",
    icon: Mic,
    color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    hoverColor: "hover:border-green-200 dark:hover:border-green-800",
  },
  {
    title: "Escritura",
    description: "Aprende a trazar caracteres chinos con el orden correcto",
    href: "/practica/escritura",
    icon: PenTool,
    color: "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400",
    hoverColor: "hover:border-rose-200 dark:hover:border-rose-800",
  },
  {
    title: "Diccionario",
    description: "Busca caracteres, palabras y expresiones al instante",
    href: "/diccionario",
    icon: BookMarked,
    color: "bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400",
    hoverColor: "hover:border-teal-200 dark:hover:border-teal-800",
  },
];

// -------------------------------------------------------------------------
// Etiquetas de los dias de la semana (L-D)
// -------------------------------------------------------------------------
const dayLabels = ["L", "M", "X", "J", "V", "S", "D"];

// -------------------------------------------------------------------------
// Variantes de animacion reutilizables
// -------------------------------------------------------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

// =========================================================================
// Componente principal: Dashboard / Landing
// =========================================================================
export default function HomePage() {
  const { streak, wordsLearned, completedLessons, studyTime, initialize } =
    useProgressStore();

  const [weeklyData, setWeeklyData] = useState<{ date: string; minutes: number }[]>([]);

  // Inicializar el store y los datos semanales
  useEffect(() => {
    initialize();
    setWeeklyData(getWeeklyActivity());
  }, [initialize]);

  // Frase del dia basada en el dia del mes
  const todayPhrase = dailyPhrases[new Date().getDate() % dailyPhrases.length];

  // Porcentaje de progreso general (sobre 30 lecciones HSK1 aproximadas)
  const totalLessons = 30;
  const progressPercent = Math.round(
    (completedLessons.length / totalLessons) * 100
  );

  // Minutos totales formateados
  const totalHours = Math.floor(studyTime.totalMinutes / 60);
  const totalMins = studyTime.totalMinutes % 60;
  const formattedTime =
    totalHours > 0 ? `${totalHours}h ${totalMins}m` : `${totalMins}m`;

  // Valor maximo en la grafica semanal (para normalizar barras)
  const maxMinutes = Math.max(...weeklyData.map((d) => d.minutes), 1);

  return (
    <motion.div
      className="max-w-5xl mx-auto space-y-8 pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ================================================================
          1. Banner de bienvenida + Frase del dia
          ================================================================ */}
      <motion.section
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-red-700 p-6 sm:p-8 text-white shadow-lg"
      >
        {/* Circulos decorativos de fondo */}
        <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />

        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Titulo y subtitulo */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Aprende Chino Mandar&iacute;n
            </h1>
            <p className="text-red-100 text-sm sm:text-base max-w-md">
              Tu viaje al idioma m&aacute;s hablado del mundo comienza aqu&iacute;
            </p>
          </div>

          {/* Frase del dia */}
          <div className="flex items-start gap-3 rounded-xl bg-white/10 backdrop-blur-sm p-4 sm:p-5 max-w-md w-full lg:w-auto">
            <Quote size={20} className="mt-0.5 shrink-0 text-red-200" />
            <div className="space-y-1 flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-200 flex items-center gap-1.5">
                <Sparkles size={14} />
                Frase del d&iacute;a
              </p>
              <p className="text-lg sm:text-xl font-bold leading-snug font-[family-name:var(--font-noto-sc,'Noto_Sans_SC',sans-serif)]">
                {todayPhrase.hanzi}
              </p>
              <p className="text-red-200 text-sm italic">{todayPhrase.pinyin}</p>
              <p className="text-red-100 text-sm">{todayPhrase.meaning}</p>
            </div>
            <TextToSpeech
              text={todayPhrase.hanzi}
              size="sm"
              className="!bg-white/20 !text-white hover:!bg-white/30 shrink-0"
            />
          </div>
        </div>
      </motion.section>

      {/* ================================================================
          2. Estadisticas rapidas
          ================================================================ */}
      <motion.section variants={itemVariants}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Flame className="text-orange-500" size={24} />}
            label="Racha diaria"
            value={`${streak.currentStreak}`}
            unit="d\u00EDas"
            accent="orange"
          />
          <StatCard
            icon={<Brain className="text-violet-500" size={24} />}
            label="Palabras aprendidas"
            value={`${wordsLearned}`}
            unit="palabras"
            accent="violet"
          />
          <StatCard
            icon={<BookOpen className="text-blue-500" size={24} />}
            label="Lecciones completadas"
            value={`${completedLessons.length}`}
            unit={`de ${totalLessons}`}
            accent="blue"
          />
          <StatCard
            icon={<Clock className="text-emerald-500" size={24} />}
            label="Tiempo de estudio"
            value={formattedTime}
            unit="total"
            accent="emerald"
          />
        </div>
      </motion.section>

      {/* ================================================================
          3. Continua aprendiendo
          ================================================================ */}
      <motion.section variants={itemVariants}>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-3 flex-1">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Contin&uacute;a donde te quedaste
              </h2>
              <ProgressBar
                value={progressPercent}
                label={`Progreso HSK 1`}
                color="red"
                size="md"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {completedLessons.length === 0
                  ? "Comienza tu primera lecci\u00F3n y da el primer paso"
                  : `Has completado ${completedLessons.length} de ${totalLessons} lecciones`}
              </p>
            </div>
            <Link
              href="/curso/hsk1"
              className={cn(
                "inline-flex items-center justify-center gap-2 shrink-0",
                "rounded-xl bg-red-600 hover:bg-red-700 text-white",
                "px-5 py-3 text-sm font-semibold",
                "transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
              )}
            >
              {completedLessons.length === 0
                ? "Comenzar ahora"
                : "Continuar"}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ================================================================
          4. Acceso rapido
          ================================================================ */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Practica y herramientas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickAccessItems.map((item) => (
            <QuickAccessCard key={item.href} {...item} />
          ))}
        </div>
      </motion.section>

      {/* ================================================================
          5. Actividad semanal
          ================================================================ */}
      <motion.section variants={itemVariants} className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Actividad semanal
        </h2>
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
          {/* Barras del grafico */}
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyData.map((day, index) => {
              const heightPercent =
                day.minutes > 0 ? (day.minutes / maxMinutes) * 100 : 0;
              const isToday = index === weeklyData.length - 1;

              return (
                <div
                  key={day.date}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  {/* Etiqueta de minutos */}
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {day.minutes > 0 ? `${day.minutes}m` : ""}
                  </span>

                  {/* Barra */}
                  <motion.div
                    className="w-full max-w-[40px] rounded-t-lg relative"
                    initial={{ height: 0 }}
                    animate={{ height: `${Math.max(heightPercent, 4)}%` }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 rounded-t-lg",
                        isToday
                          ? "bg-red-500"
                          : day.minutes > 0
                            ? "bg-red-300 dark:bg-red-700"
                            : "bg-gray-100 dark:bg-gray-800"
                      )}
                    />
                  </motion.div>

                  {/* Etiqueta del dia */}
                  <span
                    className={cn(
                      "text-xs font-medium",
                      isToday
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-400 dark:text-gray-500"
                    )}
                  >
                    {dayLabels[index]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Resumen debajo del grafico */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>
              Total esta semana:{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {weeklyData.reduce((sum, d) => sum + d.minutes, 0)} minutos
              </span>
            </span>
            <span className="text-xs">
              {new Date().toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
              })}{" "}
              — hoy
            </span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

// =========================================================================
// Subcomponentes
// =========================================================================

/** Tarjeta de estadistica individual */
function StatCard({
  icon,
  label,
  value,
  unit,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  accent: "orange" | "violet" | "blue" | "emerald";
}) {
  const bgMap = {
    orange: "bg-orange-50 dark:bg-orange-950/40",
    violet: "bg-violet-50 dark:bg-violet-950/40",
    blue: "bg-blue-50 dark:bg-blue-950/40",
    emerald: "bg-emerald-50 dark:bg-emerald-950/40",
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn(
        "rounded-2xl border border-gray-200 dark:border-gray-800",
        "bg-white dark:bg-gray-900 p-4 shadow-sm",
        "transition-shadow duration-200 hover:shadow-md"
      )}
    >
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-xl p-2.5 mb-3",
          bgMap[accent]
        )}
      >
        {icon}
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {value}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{unit}</p>
      <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
        {label}
      </p>
    </motion.div>
  );
}

/** Tarjeta de acceso rapido a herramientas */
function QuickAccessCard({
  title,
  description,
  href,
  icon: Icon,
  color,
  hoverColor,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  hoverColor: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "rounded-2xl border border-gray-200 dark:border-gray-800",
          "bg-white dark:bg-gray-900 p-5 shadow-sm",
          "transition-all duration-200 hover:shadow-md cursor-pointer h-full",
          hoverColor
        )}
      >
        <div className={cn("inline-flex items-center justify-center rounded-xl p-3 mb-3", color)}>
          <Icon size={22} />
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
