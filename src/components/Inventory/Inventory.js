
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery } from 'react-query';

// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../Hooks/useInventory';

import Loading from '../Loading/Loading';
// import auth from '../firebase.init';
import './Inventory.css';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [service ,setService]=useState({});
    // const [service,setService] = useInventory(inventoryId);
    // console.log(service.quantity);
    const [Deliverd ,setDeliverd]=useState();
   
    console.log(service);
    // console.log(quantitys);

   
    // const [quantitys,setquantity] =useState({})
    // console.log(quantitys);
useEffect(() => {


 
    const url = `http://localhost:5000/inventory/${inventoryId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));


},[])
    
    const { _id,email,description,name,images,price,supplierName,quantity} =service;
    console.log(email);
    console.log(service);

    
    const HandaleDeliverd =() => {
     
            const fieldQuantity = parseInt(service.quantity);
            const addQuantity = fieldQuantity - 1;
            const updateQuantity = { addQuantity };
            const url = `http://localhost:5000/update/${email}`;
            fetch(url, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(updateQuantity),
            })
              .then((res) => res.json())
              .then((data) => {
                const quantity = updateQuantity.addQuantity;
                const newService = { ...service, quantity };
                setService(newService);
                toast("Your Delivered is successfully");
              });
        
    }
         
     

  
                
    const handlereview = event => { 
        event.preventDefault();
        const OldQuantity = parseInt(service.quantity);
        const inpustQuantity =parseInt(event.target.quantity.value);
        console.log(inpustQuantity);
        const TotalQuantitys = OldQuantity + inpustQuantity;
        const Updatequantitys = {
            TotalQuantitys
        }
        console.log(Updatequantitys);
         
        const url = `http://localhost:5000/update/${email}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',},
            body: JSON.stringify(Updatequantitys)
        })
     
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount> 0){
                const Modifiequantity = Updatequantitys.TotalQuantitys;
                const newQuantity = {...service,Modifiequantity}
                setService(newQuantity);
                toast.success('Sucessfully updated quantity ');
                console.log("sucessfully updated your ",data);
                event.target.reset();
    
                // refetch()
             
             
              
            }
          
    })
        
    }
      


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
                    <h4>quantity: {quantity} </h4>
                    <div>
                     <button onClick={HandaleDeliverd}  style={{background:'#03ab4f'}}>Deliverd</button>  <Link className='btn-manag' style={{background: '#04366b'}} to='/ManageInventory'>  Manage Inventories</Link>
                    </div>
                    <br/>
               
                   <form className='m-auto mx-auto text-center' onSubmit={handlereview}>
                   <span className='border p-2'>{email}</span> 
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