const Testimonials = ({ entries }) => (
  <section className="rounded-[32px] bg-white p-8 shadow-xl">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Loved locally</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Real Sri Lankan users, real food wins.
        </h2>
      </div>
      <div className="flex gap-1 text-amber-400" aria-hidden="true">
        {'★★★★★'.split('').map((star, idx) => (
          <span key={`${star}-${idx}`}>{star}</span>
        ))}
      </div>
    </div>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {entries.map(entry => (
        <div
          key={entry.name}
          className="rounded-3xl border border-slate-100 bg-slate-50/70 p-6 text-slate-700 shadow-sm"
        >
          <p className="text-sm italic">&ldquo;{entry.quote}&rdquo;</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            {entry.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

