import { cars } from '../data/carsData';

export const COL_POWER = 'Мощность';
export const COL_RATING = 'Рейтинг';

export const OY_MAX_POWER = 'Максимальная мощность';
export const OY_MIN_POWER = 'Минимальная мощность';
export const OY_AVG_POWER = 'Средняя мощность';
export const OY_AVG_RATING = 'Средний рейтинг';

export type tGroup = {
  id: number;
  'Группа': string | number;
  [OY_MAX_POWER]: number;
  [OY_MIN_POWER]: number;
  [OY_AVG_POWER]: number;
  [OY_AVG_RATING]: number;
}[];

export type GroupKey = 'Тип' | 'Страна';

const makeGroup = (key: GroupKey): tGroup => {
  const groups = new Map<string | number, typeof cars>();

  cars.forEach((car) => {
    const group = car[key];
    const list = groups.get(group) ?? [];
    list.push(car);
    groups.set(group, list);
  });

  return Array.from(groups.entries()).map(([group, items], index) => {
    const powers = items.map((car) => car[COL_POWER]);
    const ratings = items.map((car) => car[COL_RATING]);

    const avgPower = powers.reduce((a, b) => a + b, 0) / powers.length;
    const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;

    return {
      id: index + 1,
      'Группа': group,
      [OY_MAX_POWER]: Math.max(...powers),
      [OY_MIN_POWER]: Math.min(...powers),
      [OY_AVG_POWER]: Math.round(avgPower),
      [OY_AVG_RATING]: Number(avgRating.toFixed(2)),
    };
  }).sort((a, b) => String(a['Группа']).localeCompare(String(b['Группа']), 'ru'));
};

export const byType = makeGroup('Тип');
export const byCountry = makeGroup('Страна');