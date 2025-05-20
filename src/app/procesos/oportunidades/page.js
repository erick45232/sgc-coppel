export default function Oportunidades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Oportunidades de Mejora</h1>

        <section>
          <p>
            Como parte del análisis y diagnóstico de la situación actual de Coppel, se identificaron diversas oportunidades de mejora
            orientadas al fortalecimiento del Sistema de Gestión de Calidad. Estas oportunidades están alineadas con los principios de la norma ISO 9001:2015,
            buscando aumentar los efectos deseables, reducir los efectos no deseados y lograr una mejora continua.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Principales Oportunidades Identificadas</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>Salud y Seguridad en el Trabajo:</strong> Implementar protocolos claros de emergencia y brindar capacitaciones periódicas al personal.
            </li>
            <li>
              <strong>Gestión de Inventarios:</strong> Uso de sistemas de monitoreo en tiempo real, campañas de promoción para reducir exceso de stock y reorganización de espacios de almacenamiento.
            </li>
            <li>
              <strong>Capacitación del personal:</strong> Fortalecer programas formativos en temas de calidad, atención al cliente, seguridad y procesos internos.
            </li>
            <li>
              <strong>Atención al cliente:</strong> Establecer mecanismos de evaluación de satisfacción del cliente y retroalimentación sistemática.
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Acciones Clave Propuestas</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Reorganizar los procesos de capacitación para mejorar el cumplimiento de políticas de seguridad.</li>
            <li>Reducir inventarios excedentes mediante campañas de ventas.</li>
            <li>Digitalizar el monitoreo de inventarios y procesos internos.</li>
            <li>Evaluar periódicamente la eficacia de las acciones mediante indicadores y evidencia documental.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Impacto Esperado</h2>
          <p>
            La implementación efectiva de estas oportunidades permitirá a Coppel aumentar su competitividad, mejorar la percepción de sus clientes y optimizar el uso de recursos internos.
            Asimismo, contribuirá a establecer una cultura organizacional orientada a la mejora continua y a la prevención de riesgos.
          </p>
        </section>
      </div>
    </div>
  );
}
