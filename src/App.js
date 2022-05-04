import './App.css';
import { ItemList, StatisticList, Title } from './components';

const statsArr = [
  { id: 1, title: 'Earnings', metric: '$ 315.20' },
  { id: 2, title: 'Orders', metric: '16' },
  { id: 3, title: 'Sessions', metric: '463' },
  { id: 4, title: 'Users', metric: '17' },
  { id: 5, title: 'Users', metric: '17' },
  { id: 6, title: 'Users', metric: '17' },
];

const itemsList = [
  { id: 1, image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 2950 },
  { id: 2, image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 10350 },
  { id: 3, image: './img/candle.jpg', title: 'Candle', salesNumber: 2334 },
  {
    id: 4,
    image: './img/bunch-of-candles.jpg',
    title: 'A bunch of candles',
    salesNumber: 25,
  },
  { id: 5, image: './img/headphones.png', title: 'Headphones', salesNumber: 0 },
];

function App() {
  return (
    <div className='App'>
      <Title title='statistics' />
      <StatisticList statistics={statsArr} />
      <Title title='product sales' />
      <ItemList items={itemsList} />
    </div>
  );
}

export default App;
