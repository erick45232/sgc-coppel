export default function Footer() {
  return (
    <footer className="w-full bg-[#0033A0] text-white px-6 py-6 flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        {/* Columna izquierda */}
        <div className="space-y-2">
          <p className="font-semibold">
            © {new Date().getFullYear()} Proyecto de Formación Dual – Coppel
          </p>
          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps/place/Coppel+Centro+-+Miguel+Hidalgo+307,+Zona+Centro,+Cd.+Valles,+S.L.P."
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300"
            >
              Miguel Hidalgo 307, Zona Centro, Cd. Valles, S.L.P.
            </a>
          </p>
          <div className="flex flex-wrap gap-6 pt-2 text-white/80">
            <a
              href="https://www.coppel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300"
            >
              Sitio oficial de Coppel
            </a>
            <a
              href="mailto:erick.herbert@alumno.ipn.mx"
              className="hover:text-yellow-300"
            >
              Contacto
            </a>
          </div>
        </div>

        {/* Columna derecha: mapa responsivo */}
        <div className="w-full h-[200px] sm:h-[250px] rounded-lg overflow-hidden shadow-lg border border-white/0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.9726952830526!2d-99.01996518554293!3d21.987633785980875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d62c6e3cf2e6ff%3A0xa9de8bd7a10dc3a6!2sCoppel%20Centro!5e0!3m2!1ses!2smx!4v1716170801500!5m2!1ses!2smx"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
}
