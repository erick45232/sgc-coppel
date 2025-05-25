import Image from "next/image";

export default function NOM002Page() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-002-STPS-2010</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            Esta norma regula la prevención y protección contra incendios en los centros de trabajo.
            Se evaluaron aspectos como ubicación y señalización de extintores, rutas de evacuación, y planos de emergencia.
          </p>
          <p className="mt-2">
            Se detectaron extintores mal ubicados o sin señalización, así como ausencia de croquis de emergencia.
            Por ello, se recomendó su reubicación, correcta señalización y actualización de planos.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Determinación del Riesgo</h2>
          <p>
            Según el análisis cuantitativo con base en la fórmula de la norma, el centro de trabajo fue clasificado con un nivel de <strong>Alto Riesgo</strong>.
            Lo anterior implica disponer de un extintor cada 200 m² y contar con señalización visible y rutas de evacuación accesibles.
          </p>

          <div className="relative w-full h-[400px] mt-4 rounded-xl overflow-hidden shadow">
            <Image
              src="/images/normas/nom002/7.jpg" // asegúrate de que esta imagen esté en esa ruta
              alt="Cálculo del riesgo de incendio"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            El centro de trabajo requiere atender los hallazgos para cumplir completamente con la NOM-002.
            La implementación de señalización correcta, reubicación de extintores y disponibilidad de croquis actualizados
            es esencial para asegurar una respuesta oportuna ante emergencias.
          </p>
        </section>

      </div>
    </div>
  );
}
