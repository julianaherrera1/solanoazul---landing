"use client";

import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-white text-[#0F4C81] border-t border-blue-100 relative">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">

        {/* PARTE SUPERIOR */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">

          {/* Logo + descripción */}
          <div className="text-center md:text-left max-w-sm">
            <img
              src="/assets/logos/logo1.png"
              alt="Solano Azul Logo"
              className="h-14 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-[15px] text-[#0F4C81]/90 font-medium leading-relaxed">
              Atún fresco capturado artesanalmente en Bahía Solano y entregado 
              directamente en Medellín. Natural, sostenible y 100% colombiano.
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col items-center md:items-start gap-3 text-base font-semibold">
            <Link 
              href="/" 
              className="hover:text-[#5AB5C7] transition duration-200"
            >
              Inicio
            </Link>

            <Link 
              href="#products" 
              className="hover:text-[#5AB5C7] transition duration-200"
            >
              Productos
            </Link>

            <Link 
              href="#process" 
              className="hover:text-[#5AB5C7] transition duration-200"
            >
              ¿Cómo comprar?
            </Link>

            <Link 
              href="#contact" 
              className="hover:text-[#5AB5C7] transition duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Redes + Ubicación */}
          <div className="flex flex-col items-center md:items-end gap-4">

            {/* Redes */}
            <div className="flex items-center gap-5">
              <a
                href="https://wa.me/xxxxxxxxxx"
                target="_blank"
                className="p-3 rounded-full border border-[#5AB5C7]/30 hover:border-[#5AB5C7] hover:bg-[#5AB5C7]/10 transition shadow-sm"
              >
                <FaWhatsapp className="w-6 h-6 text-[#5AB5C7]" />
              </a>

              <a
                href="https://instagram.com/xxxxx"
                target="_blank"
                className="p-3 rounded-full border border-[#5AB5C7]/30 hover:border-[#5AB5C7] hover:bg-[#5AB5C7]/10 transition shadow-sm"
              >
                <Instagram className="w-6 h-6 text-[#5AB5C7]" />
              </a>
            </div>

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-[#0F4C81]/80 font-medium">
              <MapPin className="w-5 h-5 text-[#5AB5C7]" />
              Medellín, Colombia
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#5AB5C7]/20"></div>

        {/* Derechos */}
        <div className="text-center text-[13px] text-[#0F4C81]/70 font-medium">
          © {new Date().getFullYear()} Solano Azul. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
