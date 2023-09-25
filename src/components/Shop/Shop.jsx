import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // React er state gula immutable. tai amra push pop use korte pari na
        // tai new array create kori
        const newCart = [...cart, product];
        setCart(newCart)
    }

    

    return (
        <div className='shop-container'>
            <div>
                <h2>Total products: {products.length}</h2>
                <div className='products-container'>
                    
                    {
                        products.map(product => <Product
                                product = {product}
                                key = {product.id}
                                handleAddToCart = {handleAddToCart}
                            ></Product>)
                    }
                    
                </div>
            </div>
            <div className='cart-container'>
                <h3>Order summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;