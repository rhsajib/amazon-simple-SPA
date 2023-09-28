import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const loadedCart = useLoaderData()
    const [carts, setCarts] = useState(loadedCart)

    const handleRemoveFromCart = id => {
        // Step 1: handle client side
        const remainingCarts = carts.filter(product => product.id !== id);
        setCarts(remainingCarts);

        // Step 2: handle database side
        removeFromDb(id);
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                carts.map(product => <ReviewItems 
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                />)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;