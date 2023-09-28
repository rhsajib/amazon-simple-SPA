import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
    const loadedCart = useLoaderData();
    const [carts, setCarts] = useState(loadedCart);

    const handleRemoveFromCart = (id) => {
        // Step 1: handle client side
        const remainingCarts = carts.filter((product) => product.id !== id);
        setCarts(remainingCarts);

        // Step 2: handle database side
        removeFromDb(id);
    };

    const handleClearCart = () => {
        // handle client side
        setCarts([]);

        // handle database side
        deleteShoppingCart();
    };

    console.log(carts.length);

    return (
        <div className="shop-container">
            <div className="review-container">
                {carts.length === 0 ? (
                    <h2>Your cart is empty.</h2>
                ) : (
                    carts.map((product) => (
                        <ReviewItems
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    ))
                )}
            </div>
            <div className="cart-container">
                <Cart cart={carts} handleClearCart={handleClearCart}>
                    {/* ei part ta Cart component er pet (belly) represent kore */}

                    {/* Cart er peter moddhe ja ja ase ta oi Cart component er 
                        children hishabe destructure kora jay */}
                    <Link className="proceed-link" to={"/checkout"}>
                        <button className="btn-proceed">
                            Proceed Checkout
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
