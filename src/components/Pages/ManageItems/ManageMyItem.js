import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Manageitems from './Manageitems';

const ManageMyItem = () => {
    const [user]= useAuthState(auth);
    const [myitem, setMyitem]=useState([]);

     useEffect(() => {

         const getItem = async() => {
             const email = user.email;
             const url = `http://localhost:5000/userItem?email=${email}`;
             const {data} = await axios.get(url);
             setMyitem(data);
         }
         getItem();

     } ,[user])
    return (
        <div>
             <h1>Your item : {myitem.length}</h1>

             {
                 myitem.map((item) => <div> 

                     <h1>{item.name}</h1>
                 </div>)
             }
            
        </div>
    );
};

export default ManageMyItem;