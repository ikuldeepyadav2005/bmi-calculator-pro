import { describe, expect, it } from 'vitest';
import { calculateResults } from './health';

describe('calculateResults', () => {
  it('returns sensible values for a healthy adult profile', () => {
    const result = calculateResults({
      age: '29',
      gender: 'male',
      height: '180',
      weight: '80',
      unit: 'metric',
      activity: 'moderate',
      goal: 'maintain',
    });

    expect(result.bmi).toBeGreaterThan(18.5);
    expect(result.bmi).toBeLessThan(25);
    expect(result.category.label).toBe('Normal');
    expect(result.maintenanceCalories).toBeGreaterThan(0);
    expect(result.protein).toBeGreaterThan(0);
  });
});
