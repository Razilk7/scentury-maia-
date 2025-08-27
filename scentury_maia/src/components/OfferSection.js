export default function OfferSection() {
  return (
    <section className="py-20 px-4 bg-yellow-500 text-black text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Oferta Especial</h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Adquira qualquer perfume da nossa coleção e ganhe frete grátis por tempo limitado!</p>
      <button className="bg-black text-yellow-500 font-bold px-8 py-4 rounded shadow-lg hover:scale-105 transition-transform">
        Quero Aproveitar
      </button>
    </section>
  );
}