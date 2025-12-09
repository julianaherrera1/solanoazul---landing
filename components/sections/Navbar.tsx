"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo - RUTA CORREGIDA */}
        <Link href="/" className="flex items-center">
          {/* Si el logo está en public/assets/logos/logo1.png */}
          <img
            src="/assets/logos/logo1.png"
            alt="Solano Azul - Atún fresco del Pacífico"
            className="h-10 w-auto md:h-12"
            onError={(e) => {
              console.error("Error cargando logo:", e);
              // Fallback si el logo no se carga
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          <Link 
            href="#about" 
            className="text-gray-700 hover:text-[#5AB5C7] transition-colors duration-300 font-medium"
          >
            Nosotros
          </Link>

          <Link 
            href="#products" 
            className="text-gray-700 hover:text-[#5AB5C7] transition-colors duration-300 font-medium"
          >
            Productos
          </Link>
          
          <Link 
            href="#contact" 
            className="text-gray-700 hover:text-[#5AB5C7] transition-colors duration-300 font-medium"
          >
            Contacto
          </Link>

          {/* CTA - AZUL TURQUESA en lugar de morado */}
          <a
            href="#cta"
            className="px-5 py-2.5 bg-[#5AB5C7] text-white rounded-full hover:bg-[#4CA3B5] transition-colors duration-300 shadow-md font-medium"
          >
            Comprar ahora
          </a>
        </div>

        {/* Mobile button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={28} className="text-[#5AB5C7]" /> : <Menu size={28} className="text-[#5AB5C7]" />}
        </button>
      </div>

      {/* Mobile Menu - CORREGIDA LA CONDICIÓN Y ANIMACIÓN */}
      <div className={`md:hidden bg-white/98 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-6 space-y-6">
          <Link 
            href="#about" 
            className="block text-gray-700 hover:text-[#5AB5C7] transition-colors text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Nosotros
          </Link>
          
          <Link 
            href="#products" 
            className="block text-gray-700 hover:text-[#5AB5C7] transition-colors text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Productos
          </Link>
          
          <Link 
            href="#contact" 
            className="block text-gray-700 hover:text-[#5AB5C7] transition-colors text-lg font-medium"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-4 py-3 bg-[#5AB5C7] text-white rounded-full hover:bg-[#4CA3B5] transition-colors font-medium"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </nav>
  );
}