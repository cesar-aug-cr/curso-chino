"use client";
import { useState } from "react";
import { Landmark, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CulturalArticle {
  id: number;
  category: string;
  title: string;
  content: string;
  funFact?: string;
}

const categories = [
  "Sociedad y costumbres",
  "Comida y bebida",
  "Festividades",
  "Idioma y escritura",
  "Historia y filosofia",
  "Vida moderna",
] as const;

const articles: CulturalArticle[] = [
  // ===== Sociedad y costumbres =====
  {
    id: 1,
    category: "Sociedad y costumbres",
    title: "El concepto de 面子 (miànzi) - La cara",
    content:
      "En la cultura china, '面子' (mianzi, literalmente 'cara') es uno de los conceptos mas importantes. No se refiere a la cara fisica, sino a la reputacion, dignidad y estatus social de una persona. 'Perder la cara' (丢脸, diū liǎn) es una de las peores cosas que pueden pasarte en China. Significa quedar en ridiculo frente a otros. Por eso, los chinos evitan criticar directamente a alguien en publico, rechazar invitaciones de forma abrupta, o poner a alguien en una situacion incomoda. Si quieres llevarte bien con hablantes de chino, recuerda: siempre da una 'salida' a la otra persona. En vez de decir 'no' directamente, di algo como '我想想' (wo xiangxiang, 'lo pensare'). Esto les permite mantener su 面子.",
    funFact:
      "En negocios, los chinos pueden gastar fortunas en cenas y regalos para 'dar cara' (给面子, gěi miànzi) a sus socios. Rechazar un regalo o una invitacion a cenar puede interpretarse como 'no darle cara' a la otra persona.",
  },
  {
    id: 2,
    category: "Sociedad y costumbres",
    title: "El respeto a los mayores: la piedad filial",
    content:
      "La piedad filial (孝, xiào) es el valor mas fundamental de la cultura china, heredado de las ensenanzas de Confucio hace mas de 2,500 anos. Significa respetar, obedecer y cuidar a los padres y mayores. En China, es comun que los hijos adultos vivan con sus padres o los apoyen economicamente. Los abuelos frecuentemente cuidan a los nietos mientras los padres trabajan. El saludo formal 您 (nín) en lugar de 你 (nǐ) se usa con personas mayores como muestra de respeto. En la mesa, se espera que los mayores comiencen a comer primero.",
    funFact:
      "En chino, hay palabras diferentes para cada relacion familiar dependiendo de si es del lado paterno o materno, y si la persona es mayor o menor que tu. Esto muestra la importancia de la jerarquia familiar.",
  },
  {
    id: 3,
    category: "Sociedad y costumbres",
    title: "Los numeros de la suerte y la mala suerte",
    content:
      "Los numeros tienen un significado muy especial en China. El 8 (八, bā) es el numero mas afortunado porque suena parecido a 发 (fā), que significa 'prosperar'. Los Juegos Olimpicos de Beijing comenzaron el 08/08/2008 a las 8:08 PM. El 6 (六, liù) tambien es afortunado porque suena como 'fluir' (todo va bien). El 9 (九, jiǔ) simboliza longevidad. Pero el 4 (四, sì) es el numero de la mala suerte porque suena como 死 (sǐ, morir). Muchos edificios en China no tienen piso 4, ni 14, ni 24. Algunos hospitales no tienen habitacion 4. Y nunca regales algo en cantidades de 4.",
    funFact:
      "Las matriculas de coches con muchos 8 se venden por miles de dolares en subastas. Una matricula con '88888' puede costar mas que el propio coche.",
  },
  {
    id: 4,
    category: "Sociedad y costumbres",
    title: "El arte de regalar: lo que SI y lo que NO",
    content:
      "En China, regalar es todo un arte con reglas especificas. NUNCA regales relojes (送钟, sòng zhōng suena como 送终 'acompanar al funeral'), paraguas (伞, sǎn suena como 散 'separarse'), ni zapatos (鞋, xié suena como 邪 'maligno'). Tampoco regales objetos cortantes como tijeras o cuchillos, que simbolizan 'cortar' la relacion. Los regalos ideales son: frutas (especialmente en cantidad par), te de buena calidad, licor, o sobres rojos con dinero (红包, hóngbāo). El rojo es el color de la buena suerte. Y siempre presenta los regalos con las DOS manos.",
    funFact:
      "Cuando recibes un regalo en China, la tradicion dice que no lo abras frente a la persona que te lo dio. Abrirlo inmediatamente puede parecer ansioso o materialista.",
  },

  // ===== Comida y bebida =====
  {
    id: 5,
    category: "Comida y bebida",
    title: "La cultura del te: mucho mas que una bebida",
    content:
      "El te (茶, chá) es la bebida nacional de China y tiene una historia de mas de 5,000 anos. Hay seis tipos principales: verde (绿茶), negro/rojo (红茶), blanco (白茶), oolong (乌龙茶), amarillo (黄茶) y oscuro/pu-erh (黑茶). Servir te es un acto de hospitalidad: cuando visitas a alguien, lo primero que te ofrecen es te. En los restaurantes cantoneses, golpear la mesa suavemente con dos dedos es una forma de dar las gracias cuando alguien te sirve te. Esta tradicion viene de un emperador que, disfrazado de plebeyo, sirvio te a sus subditos, quienes no podian arrodillarse sin revelar su identidad.",
    funFact:
      "China produce mas de 2 millones de toneladas de te al ano. El te pu-erh anejado puede valer mas que el oro por gramo.",
  },
  {
    id: 6,
    category: "Comida y bebida",
    title: "Comer en China: costumbres en la mesa",
    content:
      "La comida en China se comparte: se piden varios platos que van al centro de la mesa y todos se sirven con palillos (筷子, kuàizi). Es de buena educacion servir comida a los demas antes que a ti mismo. NUNCA claves los palillos verticalmente en el arroz, ya que parece incienso quemandose y simboliza muerte. Tampoco senales con los palillos ni los uses para mover platos. En una comida formal, el anfitrion siempre paga la cuenta completa; dividir la cuenta se considera descortes. Si alguien te invita a comer, la proxima vez se espera que tu invites.",
    funFact:
      "La cocina china tiene ocho grandes tradiciones regionales (八大菜系). La comida de Sichuan es famosa por ser super picante, mientras que la cantonesa es mas suave. Lo que comes en restaurantes chinos fuera de China raramente se parece a la comida real china.",
  },
  {
    id: 7,
    category: "Comida y bebida",
    title: "El agua caliente: la bebida favorita de China",
    content:
      "Si hay algo que sorprende a los extranjeros en China es que todos beben agua caliente (热水, rè shuǐ) o tibia, incluso en verano. La medicina tradicional china considera que beber agua fria dana el estomago y altera el equilibrio del cuerpo. En trenes, aeropuertos y oficinas siempre hay dispensadores de agua caliente. Si pides agua en un restaurante, te traeran agua caliente a menos que especifiques 冰水 (bīng shuǐ, agua helada). Este habito es tan arraigado que '多喝热水' (duō hē rè shuǐ, 'bebe mas agua caliente') se ha convertido en un meme porque es el consejo que los chinos dan para cualquier malestar.",
    funFact:
      "'多喝热水' (bebe mas agua caliente) es tan comun como consejo que en internet se ha vuelto un meme. Te duele la cabeza? Bebe agua caliente. Estas triste? Bebe agua caliente. Te rompiste una pierna? Bebe agua caliente.",
  },

  // ===== Festividades =====
  {
    id: 8,
    category: "Festividades",
    title: "El Ano Nuevo Chino: la fiesta mas grande del mundo",
    content:
      "El Ano Nuevo Chino (春节, Chūn Jié, literalmente 'Festival de Primavera') es la celebracion mas importante de China. Se basa en el calendario lunar y cae entre enero y febrero. Las celebraciones duran 15 dias. La Nochevieja china, las familias se reunen para una cena especial (年夜饭, nián yè fàn) donde se comen jiaozi (饺子, dumplings), pescado (鱼, yú, porque suena como 'abundancia'), y fideos largos (simbolizando larga vida). Se dan sobres rojos (红包, hóngbāo) con dinero a los ninos. Los colores rojo y dorado dominan todo: decoraciones, ropa, faroles. Se lanzan fuegos artificiales para espantar al monstruo mitologico Nian (年).",
    funFact:
      "La migracion del Ano Nuevo Chino (春运, chūnyùn) es la mayor migracion humana del planeta: mas de 3 mil millones de viajes se hacen en un periodo de 40 dias.",
  },
  {
    id: 9,
    category: "Festividades",
    title: "El Festival de los Faroles y el Festival del Medio Otono",
    content:
      "El Festival de los Faroles (元宵节, Yuánxiāo Jié) marca el final de las celebraciones del Ano Nuevo Chino, el dia 15 del primer mes lunar. Se comen bolas de arroz glutinoso dulces llamadas 汤圆 (tāngyuán), que simbolizan la union familiar por su forma redonda. Se cuelgan faroles rojos con acertijos escritos. El Festival del Medio Otono (中秋节, Zhōngqiū Jié) se celebra cuando la luna llena esta en su punto mas brillante. Las familias se reunen a contemplar la luna y comen pasteles de luna (月饼, yuèbing). La leyenda cuenta que una diosa llamada Chang'e vive en la luna con un conejo de jade.",
    funFact:
      "Los pasteles de luna pueden tener rellenos muy variados: desde la clasica pasta de semilla de loto hasta huevo salado, carne, o incluso helado en versiones modernas.",
  },

  // ===== Idioma y escritura =====
  {
    id: 10,
    category: "Idioma y escritura",
    title: "La historia de los caracteres chinos",
    content:
      "Los caracteres chinos (汉字, hànzì) son el sistema de escritura continuo mas antiguo del mundo, con mas de 3,000 anos de historia. Los primeros caracteres fueron encontrados grabados en huesos de oraculo (甲骨文, jiǎgǔwén) de la dinastia Shang. Originalmente eran dibujos simples: 山 (montana) parece tres picos, 人 (persona) parece alguien caminando, 日 (sol) era un circulo con un punto. Con el tiempo se fueron simplificando. En 1956, el gobierno chino creo los 'caracteres simplificados' (简体字, jiǎntǐzì) para mejorar la alfabetizacion. Taiwan y Hong Kong aun usan los caracteres tradicionales (繁体字, fántǐzì).",
    funFact:
      "El diccionario chino mas grande contiene mas de 85,000 caracteres, pero para leer un periodico solo necesitas conocer unos 3,000. Un chino educado conoce entre 6,000 y 8,000.",
  },
  {
    id: 11,
    category: "Idioma y escritura",
    title: "Por que el chino NO tiene alfabeto (y esta bien)",
    content:
      "A diferencia del espanol, el chino no tiene un alfabeto. Cada caracter es una unidad con su propio significado y pronunciacion. Esto asusta a muchos estudiantes, pero tiene ventajas increibles: 1) Puedes leer chino aunque no sepas pronunciar una palabra (el significado esta en el caracter). 2) Personas que hablan dialectos completamente diferentes (cantones, shangaines, etc.) pueden comunicarse por escrito. 3) Puedes leer textos de hace miles de anos. El pinyin (拼音) que usamos para aprender es solo una herramienta de romanizacion, no una escritura alternativa. Los chinos lo aprenden en la escuela pero luego usan caracteres para todo.",
    funFact:
      "En China se usa pinyin para escribir en el telefono y computadora: escribes el pinyin y el software sugiere los caracteres correctos. Es tan eficiente que muchos jovenes chinos estan 'olvidando' como escribir caracteres a mano.",
  },
  {
    id: 12,
    category: "Idioma y escritura",
    title: "Los nombres chinos y sus significados ocultos",
    content:
      "Los nombres chinos tienen una estructura simple: apellido (1 caracter) + nombre (1-2 caracteres). El apellido va PRIMERO, al reves que en espanol. Hay solo unos 100 apellidos comunes, siendo los mas populares 王 (Wáng), 李 (Lǐ), 张 (Zhāng) y 刘 (Liú). Los nombres de pila se eligen con mucho cuidado porque cada caracter tiene un significado. Por ejemplo, 明 (míng) significa 'brillante', 美 (měi) significa 'bella', 强 (qiáng) significa 'fuerte'. Algunos padres consultan a adivinos para elegir caracteres con buen feng shui. Nunca le pongas a un bebe un nombre con caracteres negativos.",
    funFact:
      "Hay aproximadamente 100 millones de personas apellidadas 王 (Wang) en China, es decir, mas que la poblacion total de muchos paises.",
  },

  // ===== Historia y filosofia =====
  {
    id: 13,
    category: "Historia y filosofia",
    title: "Confucio: el maestro que moldeo China",
    content:
      "Confucio (孔子, Kǒngzǐ, 551-479 a.C.) fue un filosofo cuyas ensenanzas han moldeado la cultura china durante mas de 2,500 anos. Sus ideas centrales incluyen: el respeto a los padres y mayores (孝, xiào), la importancia de la educacion y el auto-mejoramiento, la armonia social (和, hé) y las relaciones jerarquicas respetuosas. Su filosofia no es una religion sino un sistema etico y social. Hoy en dia, sus ideas siguen presentes en la importancia que China da a la educacion (los examenes son fundamentales), el respeto a la autoridad y los mayores, y la busqueda de armonia en las relaciones sociales.",
    funFact:
      "El examen de servicio civil chino, inspirado en las ensenanzas de Confucio, fue el primer sistema meritocrático del mundo. Duro mas de 1,300 anos (605-1905 d.C.).",
  },
  {
    id: 14,
    category: "Historia y filosofia",
    title: "El Yin y Yang: el equilibrio en todo",
    content:
      "El concepto del Yin y Yang (阴阳, yīn yáng) es fundamental en la filosofia china. Representa la idea de que todo en el universo tiene dos fuerzas opuestas pero complementarias. Yin (阴) es femenino, oscuro, frio, pasivo; Yang (阳) es masculino, luminoso, calido, activo. No son 'bueno vs malo', sino fuerzas que se necesitan mutuamente y estan en constante equilibrio. Este concepto influye en la medicina china (equilibrio en el cuerpo), la comida (alimentos 'frios' y 'calientes'), la arquitectura (feng shui) y hasta las artes marciales (tai chi). Cuando un chino dice que algo tiene 'demasiado fuego' (上火, shàng huǒ), se refiere a un exceso de yang.",
    funFact:
      "El simbolo del yin y yang no es solo chino: se ha convertido en uno de los simbolos mas reconocidos del mundo, presente en la bandera de Corea del Sur y usado universalmente.",
  },

  // ===== Vida moderna =====
  {
    id: 15,
    category: "Vida moderna",
    title: "WeChat: la app que es TODO en China",
    content:
      "WeChat (微信, Wēixìn, literalmente 'micro-mensaje') no es solo una app de mensajeria. En China es TODA tu vida digital: chat, redes sociales (Momentos), pagos moviles (pagar en tiendas, restaurantes, taxis, TODO), transferencias de dinero, pedir comida a domicilio, reservar trenes, pagar facturas, compartir ubicacion, escanear codigos QR, y mucho mas. En China puedes salir de casa sin billetera y sin efectivo, pero nunca sin tu telefono con WeChat. Los sobres rojos digitales (红包, hóngbāo) enviados por WeChat se han convertido en la forma moderna de dar dinero en el Ano Nuevo.",
    funFact:
      "WeChat tiene mas de 1,300 millones de usuarios activos mensuales. En China, intercambiar WeChat ha reemplazado al intercambio de tarjetas de visita y numeros de telefono.",
  },
  {
    id: 16,
    category: "Vida moderna",
    title: "La educacion en China: competencia extrema",
    content:
      "La educacion es probablemente el valor mas importante en la China moderna. El examen de ingreso a la universidad (高考, gāokǎo) es un evento nacional que determina el futuro de millones de estudiantes cada ano. Durante los dias del examen, las calles cercanas a las escuelas se cierran al trafico, las fabricas reducen el ruido y los padres esperan afuera durante horas. La presion es inmensa: un solo examen de dos dias determina a que universidad puedes ir, lo cual afecta toda tu carrera. Los ninos chinos a menudo asisten a clases extra despues de la escuela y los fines de semana. El dicho '万般皆下品，唯有读书高' (solo el estudio es noble) refleja esta mentalidad.",
    funFact:
      "En 2025, mas de 13 millones de estudiantes presentaron el gaokao. Algunos padres reservan habitaciones de hotel cerca de los centros de examen para evitar el trafico.",
  },
  {
    id: 17,
    category: "Vida moderna",
    title: "El zodiaco chino: tu animal y tu personalidad",
    content:
      "El zodiaco chino (生肖, shēngxiào) tiene 12 animales que se repiten en ciclos de 12 anos: Rata (鼠), Buey (牛), Tigre (虎), Conejo (兔), Dragon (龙), Serpiente (蛇), Caballo (马), Cabra (羊), Mono (猴), Gallo (鸡), Perro (狗) y Cerdo (猪). Tu animal depende de tu ano de nacimiento y se cree que influye en tu personalidad. El Dragon es el signo mas deseado: los anos del Dragon tienen un aumento notable de nacimientos en China. En cambio, el ano de la Cabra tiene menos nacimientos porque se cree que los nacidos ese ano tendran mala suerte.",
    funFact:
      "El ano del Dragon (2024 fue el ultimo) causa un 'baby boom' en China porque se cree que los hijos nacidos ese ano tendran exito. Los hospitales se preparan para el aumento de partos.",
  },
];

export default function CulturaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Landmark className="text-red-600" size={28} />
          Cultura China
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Descubre las costumbres, tradiciones y curiosidades del mundo chino
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setExpandedId(null);
            }}
            className={cn(
              "px-4 py-2 text-sm rounded-xl whitespace-nowrap transition-colors",
              selectedCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-red-300"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles */}
      <div className="space-y-3">
        {filtered.map((article) => {
          const isExpanded = expandedId === article.id;
          return (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : article.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                  {article.title}
                </h3>
                {isExpanded ? (
                  <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-3">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {article.content}
                  </p>
                  {article.funFact && (
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                      <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-1">
                        Dato curioso
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        {article.funFact}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-8">
          No hay articulos en esta categoria
        </p>
      )}
    </div>
  );
}
