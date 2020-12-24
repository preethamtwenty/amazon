import logo from './logo.svg';
import './App.css';
import './Header';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import {auth} from './firebase';
import React, { useState,useEffect } from 'react';
import Payment from './Payment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './stateprovider';


function App() {

  const [{},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is ',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  
  }, [])


  return (
    <Router>
    <Switch>
    <div className="app">
    <Route path="/" exact>
    <Header/>
    <Home/>
    </Route>

    <Route path="/checkout">
    <Header/>
    <Checkout/>
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/signup">
    <Signup/>
    </Route>

    <Route path="/payment">
    <Header/>
    <Payment/>
    </Route>
    </div>

    </Switch>
    </Router>
  );
}

export default App;
