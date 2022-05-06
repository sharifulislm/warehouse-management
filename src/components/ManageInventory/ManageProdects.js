import React from 'react';
// import './Mangeprodects.css';
import { AiFillDelete } from "react-icons/ai";

const ManageProdects = ({services}) => {
    const { _id,description,name,images,price,supplierName,} =services;
    return (
        <div className='review-item'>
        <div>
            <img src={images} alt="" />
        </div>
        <div className="review-item-details-container">
            <div className="review-item-details">
                <p className="product-name" title={description}>
                    { name.length > 20 ? name.slice(0, 20) + '...': name }
                </p>
                <p>Price: <span className='orange-color'>${price}</span></p>
                <p><small>Supplier: {supplierName}</small></p>
                <p><small>Quantity: </small></p>
            </div>
            <div className="delete-container">
                <button  className='delete-button'>
                  <AiFillDelete></AiFillDelete>
                </button>
            </div>
        </div>
    </div>
    );
};

export default ManageProdects;