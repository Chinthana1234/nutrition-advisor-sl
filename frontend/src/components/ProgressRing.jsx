const ProgressRing = ({ value, label, gradient }) => {
  const normalized = Math.min(Math.max(value, 0), 100);
  const background = `conic-gradient(${gradient} ${normalized * 3.6}deg, #e5e7eb ${
    normalized * 3.6
  }deg)`;

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="relative h-24 w-24">
        <div
          className="absolute inset-0 rounded-full"
          style={{ background, padding: '6px' }}
        >
          <div className="h-full w-full rounded-full bg-white"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-slate-900">{normalized}%</span>
          <span className="text-xs uppercase tracking-wide text-slate-400">done</span>
        </div>
      </div>
      <p className="text-center text-sm font-medium text-slate-600">{label}</p>
    </div>
  );
};

export default ProgressRing;

