import axios from 'axios';
import React, { useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';



const Manageitems = () => {
    const [user] = useAuthState(auth);

    const [Images,setImages]=useState("");
    const [supplierName,setsupplierName]=useState("");
    const [Price,setPrice]=useState("");
    const [quantity,setquantity]=useState("");
    const [Description,setDescription]=useState("");


    const handlePlaceOrder = event =>{
        event.preventDefault();
      
        const email = user.email;
        const name = user.displayName;
      
            const myItem = {Images,supplierName,quantity,Description,Price,email,name } ;
            
        
    
        axios.post('http://localhost:5000/manageitem',myItem)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                console.log('Your Item is successfully added')
                toast('Your Item is successfully added  !!!');
                event.target.reset();
               
            }
        })
    }
    return (
        <div className='container mt-4 mb-4'>
   

       <div className='w-80 border p-6 shadow p-3 mb-5 bg-body rounded'>
       <h3 className='text-center mb-1 font-blod'> Please add new item </h3>
     
        <form className='row p-5' onSubmit={handlePlaceOrder}>
<div className='col-6'>

            <span>Your Email</span> 
            <input className='w-100 ' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
         <br/>
         <span>Images url</span> 
            <input className='w-100 ' onChange={(e)=> {setImages(e.target.value)}} type="text"  placeholder='' />
            <br />
            <span>quantity</span> 
            <input className='w-100 ' onChange={(e)=> {setquantity(e.target.value)}} type="number" name="quantity" placeholder='' required />
            <br /></div>
         <div className='col-6'>
         <span>Description</span> 
            <input className='w-100 ' onChange={(e)=> {setDescription(e.target.value)}} type="text" name="Description" placeholder='' required />
            <br />
            <span>Price</span> 
            <input className='w-100 ' onChange={(e)=> {setPrice(e.target.value)}} type="number" name="Price" placeholder='' required />
            <br />
            <span>supplierName</span> 
            <input className='w-100 ' onChange={(e)=> {setsupplierName(e.target.value)}} type="text" name="supplierName" placeholder='' required />
            <br />
         </div>
            <input className='btn text-center m-auto mx-auto w-50 mb-5  mt-4 btn-secondary' type="submit" value="Add you item" />
        </form>

     
      
    </div>
    </div>
    );
};

export default Manageitems;