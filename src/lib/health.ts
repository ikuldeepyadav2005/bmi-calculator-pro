export type UnitSystem = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type Goal = 'lose' | 'maintain' | 'gain';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'very' | 'athlete';

export type CalculatorState = {
  age: string;
  gender: Gender;
  height: string;
  weight: string;
  unit: UnitSystem;
  activity: ActivityLevel;
  goal: Goal;
};

export const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  athlete: 1.9,
};

export const bmiCategories = [
  { max: 18.5, label: 'Underweight', color: 'text-sky-400', bg: 'from-sky-500/20 to-cyan-400/20' },
  { max: 24.9, label: 'Normal', color: 'text-emerald-400', bg: 'from-emerald-500/20 to-lime-400/20' },
  { max: 29.9, label: 'Overweight', color: 'text-yellow-400', bg: 'from-yellow-500/20 to-amber-400/20' },
  { max: 34.9, label: 'Obese I', color: 'text-orange-400', bg: 'from-orange-500/20 to-red-400/20' },
  { max: 39.9, label: 'Obese II', color: 'text-red-400', bg: 'from-red-500/20 to-rose-400/20' },
  { max: Infinity, label: 'Obese III', color: 'text-rose-700', bg: 'from-rose-800/20 to-fuchsia-500/20' },
];

export function calculateResults(state: CalculatorState) {
  const age = Number(state.age);
  const height = Number(state.height);
  const weight = Number(state.weight);
  const unit = state.unit;

  const weightKg = unit === 'metric' ? weight : weight * 0.453592;
  const heightCm = unit === 'metric' ? height : height * 2.54;
  const heightM = heightCm / 100;

  const bmi = calculateBmi(weight, height, unit);
  const category = getBmiCategory(bmi);

  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 24.9 * heightM * heightM;

  const idealWeight = 22.5 * heightM * heightM;
  const targetWeight = state.goal === 'lose' ? idealWeight - 3 : state.goal === 'gain' ? idealWeight + 3 : idealWeight;

  const bmr = state.gender === 'male'
    ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = bmr * activityMultipliers[state.activity];
  const maintenanceCalories = Math.round(tdee);
  const weightLossCalories = Math.round(maintenanceCalories - 400);
  const weightGainCalories = Math.round(maintenanceCalories + 300);

  const protein = Math.round(weightKg * 1.6);
  const water = Math.round(weightKg * 35);
  const bodyFat = state.gender === 'male'
    ? Math.max(5, Math.min(40, 1.2 * bmi + 0.23 * age - 16.2))
    : Math.max(8, Math.min(45, 1.2 * bmi + 0.23 * age - 5.4));

  const leanMass = weightKg * (1 - bodyFat / 100);
  const bmiPrime = bmi / 25;
  const ponderalIndex = weightKg / (heightM * heightM * heightM);
  const metabolicAge = Math.round(age + (bmi - 22) * 0.8);

  const macro = {
    protein: Math.round(maintenanceCalories * 0.3 / 4),
    carbs: Math.round(maintenanceCalories * 0.45 / 4),
    fats: Math.round(maintenanceCalories * 0.25 / 9),
  };

  return {
    bmi,
    category,
    healthyMin: Number(healthyMin.toFixed(1)),
    healthyMax: Number(healthyMax.toFixed(1)),
    idealWeight: Number(idealWeight.toFixed(1)),
    targetWeight: Number(targetWeight.toFixed(1)),
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    maintenanceCalories,
    weightLossCalories,
    weightGainCalories,
    protein,
    water,
    bodyFat: Number(bodyFat.toFixed(1)),
    leanMass: Number(leanMass.toFixed(1)),
    bmiPrime: Number(bmiPrime.toFixed(2)),
    ponderalIndex: Number(ponderalIndex.toFixed(2)),
    metabolicAge,
    macro,
  };
}

function calculateBmi(weight: number, height: number, unit: UnitSystem) {
  const heightInMeters = unit === 'metric' ? height / 100 : height * 0.0254;
  const weightInKg = unit === 'metric' ? weight : weight * 0.453592;
  const bmi = weightInKg / (heightInMeters * heightInMeters);
  return Number(bmi.toFixed(1));
}

function getBmiCategory(bmi: number) {
  return bmiCategories.find((item) => bmi <= item.max) ?? bmiCategories[bmiCategories.length - 1];
}
