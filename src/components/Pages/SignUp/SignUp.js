import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import Social from './Social/Social';

const SignUp = () => {
    return (
        <div className='container contaner-box'>
        <div className='row '>
      

         
            <div className='m-auto col-lg-5  col-8 from-box mt-3 mb-5'>
                <h4 className='text-center'>Create a New account</h4>

                <p className='text-center'>Please provide the following details.</p>
     <Form> 
<p className=' input-dst'> Email Address</p>
<Form.Control type="email"  placeholder="email" name='email' />

<p className='m-0 pt-2 pb-2 input-dst'>New Password </p>
<Form.Control type="password" placeholder="New Password" />

<p className='m-0 pt-2 pb-2 input-dst'>Confirm New Password </p>
<Form.Control type="password" placeholder="Confirm New Password" />
<br/>

<Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
              SIGNUP
          </Button>
          <p className='text-center'>OR</p>
          <Social></Social>

        


        
<p className='text-center mb-5'>Don't have an account? <small><a href="#">login</a></small></p>
          
      </Form>
      </div>
      </div>
      </div>
    );
};

export default SignUp;