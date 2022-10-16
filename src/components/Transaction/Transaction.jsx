import React from 'react';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ item }) => {
  const { type, amount, currency } = item;
  return (
    <tr className={css.tableRow}>
      <td className={css.tableFirstColumn}>{type}</td>
      <td className={css.tableCenterColumn}>{amount}</td>
      <td className={css.tableLastColumn}>{currency}</td>
    </tr>
  );
};
Transaction.propTypes = {
  item: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
