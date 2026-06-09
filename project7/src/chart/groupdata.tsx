import cars from '../data';

export type tGroup = {
  id: number;
  "Группа": string;
  "Минимальная мощность": number;
  "Средняя мощность": number;
  "Максимальная мощность": number;
  "Средний рейтинг": number;
}[];

export const teams: tGroup = (() => {
  const grouped = new Map<string, any>();
  
  cars.forEach(car => {
    const type = car.Тип;
    if (!grouped.has(type)) {
      grouped.set(type, { power: [], rating: [] });
    }
    grouped.get(type).power.push(car.Мощность);
    grouped.get(type).rating.push(car.Рейтинг);
  });
  
  const result: tGroup = [];
  let id = 1;
  
  grouped.forEach((values, type) => {
    result.push({
      id: id++,
      "Группа": type,
      "Минимальная мощность": Math.min(...values.power),
      "Максимальная мощность": Math.max(...values.power),
      "Средняя мощность": Number((values.power.reduce((a: number, b: number) => a + b, 0) / values.power.length).toFixed(1)),
      "Средний рейтинг": Number((values.rating.reduce((a: number, b: number) => a + b, 0) / values.rating.length).toFixed(2))
    });
  });
  
  return result;
})();

export const countries: tGroup = (() => {
  const grouped = new Map<string, any>();
  
  cars.forEach(car => {
    const country = car.Страна;
    if (!grouped.has(country)) {
      grouped.set(country, { power: [], rating: [] });
    }
    grouped.get(country).power.push(car.Мощность);
    grouped.get(country).rating.push(car.Рейтинг);
  });
  
  const result: tGroup = [];
  let id = 1;
  
  grouped.forEach((values, country) => {
    result.push({
      id: id++,
      "Группа": country,
      "Минимальная мощность": Math.min(...values.power),
      "Максимальная мощность": Math.max(...values.power),
      "Средняя мощность": Number((values.power.reduce((a: number, b: number) => a + b, 0) / values.power.length).toFixed(1)),
      "Средний рейтинг": Number((values.rating.reduce((a: number, b: number) => a + b, 0) / values.rating.length).toFixed(2))
    });
  });
  
  return result;
})();

export const roles: tGroup = teams;