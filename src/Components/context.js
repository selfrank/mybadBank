import React from 'react';
import {UserContext, BalanceContext} from '../App'
import { NumericFormat } from 'react-number-format';
import {NavLink} from 'react-router-dom';


//import {Login} from './login';


//export {UserContext};

export const Card=(props)=>{
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body} 
          {props.status && (<div id='createStatus'>{props.status}</div>)}
          
        </div>
      </div>      
    );    
  }

 export const BankForm=(data)=>{
    // function classes(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [disabled, setDisabled] = React.useState(false);
    const ctx = React.useContext(UserContext);  
    const [users, setUsers] = React.useState(ctx.users);
    //updated React.useContext(UserContext);  to {UserContext} since it is imported 12/18/22
    //return 'bankForm mb-3 '+ show + status + name + email + password;
    // }
console.log('BankForm data',ctx.users);
    function validate(field, label){
      var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          setDisabled (true);
          setTimeout(() => setDisabled(false),3000);
          return false;
        }else if  
        (!(password.match(passw))) {
          setStatus('Error: password must be 8 characters' );
          setTimeout(() => setStatus(''),3000);
        
        return false;}
        
        return true;
    }
  
    function handle(){
      //console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      const insertAt =0;
      
      const newCtx = [...users.slice(0, insertAt), {name,email,password,balance:100},...users.slice(insertAt)];
      setUsers(newCtx);
      setShow(false);
           
      
    }  ctx.users = users; 
    console.log('handle ctx.users', ctx.users );
    console.log('users',users);
    //console.log(handle(ctx))
    //console.log('handle ctx',ctx);
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }
    console.log('name',name);
    return (
      <Card
      bgcolor={data.bgcolor}
      header={data.header}
      title={data.title}
      handle={data.handle}
      status={status}
      body=
      {show ? (  
                <>
                <p>{data.nameLabel}
                <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}></input>
                Email
                {(<input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}>{data.email}</input>)}
                Password{(<input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}>{data.password}</input>)}
                <br></br><button type="submit" disabled={disabled} className="btn btn-light" onClick={handle}>{data.header}</button>
                <button type="in-line" className="btn" style={{btnBorderColor: "transparent"}}> 
                
                </button>
                </p></>
              ):(
                <>
                <p><h6><b>Success!</b></h6>{data.successMessage}<br/>{name}</p>
                <button type="submit" className="btn btn-light" onClick={clearForm}>{data.successButton}
                {/*<a href={data.successButtonLink}></a>*/}
                </button><br/><br/>
                <NavLink to={data.secondaryLink} style={{color:"white", fontStyle: "italic"}}>{data.secondaryReference}</NavLink>
                </>
              )}
      />
    )
  };


  export const AccountForm=(data)=>{
    // function classes(){
      
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit] = React.useState('');  
    const [totalState, setTotalState] = React.useState (100);
    //const [validTransaction, setValidTransaction] = React.useState(false);
    const bctx = React.useContext(BalanceContext);  
    const [balance, setBalance] = React.useState([bctx.balance]);
   
    function handleChange (e) {
      const amount = e.target.value;
       if
       ((Number(amount))<0){
        setStatus (('Error: Must be a positive number'));
        setDeposit(0);
        setTimeout(() => setStatus(''),5000);
      }
      else if (Number.isNaN(Number(amount))){
        setStatus('Error: Must enter a number');
        setTimeout(() => setStatus(''),5000);
        return;
      }else
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setDeposit((amount))}
      else {
        setStatus('Error: Must be currency format')
        setTimeout(()=> setStatus(''),3000);
      }
    };
 
    console.log('deposit.isNaN', balance)

    function handle(){
      //if (validate) return;
      const isDeposit = data.isDeposit;
      if (isDeposit){
      let newTotal =(Number(bctx.balance) + (Number(deposit)));
      setTotalState(Math.round(newTotal*100)/100);
      setBalance(Math.round(newTotal*100)/100);
      setShow(false);
      //const newBctx = setBalance (balance =>[...balance, {balance}]);
      return newTotal;}
      else {      
        let newTotal =(Number(bctx.balance) - ((deposit)));
        
        if (newTotal<0) {
          setStatus('Transaction Failed: Insuficient Funds');
          setTimeout(() => setStatus(''),3000);
          return;}
          else{
        setTotalState(Math.round(newTotal*100)/100);
        setBalance(Math.round(newTotal*100)/100);
        setShow(false);
        //const newBctx = setBalance (balance =>[...balance, {balance}]);
        return newTotal;

      }
    } } bctx.balance = (balance);

    //ctx.users = users; 
    //console.log('handle ctx.users', ctx.users );
    console.log('handle users context',balance);
    console.log("balance",balance, "deposit", deposit, "totalState", totalState);  
    console.log((Math.round(balance*100)/100), "round down");
    //console.log(handle(ctx))
    //console.log('handle ctx',ctx);
  
    function clearForm(){
      setDeposit('');
      //setEmail('');
      //setPassword('');
      setShow(true);
      setStatus('');
    }
    console.log('bctx balance', bctx.balance);
    
    return (
      <Card
      bgcolor={data.bgcolor}
      header={data.header}
      title={data.title}
      handle={data.handle}
      successMessage={data.successMessage}
      totalState={totalState}
      status={status}
      body=
      {show ? (  
                <>
                
                <p>{data.nameLabel}<br></br>Current Balance ${bctx.balance}<br></br>
                {<input type="input" //prefix={'$'}  
                step="1.00" 
                pattern="^\d*(\.\d{0,2})?$" 
                className="form-control" id="deposit" value={deposit} onChange={handleChange}></input>}
                <br></br><button type="submit" disabled = {!deposit}  className="btn btn-light" onClick={handle}>{data.header}</button>
                <button type="in-line" className="btn" style={{btnBorderColor: "transparent"}}> 
                <NavLink to={data.secondaryLink} style={{color:"white", paddingLeft: 25, fontStyle: "italic"}}>{data.secondaryReference}</NavLink>
                </button>
                </p></>
              ):(
                <>
                <p>{data.successMessage}<br/> Account Balance: ${totalState}</p>
                <button type="submit" className="btn btn-light" onClick={clearForm}>{data.successButton}
                {/*<a href={data.successButtonLink}></a>*/}
                </button>
                <NavLink to={data.secondaryLink} style={{color:"white", paddingLeft: 25, fontStyle: "italic"}}>{data.secondaryReference}</NavLink>
                </>
              )}
      />
    )
  };



