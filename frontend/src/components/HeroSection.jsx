import { heroMetrics } from '../data/uiData.js';

const HeroSection = () => (
  <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-400 via-teal-500 to-slate-900 p-10 text-white shadow-2xl">
    <div className="relative z-10 grid gap-10 lg:grid-cols-[3fr,2fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Sri Lankan AI</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Scan your meal, get smart nutrition guidance built for our plates.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/85">
          From red rice to kottu, the Nutrition Advisor coach understands your staples,
          balances macros, and keeps sugar in check.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start free analysis
          </button>
          <button
            type="button"
            className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
          >
            Watch demo
          </button>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 rounded-[28px] bg-white/10 p-6 shadow-inner backdrop-blur">
        <div className="rounded-2xl bg-white/15 p-4 shadow">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">
            Today’s smart tip
          </p>
          <p className="mt-3 text-lg font-semibold">
            Pair tonight’s rice with gotukola sambol to lower the sugar spike.
          </p>
        </div>
        <div className="rounded-2xl bg-white/15 p-4 shadow">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Coach reply</p>
          <p className="mt-3 text-sm text-white/80">
            “Your hydration is 0.3L behind. Sip king coconut or plain water before 4PM.”
          </p>
        </div>
        <div className="rounded-2xl bg-white/15 p-4 shadow">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Live balance</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold">1,520</span>
            <span className="text-sm text-white/70">/ 2,050 kcal</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/20">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-200 via-amber-300 to-red-200"></div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-3">
      {heroMetrics.map(metric => (
        <div
          key={metric.label}
          className="rounded-2xl border border-white/20 bg-white/10 p-4 text-white/90 backdrop-blur"
        >
          <p className="text-lg font-semibold">{metric.value}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">{metric.label}</p>
          <p className="text-xs text-white/70">{metric.detail}</p>
        </div>
      ))}
    </div>

    <div className="absolute inset-0 opacity-40">
      <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-amber-200/40 blur-3xl"></div>
    </div>
  </section>
);

export default HeroSection;

