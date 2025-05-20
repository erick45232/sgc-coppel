export default function Empresa() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">Conoce a Coppel</h1>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Nombre y Razón Social</h2>
          <p><strong>Nombre comercial:</strong> Coppel</p>
          <p><strong>Razón social:</strong> COPPEL, S.A. DE C.V.</p>
          <p><strong>Representante legal:</strong> Teresa Cabrera</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Giro y Actividad</h2>
          <p>
            Coppel es una empresa del sector comercial y de servicios. Se dedica a la venta de productos para el hogar,
            moda, tecnología y más, ofreciendo facilidades de pago y servicios financieros accesibles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Productos y Servicios</h2>
          <ul className="list-disc list-inside pl-4">
            <li>Créditos personales y seguros</li>
            <li>Envíos a domicilio</li>
            <li>Productos: ropa, muebles, electrónica, motos, juguetes y más</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-4 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Eslogan</h2>
          <blockquote className="italic text-center text-blue-600 text-lg">
            “Hoy y mañana, seguimos mejorando tu vida.”
          </blockquote>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Ubicación y Contacto</h2>
          <p><strong>Dirección:</strong> Miguel Hidalgo 307-307, Zona Centro, 79000 Cd. Valles, S.L.P.</p>
          <p><strong>Teléfono:</strong> 481 381 6433</p>
          <p><strong>Correo:</strong> atenciono@coppel.com</p>
          <div className="mt-4 border-2 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-64"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.5635185789547!2d-99.01796798559891!3d21.98727888549871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d62e373af6d875%3A0x39a426c2904ef99e!2sCoppel%20Cd.%20Valles!5e0!3m2!1ses!2smx!4v1656534703516!5m2!1ses!2smx"
            ></iframe>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Logotipo y Significado</h2>
          <p>
            El nombre “Coppel” nace cuando la tienda mueblera “El Regalo” adopta un modelo de crédito confiable para sus
            clientes, lo que marcó su transformación hacia la marca reconocida que conocemos hoy.
          </p>
          {/* Agrega aquí una imagen si tienes el logotipo */}
          {/* <img src="/ruta/logo-coppel.png" alt="Logotipo Coppel" className="mt-4 w-48" /> */}
        </section>
      </div>
    </div>
  );
}
