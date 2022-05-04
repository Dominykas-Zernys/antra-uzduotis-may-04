import './App.css';
import { ItemList, StatisticList, Title } from './components';

const statsArr = [
  { title: 'Earnings', metric: '$ 315.20' },
  { title: 'Orders', metric: '16' },
  { title: 'Sessions', metric: '463' },
  { title: 'Users', metric: '17' },
  { title: 'Users', metric: '17' },
  { title: 'Users', metric: '17' },
];

const itemsList = [
  { image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 2950 },
  { image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 10350 },
  { image: './img/candle.jpg', title: 'Candle', salesNumber: 2334 },
  {
    image: './img/bunch-of-candles.jpg',
    title: 'A bunch of candles',
    salesNumber: 25,
  },
  { image: './img/headphones.png', title: 'Headphones', salesNumber: 0 },
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
