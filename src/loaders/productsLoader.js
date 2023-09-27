const productsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    return products;
}

// const 

export default productsLoader;