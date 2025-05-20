export default function Mejora() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Mejora Continua</h1>

        <section>
          <p>
            En Coppel, la mejora continua es un principio clave del Sistema de Gestión de Calidad. Este enfoque
            permite incrementar la eficiencia operativa, elevar la satisfacción del cliente y garantizar el cumplimiento
            de los requisitos normativos a través de acciones sistemáticas y sostenidas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Acciones Estratégicas</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Optimización constante de procesos operativos y logísticos.</li>
            <li>Capacitación regular del personal en normas de calidad y seguridad.</li>
            <li>Implementación de tecnologías que mejoren la trazabilidad y control.</li>
            <li>Auditorías internas periódicas para identificar desviaciones.</li>
            <li>Seguimiento de indicadores clave de desempeño (KPI).</li>
            <li>Retroalimentación activa de clientes y colaboradores.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Simulacro de Auditoría</h2>
          <p>
            Durante el proyecto, se llevó a cabo un simulacro de auditoría interna en la empresa. Esta experiencia permitió
            al equipo aplicar los conocimientos teóricos en un entorno real, evaluar el grado de cumplimiento con la norma
            ISO 9001:2015 y proponer mejoras inmediatas en los procedimientos evaluados.
          </p>
          <p className="mt-3">
            Los resultados del simulacro resaltaron áreas de oportunidad relacionadas con el orden documental, trazabilidad
            de procesos y capacitación del personal. La actividad reforzó la importancia de la cultura de calidad como eje
            central para el desarrollo sostenible.
          </p>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Competencias Adquiridas</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Planeación, ejecución y documentación de auditorías internas.</li>
            <li>Identificación de hallazgos y redacción de informes técnicos.</li>
            <li>Análisis de riesgos y propuesta de acciones correctivas y preventivas.</li>
            <li>Comunicación efectiva con distintos niveles jerárquicos de la empresa.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
