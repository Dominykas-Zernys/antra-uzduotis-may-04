import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Item.style';

const Item = (props) => {
  return (
    <S.Item>
      <img src={props.image} alt='item-for-sale' />
      <div>
        <S.Title>{props.title}</S.Title>
        <S.SalesNumber>{props.salesNumber} Sales</S.SalesNumber>
      </div>
    </S.Item>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salesNumber: PropTypes.number.isRequired,
};

export default Item;
