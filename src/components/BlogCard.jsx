export default function BlogCard({ blog }) {
  return (
    <article className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg mb-1">{blog.title}</h4>
      <div className="text-xs text-gray-500 mb-3">{blog.date} • {blog.author}</div>
      <p className="text-gray-700 text-sm">{blog.content}</p>
    </article>
  );
}
