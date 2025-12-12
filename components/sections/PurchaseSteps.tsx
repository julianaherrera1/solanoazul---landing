"use client";

import { MessageCircle, Package, CheckCircle, Truck } from "lucide-react";

export default function PurchaseSteps() {
  return (
    <section id="process" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-4">
          ¿Cómo comprar?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Un proceso sencillo, directo y sin intermediarios.
        </p>

        {/* GRID DE PASOS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Paso 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/10 border border-[#5AB5C7]/20 mb-6">
              <MessageCircle className="w-10 h-10 text-[#5AB5C7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              1. Escríbenos
            </h3>
            <p className="text-gray-600 text-sm max-w-[180px]">
              Te asesoramos por WhatsApp.
            </p>
          </div>

          {/* Paso 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/10 border border-[#5AB5C7]/20 mb-6">
              <Package className="w-10 h-10 text-[#5AB5C7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              2. Elige tu presentación
            </h3>
            <p className="text-gray-600 text-sm max-w-[180px]">
              300g o 500g según tu necesidad.
            </p>
          </div>

          {/* Paso 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/10 border border-[#5AB5C7]/20 mb-6">
              <CheckCircle className="w-10 h-10 text-[#5AB5C7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              3. Confirmamos disponibilidad
            </h3>
            <p className="text-gray-600 text-sm max-w-[180px]">
              Verificamos frescura y fecha de entrega.
            </p>
          </div>

          {/* Paso 4 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/10 border border-[#5AB5C7]/20 mb-6">
              <Truck className="w-10 h-10 text-[#5AB5C7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">
              4. Recíbelo en casa
            </h3>
            <p className="text-gray-600 text-sm max-w-[180px]">
              Entrega directa en Medellín.
            </p>
          </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-16">
          <a
            href="https://wa.me/3046274851?text=Hola%20👋%20Estoy%20interesado%20en%20el%20atún%20fresco%20de%20Solano%20Azul.%20¿Me%20das%20disponibilidad%20y%20precios?"  rel="noopener noreferrer"
            target="_blank"
            className="px-10 py-4 bg-[#5AB5C7] text-white font-semibold rounded-full hover:bg-[#4CA3B5] transition-all duration-300 shadow-lg"
          >
            Comprar ahora
          </a>
        </div>

      </div>
    </section>
  );
}
