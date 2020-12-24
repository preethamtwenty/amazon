import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" className="home_banner"></img>

            <div className="home_row">
            <Product  id="1"
            name="One Plus 6"
            price={35000}
            rating={4}
            image="https://images.unsplash.com/photo-1527747367590-09565c700ddd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            />
            <Product
            id="2"
            name="Mac Book Air"
            price={123000}
            rating={4}
            image="https://images.unsplash.com/photo-1521383899078-1c7c03c76b59?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=983&q=80"
            />
            </div>

            <div className="home_row">
            <Product
            id="3"
            name="Preetham's Water Bottle"
            price={600}
            rating={4}
            image="https://images.unsplash.com/photo-1544003484-3cd181d17917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
            />
            <Product
            id="4"
            name="Alexa"
            price={23000}
            rating={5}
            image="https://images.unsplash.com/photo-1518444667766-94728310399f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1038&q=80"
            />
            <Product
            id="5"
            name="Jeans (one piece)"
            price={3000}
            rating={4}
            image="https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"
            />

            
            </div>

            <div className="home_row">
            <Product
            id="6"
            name="Amazona Chocloates"
            price={1000}
            rating={5}
            image="https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
            />
            
            
            </div>
        </div>
    )
}

export default Home
