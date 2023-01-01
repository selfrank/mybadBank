import React from 'react';
import './navbarStyle.css';

import {NavLink} from 'react-router-dom';

//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';


export default function NavBar(location){
  const linkStyle = {
    backgroundColor: "#DCDCDC"
  };

  const dropDownStyle = {
    backgroundColor: "#DCDCDC",
    color: "grey"
  };
  
 
  
  return(
    <>

    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd', paddingLeft: 20, }} >
      <a className="navbar-brand" href="/home">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <NavLink className="nav-link dropdown-toggle" activeStyle={linkStyle} to="/home" data-bs-toggle="dropdown">Home</NavLink>
            <ul className= "dropdown-menu"> 
            <li><NavLink className="dropdown-item" activeStyle={dropDownStyle} to="/home"> Return to home page</NavLink></li></ul>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link dropdown-toggle" activeStyle={linkStyle} to="/createaccount/">Create Account</NavLink>
            <ul className= "dropdown-menu"> 
            <li><NavLink className="dropdown-item" activeStyle={dropDownStyle} to="/createaccount/"> Allows you to add new bank accounts</NavLink></li></ul>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link dropdown-toggle" activeStyle={linkStyle} to="/Deposit/">Deposit</NavLink>
            <ul className= "dropdown-menu"> 
            <li><NavLink className="dropdown-item" activeStyle={dropDownStyle} to="/Deposit/"> Add funds to account</NavLink></li></ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link dropdown-toggle" activeStyle={linkStyle} to="/withdraw/">Withdraw</NavLink>
            <ul className= "dropdown-menu"> 
            <li><NavLink className="dropdown-item" activeStyle={dropDownStyle} to="/withdraw/"> Withdraw funds from account</NavLink></li></ul>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link dropdown-toggle" activeStyle={linkStyle} to="/alldata/">AllData</NavLink>
            <ul className= "dropdown-menu"> 
            <li><NavLink className="dropdown-item" activeStyle={dropDownStyle} to="/alldata/"> Summary of all accounts created this session</NavLink></li></ul>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
};




/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="#">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <NavLink class="nav-link" to="#">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="#">Features</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="#">Pricing</NavLink>
      </li>
      <li class="nav-item dropdown">
        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </NavLink>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink class="dropdown-item" to="#">Action</NavLink>
          <NavLink class="dropdown-item" to="#">Another action</NavLink>
          <NavLink class="dropdown-item" to="#">Something else here</NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>*/