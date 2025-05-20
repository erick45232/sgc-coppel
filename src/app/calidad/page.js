import Link from "next/link";

export default function CalidadPage() {
  return (
    <div className="min-h-screen bg-coppelGray p-6 space-y-6">
      <h1 className="text-2xl font-bold text-coppelBlue">Sistema de Gestión de Calidad</h1>
      <p className="text-black">
        En esta sección se presentan los fundamentos del Sistema de Gestión de Calidad implementado en Coppel, basado en la norma ISO 9001:2015.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Misión" href="/calidad/mision" />
        <Card title="Política de Calidad" href="/calidad/politica" />
        <Card title="Objetivos" href="/calidad/objetivos" />
        <Card title="Partes Interesadas" href="/calidad/interesados" />
      </div>
    </div>
  );
}

function Card({ title, href }) {
  return (
    <Link href={href}>
      <div className="bg-white rounded shadow hover:shadow-lg p-4 text-center text-coppelBlue font-semibold hover:bg-coppelYellow transition cursor-pointer">
        {title}
      </div>
    </Link>
  );
}
