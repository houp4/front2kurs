// Импортируем изображения из src/images/
import hondaAccord from '../images/honda_accord.jpg';
import bmw from '../images/BMW.jpg';
import toyotaCamry from '../images/toyota_camry.jpg';
import volkswagenGolf from '../images/volkswagen_golf.jpg';
import toyotaLandCruser from '../images/toyota_land_cruser.jpg';
import subaruImpreza from '../images/subaru_impreza.jpg';
import subaruForester from '../images/subaru_forester.jpg';
import nissanJuke from '../images/nissan_juke.jpg';
import toyotaYarisCross from '../images/toyota_yaris_cross.jpg';
import cadillacEscalade from '../images/cadillac_escalade.jpg';

export interface Car {
  id: number;
  img: string;
  title: string;
  description: string;
  fullDescription?: string;
}

// Данные для галереи
export const galleryImages = [
  { id: 1, img: hondaAccord, alt: 'Honda Accord - седан бизнес-класса' },
  { id: 2, img: bmw, alt: 'BMW — немецкий премиальный автомобиль' },
  { id: 3, img: toyotaCamry, alt: 'Toyota Camry — комфортабельный седан' },
  { id: 4, img: volkswagenGolf, alt: 'Volkswagen Golf — хетчбэк гольф-класса' },
];

// Данные для левой колонки карточек
export const leftColumnCars: Car[] = [
  {
    id: 1,
    img: toyotaLandCruser,
    title: 'Toyota Land Cruiser',
    description: 'Легендарный внедорожник. Эталон надёжности и проходимости для любых дорог и условий. «Доехать везде и вернуться».',
  },
  {
    id: 2,
    img: subaruImpreza,
    title: 'Subaru Impreza',
    description: 'Полный привод и спортивный характер в компактном кузове. Легенда среди поклонников драйва и надёжности.',
  },
  {
    id: 3,
    img: subaruForester,
    title: 'Subaru Forester',
    description: 'Универсальный внедорожник с постоянным полным приводом. Идеален для города, путешествий и лёгкого бездорожья.',
  },
  {
    id: 4,
    img: nissanJuke,
    title: 'Nissan Juke',
    description: 'Городской кроссовер с дерзким дизайном и характером. Для тех, кто ценит индивидуальность в движении.',
  },
];

// Данные для правой колонки карточек
export const rightColumnCars: Car[] = [
  {
    id: 5,
    img: toyotaYarisCross,
    title: 'Toyota Yaris Cross',
    description: 'Toyota Yaris Cross — компактный городской кроссовер с динамичным дизайном и практичным характером.',
    fullDescription: 'Отличается экономичностью, манёвренностью и высоким уровнем надежности, что делает его удобным для повседневной эксплуатации. Оснащается бензиновым двигателем 1.5 или гибридной системой на его базе, обеспечивающей минимальный расход топлива. Доступен передний привод или система полного привода AWD-i для уверенного движения в любых условиях. Салон выполнен в современном стиле, оснащён мультимедийной системой и поддержкой безопасности Toyota Safety Sense.',
  },
  {
    id: 6,
    img: cadillacEscalade,
    title: 'Cadillac Escalade',
    description: 'Cadillac Escalade — премиальный полноразмерный внедорожник с выразительным дизайном и статусным характером.',
    fullDescription: 'Отличается удобным салоном, плавным ходом и высоким уровнем комфорта на любых дорогах. Оснащается мощным V8 6.2 или экономичным дизельным двигателем Duramax 3.0. Полный привод и надежная конструкция обеспечивают уверенное управление в любых условиях. Салон выполнен из качественных материалов и оснащён передовыми технологиями Cadillac Smart System.',
  },
];