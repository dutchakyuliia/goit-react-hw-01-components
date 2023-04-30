import TransactionHistory from './TransactionHistory';
import css from './Transactions.module.css';
const TransactionTable = () => {
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th className={css.rowHead}>Type</th>
                <th className={css.rowHead}>Amount</th>
                <th className={css.rowHead}>Currency</th>
            </tr>
        </thead>
        <tbody>
            <TransactionHistory />
        </tbody>
    </table>)
};
export default TransactionTable;
