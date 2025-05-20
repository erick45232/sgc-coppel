export default function Normas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Normatividad Aplicable</h1>

        <section>
          <p>
            A lo largo del proyecto se identificaron y verificaron diversas Normas Oficiales Mexicanas (NOM) aplicables al entorno laboral de Coppel,
            con el propósito de promover un ambiente seguro, saludable y conforme a los requisitos legales vigentes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Normas Evaluadas</h2>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>
              <strong>NOM-001-STPS-2008:</strong> Seguridad en edificios e instalaciones. Se detectaron deficiencias en rampas y pisos, proponiendo su mantenimiento y adecuación conforme a los estándares.
            </li>
            <li>
              <strong>NOM-002-STPS-2010:</strong> Protección contra incendios. Se evidenciaron extintores mal ubicados o sin señalización, y ausencia de croquis de emergencia, por lo que se recomendó reubicación, señalización y actualización de planos.
            </li>
            <li>
              <strong>NOM-018-STPS-2015:</strong> Identificación y manejo seguro de sustancias químicas peligrosas. Se evaluó el cumplimiento de hojas de datos de seguridad (HDS), capacitación del personal y uso de pictogramas en los contenedores.
            </li>
            <li>
              <strong>NOM-035-STPS-2018:</strong> Riesgos psicosociales. Se aplicaron guías de referencia que identificaron áreas con riesgo bajo, recomendando reforzar el control de cargas laborales y la comunicación interna.
            </li>
            <li>
              <strong>NOM-036-1-STPS-2018:</strong> Manejo manual de cargas. Se reconoció la necesidad de evaluar riesgos ergonómicos y adoptar equipos auxiliares para prevenir lesiones musculoesqueléticas.
            </li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Resultados Generales</h2>
          <p>
            El cumplimiento parcial de las normas permitió identificar múltiples áreas de oportunidad en infraestructura, seguridad, señalización
            y capacitación. A partir de los hallazgos se plantearon acciones correctivas inmediatas y propuestas de mejora a mediano plazo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Importancia</h2>
          <p>
            La correcta implementación de las NOM no solo garantiza el cumplimiento legal, sino que también protege la salud de los trabajadores,
            mejora la eficiencia operativa y contribuye a una cultura organizacional orientada a la calidad y la prevención.
          </p>
        </section>
      </div>
    </div>
  );
}
