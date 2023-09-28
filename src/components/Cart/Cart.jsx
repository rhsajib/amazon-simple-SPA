import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
    // 'children' diye bujhay, Cart tag jekhane use kora hoise
    // shekhane er peter moddhe ja ase
     
    // const cart = props.cart;  // option 1
    // const {cart} = props;  //option 2

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

        // if (product.quantity) {
        //     totalPrice = totalPrice + product.price * product.quantity;
        //     totalShipping = totalShipping + product.shipping * product.quantity;
        //     quantity = quantity + product.quantity
        // }
        // else{
        //     totalPrice = totalPrice + product.price
        //     totalShipping = totalShipping + product.shipping
        //     quantity = quantity + 1
        // }
    }

    const tax = (totalPrice * 7) / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className="cart">
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p> {/* fixed to 2 decimal points */}
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={handleClearCart} className="btn-clear-cart">
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
