import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    


    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        if (storedCart) {
            
            // step 1: get id
            for(const id in storedCart){
                
                // step 2: get product from products by using id
                const addedProduct = products.find(product => product.id == id);
                
                if (addedProduct) {
                    
                    // console.log(addedProduct)
        
                    // step 3: get quantity of product
                    const quantity = storedCart[id];
        
                    //step 4: add quantity to the product
                    addedProduct.quantity = quantity;

                    // step 5: add the added product to saved cart
                    savedCart.push(addedProduct)
                }
            }
            
            // step 5: set cart
            setCart(savedCart)
        }

    }, [products]);
    

    const handleAddToCart = (product) => {
        // React er state gula immutable. tai amra push pop use korte pari na
        // tai new array create kori


        // const newCart = [...cart, product];
        // setCart(newCart)
        // addToDb(product.id)


        let newCart = [];
        const exists = cart.find(pd => pd.id == product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
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