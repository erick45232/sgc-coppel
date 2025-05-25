export default function NOM001Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-001-STPS-2008</h1>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            En esta norma se evaluaron los requisitos relacionados con las condiciones de los techos, pisos, escaleras y paredes en el centro de trabajo.
            Los resultados arrojaron un cumplimiento del <strong>98%</strong>, indicando que estos elementos se encuentran en buenas condiciones.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            La tienda cumple con la NOM-001 en cuanto a las condiciones físicas del establecimiento. 
            Sin embargo, en caso de que se detecten irregularidades, se debe reportar de inmediato para tomar acciones correctivas.
          </p>
          <p className="mt-4">
            Adicionalmente, se verificó que la sucursal cuenta con salida de líquidos, cumpliendo con otro de los aspectos contemplados en la norma.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Galería</h2>
          <p>Espacio destinado para evidencias visuales de cumplimiento (techos, pisos, paredes, salidas, etc.):</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-full h-40 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                Imagen {i}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
