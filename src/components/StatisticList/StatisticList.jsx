import React from 'react';
import PropTypes from 'prop-types';
import * as S from './StatisticList.style';
import Statistic from '../Statistic/Statistic';

const StatisticList = ({ statistics }) => {
  return (
    <S.StatisticList>
      {statistics.map((stat) => (
        <Statistic title={stat.title} metric={stat.metric} />
      ))}
    </S.StatisticList>
  );
};

StatisticList.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      metric: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticList;
