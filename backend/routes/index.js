import { Router } from 'express';

const router = Router();

router.get('/status', (_req, res) => {
  res.json({
    success: true,
    message: 'Nutrition Advisor API is running.',
    summary: {
      metrics: [
        { label: 'Calories', value: '1,850 kcal', target: '2,000 kcal' },
        { label: 'Carbs', value: '55%', target: '< 60%' },
        { label: 'Protein', value: '25%', target: '25%' },
        { label: 'Fats', value: '20%', target: '20%' }
      ],
      hydration: { value: 2.2, target: 2.5, unit: 'L' },
      sugarRisk: 0.32,
      vegetableCount: { value: 3, target: 4 },
      energyScore: 78
    },
    quickTip: 'Add a leafy sambol to dinner to balance today’s carb load.',
    timestamp: new Date().toISOString()
  });
});

export default router;

