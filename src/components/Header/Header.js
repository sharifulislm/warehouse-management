import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <>
      <Navbar className='navbar-box' collapseOnSelect expand="lg" sticky='top' bg="" variant="dark">
<Container>
<Navbar.Brand as={Link}to ="/"><img height={30} src='' alt="" />PartsStore </Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
  <Nav.Link as={Link}to ="/">Home</Nav.Link>

  <Nav.Link as={Link}to="Service">Services</Nav.Link>
  <Nav.Link as={Link}to="inventory ">inventory </Nav.Link>




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

  
                             
{/* <Nav.Link as={Link}to="about">About</Nav.Link> */}
                            
                      {/* { 
                      user ?      
                            <Nav.Link onClick={HandleSignOut}>
                            Sign out
                        </Nav.Link>
                        :
                            <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                           } */}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </>
    );
};

export default Header;