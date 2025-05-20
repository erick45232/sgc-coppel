export default function Interesados() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">Partes Interesadas</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">¿Qué son las Partes Interesadas?</h2>
          <p>
            Son personas, grupos u organizaciones que pueden afectar, ser afectadas o percibirse como afectadas por las decisiones o actividades de Coppel...
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Grupos Clave Identificados</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>Clientes:</strong> Esperan buena atención, crédito justo, entregas puntuales.</li>
            <li><strong>Empleados:</strong> Requieren condiciones justas y oportunidades de desarrollo.</li>
            <li><strong>Proveedores:</strong> Buscan relaciones estables y pagos puntuales.</li>
            <li><strong>Accionistas:</strong> Interesados en rentabilidad, cumplimiento legal y sostenibilidad.</li>
            <li><strong>Reguladores:</strong> Requieren cumplimiento normativo.</li>
            <li><strong>Comunidad:</strong> Valora el impacto ambiental, empleo y contribución local.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Estrategias de Gestión</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Comunicación constante con grupos clave</li>
            <li>Encuestas de satisfacción</li>
            <li>Planes de acción ante riesgos identificados</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
