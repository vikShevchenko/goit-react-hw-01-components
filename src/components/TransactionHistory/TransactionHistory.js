import React from 'react'
import './TransactionHistory.css'

function TransactionHistory(props) {
    
  return (
    <div> 
        <table className="transaction-history">
  <thead className='header'>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  
  {props.items.map(item =>(
    
 <tbody key={item.id}>

    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  
  </tbody> 
     ))}
</table>

    </div>
  )
}

export default TransactionHistory














