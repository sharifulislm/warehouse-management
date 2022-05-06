import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import ManageProdects from './ManageProdects';
import './Mangeprodects.css';

const ManageInventory = () => {
    const [products] =UseProducts()

    return (
        <div className='prodect-contener'>
            
            {
                products.map((services) => <ManageProdects key={services._id} services={services}></ManageProdects>)

            }
        </div>
    );
};

export default ManageInventory;