import React from 'react';
import Navbar from "../../component/Navbar.jsx";
import Footer from "../../component/Footer.jsx";
import Cart from "../../component/Cart.jsx";
import {AllProduct} from "../../store/Provider.jsx";

function ShoppingCart(props) {
    return (
        <AllProduct>
            <div className={'bg-gray-50 '}>
                <div className={'mx-20'}>
                    <Navbar/>
                    <Cart/>
                    <Footer/>
                </div>
            </div>
        </AllProduct>

);
}

export default ShoppingCart;