/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;  // option 1
    // const {cart} = props;  //option 2

    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }

    const tax  =totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>      {/* fixed to 2 decimal points */}
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;