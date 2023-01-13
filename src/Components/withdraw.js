import React from 'react';
import {UserContext,BalanceContext} from '../App';
import {AccountForm} from './context';



const Withdraw=({ onChange, isValid }) => {
  const [deposit, setDeposit] = React.useState(UserContext);
  const [totalState, setTotalState] = React.useState (100);
  const [balance, setBalance] = React.useState (BalanceContext);
  const bctx = React.useContext(BalanceContext);  

  let status = `Account Balance $ ${bctx.balance} `;
  

 function handleWithdraw(data){
  let newTotal =  Number(bctx.balance) - deposit;
  bctx.balance = setBalance (balance =>[...balance, {balance:{newTotal}}]);
  console.log('data',deposit);
  console.log('status', status);  
  return true;
}
console.log ('withdraws deposit', deposit)

  
  return (
    <AccountForm
      bgcolor="secondary"
      header="Withdraw"
      handle={handleWithdraw}
      hideAmount={false}
      secondaryLink="/Deposit/"
      secondaryReference="Deposit"
      successButton="Withdraw More"
      successMessage="Withdraw Success!"
      nameLabel="Amount to Withdraw"
      balance={totalState}
      isDeposit={false}

    />
  )

};
export default Withdraw;
