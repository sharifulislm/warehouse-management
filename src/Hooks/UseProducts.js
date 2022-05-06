import  { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
        
    }, []);

    return [products];
};

export default UseProducts;