const LoggingShowcase = ({ features }) => (
  <section className="rounded-[32px] bg-white p-8 shadow-xl">
    <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Smart logging
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-900">
          Upload your plate, drag a simple slider, get full nutrition context.
        </h2>
        <p className="mt-4 text-sm text-slate-600">
          Built on a Sri Lankan dish model trained on thousands of real home-cooked meals
          and restaurant plates.
        </p>
        <div className="mt-6 space-y-4">
          {features.map(feature => (
            <div
              key={feature.title}
              className={`rounded-3xl border border-slate-100 bg-gradient-to-br ${feature.accent} p-4 text-sm text-white shadow-sm`}
            >
              <p className="text-sm font-semibold text-white">{feature.title}</p>
              <p className="text-xs text-white/90">{feature.copy}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-3xl bg-slate-900 p-6 text-white shadow-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Live preview</p>
        <div className="mt-4 rounded-2xl bg-white/10 p-4 backdrop-blur">
          <div className="flex justify-between text-sm text-white/80">
            <span>Kottu portion</span>
            <span>540 kcal</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/20">
            <div className="h-full rounded-full bg-gradient-to-r from-rose-400 to-orange-300"></div>
          </div>
          <p className="mt-2 text-xs text-white/70">
            Drag slider to adjust quantity · Auto-updates macros
          </p>
        </div>
        <div className="mt-6 rounded-2xl bg-white/10 p-4 backdrop-blur">
          <div className="flex justify-between text-sm text-white/80">
            <span>Coach insight</span>
            <span className="text-emerald-300">+12 balance</span>
          </div>
          <p className="mt-2 text-sm text-white/80">
            “Add mallum or polos curry to cut carb load by 20%.”
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LoggingShowcase;

