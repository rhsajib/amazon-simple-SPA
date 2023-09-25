import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
        <div>
            <h2 className='total-products'>Total products: {products.length}</h2>       
            <div className='shop-container'>
                <div>               
                    <div className='products-container'>
                        
                        {
                            products.map(product => <Product
                                    product = {product}
                                    key = {product.id}
                                    handleAddToCart = {handleAddToCart}>
                                    </Product>)
                        }
                        
                    </div>
                </div>

                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;