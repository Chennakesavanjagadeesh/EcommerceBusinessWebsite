import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <section className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="text-blue-600 underline">See all services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
