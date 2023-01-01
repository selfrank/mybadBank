import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap';
//import axios from 'axios';
import CreateAccount from './createaccount';
import AllData from './alldata';
import Deposit from './deposit';
import Home from './home';
import Login from './login';
import NavBar from './navbar';
import Balance from './balance';
import Withdraw from './withdraw';
import {HashRouter, Route} from 'react-router-dom';
const UserContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
};
console.log('Home', Home);
console.log('CreateAccount', CreateAccount);
export default Spa; 
