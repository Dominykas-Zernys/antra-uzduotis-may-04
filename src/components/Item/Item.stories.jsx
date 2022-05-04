import React from 'react';
import Item from './Item';

export const Test = () => (
  <Item image='./img/mug.jpg' title='Coffee mug' salesNumber={2950} />
);

export default {
  title: 'Item',
  component: Item,
};
