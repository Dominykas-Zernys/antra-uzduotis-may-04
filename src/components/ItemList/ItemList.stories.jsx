import React from 'react';
import ItemList from './ItemList';

const itemsList = [
  { image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 2950 },
  { image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 4000 },
  { image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 2334 },
  { image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 25 },
  { image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 336 },
  { image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 20253 },
  { image: './img/mug.jpg', title: 'Coffee mug', salesNumber: 22 },
  { image: './img/mug2.jpg', title: 'Tea mug', salesNumber: 0 },
];

export const ItemListTest = () => <ItemList items={itemsList} />;

export default {
  title: 'ItemList',
  component: ItemListTest,
};
