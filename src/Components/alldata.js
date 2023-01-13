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
    <div style={{backgroundColor: 'white'}}>
    <h2 style={{paddingBottom:"10px",paddingTop: "10px",color:"#6c757d"}}>All Users</h2>
  
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 0,backgroundColor: '#6c757d', color:"white" }}>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Name </h4>{accountName}</div>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Email </h4> {accountEmail}</div>
    <div><h4 style={{color:"white", borderBottom: "solid white"}}>Password </h4> {accountPassword}</div>
  </div><br/>
  <NavLink to="/createaccount/" style={{color:"#6c757d",  fontStyle: "italic"}}>Add Additional Users</NavLink>
    </div>
    </> 
  ); 
};

export default AllData;

