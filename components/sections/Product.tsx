"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Product() {
  return (
    <section id="products" className="relative w-full py-24">

      {/* FONDO AZUL CON CAPA OSCURA (ESTILO HERO) */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-[#0F4C81]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-white">

        {/* Encabezado */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Presentaciones disponibles
        </h2>

        <p className="text-center text-lg text-blue-100 max-w-2xl mx-auto mb-16">
          Atún fresco capturado artesanalmente y empacado con el mayor cuidado.
        </p>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CARD 300g */}
          <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-56 mb-6">
              <Image
                src="/assets/imagenes/imgProduct2.png"
                alt="Atún Solano Azul 300g"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#0F4C81] mb-2">
              Atún fresco – 300g
            </h3>

            <p className="text-[#4A5B6A] mb-6 text-sm leading-relaxed">
              Perfecto para comidas rápidas, ensaladas frescas y porciones individuales.
            </p>

            <a
              href="https://wa.me/xxxxxxxxxx?text=Hola!%20Quiero%20más%20información%20sobre%20el%20atún%20de%20300g."
              target="_blank"
              className="inline-flex items-center gap-2 text-[#0F4C81] font-medium hover:text-[#5AB5C7] transition-colors"
            >
              Consultar disponibilidad
              <ArrowRight size={18} />
            </a>
          </div>

          {/* CARD 500g */}
          <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-56 mb-6">
              <Image
                src="/assets/imagenes/imgProduct2.png"
                alt="Atún Solano Azul 500g"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#0F4C81] mb-2">
              Atún fresco – 500g
            </h3>

            <p className="text-[#4A5B6A] mb-6 text-sm leading-relaxed">
              Ideal para preparaciones familiares, meal prep o recetas más abundantes.
            </p>

            <a
              href="https://wa.me/xxxxxxxxxx?text=Hola!%20Quiero%20más%20información%20sobre%20el%20atún%20de%20500g."
              target="_blank"
              className="inline-flex items-center gap-2 text-[#0F4C81] font-medium hover:text-[#5AB5C7] transition-colors"
            >
              Consultar disponibilidad
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
