import { Head, Item, Table } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>

      <tbody>
        {transactions.map(transaction => {
          return (
            <Item key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </Item>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,

      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ),
};
