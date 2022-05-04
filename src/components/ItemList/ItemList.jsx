import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import * as S from './ItemList.style';

const ItemList = ({ items }) => {
  return (
    <S.ItemList>
      {items &&
        items.map((item) => (
          <Item
            image={item.image}
            title={item.title}
            salesNumber={item.salesNumber}
          />
        ))}
    </S.ItemList>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      salesNumber: PropTypes.number.isRequired,
    })
  ),
};

export default ItemList;
