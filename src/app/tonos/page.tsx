"use client";
import ToneTrainer from "@/components/practice/ToneTrainer";

export default function TonosPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Entrenador de Tonos</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Los tonos son la base del chino mandarín. Practica hasta que los
          reconozcas al instante.
        </p>
      </div>

      {/* Explanation */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 space-y-4">
        <h2 className="font-semibold text-lg">¿Qué son los tonos?</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          En chino, la misma sílaba puede significar cosas completamente
          diferentes dependiendo del tono que uses. Por ejemplo, &quot;ma&quot; puede
          significar <strong>mamá</strong> (tono 1), <strong>cáñamo</strong>{" "}
          (tono 2), <strong>caballo</strong> (tono 3) o{" "}
          <strong>regañar</strong> (tono 4). Por eso es fundamental aprender a
          distinguirlos desde el principio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800">
            <p className="font-medium text-red-700 dark:text-red-400">
              Tono 1 — Plano alto ā
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Como cantar una nota sostenida. Voz alta y pareja.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
            <p className="font-medium text-orange-700 dark:text-orange-400">
              Tono 2 — Ascendente á
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Como cuando preguntas &quot;¿Qué?&quot; con sorpresa.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
            <p className="font-medium text-green-700 dark:text-green-400">
              Tono 3 — Baja y sube ǎ
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Como cuando dices &quot;Hmm...&quot; dudando.
            </p>
          </div>
          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
            <p className="font-medium text-blue-700 dark:text-blue-400">
              Tono 4 — Descendente à
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Como una orden firme: &quot;¡No!&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Trainer */}
      <ToneTrainer />
    </div>
  );
}
