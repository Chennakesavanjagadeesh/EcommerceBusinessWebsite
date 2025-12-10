export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="flex gap-3 flex-wrap mb-6">
      <button onClick={() => onSelect(null)} className={`px-3 py-1 rounded border ${selected===null ? "bg-blue-600 text-white" : ""}`}>All</button>
      {categories.map(cat => (
        <button key={cat} onClick={() => onSelect(cat)} className={`px-3 py-1 rounded border ${selected===cat ? "bg-blue-600 text-white" : ""}`}>
          {cat}
        </button>
      ))}
    </div>
  );
}
