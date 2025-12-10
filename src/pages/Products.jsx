import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { api } from "../api/api";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import useModal from "../hooks/useModal";
import FilterBar from "../components/FilterBar";

export default function Products() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);
  const { open, show, hide } = useModal();
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    api.getProducts().then(setItems);
  }, []);

  const cats = [...new Set(items.map(i => i.category))];

  const filtered = filter ? items.filter(i => i.category === filter) : items;

  function openProduct(p) {
    setCurrent(p);
    show();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Products & Services</h1>

        <FilterBar categories={cats} selected={filter} onSelect={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(p => <ProductCard key={p.id} product={p} onClick={() => openProduct(p)} />)}
        </div>
      </main>

      <Modal open={open} onClose={hide} title={current?.title}>
        <div>
          <img src={current?.image} alt={current?.title} className="w-full h-48 object-cover rounded mb-4" />
          <p className="text-gray-700 mb-2">{current?.description}</p>
          <p className="text-sm text-gray-500">Category: {current?.category}</p>
        </div>
      </Modal>

      <Footer />
    </div>
  );
}
