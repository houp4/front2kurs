// Импорт изображений автомобилей
import bmwImg from './images/BMW.jpg';
import cadillacImg from './images/cadillac_escalade.jpg';
import hondaAccordImg from './images/honda_accord.jpg';
import hondaCivicImg from './images/honda_civic.jpg';
import hyundaiImg from './images/hyundai_solaris.jpg';
import kiaImg from './images/kia_rio.jpg';
import nissanImg from './images/nissan_juke.jpg';
import subaruForesterImg from './images/subaru_forester.jpg';
import subaruImprezaImg from './images/subaru_impreza.jpg';
import toyotaCamryImg from './images/toyota_camry.jpg';
import toyotaLandCruiserImg from './images/toyota_land_cruser.jpg';
import toyotaYarisImg from './images/toyota_yaris_cross.jpg';
import volkswagenImg from './images/volkswagen_golf.jpg';

// Тип для автомобиля
export type tCar = {
  id: number;
  Модель: string;
  Тип: string;
  Страна: string;
  Привод: string;
  Мощность: number;
  Расход: number;
  Цена: number;
  Рейтинг: number;
  img?: string;
};

const cars: tCar[] = [
  { "id": 1, "Модель": "Toyota Camry", "Тип": "Седан", "Страна": "Япония", "Привод": "передний", "Мощность": 249, "Расход": 7.8, "Цена": 3200000, "Рейтинг": 4.7 },
  { "id": 2, "Модель": "Kia Rio", "Тип": "Седан", "Страна": "Корея", "Привод": "передний", "Мощность": 100, "Расход": 6.2, "Цена": 1350000, "Рейтинг": 4.5 },
  { "id": 3, "Модель": "Toyota Land Cruiser", "Тип": "Внедорожник", "Страна": "Япония", "Привод": "полный", "Мощность": 409, "Расход": 11.5, "Цена": 7800000, "Рейтинг": 4.9 },
  { "id": 4, "Модель": "Volkswagen Golf", "Тип": "Хэтчбек", "Страна": "Германия", "Привод": "передний", "Мощность": 150, "Расход": 5.9, "Цена": 2500000, "Рейтинг": 4.6 },
  { "id": 5, "Модель": "BMW", "Тип": "Седан", "Страна": "Германия", "Привод": "задний", "Мощность": 184, "Расход": 6.8, "Цена": 4500000, "Рейтинг": 4.7 },
  { "id": 6, "Модель": "Honda Accord", "Тип": "Седан", "Страна": "Япония", "Привод": "передний", "Мощность": 192, "Расход": 7.2, "Цена": 2800000, "Рейтинг": 4.6 },
  { "id": 7, "Модель": "Honda Civic", "Тип": "Седан", "Страна": "Япония", "Привод": "передний", "Мощность": 174, "Расход": 6.9, "Цена": 2500000, "Рейтинг": 4.6 },
  { "id": 8, "Модель": "Hyundai Solaris", "Тип": "Седан", "Страна": "Корея", "Привод": "передний", "Мощность": 123, "Расход": 6.1, "Цена": 1200000, "Рейтинг": 4.4 },
  { "id": 9, "Модель": "Nissan Juke", "Тип": "Кроссовер", "Страна": "Япония", "Привод": "передний", "Мощность": 117, "Расход": 6.5, "Цена": 1900000, "Рейтинг": 4.3 },
  { "id": 10, "Модель": "Subaru Forester", "Тип": "Кроссовер", "Страна": "Япония", "Привод": "полный", "Мощность": 185, "Расход": 8.1, "Цена": 3200000, "Рейтинг": 4.7 },
  { "id": 11, "Модель": "Subaru Impreza", "Тип": "Седан", "Страна": "Япония", "Привод": "полный", "Мощность": 152, "Расход": 7.5, "Цена": 2300000, "Рейтинг": 4.5 },
  { "id": 12, "Модель": "Toyota Yaris Cross", "Тип": "Кроссовер", "Страна": "Япония", "Привод": "передний", "Мощность": 120, "Расход": 6.3, "Цена": 2200000, "Рейтинг": 4.5 },
  { "id": 13, "Модель": "Cadillac Escalade", "Тип": "Внедорожник", "Страна": "США", "Привод": "полный", "Мощность": 426, "Расход": 14.0, "Цена": 8500000, "Рейтинг": 4.8 }
];

// Для галереи и карточек (с твоими изображениями)
export const carsForGallery = [
  { img: toyotaCamryImg, title: "Toyota Camry", description: ["Тип: Седан", "Страна: Япония", "Мощность: 249 л.с.", "Расход: 7.8 л/100км", "Рейтинг: 4.7 ★"] },
  { img: kiaImg, title: "Kia Rio", description: ["Тип: Седан", "Страна: Корея", "Мощность: 100 л.с.", "Расход: 6.2 л/100км", "Рейтинг: 4.5 ★"] },
  { img: toyotaLandCruiserImg, title: "Toyota Land Cruiser", description: ["Тип: Внедорожник", "Страна: Япония", "Мощность: 409 л.с.", "Расход: 11.5 л/100км", "Рейтинг: 4.9 ★"] },
  { img: volkswagenImg, title: "Volkswagen Golf", description: ["Тип: Хэтчбек", "Страна: Германия", "Мощность: 150 л.с.", "Расход: 5.9 л/100км", "Рейтинг: 4.6 ★"] },
  { img: bmwImg, title: "BMW", description: ["Тип: Седан", "Страна: Германия", "Мощность: 184 л.с.", "Расход: 6.8 л/100км", "Рейтинг: 4.7 ★"] },
  { img: hondaAccordImg, title: "Honda Accord", description: ["Тип: Седан", "Страна: Япония", "Мощность: 192 л.с.", "Расход: 7.2 л/100км", "Рейтинг: 4.6 ★"] },
  { img: hondaCivicImg, title: "Honda Civic", description: ["Тип: Седан", "Страна: Япония", "Мощность: 174 л.с.", "Расход: 6.9 л/100км", "Рейтинг: 4.6 ★"] },
  { img: hyundaiImg, title: "Hyundai Solaris", description: ["Тип: Седан", "Страна: Корея", "Мощность: 123 л.с.", "Расход: 6.1 л/100км", "Рейтинг: 4.4 ★"] },
  { img: nissanImg, title: "Nissan Juke", description: ["Тип: Кроссовер", "Страна: Япония", "Мощность: 117 л.с.", "Расход: 6.5 л/100км", "Рейтинг: 4.3 ★"] },
  { img: subaruForesterImg, title: "Subaru Forester", description: ["Тип: Кроссовер", "Страна: Япония", "Мощность: 185 л.с.", "Расход: 8.1 л/100км", "Рейтинг: 4.7 ★"] },
  { img: subaruImprezaImg, title: "Subaru Impreza", description: ["Тип: Седан", "Страна: Япония", "Мощность: 152 л.с.", "Расход: 7.5 л/100км", "Рейтинг: 4.5 ★"] },
  { img: toyotaYarisImg, title: "Toyota Yaris Cross", description: ["Тип: Кроссовер", "Страна: Япония", "Мощность: 120 л.с.", "Расход: 6.3 л/100км", "Рейтинг: 4.5 ★"] },
  { img: cadillacImg, title: "Cadillac Escalade", description: ["Тип: Внедорожник", "Страна: США", "Мощность: 426 л.с.", "Расход: 14.0 л/100км", "Рейтинг: 4.8 ★"] }
];

export default cars;