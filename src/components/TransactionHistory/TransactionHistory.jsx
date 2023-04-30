import transactions from './transactions.json';
const TransactionHistory = ({ items }) => {
    return transactions.map(transaction => (
    <tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
  ));
};

export default TransactionHistory;
