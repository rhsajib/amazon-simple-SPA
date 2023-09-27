import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const carts = useLoaderData()
    // console.log(carts)

    return (
        <div className='shop-container'>
            <div className='products-container'>

                <h4>Total products: {carts.length}</h4>
                <h1>No orders ????</h1>
                <h1>hjbf</h1>


            </div>
            <div className='cart-container'>
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;