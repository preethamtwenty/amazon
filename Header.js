import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './stateprovider';
import {Link,useHistory,useParams} from "react-router-dom";
import { auth } from './firebase';
function Header() {

    const[{user}]=useStateValue();
    const [{basket}]=useStateValue();

    const handleAuthentication =()=>{
        if(user){
            auth.signOut();
        }

    }

    return (
        <div className="header">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header_logo"></img>

        <div className="header_search">
        <input className="header_search_bar" type="text"></input>
        <SearchIcon className="search_icon"></SearchIcon>
        </div>
        

        <div className="header_final">
        <div className="header_option" onClick={handleAuthentication}>
        <span className="header_opt1">{ user?user.email:'Hello Guest'}</span>
        <Link to={!user &&"/login"}>
        <div className="header_opt2">{ user?'Sign Out':'Sign in'}</div>
        </Link>
        
        </div>

        <div className="header_option">
        <span className="header_opt1">Returns </span>
        <div className="header_opt2">&Orders</div>
        </div>

        <div className="header_option">
        <span className="header_opt1"><ShoppingBasketIcon/> </span>
        <Link to="/checkout">
        <div className="header_opt2">Cart {basket.length}</div></Link>
        </div>

        
        
        </div>
        </div>
    )
}

export default Header;
