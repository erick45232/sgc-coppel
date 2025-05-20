import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Proyecto Coppel",
  description: "Sistema de Gestión de Calidad en Coppel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Sidebar flotante por encima de todo */}
        <Sidebar />

        {/* Contenido centrado a pantalla completa */}
        <div className="min-h-screen flex flex-col items-center">
          <main className="w-full max-w-7xl flex-1 p-6 bg-coppelGray z-0">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
