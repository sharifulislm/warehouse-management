import React from 'react';
import { Button } from 'react-bootstrap';
import './Social.css';
import { AiFillGoogleCircle } from "react-icons/ai";

const Social = () => {
    return (
        <div className='mb-2'>

<Button variant="socialicon w-50 mx-auto d-block mb-2" type="submit">
          <AiFillGoogleCircle></AiFillGoogleCircle>  Continue
          </Button>
            
        </div>
    );
};

export default Social;