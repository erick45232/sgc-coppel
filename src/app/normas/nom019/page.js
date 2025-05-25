import Image from "next/image";

export default function NOM019Page() {
  const images = [8, 9];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-019-STPS-2011</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            Esta norma establece los lineamientos para la constitución, organización y funcionamiento de las comisiones de seguridad e higiene en los centros de trabajo.
            Se verificó la existencia formal de dicha comisión, así como las actas de constitución, bitácoras de inspección y constancias de capacitación.
          </p>
          <p className="mt-2">
            Durante la evaluación se detectó que algunas actas no estaban actualizadas y que el personal desconocía su integración. Se recomendó reestructurar la comisión,
            actualizar documentación y reforzar la difusión de sus funciones entre los trabajadores.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            Para cumplir con la NOM-019, es indispensable contar con una comisión de seguridad e higiene activa, con miembros capacitados y con evidencia documental vigente.
            La actualización de actas y la socialización de sus funciones son acciones clave para fomentar una cultura de prevención en el centro de trabajo.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Galería</h2>
          <p>Imágenes que muestran documentación y actividades relacionadas con la comisión de seguridad e higiene:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {images.map((i) => (
              <div key={i} className="relative w-full h-64 rounded-xl overflow-hidden shadow">
                <Image
                  src={`/images/normas/nom019/${i}.jpg`}
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
