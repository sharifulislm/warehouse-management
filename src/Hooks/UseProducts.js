import  { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('https://mighty-badlands-12872.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
        
    }, []);

    return [products,setProducts];
};

export default UseProducts;