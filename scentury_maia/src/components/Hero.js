import heroImage from '../assets/hero-perfumes.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-500">
          Scentury Maia
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white">
          A Essência do Poder e da Sedução
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Fragrâncias exclusivas, intensas e inesquecíveis direto do Oriente Médio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 text-black font-semibold px-8 py-4 rounded shadow-lg hover:scale-105 transition-transform">
            🔥 Quero meu perfume agora
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-8 py-4 rounded hover:bg-yellow-500 hover:text-black transition-colors">
            Ver Coleção
          </button>
        </div>
      </div>
    </section>
  );
}