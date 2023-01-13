import React from 'react';
import {BalanceContext} from '../App';
import { AccountForm } from './context';


const Deposit=({ onChange, isValid }) => {
  const [deposit, setDeposit] = React.useState(100);
  const [totalState, setTotalState] = React.useState (100);
  const bctx = React.useContext(BalanceContext);  
  const [balance, setBalance] = React.useState([bctx.balance]);


 function handle(totalState){
  let newTotal =  (Number(bctx.balance) + deposit);
  bctx.balance = setBalance (balance =>[...balance, {balance:{newTotal}}]);
  //setTotalState(newTotal);
  console.log('data',deposit);
 // console.log('status', status);  
  return true;
}
console.log ('deposits deposit', deposit)
//let status = `Account Balance $ ${totalState} `;
  
  return (
    <AccountForm
      bgcolor="secondary"
      header="Deposit"
      handle={handle}
      hideAmount={false}
      secondaryLink="/withdraw/"
      secondaryReference="Withdraw"
      successButton="Deposit More"
      successMessage="Deposit Success!"
      nameLabel="Amount to Deposit"
      balance={totalState}
      isDeposit = {true}

    />
  )

};
// ========================================



export default Deposit;

