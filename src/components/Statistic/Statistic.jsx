import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Statistic.style';

const Statistic = (props) => {
  return (
    <S.Statistic>
      <p>{props.title}</p>
      <h3>{props.metric}</h3>
    </S.Statistic>
  );
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired,
};

export default Statistic;
