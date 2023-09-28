import React from "react";
import "./ReviewItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItems = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;

    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div className="review-detail">
                <p className="product-title">{name}</p>
                <p>
                    Price: <span className="orange-text">${price}</span>
                </p>
                <p>
                    Order Quantity:{" "}
                    <span className="orange-text">{quantity}</span>
                </p>
                <p></p>
            </div>
            <button
                className="btn-delete"
                onClick={() => handleRemoveFromCart(id)}
            >
                <FontAwesomeIcon className="icon-delete" icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItems;
