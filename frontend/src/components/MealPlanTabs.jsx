const MealPlanTabs = ({ food }) => {
  // Default food data if not provided
  const foodData = food || {
    name: 'Red Rice',
    image: '🍚',
    calories: 180,
    carbs: 38,
    protein: 4,
    fat: 1.5,
    sugar: 0.5,
    fiber: 2.8,
    vitamins: ['Vitamin B1', 'Magnesium', 'Iron', 'Zinc'],
    healthBenefits: [
      'Lower glycemic index than white rice',
      'Rich in antioxidants',
      'Supports digestive health',
      'Helps maintain blood sugar levels'
    ],
    suitableFor: [
      'People with diabetes',
      'Weight management goals',
      'Digestive health concerns',
      'Heart health maintenance'
    ],
    portionSize: '1 cup (cooked) = 180 calories',
    alternatives: [
      'Brown rice (similar nutrition)',
      'Kurakkan (finger millet) - higher fiber',
      'Quinoa - complete protein source'
    ],
    tips: [
      'Soak for 30 minutes before cooking for better texture',
      'Pair with protein and vegetables for balanced meal',
      'Store in airtight container to maintain freshness',
      'Cook with less water for firmer texture'
    ]
  };

  const nutritionItems = [
    { label: 'Calories', value: `${foodData.calories}`, unit: 'kcal', color: 'from-amber-400 to-orange-500' },
    { label: 'Carbs', value: `${foodData.carbs}`, unit: 'g', color: 'from-rose-400 to-pink-500' },
    { label: 'Protein', value: `${foodData.protein}`, unit: 'g', color: 'from-blue-400 to-indigo-500' },
    { label: 'Fat', value: `${foodData.fat}`, unit: 'g', color: 'from-yellow-400 to-amber-500' },
    { label: 'Sugar', value: `${foodData.sugar}`, unit: 'g', color: 'from-red-400 to-rose-500' },
    { label: 'Fiber', value: `${foodData.fiber}`, unit: 'g', color: 'from-emerald-400 to-teal-500' }
  ];

  return (
    <section className="w-full min-h-screen bg-white">
      <div className="w-full">
        {/* Hero Section with Food Image and Name */}
        <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-12 lg:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Food Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-[40px] bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center shadow-2xl">
                    <span className="text-9xl lg:text-[12rem]">{foodData.image}</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl">
                    <span className="text-3xl text-white">✓</span>
                  </div>
                </div>
              </div>

              {/* Food Name and Basic Info */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="h-1.5 w-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                    Food Details
                  </p>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
                  {foodData.name}
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  <div className="rounded-full bg-emerald-100 px-6 py-2">
                    <span className="text-lg font-bold text-emerald-700">{foodData.calories} kcal</span>
                  </div>
                  <div className="rounded-full bg-slate-100 px-6 py-2">
                    <span className="text-sm font-semibold text-slate-700">Per Serving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Nutrition Breakdown */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1.5 w-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Nutrition Breakdown
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative rounded-[28px] bg-gradient-to-br from-white to-slate-50 border border-slate-100 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                      {item.label}
                    </span>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{item.value}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">{item.unit} per serving</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vitamins Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1.5 w-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Vitamins & Minerals
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {foodData.vitamins.map((vitamin, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-4 text-center shadow-sm"
                >
                  <span className="text-sm font-semibold text-slate-900">{vitamin}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Health Benefits */}
            <div className="rounded-[32px] bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">💚</div>
                <h2 className="text-3xl font-bold text-slate-900">Health Benefits</h2>
              </div>
              <ul className="space-y-4">
                {foodData.healthBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-500 text-xl mt-1">✓</span>
                    <span className="text-base text-slate-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Should Eat This */}
            <div className="rounded-[32px] bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">👥</div>
                <h2 className="text-3xl font-bold text-slate-900">Who Should Eat This</h2>
              </div>
              <ul className="space-y-4">
                {foodData.suitableFor.map((person, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-1">✓</span>
                    <span className="text-base text-slate-700 leading-relaxed">{person}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recommended Portion Size */}
          <div className="mb-16">
            <div className="rounded-[32px] bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-8 lg:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">📏</div>
                <h2 className="text-3xl font-bold text-slate-900">Recommended Portion Size</h2>
              </div>
              <p className="text-2xl font-semibold text-slate-800 bg-white/80 rounded-2xl px-6 py-4 inline-block">
                {foodData.portionSize}
              </p>
            </div>
          </div>

          {/* Two Column Layout - Alternatives & Tips */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Healthy Alternatives */}
            <div className="rounded-[32px] bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🔄</div>
                <h2 className="text-3xl font-bold text-slate-900">Healthy Alternatives</h2>
              </div>
              <ul className="space-y-4">
                {foodData.alternatives.map((alternative, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-violet-500 text-xl mt-1">→</span>
                    <span className="text-base text-slate-700 leading-relaxed">{alternative}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips for Better Consumption */}
            <div className="rounded-[32px] bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">💡</div>
                <h2 className="text-3xl font-bold text-slate-900">Tips for Better Consumption</h2>
              </div>
              <ul className="space-y-4">
                {foodData.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-rose-500 text-xl mt-1">💡</span>
                    <span className="text-base text-slate-700 leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealPlanTabs;

