import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import TestimonialsSection from './components/TestimonialsSection';
import OfferSection from './components/OfferSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950">
      <Hero />
      <AboutSection />
      <ProductSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;