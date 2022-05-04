import React from 'react';
import StatisticList from './StatisticList';

const statsArr = [
  { title: 'Earnings', metric: '$ 315.20' },
  { title: 'Orders', metric: '16' },
  { title: 'Sessions', metric: '463' },
  { title: 'Users', metric: '17' },
];

export const StatListTest = () => <StatisticList statistics={statsArr} />;

export default {
  title: 'StatisticList',
  component: StatisticList,
};
