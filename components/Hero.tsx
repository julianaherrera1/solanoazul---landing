export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-arena text-center px-6">
      <h2 className="text-5xl font-bold text-azulMarino mb-4">Del Pacífico a tu mesa 🌊</h2>
      <p className="text-lg max-w-2xl text-azulMarino/80">
        Solano Azul ofrece atún fresco y sostenible, directamente del mar colombiano.
      </p>
      <button className="mt-8 bg-turquesa text-white px-6 py-3 rounded-lg font-semibold hover:bg-azulMarino transition">
        Conoce más
      </button>
    </section>
  );
}
