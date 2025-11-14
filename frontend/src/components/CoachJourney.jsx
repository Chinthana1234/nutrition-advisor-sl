const CoachJourney = ({ steps }) => (
  <section className="rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl">
    <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">AI coach</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight">
          Guidance that feels like chatting with a Sri Lankan nutritionist friend.
        </h2>
        <p className="mt-4 text-sm text-white/70">
          Multilingual tips, cultural context, and balanced swaps without judgment. Just
          real talk.
        </p>
        <div className="mt-6 rounded-2xl bg-white/5 p-5 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Live sample</p>
          <p className="mt-3 text-sm text-white/80">
            “Your dinner had 2 carb-heavy dishes. Add leafy mallum or polos tomorrow to
            steady the glucose curve.”
          </p>
        </div>
      </div>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <span className="absolute -left-4 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-white/70">{step.copy}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoachJourney;

