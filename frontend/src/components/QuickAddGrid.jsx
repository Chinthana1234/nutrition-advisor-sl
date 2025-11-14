const typeColors = {
  carb: 'bg-amber-50 border-amber-100 text-amber-600',
  protein: 'bg-rose-50 border-rose-100 text-rose-600',
  energy: 'bg-violet-50 border-violet-100 text-violet-600',
  fiber: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  greens: 'bg-emerald-50 border-emerald-100 text-emerald-600',
  sugar: 'bg-rose-50 border-rose-100 text-rose-600'
};

const QuickAddGrid = ({ items }) => (
  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {items.map(item => (
      <button
        key={item.name}
        type="button"
        className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
          typeColors[item.type] || 'bg-slate-50 border-slate-200 text-slate-600'
        }`}
      >
        <div>
          <p className="text-sm font-semibold">{item.name}</p>
          <p className="text-xs opacity-70">{item.calories} kcal</p>
        </div>
        <span className="text-2xl">{item.emoji}</span>
      </button>
    ))}
  </div>
);

export default QuickAddGrid;

