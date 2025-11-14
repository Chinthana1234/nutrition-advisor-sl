export const quickAddItems = [
  { name: 'Rice & Curry', emoji: '🍛', calories: 420, type: 'carb' },
  { name: 'Parippu', emoji: '🥣', calories: 210, type: 'protein' },
  { name: 'Chicken Curry', emoji: '🍗', calories: 320, type: 'protein' },
  { name: 'Hoppers', emoji: '🥞', calories: 190, type: 'carb' },
  { name: 'Kottu', emoji: '🍲', calories: 540, type: 'energy' },
  { name: 'Jackfruit Curry', emoji: '🧡', calories: 260, type: 'fiber' },
  { name: 'Gotukola Sambol', emoji: '🥗', calories: 80, type: 'greens' },
  { name: 'Milk Tea', emoji: '🍵', calories: 120, type: 'sugar' }
];

export const progressGoals = [
  {
    label: 'Calorie balance',
    value: 78,
    color: 'from-amber-400 to-orange-500'
  },
  {
    label: 'Sugar control',
    value: 65,
    color: 'from-rose-400 to-pink-500'
  },
  {
    label: 'Vegetable count',
    value: 50,
    color: 'from-emerald-400 to-green-500'
  }
];

export const mealPlans = [
  {
    id: 'weight',
    label: 'Weight Control',
    accent: 'from-orange-500 to-amber-400',
    blurb: 'Balanced plates with red rice and lean proteins.',
    meals: [
      'Red rice + fish ambulthiyal + mukunuwenna',
      'String hoppers + dhal + gotukola sambol',
      'Kurakkan roti + chicken stir-fry + mallum'
    ]
  },
  {
    id: 'diabetes',
    label: 'Diabetes Care',
    accent: 'from-sky-500 to-cyan-400',
    blurb: 'Low glycemic combos with local greens.',
    meals: [
      'Brown rice + polos curry + cucumber salad',
      'Kola kenda + boiled gram + fruit',
      'Steamed manioc + kiri hodi + leafy salad'
    ]
  },
  {
    id: 'energy',
    label: 'Student Energy',
    accent: 'from-violet-500 to-indigo-500',
    blurb: 'Smart carbs + hydration boosts for study days.',
    meals: [
      'Milk rice + katta sambol + banana',
      'Whole-wheat roti + egg curry + gotukola juice',
      'Veg kottu + dhal + fresh king coconut'
    ]
  }
];

export const foodExplorerItems = [
  {
    name: 'String Hoppers',
    tag: 'Breakfast',
    calories: 210,
    carbs: 'High',
    sugar: 'Low',
    note: 'Pair with dhal & sambol',
    accent: 'bg-rose-50 border-rose-100'
  },
  {
    name: 'Red Rice',
    tag: 'Staple',
    calories: 180,
    carbs: 'Medium',
    sugar: 'Low',
    note: 'Lower GI than white rice',
    accent: 'bg-amber-50 border-amber-100'
  },
  {
    name: 'Jackfruit Curry',
    tag: 'Fiber',
    calories: 260,
    carbs: 'Medium',
    sugar: 'Moderate',
    note: 'Keeps you full longer',
    accent: 'bg-emerald-50 border-emerald-100'
  },
  {
    name: 'Milk Tea',
    tag: 'Drink',
    calories: 120,
    carbs: 'Low',
    sugar: 'High',
    note: 'Swap sugar for kithul',
    accent: 'bg-sky-50 border-sky-100'
  }
];

export const insights = [
  {
    title: 'Balance your lunch packet',
    body: 'Half plate veggies, quarter rice, quarter protein keeps glucose steady.'
  },
  {
    title: 'Why jackfruit keeps you full',
    body: 'High fiber slows digestion; ideal for afternoon cravings.'
  },
  {
    title: 'Red vs white rice',
    body: 'Red has more fiber and lowers sugar spikes by up to 20%.'
  }
];

export const rewardBadges = [
  { label: 'Lankan Plate Streak', desc: '3 balanced days', color: 'bg-emerald-100' },
  { label: 'Sugar Smart', desc: 'No sweet drinks for 5 days', color: 'bg-rose-100' },
  { label: 'Hydration Hero', desc: 'Met water goal all week', color: 'bg-sky-100' }
];

export const heroMetrics = [
  { label: 'Meals logged', value: '1.2M', detail: 'Sri Lankan plates tracked' },
  { label: 'Foods recognised', value: '320+', detail: 'Local dishes with nutrition facts' },
  { label: 'Accuracy rate', value: '94%', detail: 'Verified by nutritionists' }
];

export const benefitCards = [
  {
    title: 'Snap & understand',
    body: 'Upload your rice packet photo and get instant macro + sugar breakdown.',
    icon: '📷'
  },
  {
    title: 'Balanced by design',
    body: 'AI compares your day against Lankan diet patterns and nudges gently.',
    icon: '⚖️'
  },
  {
    title: 'Live nutrition coach',
    body: 'Personalised tips in Sinhala, Tamil, or English whenever you log meals.',
    icon: '💬'
  }
];

export const coachJourneySteps = [
  {
    title: 'Set your goal',
    copy: 'Weight balance, diabetic care, or gym power? The coach adapts instantly.'
  },
  {
    title: 'Log what you actually eat',
    copy: 'String hoppers, kottu, or short eats—no generic salads here.'
  },
  {
    title: 'Get Sri Lankan guidance',
    copy: 'Daily plate score, carb alerts, hydration reminders tuned to the climate.'
  }
];

export const loggingFeatures = [
  {
    title: 'Visual logging',
    copy: 'Auto-detect local dishes from a single snap.',
    accent: 'from-sky-400 to-blue-500'
  },
  {
    title: 'Portion intelligence',
    copy: 'Plate slider shows macros as you drag.',
    accent: 'from-amber-400 to-orange-500'
  },
  {
    title: 'Instant adjustments',
    copy: 'Swaps white rice for red, tea sugar for kithul based on your log.',
    accent: 'from-emerald-400 to-teal-500'
  }
];

export const testimonials = [
  {
    name: 'Ishara · Colombo',
    quote:
      '“I finally understand my lunch packets. Sugar alerts feel like a chat with my amma.”'
  },
  {
    name: 'Nuwan · Kandy',
    quote: '“Gained energy for cricket practice without skipping rice. Perfect balance.”'
  },
  {
    name: 'Dilani · Jaffna',
    quote:
      '“Logging milk tea and short eats is so quick. The Sinhala tips keep me accountable.”'
  }
];

