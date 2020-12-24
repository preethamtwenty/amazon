import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import {auth} from './firebase';
function Login() {

    const history=useHistory();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    const signup=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth)
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error))

    }
    const login=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            
                history.push('/')
            
        })
        .catch(error=>alert(error))
       

    }

    return (
        <div className="login">
        <Link to='/'>
        <img
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
        </Link>

    <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
            <h5>E-mail</h5>
            <input type='text' value={email}  onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

            <button type='submit' className='login__signInButton' onClick={login}>Sign In</button>
        </form>

        <p>
        </p>

        <button className='login__registerButton' onClick={signup}>Create your Amazon Account</button>
    </div>

        </div>
    )
}

export default Login
