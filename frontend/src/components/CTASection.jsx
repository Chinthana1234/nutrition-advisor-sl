const CTASection = () => (
  <section className="rounded-[32px] bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 p-8 text-white shadow-2xl">
    <div className="grid gap-8 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Ready?</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight">
          Take a photo of tonight’s plate. The Nutrition Advisor will do the rest.
        </h2>
        <p className="mt-3 text-sm text-white/80">
          Free forever for personal use. Premium insights for clinics and nutritionists.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
        >
          Get started now
        </button>
        <button
          type="button"
          className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white/80 hover:text-white"
        >
          Talk to a nutritionist
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;

