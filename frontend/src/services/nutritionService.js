import apiClient from '../lib/apiClient.js';

const FALLBACK_SUMMARY = {
  metrics: [
    { label: 'Calories', value: '1,850 kcal', target: '2,000 kcal' },
    { label: 'Carbs', value: '55%', target: '< 60%' },
    { label: 'Protein', value: '25%', target: '25%' },
    { label: 'Fats', value: '20%', target: '20%' }
  ],
  hydration: { value: 2.2, target: 2.5, unit: 'L' },
  sugarRisk: 0.32,
  vegetableCount: { value: 3, target: 4 },
  energyScore: 78,
  quickTip: 'Add a leafy sambol to dinner to balance today’s carb load.'
};

export const getDailySummary = async () => {
  try {
    const { data } = await apiClient.get('/status');
    return data.summary || FALLBACK_SUMMARY;
  } catch (error) {
    console.warn('Falling back to local summary', error.message);
    return FALLBACK_SUMMARY;
  }
};

