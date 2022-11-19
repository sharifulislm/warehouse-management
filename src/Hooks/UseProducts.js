import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([]);
    const [islodaing,setLoading]= useState(true)

    useEffect( () =>{
        fetch('https://mighty-badlands-12872.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setProducts(data)
        })
        
    }, []);

    return [products,islodaing];
};

export default UseProducts;