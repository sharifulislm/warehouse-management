import  { useEffect, useState } from 'react';

const useManage = () => {
    const [item, setItem] = useState([]);

    useEffect( () =>{
        fetch('https://mighty-badlands-12872.herokuapp.com/myitem')
        .then(res => res.json())
        .then(data => setItem(data));
        
    }, []);

    return [item,setItem];
};

export default useManage;