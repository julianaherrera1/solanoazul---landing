"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden">

      {/* Fondo completo con imagen - MÁS OSCURO CON GRADIENTE AZUL */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/imagenes/imgHero2.jpeg"
          alt="Atún fresco de Bahía Solano - Solano Azul"
          fill
          className="object-cover object-center brightness-[0.4] contrast-110"
          priority
          sizes="100vw"
        />

      {/* Capa base negra */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Capa azul sutil encima */}
      <div className="absolute inset-0 bg-[#0F4C81]/40" />
             
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none mb-6">
          <span className="block text-white drop-shadow-lg">Del Pacífico</span>
          <span className="block text-[#5AB5C7] drop-shadow-lg mt-2">a tu mesa</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Atún fresco capturado artesanalmente en{" "}
          <span className="font-semibold text-[#5AB5C7]">Bahía Solano</span> y 
          entregado directamente en la puerta de tu{" "}
          <span className="font-semibold text-white">Casa</span>. 
          Sostenible, transparente y 100% colombiano.
        </p>

        {/* CTA */}
        <button className="px-10 py-4 bg-[#5AB5C7] text-white font-semibold rounded-full hover:bg-[#4CA3B5] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl mx-auto">
          <a  href="https://wa.me/3046274851?text=Hola%20👋%20Estoy%20interesado%20en%20el%20atún%20fresco%20de%20Solano%20Azul.%20¿Me%20das%20disponibilidad%20y%20precios?" target="_blank" rel="noopener noreferrer" className="text-lg">Descubre nuestro atún</a>
        </button>

      </div>
    </section>
  );
}