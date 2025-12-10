export default function ProductCard({ product, onClick }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center">
        {/* placeholder image or provided */}
        <img src={product.image} alt={product.title} className="object-cover h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-700">{product.category}</span>
          <button onClick={onClick} className="text-sm bg-blue-600 text-white px-3 py-1 rounded">View</button>
        </div>
      </div>
    </div>
  );
}
