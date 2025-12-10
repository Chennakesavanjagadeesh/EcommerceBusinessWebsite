import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">About ZidioConnect</h1>
        <p className="text-gray-700 mb-4">ZidioConnect is a mock business platform built to showcase a comprehensive frontend structure with complex layouts and interactive features using React and Tailwind CSS.</p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Customer first</li>
          <li>Quality deliverables</li>
          <li>Continuous improvement</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
