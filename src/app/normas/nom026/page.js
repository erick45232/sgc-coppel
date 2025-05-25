import Image from "next/image";

export default function NOM026Page() {
  const images = [4,6];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-026-STPS-2008</h1>

        {/* Evaluación general */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            Esta norma establece los requisitos para la aplicación de colores y señales de seguridad e higiene, así como la identificación de riesgos por fluidos conducidos en tuberías.
            Durante la evaluación, se revisaron áreas de trabajo, salidas de emergencia, extintores y zonas de riesgo para verificar la correcta señalización conforme a los códigos de colores y símbolos establecidos por la norma.
          </p>
          <p className="mt-2">
            Se identificaron áreas sin señalización visible, algunas señales deterioradas o sin contraste suficiente. Se recomendó reinstalar señalética adecuada y estandarizar los colores de acuerdo con el sistema cromático definido en la norma.
          </p>
        </section>

        {/* Conclusión */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            La correcta aplicación de señales y colores de seguridad es esencial para prevenir accidentes y garantizar una comunicación efectiva de riesgos en el centro de trabajo.
            Se recomienda realizar un recorrido periódico para verificar el estado de la señalización, mantenerla visible y actualizada, así como capacitar al personal sobre su significado e interpretación.
          </p>
        </section>

        {/* Galería */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Galería</h2>
          <p>Señalética y colores de seguridad observados en el recorrido:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {images.map((i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden shadow">
                <Image
                  src={`/images/normas/nom026/${i}.jpg`}
                  alt={`Imagen ${i}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
