import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

export default function ManageProducts() {
  const [items, setItems] = useState([]);

  useEffect(() => api.getProducts().then(setItems), []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-4">Manage Products (Mock)</h1>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {items.map(it => (
              <tr key={it.id} className="border-t">
                <td className="p-3">{it.id}</td>
                <td className="p-3">{it.title}</td>
                <td className="p-3">{it.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
}
