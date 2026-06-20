import { carsTable } from '../data';

const carRows = carsTable.map((car) => ({
  id: car.id,
  'Название автомобиля': car.title,
  'Страна': car.country,
  'Тип': car.type,
  'Мощность (л.с.)': car.power,
  'Расход (л/100км)': car.consumption,
  'Цена (руб)': car.price,
  'Рейтинг': car.rating,
}));

export default carRows;