const productsLoader = async () => {
    const loadedProducts = await fetch("products.json");
    const products = await loadedProducts.json();
    // console.log(products, typeof products);
    return products;
};

export default productsLoader;
