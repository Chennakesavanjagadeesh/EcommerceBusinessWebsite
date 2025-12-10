import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  { id: "web", title: "Web Development", desc: "React, Node, SEO friendly websites." },
  { id: "mobile", title: "Mobile Apps", desc: "Android & iOS applications." },
  { id: "marketing", title: "Marketing", desc: "SEO, social media & campaigns." },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.id} className="p-6 border rounded shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
