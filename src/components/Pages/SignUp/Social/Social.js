import React from 'react';
import { Button } from 'react-bootstrap';
import './Social.css';
import { AiFillGoogleCircle } from "react-icons/ai";
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    console.log(user);
    console.log(loading);
    console.log(error);
    return (
        <div className='mb-2'>

<Button onClick={()=> signInWithGoogle ()} variant="socialicon w-50 mx-auto d-block mb-2" type="submit">
          <AiFillGoogleCircle></AiFillGoogleCircle>  Continue
          </Button>
            
        </div>
    );
};

export default Social;