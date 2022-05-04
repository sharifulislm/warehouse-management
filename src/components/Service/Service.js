import React, { useEffect, useState } from 'react';

const Service = () => {
   
    const [service, setService] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data));
    } ,[])

    return (
        <div>
            
            
        </div>
    );
};

export default Service;