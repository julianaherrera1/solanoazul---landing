"use client";

import { Fish, Leaf, Truck, Snowflake } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Encabezado */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
          ¿Por qué elegir nuestro atún?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Calidad premium, origen transparente y frescura garantizada.
        </p>

        {/* Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

          {/* Item 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50/40 hover:bg-blue-50 transition-all">
            <Snowflake className="w-12 h-12 text-[#5AB5C7] mb-4" />
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              Frescura garantizada
            </h3>
            <p className="text-gray-600 text-sm">
              Conservado en cadena de frío desde Bahía Solano hasta tu mesa.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50/40 hover:bg-blue-50 transition-all">
            <Fish className="w-12 h-12 text-[#5AB5C7] mb-4" />
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              Captura artesanal
            </h3>
            <p className="text-gray-600 text-sm">
              Pesca responsable realizada por comunidades locales.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50/40 hover:bg-blue-50 transition-all">
            <Leaf className="w-12 h-12 text-[#5AB5C7] mb-4" />
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              Natural y saludable
            </h3>
            <p className="text-gray-600 text-sm">
              Rico en Omega 3 y sin conservantes artificiales.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-blue-50/40 hover:bg-blue-50 transition-all">
            <Truck className="w-12 h-12 text-[#5AB5C7] mb-4" />
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              Entrega directa
            </h3>
            <p className="text-gray-600 text-sm">
              Sin intermediarios: del Pacífico directo a Medellín.
            </p>
          </div>

        </div>

           {/* Separador decorativo */}
        <div className="flex items-center justify-center gap-8 mt-20">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#5AB5C7]/20" />
          <div className="text-sm font-semibold text-[#5AB5C7] uppercase tracking-wider px-4">
            Compromiso con la calidad
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#5AB5C7]/20" />
        </div>
      </div>
    </section>
  );
}
