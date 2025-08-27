const products = [
  { id:1, name:"Oud Imperial", description:"Fragrância poderosa com oud premium", price:"R$189,90", badge:"Mais Vendido" },
  { id:2, name:"Âmbar Dourado", description:"Essência luxuosa com âmbar raro", price:"R$169,90", badge:"Exclusivo" },
  { id:3, name:"Mystique Desert", description:"Uma jornada sensorial através das areias", price:"R$199,90", badge:"Novo" }
];

export default function ProductSection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">Coleção Exclusiva</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">Cada perfume é uma obra-prima cuidadosamente selecionada.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-yellow-500 font-semibold">{product.badge}</span>
            </div>
            <h3 className="text-xl font-bold text-yellow-500 mb-2">{product.name}</h3>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <span className="text-2xl font-bold text-yellow-500 mb-4">{product.price}</span>
            <button className="mt-auto bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow-lg hover:scale-105 transition-transform">
              Comprar Agora
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}