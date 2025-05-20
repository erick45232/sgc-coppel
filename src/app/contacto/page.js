export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Contacto</h1>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Equipo de Proyecto</h2>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Coronado Martínez Eduardo – 21690637</li>
            <li>Guerrero Sánchez María Félix – 21690642</li>
            <li>Hernández Vázquez Angelli Amairany – 21690187</li>
            <li>Martínez González Melissa – 21690172</li>
            <li>Lopez Alvarez Alejandrina – 21690163</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Asignaturas</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Gestión de los Sistemas de Calidad</li>
            <li>Gestión de los Riesgos y Seguridad Corporativa</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Docentes Responsables</h2>
          <ul className="list-disc list-inside pl-4">
            <li>MI. Perla Lizeth Turrubiate Castro</li>
            <li>Ing. Juana Isabel Monzón García</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Correo de Contacto</h2>
          <p className="text-gray-700">eduardo.coppelsgc@tectechnm.edu.mx</p>
        </section>
      </div>
    </div>
  );
}
