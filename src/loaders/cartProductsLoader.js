import { getShoppingCart } from "../utilities/fakedb";
import productsLoader from "./productsLoader";

const cartProductsLoader = async () => {
    // const loadedProducts = await fetch('products.json');
    // const products = await loadedProducts.json();

    const products = await productsLoader();
    // console.log(typeof products, products)

    // if cart data is in database, we have to use async await

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

    // if we need to send two things
    // option 1
    // return [products, savedCart]
    // option 2
    // return {products, savedCart}
    // return {products, cart: savedCart}
    // key = cart. value = savedCart

    return savedCart;
};

export default cartProductsLoader;
