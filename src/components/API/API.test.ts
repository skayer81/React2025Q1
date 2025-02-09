import { describe, expect, it } from 'vitest';
import { getAnimalByID } from './StAPI.ts';
import { getSearchAnimals } from './StAPI.ts';

describe('test API', async () => {
  it('test getAnimalByID', async () => {
    const data = await getAnimalByID('ANMA0000264633');
    const name = data.animal.name;
    expect(name).toBe('Abalone');
  });
  it('test getSearchAnimals', async () => {
    const data = await getSearchAnimals('', '');
    const name = data.animals[1].name;
    expect(name).toBe('Abalone');
  });
  it('test getSearchAnimals whit params', async () => {
    const data = await getSearchAnimals('Abalone', '');
    const name = data.animals[0].name;
    expect(name).toBe('Abalone');
  });
});
