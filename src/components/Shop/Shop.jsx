import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div className='shop-container'>
            <div>
                <h2>Total products: {products.length}</h2>
                <div className='products-container'>
                    
                    {
                        products.map(product => <Product
                                product={product}
                                key = {product.id}
                            ></Product>)
                    }
                    
                </div>
            </div>
            <div className='cart-container'>
                <h2>Order summary</h2>
            </div>
        </div>
    );
};

export default Shop;