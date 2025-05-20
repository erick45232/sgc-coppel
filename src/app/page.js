import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Logo y bienvenida */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Image
            src="/coppel.png"
            alt="Coppel"
            width={150}
            height={150}
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-[#0033A0]">
          Bienvenido al Proyecto SGC de Coppel
        </h1>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Este sitio presenta la propuesta de implementación de un Sistema de
          Gestión de Calidad (SGC) en la empresa Coppel, basado en la norma
          ISO 9001:2015 y en cumplimiento de normativas oficiales mexicanas.
        </p>
      </div>

      {/* Sección resumen */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md mb-12 text-center">
        <h2 className="text-xl font-semibold text-[#0033A0] mb-3">¿Qué encontrarás en este sitio?</h2>
        <ul className="list-disc list-inside text-gray-700 text-left max-w-2xl mx-auto">
          <li>Descripción general de Coppel</li>
          <li>Propuesta de implementación del SGC</li>
          <li>Misión, política, objetivos e interesados</li>
          <li>Normatividad aplicable (NOMs)</li>
          <li>Procesos clave y simulacro de auditoría</li>
          <li>Oportunidades de mejora y conclusiones</li>
          <li>Información de contacto del equipo</li>
        </ul>
      </div>

      {/* Tarjetas de acceso rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        <Link
          href="/empresa"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Empresa</h3>
          <p className="text-sm text-gray-600 mt-1">
            Información general, giro, servicios y datos de contacto.
          </p>
        </Link>

        <Link
          href="/proyecto"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Proyecto</h3>
          <p className="text-sm text-gray-600 mt-1">
            Detalles sobre el SGC: objetivos, justificación y beneficios.
          </p>
        </Link>

        <Link
          href="/calidad"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Calidad</h3>
          <p className="text-sm text-gray-600 mt-1">
            Misión, política, objetivos e interesados del sistema.
          </p>
        </Link>

        <Link
          href="/procesos"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Procesos</h3>
          <p className="text-sm text-gray-600 mt-1">
            Conclusión, oportunidades de mejora y auditoría interna.
          </p>
        </Link>

        <Link
          href="/normas"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Normas</h3>
          <p className="text-sm text-gray-600 mt-1">
            Evaluación de cumplimiento de las NOM aplicables a Coppel.
          </p>
        </Link>

        <Link
          href="/contacto"
          className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md border border-gray-200 transition"
        >
          <h3 className="font-semibold text-[#0033A0] text-lg">Contacto</h3>
          <p className="text-sm text-gray-600 mt-1">
            Información del equipo, docentes y correo institucional.
          </p>
        </Link>
      </div>

      {/* Pie de página */}
      <footer className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} Proyecto SGC – Coppel. Instituto Tecnológico de Ciudad Valles.
      </footer>
    </div>
  );
}
