import Image from "next/image";

export default function NOM018Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
            <div className="max-w-5xl mx-auto bg-white text-gray-900 shadow-xl rounded-2xl px-4 py-8 sm:px-6 md:px-8 space-y-10">

                <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800">NOM-018-STPS-2015</h1>

                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Evaluación General</h2>
                    <p>
                        Esta norma establece el sistema para la identificación y comunicación de peligros y riesgos por sustancias químicas peligrosas en los centros de trabajo.
                        Durante la inspección se revisó la existencia de fichas de datos de seguridad (FDS), etiquetas en productos y capacitación al personal sobre el manejo de dichas sustancias.
                    </p>
                    <p className="mt-2">
                        Se identificaron productos sin etiqueta de peligro y ausencia de fichas actualizadas en algunos casos. Se recomendó implementar el sistema armonizado global (SGA) para clasificación e identificación, conforme a la norma.
                    </p>

                    <div className="flex justify-center mt-6">
                        <Image
                            src="/images/normas/nom018/ejemplo.jpg"
                            alt="Ejemplo de etiqueta de sustancia química"
                            width={400}
                            height={500}
                            className="rounded-xl shadow"
                        />
                    </div>
                </section>

                <section>
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Conclusión</h2>
                    <p>
                        Se requiere completar el etiquetado de los productos químicos y mantener las fichas de datos de seguridad actualizadas en el centro de trabajo.
                        La capacitación constante al personal es esencial para minimizar riesgos relacionados con sustancias peligrosas.
                    </p>
                </section>

            </div>
        </div>
    );
}
