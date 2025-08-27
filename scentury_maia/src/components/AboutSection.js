export default function AboutSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-500">
            O Segredo da Perfumaria Árabe
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Há séculos, os árabes dominam a arte da perfumaria, criando essências exclusivas com madeiras raras, especiarias e óleos preciosos.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Nossos perfumes são cuidadosamente selecionados das melhores casas do Oriente Médio.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Notas de Saída</h3>
            <p className="text-gray-300">Cítricas refrescantes e especiarias aromáticas</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Notas de Coração</h3>
            <p className="text-gray-300">Rosas do deserto e madeiras orientais</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-yellow-500">Notas de Fundo</h3>
            <p className="text-gray-300">Oud puro, âmbar dourado e madeiras nobres</p>
          </div>
        </div>
      </div>
    </section>
  );
}