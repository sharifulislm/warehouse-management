import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
    return (
      <>
      <Navbar className='navbar-box' collapseOnSelect expand="lg" sticky='top' bg="" variant="dark">
<Container>
<Navbar.Brand as={Link}to ="/"><img height={30} src='' alt="" />UsedStoreParts </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
  <Nav.Link as={Link}to ="/">Home</Nav.Link>

  <Nav.Link as={Link}to="Service">Services</Nav.Link>
  <Nav.Link as={Link}to="ManageInventory">Manage item</Nav.Link>




</Nav>

<Nav>
<NavDropdown title="inventory" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
</Nav>
<Nav>

  
                             
{/* <Nav.Link as={Link}to="Login">Login</Nav.Link>
<Nav.Link as={Link}to="SignUp">Signup
</Nav.Link> */}

  {
    user && <>
    <Nav.Link as={Link}to="AddItem">  AddItem</Nav.Link>
    </>
  }



                        
                      { 
                      user 
                      
                      ?      
                            <Nav.Link onClick={handleSignOut}>
                            Sign out
                        </Nav.Link> 
                      
                      
                        :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                           }
                        
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </>
    );
};

export default Header;