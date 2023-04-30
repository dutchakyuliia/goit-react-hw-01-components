import transactions from './transactions.json';
import PropTypes from 'prop-types';
import css from './Transactions.module.css';
const TransactionHistory = ({ items }) => {
  return transactions.map(transaction => (
    <tr key={transaction.id}>
      <td className={css.row}>{transaction.type}</td>
      <td className={css.row}>{transaction.amount}</td>
      <td className={css.row}>{transaction.currency}</td>
    </tr>
  ));
};

export default TransactionHistory;
TransactionHistory.propTypes = {
  items: PropTypes.string,
};
