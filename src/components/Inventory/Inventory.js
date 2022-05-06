import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventory from '../../Hooks/useInventory';
import './Inventory.css';

const Inventory = () => {
    const {inventoryId} = useParams();
    const [service] = useInventory(inventoryId);
    const { description,name,images,price,supplierName} =service;

    let quantiy;
    const Handlequantiy = event => {
        event.preventDefault();
        const quantity ={
         quantiy : event.target.quantity.value 
        }
   
        axios.post('http://localhost:5000/quantity',quantity)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your quantity has been increased !!!');
                event.target.reset();
            }
        })
    }


    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img className='w-100 p-1 rounded' src={images} alt="" />

                </div>
                <div className='col-12 col-lg-6 p2'>
                    <h3>{name} </h3>
                    <p> {description}</p>
                  
                    <h6>Price: {price}</h6>
                    <h6>Supplier : {supplierName}</h6>
                    <h4>quantity: {quantiy} </h4>
                    <div>
                        <button style={{background:'#03ab4f'}}>Deliverd</button> <button style={{background: '#04366b'}}> Manage Inventories</button>
                    </div>
                    <br/>
                   <Form onSubmit={Handlequantiy}>
                   <input placeholder='quantity' type="Number" name='quantity' /> 
                   
                   <button style={{background: '#00c7bd'}}> Increase quantity</button>

                   </Form>
                    
                    

                  


                </div>


            </div>
        
       
        </div>
    );
};

export default Inventory;