import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-gray-800">ZidioConnect</div>
          <span className="text-sm text-gray-500">Business Website</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/" label="Home" active={loc.pathname === "/"} />
          <NavLink to="/about" label="About" active={loc.pathname === "/about"} />
          <NavLink to="/services" label="Services" active={loc.pathname === "/services"} />
          <NavLink to="/products" label="Products" active={loc.pathname === "/products"} />
          <NavLink to="/blog" label="Blog" active={loc.pathname === "/blog"} />
          <NavLink to="/contact" label="Contact" active={loc.pathname === "/contact"} />
          <Link to="/admin" className="text-sm px-3 py-2 rounded border text-gray-700 hover:bg-gray-50">Admin</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(s => !s)} className="p-2">
            ☰
          </button>
        </div>

        {/* Mobile */}
        {open && (
          <div className="absolute top-16 right-4 bg-white shadow rounded-md py-4 px-6 md:hidden">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/contact" label="Contact" />
            <Link to="/admin" className="block mt-2 text-sm">Admin</Link>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link to={to} className={`text-sm ${active ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}`}>
      {label}
    </Link>
  );
}
