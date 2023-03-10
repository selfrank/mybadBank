import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';
//const UserContext = React.userContext(Nu);
import {UserContext} from '../App';
import {BankForm } from './context';
import {NavLink} from 'react-router-dom';
import { Container } from 'react-bootstrap';
//const ctx = React.useContext(UserContext);

const AllData=()=>{
 const ctx = React.useContext(UserContext);
 const accounts = ctx.users;
 console.log('ctx.users, alldata',ctx.users);

 const Card=(props)=>{
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "50rem"}}>
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
 
 const accountName = accounts.map((anObjectMapped, index) =>{
  return (
    <p key= {`${index}+${anObjectMapped.name}+${anObjectMapped.email}+${anObjectMapped.password}`}>
      {anObjectMapped.name} 
    </p>
  )
 })
  const accountEmail = accounts.map((anObjectMapped, index) =>{
    return (
      <p key= {`${index}+${anObjectMapped.name}+${anObjectMapped.email}+${anObjectMapped.password}`}>
        {anObjectMapped.email} 
      </p>
    )
 })
 const accountPassword = accounts.map((anObjectMapped, index) =>{
  return (
    <p key= {`${index}+${anObjectMapped.name}+${anObjectMapped.email}+${anObjectMapped.password}`}>
      {anObjectMapped.password} 
    </p>
  )
})
 console.log('Alldata',accounts)
 console.log('addData account', accountName)
  return (
    
    <Card
    bgcolor="secondary"
    header="All Data"
      body={
<>
    <div>
    
  
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0,backgroundColor: '#6c757d', color:"white" }}>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Name </h4>{accountName}</div>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Email </h4> {accountEmail}</div>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Password </h4> {accountPassword}</div>
  </div><br/>
  <NavLink to="/createaccount/" style={{color:"white",  fontStyle: "italic"}}>Add Additional Users</NavLink>
    </div>
      </> }
    />
  
  ); 
};

export default AllData;

