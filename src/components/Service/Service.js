import React, { useEffect, useState } from 'react';
import ProductService from './ProductService';

const Service = () => {
   
    const [service, setService] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setService(data));
    } ,[])

    return (
        <div className='Container'>
            <div className='row d-flex justify-content-center'>
            {
                service.map((services) => <ProductService key={services._id} services={services}></ProductService>)

            }
            </div>
            
            
        </div>
    );
};

export default Service;