const testimonials = [
  { id:1, name:"Ana S.", text:"Nunca experimentei perfumes tão marcantes e duradouros!" },
  { id:2, name:"Carlos M.", text:"Scentury Maia transformou minhas fragrâncias favoritas." },
  { id:3, name:"Laura P.", text:"O atendimento e a qualidade são impecáveis!" }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">Depoimentos</h2>
        <p className="text-lg text-gray-300">Clientes satisfeitos que descobriram a essência perfeita.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(t => (
          <div key={t.id} className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700">
            <p className="mb-4 text-gray-300">"{t.text}"</p>
            <span className="font-bold text-yellow-500">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}