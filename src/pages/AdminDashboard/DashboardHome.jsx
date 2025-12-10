import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/admin/products" className="p-6 border rounded hover:shadow">Manage Products</Link>
          <Link to="/admin/blog" className="p-6 border rounded hover:shadow">Manage Blog</Link>
          <Link to="/admin/submissions" className="p-6 border rounded hover:shadow">View Submissions</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
