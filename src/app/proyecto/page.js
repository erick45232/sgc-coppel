export default function Proyecto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Proyecto</h1>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Nombre del Proyecto</h2>
          <p>
            Propuesta de aplicación de la guía metodológica para la implementación de un Sistema de Gestión de la Calidad en la empresa Coppel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Equipo de Trabajo</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Coronado Martínez Eduardo</li>
            <li>Guerrero Sánchez María Félix</li>
            <li>Hernández Vázquez Angelli Amairany</li>
            <li>Martínez González Melissa</li>
            <li>Lopez Alvarez Alejandrina</li>
          </ul>
          <p className="mt-2">Carrera: Ingeniería en Gestión Empresarial</p>
          <p>Asignaturas: Gestión de Sistemas de Calidad y Gestión de Riesgos y Seguridad Corporativa</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Justificación</h2>
          <p>
            Este proyecto surge de la necesidad de fortalecer la estructura organizativa de Coppel a través de la implementación de un SGC. Se enfoca en mejorar la calidad del servicio, optimizar procesos internos y contribuir al desarrollo profesional de los estudiantes mediante la aplicación real de sus conocimientos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Metodología</h2>
          <p>
            Se emplea una estrategia basada en diagnóstico organizacional, entrevistas, análisis FODA, elaboración de propuestas y documentación bajo lineamientos ISO 9001:2015. Se aplican herramientas como fichas de procesos, indicadores, gestión de riesgos y simulacros de auditoría.
          </p>
        </section>
      </div>
    </div>
  );
}
