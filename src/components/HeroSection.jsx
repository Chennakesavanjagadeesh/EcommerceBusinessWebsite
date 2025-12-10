export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Build. Grow. Succeed.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          ZidioConnect helps businesses launch beautiful websites, apps, and digital campaigns.
        </p>
        <div className="flex justify-center gap-3">
          <a href="/services" className="bg-white text-blue-600 px-6 py-3 rounded font-medium">Our Services</a>
          <a href="/contact" className="border border-white px-6 py-3 rounded">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
