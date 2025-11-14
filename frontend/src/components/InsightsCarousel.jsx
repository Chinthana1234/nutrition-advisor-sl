import { Lightbulb } from 'lucide-react';

const InsightsCarousel = ({ insights }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {insights.map(item => (
      <div
        key={item.title}
        className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-white to-slate-50 p-5 shadow-sm"
      >
        <div className="flex items-center gap-2 text-amber-500">
          <Lightbulb className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.3em]">Insight</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{item.body}</p>
      </div>
    ))}
  </div>
);

export default InsightsCarousel;

