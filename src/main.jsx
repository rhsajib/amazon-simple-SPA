import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login.jsx";
import cartProductsLoader from "./loaders/cartProductsLoader.js";
import productsLoader from "./loaders/productsLoader.js";
import Checkout from "./components/Checkout/Checkout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/shop",
                element: <Shop />,
                loader: productsLoader,
            },
            {
                path: "/orders",
                element: <Orders />,
                loader: cartProductsLoader,
            },
            {
                path: "/inventory",
                element: <Inventory />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/Login",
                element: <Login />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>
);
