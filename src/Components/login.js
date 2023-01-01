
import React from 'react';
import {BankForm} from './context';
import {UserContext} from '../App'


const Login=()=>{

 

  const ctx = React.useContext(UserContext);  

  const handle=(data)=>{
    ctx.users.push({name:data.name, email:data.email, password:data.password, balance:100});
    return true;
    
  }; console.log('data login',ctx)


  return (


    <BankForm
      bgcolor="secondary"
      header="Login"
      title="Sign In Below"
      handle={handle}
      hideAmount={true}
      successButton="Logout"
      successButtonLink="#/Deposit"
      secondaryLink="#/CreateAccount/"
      secondaryReference="Create Account"
      successMessage="Welcome back "
      nameLabel= "Name"
    />
  ) 

}; 
export default Login;

