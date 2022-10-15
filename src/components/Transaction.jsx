import React from 'react';
import PropTypes from 'prop-types';

export const Transaction = ({ item }) => {
  const { type, amount, currency } = item;
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  item: PropTypes.object,
};
