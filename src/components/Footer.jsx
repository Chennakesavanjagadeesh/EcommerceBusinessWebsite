export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} ZidioConnect — All rights reserved.</p>
      </div>
    </footer>
  );
}
