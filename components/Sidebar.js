'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu, X, Home, Building, FileText, LayoutList,
  ShieldCheck, Phone
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 640;
      setOpen(!isMobile);
    }
  }, []);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 bg-[#0033A0] text-white p-2 rounded-full shadow-lg hover:bg-[#002080] transition"
        >
          <Menu size={24} />
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#FFCC00] shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-black/20">
          <div className="flex items-center gap-2">
            <Image
              src="/coppel.png"
              alt="Logo Coppel"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <span className="text-lg font-bold">SGC Coppel</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-black hover:text-[#0033A0] transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="mt-6 flex flex-col gap-1 px-3 text-sm font-medium">
          <SidebarLink href="/" icon={<Home size={20} />} label="Inicio" />
          <SidebarLink href="/empresa" icon={<Building size={20} />} label="Empresa" />
          <SidebarLink href="/proyecto" icon={<FileText size={20} />} label="Proyecto" />

          {/* Submenú Calidad */}
          <details
            className={`group px-1 text-sm font-medium ${pathname.startsWith("/calidad") ? "text-[#0033A0]" : "text-black"}`}
            open={pathname.startsWith("/calidad")}
          >
            <summary className="flex items-center gap-3 py-2 px-2 cursor-pointer hover:text-[#0033A0] text-black">
              <LayoutList size={20} />
              <span>Calidad</span>
            </summary>
            <nav className="ml-6 mt-1 space-y-1 text-sm">
              <SidebarLink href="/calidad/mision" icon={null} label="Misión" />
              <SidebarLink href="/calidad/politica" icon={null} label="Política" />
              <SidebarLink href="/calidad/objetivos" icon={null} label="Objetivos" />
              <SidebarLink href="/calidad/interesados" icon={null} label="Interesados" />
            </nav>
          </details>

          {/* Submenú Procesos */}
          <details
            className={`group px-1 text-sm font-medium ${pathname.startsWith("/procesos") ? "text-[#0033A0]" : "text-black"}`}
            open={pathname.startsWith("/procesos")}
          >
            <summary className="flex items-center gap-3 py-2 px-2 cursor-pointer hover:text-[#0033A0] text-black">
              <FileText size={20} />
              <span>Procesos</span>
            </summary>
            <nav className="ml-6 mt-1 space-y-1 text-sm">
              <SidebarLink href="/procesos/conclusion" icon={null} label="Conclusión" />
              <SidebarLink href="/procesos/oportunidades" icon={null} label="Oportunidades" />
              <SidebarLink href="/procesos/mejora" icon={null} label="Mejora" />
            </nav>
          </details>

          {/* Submenú Normas */}
          <details
            className={`group px-1 text-sm font-medium ${pathname.startsWith("/normas") ? "text-[#0033A0]" : "text-black"}`}
            open={pathname.startsWith("/normas")}
          >
            <summary className="flex items-center gap-3 py-2 px-2 cursor-pointer hover:text-[#0033A0] text-black">
              <ShieldCheck size={20} />
              <span>Normas</span>
            </summary>
            <nav className="ml-6 mt-1 space-y-1 text-sm">
              <SidebarLink href="/normas/nom001" icon={null} label="NOM-001" />
              <SidebarLink href="/normas/nom002" icon={null} label="NOM-002" />
              <SidebarLink href="/normas/nom018" icon={null} label="NOM-018" />
              <SidebarLink href="/normas/nom019" icon={null} label="NOM-019" />
              <SidebarLink href="/normas/nom026" icon={null} label="NOM-026" />
              <SidebarLink href="/normas/nom035" icon={null} label="NOM-035" />
              <SidebarLink href="/normas/nom036" icon={null} label="NOM-036" />
            </nav>
          </details>

          {/* Mapa de Procesos */}
          <SidebarLink href="/mapa" icon={<FileText size={20} />} label="Mapa de Procesos" />
          {/* Contacto */}
          <SidebarLink href="/contacto" icon={<Phone size={20} />} label="Contacto" />
        </nav>
      </aside>
    </>
  );
}

function SidebarLink({ href, icon, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 py-2 px-3 rounded transition-all
        ${isActive
          ? 'bg-[#0033A0] text-white font-semibold'
          : 'hover:bg-[#0033A0] hover:text-white'}`}
    >
      {icon}
      <span className="text-black">{label}</span>
    </Link>
  );
}
