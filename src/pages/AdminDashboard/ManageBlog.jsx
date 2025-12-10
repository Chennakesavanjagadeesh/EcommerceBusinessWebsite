import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

export default function ManageBlog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => api.getBlogs().then(setPosts), []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-4">Manage Blog (Mock)</h1>
        <div className="space-y-4">
          {posts.map(p => (
            <div key={p.id} className="p-4 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <div className="text-xs text-gray-500">{p.date} • {p.author}</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border rounded">Edit</button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
