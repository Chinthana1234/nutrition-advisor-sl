import { useState } from 'react';

const MealPlanTabs = ({ plans }) => {
  const [activeId, setActiveId] = useState(plans[0]?.id);
  const activePlan = plans.find(plan => plan.id === activeId) ?? plans[0];

  return (
    <div className="rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur">
      <div className="flex flex-wrap gap-3">
        {plans.map(plan => (
          <button
            key={plan.id}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              plan.id === activeId
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-500 hover:text-slate-900'
            }`}
            onClick={() => setActiveId(plan.id)}
          >
            {plan.label}
          </button>
        ))}
      </div>

      <div
        className={`mt-6 rounded-2xl border border-slate-100 bg-gradient-to-br p-6 text-white shadow-inner ${
          activePlan?.accent ?? 'from-slate-900 to-slate-700'
        }`}
      >
        <p className="text-sm uppercase tracking-[0.3em] opacity-70">Why it works</p>
        <h3 className="mt-2 text-2xl font-semibold drop-shadow">{activePlan?.blurb}</h3>
      </div>

      <ul className="mt-6 space-y-3">
        {activePlan?.meals.map(meal => (
          <li
            key={meal}
            className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-sm text-slate-600 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-slate-900"></span>
            {meal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlanTabs;

