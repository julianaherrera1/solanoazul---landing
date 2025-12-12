"use client";

import { MessageCircle, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 relative overflow-hidden">

      {/* Fondo tipo seccion Productos */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0F4C81]" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#1D4C7D]/20 rounded-full blur-3xl -z-20 pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center text-white">

        {/* Encabezado */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Contáctanos
        </h2>

        <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-16">
          Estamos para ayudarte. Escríbenos o síguenos para conocer más sobre nuestro atún fresco y su proceso artesanal.
        </p>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* WhatsApp */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 shadow-xl hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/20 border border-[#5AB5C7]/30 mb-6 shadow-md">
              <MessageCircle className="w-10 h-10 text-[#5AB5C7]" />
            </div>

            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-blue-100 text-sm max-w-[210px] mb-6">
              Atención rápida, humana y personalizada.
            </p>

            <a
              href="https://wa.me/3046274851?text=Hola%20%F0%9F%91%8B%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Solano%20Azul."
              target="_blank"
              className="px-6 py-3 rounded-full bg-[#5AB5C7] text-white font-medium hover:bg-[#4CA3B5] transition-all shadow-lg hover:shadow-xl"
            >
              Abrir WhatsApp
            </a>
          </div>

          {/* Instagram */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 shadow-xl hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/20 border border-[#5AB5C7]/30 mb-6 shadow-md">
              <Instagram className="w-10 h-10 text-[#5AB5C7]" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-blue-100 text-sm max-w-[210px] mb-6">
              Recetas, pesca artesanal y contenido fresco del Pacífico.
            </p>

            <a
              href="https://www.instagram.com/solanoazul_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="px-6 py-3 rounded-full bg-white text-[#0F4C81] font-medium hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Ver Instagram
            </a>
          </div>

          {/* Ubicación */}
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 shadow-xl hover:shadow-2xl">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#5AB5C7]/20 border border-[#5AB5C7]/30 mb-6 shadow-md">
              <MapPin className="w-10 h-10 text-[#5AB5C7]" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
            <p className="text-blue-100 text-sm mb-2">Medellín, Colombia</p>
            <p className="text-blue-200 text-sm max-w-[210px]">
              Envíos en cadena de frío directamente a tu casa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
