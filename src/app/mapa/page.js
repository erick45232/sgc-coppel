import Image from "next/image";

export default function MapaProcesosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl px-6 py-10 space-y-8 text-gray-900">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">Mapa de Procesos</h1>

        <section className="space-y-4 text-justify">
          <p>
            Considerando que según la Norma <strong>ISO 9000:2015</strong>, un <strong>proceso</strong> es un conjunto de actividades mutuamente relacionadas que utilizan las entradas para proporcionar un resultado previsto.
          </p>
          <p>
            El <strong>resultado previsto</strong> de un proceso se puede denominar: salida, producto o servicio. 
            Es importante tener en cuenta que las entradas de un proceso son generalmente las salidas de otros procesos, y las salidas de un proceso son generalmente las entradas de otros procesos.
          </p>
          <p>
            De igual forma, la Norma <strong>ISO 9001:2015</strong>, en el apartado de &quot;Sistema de Gestión de la Calidad y sus procesos&quot;, establece como requisito el establecer, implementar, mantener y mejorar continuamente un sistema de gestión de la calidad, incluidos los procesos necesarios y sus interacciones.
            <span className="block mt-1 italic text-sm text-gray-600">Chávez Henández, 2020</span>
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Diagrama del Mapa de Procesos</h2>
          <div className="flex justify-center mt-6">
            <Image
              src="/images/procesos/mapa.jpg"
              alt="Mapa de procesos"
              width={800}
              height={500}
              className="rounded-xl shadow"
            />
          </div>
        </section>
      </div>
    </div>
  );
}