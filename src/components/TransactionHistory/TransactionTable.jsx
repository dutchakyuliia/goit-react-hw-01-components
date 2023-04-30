import TransactionHistory from './TransactionHistory';

const TransactionTable = () => {
    console.log(1111)
    return (<table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            <TransactionHistory />
        </tbody>
    </table>)
};
export default TransactionTable;
