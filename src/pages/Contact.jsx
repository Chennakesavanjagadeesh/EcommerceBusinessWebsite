import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { api } from "../api/api";

export default function Contact() {
  function onSubmit(form) {
    // mock: in real project send to backend
    console.log("Contact form", form);
    alert("Thanks! We received your message (mock).");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <ContactForm onSubmit={onSubmit} />
      </main>
      <Footer />
    </div>
  );
}
