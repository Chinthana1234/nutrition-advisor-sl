const BenefitGrid = ({ cards }) => (
  <section className="rounded-[32px] bg-white p-8 shadow-xl">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Why it works</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Designed for Sri Lankan daily life.
        </h2>
      </div>
      <button
        type="button"
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
      >
        Meet the coach
      </button>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {cards.map(card => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
        >
          <div className="text-3xl">{card.icon}</div>
          <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{card.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitGrid;

