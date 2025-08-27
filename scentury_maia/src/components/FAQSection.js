const faqs = [
  { question:"Como escolher o perfume ideal?", answer:"Verifique as notas de saída, coração e fundo para entender a intensidade e duração." },
  { question:"Os perfumes são importados?", answer:"Sim, todos vêm diretamente das melhores casas de perfumaria do Oriente Médio." },
  { question:"Qual é o prazo de entrega?", answer:"O prazo varia de 3 a 10 dias úteis dependendo da região." }
];

export default function FAQSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-yellow-500 text-center">Perguntas Frequentes</h2>
      <div className="space-y-6">
        {faqs.map((faq,i) => (
          <div key={i} className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700">
            <h3 className="font-semibold mb-2 text-yellow-500">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}