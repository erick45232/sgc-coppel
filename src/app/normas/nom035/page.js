import Image from "next/image";

export default function NOM035Page() {
  const images = [1, 2, 3];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-035-STPS-2018</h1>

        {/* Evaluación general */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
          <p>
            Esta norma tiene como objetivo identificar, analizar y prevenir los factores de riesgo psicosocial, así como promover un entorno organizacional favorable en los centros de trabajo.
            Se revisaron cuestionarios aplicados al personal, acciones de intervención, buzones de quejas y difusión de políticas internas.
          </p>
          <p className="mt-2">
            Se detectó falta de evidencia visible sobre difusión de la política organizacional y se identificó que algunos trabajadores desconocían los canales de comunicación.
            Se recomendó reforzar las acciones de sensibilización, colocar información en zonas visibles y aplicar periódicamente las evaluaciones.
          </p>
        </section>

        {/* Interpretación de Gráfica 1 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Gráfica 1: Nivel de Riesgo Psicosocial</h2>
          <p>
            El resultado obtenido en la aplicación de la NOM-035-STPS-2018, con una calificación de <strong>55</strong>, refleja un nivel de riesgo psicosocial <strong>medio</strong> en el entorno laboral.
            Esta situación requiere una intervención oportuna para evitar que dichos riesgos impacten negativamente en la salud de los colaboradores y en la productividad organizacional.
          </p>
          <p className="mt-2">
            Por ello, se propone un programa de intervención integral que contemple la revisión y fortalecimiento de la política de prevención de riesgos psicosociales,
            la implementación de acciones preventivas enfocadas en la promoción de un entorno organizacional favorable, y la prevención de la violencia laboral.
          </p>
          <p className="mt-2">
            Dicho programa incluirá capacitaciones periódicas, talleres de manejo del estrés y comunicación efectiva, evaluaciones internas de clima laboral,
            fortalecimiento de los canales de quejas y denuncias, y campañas de sensibilización sobre bienestar emocional.
            Estas acciones contribuirán a mejorar la calidad del ambiente laboral, promoviendo una cultura de respeto, apoyo y equilibrio entre la vida laboral y personal.
          </p>

          <div className="flex justify-center mt-6">
            <Image
              src="/images/normas/nom035/grafica1.jpg"
              alt="Gráfica 1 - Nivel de Riesgo Psicosocial"
              width={600}
              height={400}
              className="rounded-xl shadow"
            />
          </div>
        </section>

        {/* Interpretación de Gráfica 2 */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Gráfica 2: Factores propios de la actividad</h2>
          <p>
            El análisis de los resultados conforme a la NOM-035-STPS-2018 indica que, en términos generales,
            el centro de trabajo mantiene condiciones adecuadas y saludables, con un nivel de riesgo psicosocial <strong>predominantemente bajo o despreciable</strong>.
          </p>
          <p className="mt-2">  
          
          <p>...en el apartado de &quot;Factores de riesgo psicosocial&quot; y &quot;Entorno organizacional favorable&quot;...</p>
            donde se identifica un riesgo bajo, derivado principalmente de aspectos relacionados con la carga de trabajo y la falta de control sobre el mismo.
          </p>
          <p className="mt-2">
            Esto sugiere que, si bien no se requieren acciones inmediatas o intensivas, es recomendable implementar un programa preventivo enfocado en revisión de cargas de trabajo (especialmente emocionales y mentales),
            fomento del desarrollo profesional y mejora del control y autonomía de los trabajadores sobre sus funciones.
          </p>
          <p className="mt-2">
            Con estas medidas, se puede mantener y fortalecer el entorno organizacional favorable, reduciendo aún más los riesgos y mejorando el bienestar general del personal.
          </p>

          <div className="flex justify-center mt-6">
            <Image
              src="/images/normas/nom035/grafica2.jpg"
              alt="Gráfica 2 - Factores propios de la actividad"
              width={600}
              height={400}
              className="rounded-xl shadow"
            />
          </div>
        </section>

        {/* Conclusión final */}
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
          <p>
            El cumplimiento de la NOM-035 requiere mantener documentación actualizada sobre los factores de riesgo psicosocial, 
            capacitar al personal sobre el entorno organizacional favorable y asegurar la existencia de mecanismos formales para atender quejas y sugerencias.
          </p>
        </section>
 
      </div>
    </div>
  );
}
