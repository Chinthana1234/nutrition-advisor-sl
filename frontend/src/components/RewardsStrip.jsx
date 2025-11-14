import { Award } from 'lucide-react';

const RewardsStrip = ({ badges }) => (
  <div className="flex flex-col gap-3 rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur md:flex-row">
    {badges.map(badge => (
      <div
        key={badge.label}
        className={`flex flex-1 items-center gap-3 rounded-2xl border border-white/60 px-4 py-3 ${badge.color} shadow-sm`}
      >
        <Award className="h-8 w-8 text-amber-500" />
        <div>
          <p className="text-sm font-semibold text-slate-800">{badge.label}</p>
          <p className="text-xs text-slate-500">{badge.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export default RewardsStrip;

