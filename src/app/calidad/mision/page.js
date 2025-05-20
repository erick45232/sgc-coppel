export default function Mision() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">Misión</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Misión Actual de Coppel</h2>
          <p>
            Ser la tienda omnicanal y de servicios financieros personales y digitales, favorita del mercado masivo,
            que ofrece una gran variedad de categorías de productos y servicios útiles, atractivos y accesibles,
            de marcas líderes, que atienden las necesidades, así como los deseos de sus clientes.
          </p>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Nueva Misión Propuesta</h2>
          <p>
            Somos una empresa mexicana dedicada a mejorar la vida de las personas mediante productos y servicios de
            calidad, incluyendo soluciones financieras y bienes esenciales. Nos enfocamos en ofrecer acceso a productos
            como ropa, electrónicos y muebles, así como servicios financieros accesibles...
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación de la Misión Actual</h2>
          <ul className="list-disc list-inside pl-4">
            <li>¿Cuál es nuestra razón de ser? — ❌ No cumple</li>
            <li>¿Quiénes somos? — ✅ Sí cumple</li>
            <li>¿A quién queremos beneficiar? — ❌ No cumple</li>
            <li>¿Qué buscamos realizar? — ✅ Sí cumple</li>
            <li>¿Preocupaciones sociales? — ❌ No cumple</li>
            <li>¿Contribución al desarrollo social? — ❌ No cumple</li>
            <li>¿Qué hacemos? — ✅ Sí cumple</li>
            <li>¿Para qué lo hacemos? — ❌ No cumple</li>
            <li>¿Cómo lo hacemos? — ❌ No cumple</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
