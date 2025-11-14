const SRI_LANKAN_TIPS = [
  'Balance rice portions with lean protein or dhal for steady energy.',
  'Swap coconut milk with light coconut cream when tracking weight.',
  'Pair kottu with fresh gotukola sambol to boost micronutrients.',
  'Hydrate with king coconut water post-workout to restore electrolytes.'
];

const useNutritionTips = () => {
  return { data: SRI_LANKAN_TIPS, isLoading: false };
};

export default useNutritionTips;

