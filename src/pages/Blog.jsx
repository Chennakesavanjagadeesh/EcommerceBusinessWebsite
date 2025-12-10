import Header from "../components/Header";
import Footer from "../components/Footer";
import { api } from "../api/api";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.getBlogs().then(setPosts); }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(b => <BlogCard key={b.id} blog={b} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
