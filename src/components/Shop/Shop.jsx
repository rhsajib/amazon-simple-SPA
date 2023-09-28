import { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
    addToDb,
    deleteShoppingCart,
    getShoppingCart,
} from "../../utilities/fakedb";
import cartProductsLoader from "../../loaders/cartProductsLoader";
import { Link, useLoaderData } from "react-router-dom";

const Shop = () => {
    const [products, setProducts] = useState([]);

    // process - 1
    // useEffect( () => {
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data)
    //     })
    // }, []);

    // process - 2
    const data = useLoaderData();
    useEffect(() => {
        setProducts(data);
    }, [data]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // step 1: get id
        // loop over object/dictionary use 'in'
        // loop over array use 'of'
        for (const id in storedCart) {
            // step 2: get product from products by using id
            const addedProduct = products.find((product) => product.id === id);

            if (addedProduct) {
                // console.log(addedProduct)

                // step 3: get quantity of product
                const quantity = storedCart[id];

                //step 4: add quantity to the product
                addedProduct.quantity = quantity;

                // step 5: add the added product to saved cart
                savedCart.push(addedProduct);
            }
        }

        // step 5: set cart
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // React er state gula immutable. tai amra push pop use korte pari na
        // tai new array create kori

        // const newCart = [...cart, product];
        // setCart(newCart)
        // addToDb(product.id)

        // Step 1: handle client side
        let newCart = [];
        const exists = cart.find((pd) => pd.id == product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);

        // Step 2: handle database side
        addToDb(product.id);
    };

    const handleClearCart = () => {
        // handle client side
        setCart([]);

        // handle database side
        deleteShoppingCart();
    };

    return (
        <div>
            <h2 className="total-products">
                Total products: {products.length}
            </h2>
            <div className="shop-container">
                <div>
                    <div className="products-container">
                        {products.map((product) => (
                            <Product
                                product={product}
                                key={product.id}
                                handleAddToCart={handleAddToCart}
                            ></Product>
                        ))}
                    </div>
                </div>

                <div className="cart-container">
                    <Cart cart={cart} handleClearCart={handleClearCart}>
                        {/* ei part ta Cart component er pet (belly) represent kore */}

                        {/* Cart er peter moddhe ja ja ase ta oi Cart component er 
                        children hishabe destructure kora jay */}
                        <Link className="proceed-link" to={"/orders"}>
                            <button className="btn-proceed">
                                Review Orders
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
