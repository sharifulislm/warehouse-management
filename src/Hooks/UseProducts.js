import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [islodaing,setLoading]= useState(true)

    useEffect( () =>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setProducts(data)
        })
        
    }, []);

    return [products,islodaing];
};

export default UseProducts;