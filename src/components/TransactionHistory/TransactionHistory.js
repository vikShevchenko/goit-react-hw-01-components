import React from 'react';
import css from './TransactionHistory.module.css';
import TransactionRow from './TransactionRow';

function TransactionHistory(props) {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead className={css.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        {props.items.map(item => (
          <TransactionRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </table>
    </div>
  );
}

export default TransactionHistory;
