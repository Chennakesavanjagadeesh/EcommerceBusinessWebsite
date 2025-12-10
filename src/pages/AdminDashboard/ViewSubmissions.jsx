import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

export default function ViewSubmissions() {
  const [subs, setSubs] = useState([]);
  useEffect(() => api.getSubmissions().then(setSubs), []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-4">Contact Submissions (Mock)</h1>
        <div className="space-y-3">
          {subs.map(s => (
            <div key={s.id} className="p-4 border rounded">
              <div className="text-sm text-gray-600">{s.email} — <span className="font-semibold">{s.name}</span></div>
              <p className="mt-2">{s.message}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
