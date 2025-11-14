import { useQuery } from '@tanstack/react-query';
import useNutritionTips from '../hooks/useNutritionTips.js';
import { getDailySummary } from '../services/nutritionService.js';
import HeroSection from '../components/HeroSection.jsx';
import BenefitGrid from '../components/BenefitGrid.jsx';
import LoggingShowcase from '../components/LoggingShowcase.jsx';
import CoachJourney from '../components/CoachJourney.jsx';
import QuickAddGrid from '../components/QuickAddGrid.jsx';
import MealPlanTabs from '../components/MealPlanTabs.jsx';
import FoodExplorerGrid from '../components/FoodExplorerGrid.jsx';
import InsightsCarousel from '../components/InsightsCarousel.jsx';
import RewardsStrip from '../components/RewardsStrip.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import {
  benefitCards,
  coachJourneySteps,
  foodExplorerItems,
  insights,
  loggingFeatures,
  mealPlans,
  quickAddItems,
  rewardBadges,
  testimonials
} from '../data/uiData.js';

const Home = () => {
  const { data: tips } = useNutritionTips();
  const { data: summary } = useQuery({
    queryKey: ['daily-summary'],
    queryFn: getDailySummary
  });

  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 text-slate-900">

        <BenefitGrid cards={benefitCards} />

        <LoggingShowcase features={loggingFeatures} />

        <section className="grid gap-6 lg:grid-cols-[3fr,2fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <SectionHeader
              title="Quick add your day"
              subtitle="Tap a staple, adjust portions, done."
            />
            <div className="mt-6">
              <QuickAddGrid items={quickAddItems} />
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <SectionHeader
              title="Live balance"
              subtitle="Based on your latest logs"
              actionLabel="View history"
            />
            <div className="mt-6 space-y-4">
              {summary?.metrics?.map(metric => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm font-semibold text-slate-600">
                    <span>{metric.label}</span>
                    <span className="text-slate-900">{metric.value}</span>
                  </div>
                  <p className="text-xs text-slate-400">Target: {metric.target}</p>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                      style={{
                        width: metric.value.includes('%') ? metric.value : '60%'
                      }}
                    ></div>
                  </div>
                </div>
              )) || <p className="text-sm text-slate-500">Loading summary...</p>}
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                {summary?.quickTip || tips[0]}
              </div>
            </div>
          </div>
        </section>

        <CoachJourney steps={coachJourneySteps} />

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <SectionHeader
              title="Meal plans for locals"
              subtitle="Templates built with Lankan favourites"
            />
            <div className="mt-6">
              <MealPlanTabs plans={mealPlans} />
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <SectionHeader
              title="Food explorer"
              subtitle="Understand the plates you already love"
              actionLabel="View all"
            />
            <div className="mt-6">
              <FoodExplorerGrid items={foodExplorerItems} />
            </div>
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-8 shadow-xl">
          <SectionHeader
            title="Coach insights"
            subtitle="Micro lessons to keep your plate honest"
            actionLabel="See library"
          />
          <div className="mt-6">
            <InsightsCarousel insights={insights} />
          </div>
        </section>

        <section className="rounded-[32px] bg-white p-8 shadow-xl">
          <SectionHeader
            title="Streaks & rewards"
            subtitle="Stay motivated with badges rooted in Lankan habits"
          />
          <div className="mt-6">
            <RewardsStrip badges={rewardBadges} />
          </div>
        </section>

        <Testimonials entries={testimonials} />

        <CTASection />
      </div>
    </main>
  );
};

export default Home;

