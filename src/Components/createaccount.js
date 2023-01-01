import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';
import {BankForm} from './context';
import {UserContext} from '../App';


export default function CreateAccount(){
  const ctx = React.useContext(UserContext);  
  const [users, setUsers] = React.useState(ctx.users);

  function handle(data){
    ctx.users = setUsers (users =>[...users, {name:data.name, email:data.email, password:data.password, balance:100}]);
    //setCtx(ctx=>[...ctx,{name:data.name,email:data.email,password:data,balance:100}]);
    //ctx.users=newCtx
    console.log(data);
    console.log('ctx create handle', ctx);
    return true;
   
  } console.log('createaccount',users);

  return (
    <BankForm
      bgcolor="secondary"
      header="Create Account"
      handle={handle}
      hideAmount={true}
      secondaryLink="/alldata/"
      secondaryReference="View All"
      successButton="Add another account"
      successMessage="Success! Account created for "
      nameLabel="Name"

    />
  )
}