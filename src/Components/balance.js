import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';
const UserContext = React.createContext(null);  

const Balance=()=>{
  const ctx = React.useContext(UserContext);
  return (
    <>
    <h5>Balance</h5>
    {JSON.stringify(ctx)}<br/></>
  )
};

export default Balance;


