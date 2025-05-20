export default function Objetivos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">Objetivos de Calidad</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Importancia de los Objetivos</h2>
          <p>
            Los objetivos de calidad permiten medir el cumplimiento de las intenciones establecidas en la política de calidad,
            alineándose con las necesidades del cliente y la mejora continua...
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Listado de Objetivos con Indicadores</h2>
          <ul className="list-disc list-inside pl-4 space-y-3">
            <li><strong>Mejorar la satisfacción del cliente:</strong> Lograr que al menos el 90% de los clientes califiquen su experiencia como satisfactoria.</li>
            <li><strong>Garantizar disponibilidad de productos:</strong> Mantener un stock del 95% en productos de alta demanda.</li>
            <li><strong>Optimizar tiempos de entrega:</strong> Reducir el tiempo de entrega a máximo 48h en zonas urbanas.</li>
            <li><strong>Mejorar el servicio postventa:</strong> Resolver el 95% de solicitudes en menos de 72 horas.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Indicadores Clave</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Satisfacción = (Clientes satisfechos / Total) × 100</li>
            <li>Disponibilidad = (Stock disponible / Requerido) × 100</li>
            <li>Tiempo = promedio entre compra y recepción</li>
            <li>Postventa = solicitudes resueltas en menos de 72 hrs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Frecuencia de Evaluación</h2>
          <p>
            Los indicadores se monitorean mensual o trimestralmente para tomar decisiones oportunas.
          </p>
        </section>
      </div>
    </div>
  );
}
