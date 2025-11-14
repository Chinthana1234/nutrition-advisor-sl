const SectionHeader = ({ title, subtitle, actionLabel, onAction }) => (
  <div className="flex flex-wrap items-center justify-between gap-3">
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Nutrition</p>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
    </div>
    {actionLabel && (
      <button
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
        onClick={onAction}
        type="button"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

export default SectionHeader;

