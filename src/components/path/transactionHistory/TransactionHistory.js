import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionThead,
  TableHead,
  TableBody,
  TableBodyRoll,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </TransactionThead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRoll key={id}>
            <TableBody>{type}</TableBody>
            <TableBody>{amount}</TableBody>
            <TableBody>{currency}</TableBody>
          </TableBodyRoll>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
export default TransactionHistory;
