
import React, { useState } from 'react';
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
 
    // const [service] = useInventory(inventoryId);
    const [Deliverd ,setDeliverd]=useState('');
    console.log(Deliverd);

   
    // const [quantitys,setquantity] =useState({})
    // console.log(quantitys);

    const url = `http://localhost:5000/inventory/${inventoryId}`;
 
    const {data: services, isLoading,refetch} = useQuery(['order',inventoryId], () => fetch(url,{
        method: 'GET',
        headers:{
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res => res.json()));
      if(isLoading){
         return <Loading></Loading>
      }

    
    const { _id,email,description,name,images,price,supplierName,quantity} =services;
    // const gmail =user?.email;
    console.log(email);
    console.log(_id);
    const HandaleDeliverd =() => {

        const quantitys = quantity => quantity - 1;
        setDeliverd(quantitys)
        if(quantitys > 1 ){
          
        }
        
    }
         
     

  
                
    const handlereview = event => { 
        event.preventDefault();

        const quantitys = {
            
            quantity:event.target.quantity.value,
        
        }
        console.log(quantitys);
         
        const url = `http://localhost:5000/update/${email}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',},
            body: JSON.stringify(quantitys)
        })
     
        .then(res =>res.json())
        .then(data =>{
            if(data){
                toast.success('Sucessfully updated quantity ');
                console.log("sucessfully updated your ",data);
                event.target.reset();
                refetch()
             
              
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
              <br/>
              <input className=" btn btn-dark" type="submit" value="Update"/>

              
     </form>
                    

                </div>


            </div>
        
       
        </div>
    );
};

export default Inventory;