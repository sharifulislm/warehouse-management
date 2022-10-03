
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css';

const Inventory = () => {
    const {inventoryId} = useParams();
 
    const [item, setItem] = useState({}); 
   const [itemQty, setItemQty] = useState(0); 

   const [deliveredError, setDeliveredError] = useState(""); 
   const [stockError, setStockError] = useState(""); 
    const url =`http://localhost:5000/item/${inventoryId}`;  



    useEffect(() => { 
      fetch(url) 
        .then((res) => res.json()) 
        .then((data) => { 
          setItem(data); 
          setItemQty(data.quantity); 
        }); 
    }, []);     
    const { email,description,name,images,price,supplierName} =item;


    
    const HandaleDeliverd =() => {
      if (itemQty > 0) { 
        const newQty = itemQty - 1; 
        fetch(url, { 
          method: "PUT", 
          headers: { 
            "Content-Type": "application/json", 
          }, 
          body: JSON.stringify({ quantity: newQty }), 
        }) 
          .then((response) => response.json()) 
          .then((data) => { 
            setItemQty(newQty); 
            setDeliveredError(""); 
            setStockError(""); 
            toast.success("Delivered Successfully"); 
        
          }) 
          .catch((error) => { 
            console.error("Error:", error); 
          }); 
      } else { 
        setDeliveredError("Stock Empty!!"); 
        setStockError(""); 
      } 
             
    }          
    const handleAddQuantity = (event) => {
        event.preventDefault();
        const stockNum = event.target.quantity.value; 
        event.target.reset(); 
        if (stockNum > 0) { 
          const newStockNum = itemQty + parseInt(stockNum); 
          fetch(url, { 
            method: "PUT", 
            headers: { 
              "Content-Type": "application/json", 
            }, 
            body: JSON.stringify({ quantity: newStockNum }), 
          }) 
            .then((response) => response.json()) 
            .then((data) => { 
              setItemQty(newStockNum);
              setStockError(""); 
              setDeliveredError(""); 
              toast.success("Stock Successful"); 
            }) 
            .catch((error) => { 
              console.error("Error:", error); 
            }); 
        } else { 
          setStockError("Number of stock can't be Negative or Zero"); 
          setDeliveredError(""); 
        } 
        
        
      };
      


    return (
        <div className='container mt-5 mb-4'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img className='w-100 p-1 rounded' src={images} alt="" />

                </div>
                <div className='col-12 col-lg-6 p2'>
                    <h3>{name} </h3>
                    <p> {description}</p>
                  
                    <h6>Price: {price}</h6>
                    <h6>Supplier : {supplierName}</h6>
                    <h4>quantity: {itemQty} </h4>
                    <div>
                     <button onClick={HandaleDeliverd}  style={{background:'#03ab4f'}}>Deliverd</button>  <Link className='btn-manag' style={{background: '#04366b'}} to='/ManageInventory'>  Manage Inventories</Link>
                    </div>
                    <br/>
               
                   <form className='m-auto mx-auto text-center' onSubmit={handleAddQuantity}>
                   <span className='border p-2'>{email}</span> 
                   {deliveredError && ( 
             <p className="text-red-600 mt-4 text-center">{deliveredError}</p> 
           )} 
             {stockError && ( 
               <p className="text-red-600 text-center mt-4">{stockError}</p> 
             )} 
                   <br></br>
                <input className='input  m-auto mb-2 input-bordered w-full ' type="text"name='quantity'  />
                {/* <input className='w-100 mb-2' onChange={(e)=> {setQuantitys(e.target.value)}} type="number" name="quantity"/> */}
              <br/>
              <input className=" btn btn-dark" type="submit" value="Update"/>

              
     </form>
                    

                </div>


            </div>
        
       
        </div>
    );
};

export default Inventory;