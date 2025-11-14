const FoodExplorerGrid = ({ items }) => (
  <div className="grid gap-4 md:grid-cols-2">
    {items.map(item => (
      <div
        key={item.name}
        className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${item.accent}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">{item.tag}</p>
            <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
          </div>
          <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow">
            {item.calories} kcal
          </span>
        </div>
        <div className="mt-4 flex gap-4 text-xs font-semibold text-slate-500">
          <span className="rounded-full bg-white/80 px-3 py-1">Carbs: {item.carbs}</span>
          <span className="rounded-full bg-white/80 px-3 py-1">Sugar: {item.sugar}</span>
        </div>
        <p className="mt-4 text-sm text-slate-600">{item.note}</p>
      </div>
    ))}
  </div>
);

export default FoodExplorerGrid;

