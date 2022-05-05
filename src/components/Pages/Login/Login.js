import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
      <div className='container contaner-box'>
          <div className='row '>

              {/* <div className='box-from col-lg-6  col-12'> 
              
              </div> */}
              <div className='m-auto col-lg-4  col-8 from-box mt-5 mb-5'>
                  <p className='text-center'>Sign in with your existing account</p>
       <Form> 
  <p className=' input-dst'> Email Address</p>
  <Form.Control type="email"  placeholder="email" name='email' />

  <p className='m-0 pt-2 pb-2 input-dst'>Password    <span><a href="#">Forgot your password?</a></span></p>
  <Form.Control type="password" placeholder="Password" />
 <br/>

  <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
            <p className='text-center'>OR</p>
          
<p className='text-center'>Don't have an account? <small><a href="#">Create Account</a></small></p>
            
        </Form>
        </div>
        </div>
        </div>
    );
};

export default Login;