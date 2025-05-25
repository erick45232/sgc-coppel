import Image from "next/image";

export default function NOM036Page() {
  return (
    //hola
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-036-1-STPS-2018</h1>

        {/* Evaluación general */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            La NOM-036 tiene como objetivo prevenir trastornos musculoesqueléticos por el manejo manual de cargas. 
            Se evaluaron prácticas de levantamiento, posturas de trabajo, peso de los objetos, así como el uso de técnicas adecuadas.
          </p>
          <p className="mt-2">
            Se observó que algunos trabajadores no aplicaban la técnica correcta al levantar objetos pesados. 
            Se recomendó reforzar la capacitación práctica sobre levantamiento seguro y rediseñar ciertas tareas para disminuir el riesgo ergonómico.
          </p>
        </section>
        {/* Conclusión */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            Para cumplir adecuadamente con la NOM-036, es fundamental capacitar al personal en ergonomía, revisar los pesos máximos permitidos,
            y rediseñar tareas que impliquen levantamientos riesgosos. El uso de equipo auxiliar y pausas activas también contribuyen a reducir lesiones musculares.
          </p>
        </section>

        {/* Galería de videos */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Galería de Videos</h2>
          <p>Videos que muestran prácticas reales de levantamiento y ergonomía evaluadas en el centro de trabajo:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[1,2].map((i) => (
              <div key={i} className="w-full h-64 rounded-xl overflow-hidden shadow">
                <video
                  controls
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src={`/videos/normas/nom036/video${i}.mp4`} type="video/mp4" />
                  Tu navegador no admite el video.
                </video>
              </div>
            ))}
          </div>
        </section>

        {/* Tablas capturadas */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Tablas Evaluadas</h2>
          <p>A continuación se muestran capturas completas de tablas utilizadas durante la aplicación de la NOM-036:</p>

          <div className="flex flex-col gap-6 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <Image
                  src={`/images/normas/nom036/tablas/${i}.jpg`}
                  alt={`Tabla ${i}`}
                  width={800}
                  height={600}
                  className="rounded-xl shadow"
                />
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
