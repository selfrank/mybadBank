//import logo from './logo.svg';
import './App.css';
//import Spa from "./Components/index";
import React from 'react';
import CreateAccount from './Components/createaccount';
import AllData from './Components/alldata';
import Deposit from './Components/deposit';
import Home from './Components/home';
import NavBar from './Components/navbar';
import Withdraw from './Components/withdraw';
import { BrowserRouter,RouterProvider,HashRouter,Route, Switch, withRouter} from 'react-router-dom';

//const Route =      ReactRouterDOM.Route;
//const Link =       ReactRouterDOM.Link;
//const HashRouter = ReactRouterDOM.HashRouter;
//import UserContext from './Components/context';
export const UserContext = React.createContext(null);
export const BalanceContext = React.createContext(100);
console.log('UserContext',UserContext);
function App() {
      return (<BrowserRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <BalanceContext.Provider value = {{balance:100}}>
          <div className="container" style={{padding: "20px"}}>
            <Switch>
            <Route path="/home" exact component={Home} />
          <Route exact path="/createaccount/" component={CreateAccount}/>
          <Route exact path="/deposit/" component={Deposit} />
          <Route exact path="/withdraw/" component={Withdraw} />
          <Route exact path="/alldata/" component={AllData} />
            </Switch>
          </div>
          </BalanceContext.Provider>
        </UserContext.Provider>      
       </BrowserRouter>
      );
    };


export default withRouter(App);
