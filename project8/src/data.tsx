import { IMG } from './constants/images';
import { cars } from './data/carsData';

export type CarRecord = {
  id: number;
  img: string;
  title: string;
  description: string[];
};

// Баннеры для главной страницы
export const bannerImages = [
  { id: 1, img: cars[0]?.img, alt: cars[0]?.Модель, className: 'block1', link: `/car/${cars[0]?.id}` },
  { id: 2, img: cars[3]?.img, alt: cars[3]?.Модель, className: 'block2-part1', link: `/car/${cars[3]?.id}` },
  { id: 3, img: cars[4]?.img, alt: cars[4]?.Модель, className: 'block2-part2', link: `/car/${cars[4]?.id}` },
  { id: 4, img: cars[1]?.img, alt: cars[1]?.Модель, className: 'block4', link: `/car/${cars[1]?.id}` },
  { id: 5, img: cars[2]?.img, alt: cars[2]?.Модель, className: 'block5', link: `/car/${cars[2]?.id}` },
  { id: 6, img: cars[5]?.img, alt: cars[5]?.Модель, className: 'block3', link: `/car/${cars[5]?.id}` },
];

// Топ автомобилей для сетки
export const topCars = cars.slice(0, 5).map((car) => ({
  id: car.id,
  name: car.Модель,
  country: car.Страна,
  logo: car.img,
  link: `/car/${car.id}`,
}));

// Детальные автомобили для блоков
export const detailedCars = [
  {
    id: cars[0]?.id,
    name: cars[0]?.Модель,
    image: cars[0]?.img,
    country: cars[0]?.Страна,
    type: cars[0]?.Тип,
    drive: cars[0]?.Привод,
    power: cars[0]?.Мощность,
    rating: cars[0]?.Рейтинг,
    link: `/car/${cars[0]?.id}`,
    description: 'Toyota Camry — легендарный седан, сочетающий надёжность, комфорт и экономичность.',
  },
  {
    id: cars[3]?.id,
    name: cars[3]?.Модель,
    image: cars[3]?.img,
    country: cars[3]?.Страна,
    type: cars[3]?.Тип,
    drive: cars[3]?.Привод,
    power: cars[3]?.Мощность,
    rating: cars[3]?.Рейтинг,
    link: `/car/${cars[3]?.id}`,
    description: 'Volkswagen Golf — культовый хэтчбек, который задаёт стандарты в своём классе.',
  },
  {
    id: cars[4]?.id,
    name: cars[4]?.Модель,
    image: cars[4]?.img,
    country: cars[4]?.Страна,
    type: cars[4]?.Тип,
    drive: cars[4]?.Привод,
    power: cars[4]?.Мощность,
    rating: cars[4]?.Рейтинг,
    link: `/car/${cars[4]?.id}`,
    description: 'BMW 3 Series — спортивный седан с задним приводом, эталон управляемости.',
  },
];

export const carsTable = cars.map((car) => ({
  id: car.id,
  title: car.Модель,
  country: car.Страна,
  type: car.Тип,
  power: car.Мощность,
  consumption: car.Расход,
  price: car.Цена,
  rating: car.Рейтинг,
}));