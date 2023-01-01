import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';
//const UserContext = React.userContext(Nu);
import {UserContext} from '../App';
import {BankForm } from './context';
import {NavLink} from 'react-router-dom';
//const ctx = React.useContext(UserContext);

const AllData=()=>{
 const ctx = React.useContext(UserContext);
 const accounts = ctx.users;
 console.log('ctx.users, alldata',ctx.users);
 
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
    <>
    <h2 style={{textDecoration: 'underline'}}>All Users</h2><br/>
  
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0, backgroundColor: 'white' }}>
    <div><h3 style={{backgroundColor: '#e3f2fd',textDecoration: 'underline'}}>Name </h3>{accountName}</div>
    <div><h3 style={{backgroundColor: '#e3f2fd',textDecoration: 'underline'}}>Email </h3> {accountEmail}</div>
    <div><h3 style={{backgroundColor: '#e3f2fd',textDecoration: 'underline'}}>Password </h3> {accountPassword}</div>
  </div><br/>
  <NavLink to="/createaccount/" style={{color:"black", paddingLeft: 25, fontStyle: "italic"}}>Add Additional Users</NavLink>
    
    </> 
  ); 
};

export default AllData;

