import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css'

const Orders = () => {
    const carts = useLoaderData()
    // console.log(carts)

    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                carts.map(product => <ReviewItems 
                    key={product.id}
                    product={product}
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