import headphonesImage from '../assets/products/headphones.svg'
import speakerImage from '../assets/products/speaker.svg'
import keyboardImage from '../assets/products/keyboard.svg'
import mouseImage from '../assets/products/mouse.svg'
import lampImage from '../assets/products/lamp.svg'
import watchImage from '../assets/products/watch.svg'

export const products = [
  {
    id: 1,
    name: 'AeroSound Pro',
    category: 'Наушники',
    description: 'Чистый звук, активное шумоподавление и до 36 часов работы.',
    price: 12990,
    badge: 'Хит',
    color: '#e7d6ff',
    colorName: 'лавандовый',
    image: headphonesImage,
  },
  {
    id: 2,
    name: 'Pulse Mini',
    category: 'Акустика',
    description: 'Компактная колонка с объёмным звуком и защитой от воды.',
    price: 7490,
    badge: 'Новинка',
    color: '#ffb4a4',
    colorName: 'коралловый',
    image: speakerImage,
  },
  {
    id: 3,
    name: 'Arc 75',
    category: 'Клавиатуры',
    description: 'Механическая клавиатура с тихими свитчами и подсветкой.',
    price: 9990,
    color: '#c6f4dc',
    colorName: 'мятный',
    image: keyboardImage,
  },
  {
    id: 4,
    name: 'Flow Mouse',
    category: 'Аксессуары',
    description: 'Эргономичная беспроводная мышь для учёбы и работы.',
    price: 4590,
    color: '#c7dcff',
    colorName: 'голубой',
    image: mouseImage,
  },
  {
    id: 5,
    name: 'Halo Light',
    category: 'Для рабочего стола',
    description: 'Умная лампа с мягким светом и сенсорной регулировкой.',
    price: 6790,
    badge: '−15%',
    color: '#ffe49d',
    colorName: 'песочный',
    image: lampImage,
  },
  {
    id: 6,
    name: 'Nova Watch S',
    category: 'Смарт-часы',
    description: 'Здоровье, тренировки и уведомления на ярком AMOLED-экране.',
    price: 14990,
    color: '#2f3338',
    colorName: 'графитовый',
    image: watchImage,
  },
]

