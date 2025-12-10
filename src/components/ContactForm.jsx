import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function change(e) {
    setForm(s => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    // basic client-side validation
    if (!form.name || !form.email || !form.message) return alert("Please fill all fields");
    if (onSubmit) onSubmit(form);
    setForm({ name: "", email: "", message: "" });
    alert("Message sent (mock)");
  }

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <input className="w-full p-3 border rounded mb-3" name="name" placeholder="Name" value={form.name} onChange={change} />
      <input className="w-full p-3 border rounded mb-3" name="email" placeholder="Email" value={form.email} onChange={change} type="email" />
      <textarea className="w-full p-3 border rounded mb-3" name="message" placeholder="Message" value={form.message} onChange={change} rows="5" />
      <button className="w-full bg-blue-600 text-white py-3 rounded">Send Message</button>
    </form>
  );
}
