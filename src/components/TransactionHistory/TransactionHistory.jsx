import PropTypes from 'prop-types';
import css from './Transactions.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className={css.rowHead}>Type</th>
          <th className={css.rowHead}>Amount</th>
          <th className={css.rowHead}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody>
          <tr key={id}>
            <td className={css.row}>{type}</td>
            <td className={css.row}>{amount}</td>
            <td className={css.row}>{currency}</td>
          </tr>
        </tbody>
      ))}
      ;
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
