export type tTasks = {
  question: string;
  answer: string;
}[];

export type tQuizzes = {
  id: number;
  type: 'M' | 'S' | 'C' | 'MC';
  title: string;
  tasks: tTasks;
}[];

export const quiz: tQuizzes = [

  {
    id: 1,
    type: 'M',
    title: 'Сопоставьте автомобиль и его страну производителя.',
    tasks: [
      { question: 'Toyota Camry', answer: 'Япония' },
      { question: 'BMW 3 Series', answer: 'Германия' },
      { question: 'Cadillac Escalade', answer: 'США' },
      { question: 'Hyundai Solaris', answer: 'Корея' },
    ],
  },

  {
    id: 2,
    type: 'M',
    title: 'Сопоставьте автомобиль и его тип кузова.',
    tasks: [
      { question: 'Toyota Land Cruiser', answer: 'Внедорожник' },
      { question: 'Volkswagen Golf', answer: 'Хэтчбек' },
      { question: 'Hyundai Tucson', answer: 'Кроссовер' },
      { question: 'Ford Mustang', answer: 'Купе' },
    ],
  },

  {
    id: 3,
    type: 'S',
    title: 'Отсортируйте автомобили по мощности (от наибольшей к наименьшей).',
    tasks: [
      { question: 'Cadillac Escalade', answer: '1' },
      { question: 'Toyota Land Cruiser', answer: '2' },
      { question: 'BMW X5', answer: '3' },
      { question: 'Volkswagen Golf', answer: '4' },
    ],
  },

  {
    id: 4,
    type: 'S',
    title: 'Отсортируйте автомобили по цене (от самой дорогой к самой дешёвой).',
    tasks: [
      { question: 'Lexus LX', answer: '1' },
      { question: 'Porsche Cayenne', answer: '2' },
      { question: 'Toyota Camry', answer: '3' },
      { question: 'Kia Rio', answer: '4' },
    ],
  },

  {
    id: 5,
    type: 'C',
    title: 'Какая страна является родиной автомобильного бренда Toyota?',
    tasks: [
      { question: 'Корея', answer: '0' },
      { question: 'Япония', answer: '1' },
      { question: 'Германия', answer: '0' },
      { question: 'США', answer: '0' },
    ],
  },

  {
    id: 6,
    type: 'C',
    title: 'Какой из этих автомобилей является электромобилем?',
    tasks: [
      { question: 'Tesla Model 3', answer: '1' },
      { question: 'Toyota Camry', answer: '0' },
      { question: 'Volkswagen Golf', answer: '0' },
      { question: 'BMW 3 Series', answer: '0' },
    ],
  },

  {
    id: 7,
    type: 'MC',
    title: 'Какие из этих автомобилей производятся в Германии? (выберите несколько)',
    tasks: [
      { question: 'BMW 3 Series', answer: '1' },
      { question: 'Volkswagen Golf', answer: '1' },
      { question: 'Hyundai Solaris', answer: '0' },
      { question: 'Toyota Camry', answer: '0' },
    ],
  },

  {
    id: 8,
    type: 'MC',
    title: 'Какие из этих автомобилей имеют полный привод? (выберите несколько)',
    tasks: [
      { question: 'Toyota Land Cruiser', answer: '1' },
      { question: 'Subaru Impreza', answer: '1' },
      { question: 'Hyundai Solaris', answer: '0' },
      { question: 'Kia Rio', answer: '0' },
    ],
  },
];