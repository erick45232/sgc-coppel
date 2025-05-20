import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-coppelBlue text-white px-4 py-3 shadow flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/logo-coppel.png" alt="Coppel Logo" width={50} height={50} />
        <span className="text-lg font-semibold">Proyecto SGC</span>
      </div>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/empresa">Empresa</Link></li>
        <li><Link href="/proyecto">Proyecto</Link></li>
        <li><Link href="/sgc">SGC</Link></li>
        <li><Link href="/procesos">Procesos</Link></li>
        <li><Link href="/normas">Normas</Link></li>
        <li><Link href="/mejora">Mejora</Link></li>
        <li><Link href="/conclusiones">Conclusiones</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
