import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect className='navbar navbar-expand-lg navbar-light my-auto py-2 text-uppercase shadow' bg='white'
                    variant='light' sticky='top'>
                <Navbar.Brand c href="/" style={{paddingLeft: 200}} className='font-weight-bold'>
                    {/*<img src={icon} width="40" height="40" alt="Mama Icon" className='mr-1'/>*/}
                    {'Mama\'s Restaurant'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className='h6 ml-auto mr-5'>
                        <Nav.Link className='my-auto' href="delivery">delivery</Nav.Link>
                        <NavDropdown className='my-auto' title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="menu.lunch">lunch</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="menu.evening">evening</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='my-auto' href="gallery">gallery</Nav.Link>
                        <Nav.Link className='ml-5 my-auto' style={{color: 'inherit'}} href="cart">
                            <Badge className='mr-1' pill variant="warning">{1} </Badge>
                            <FaShoppingCart className='' size={24}/>
                        </Nav.Link>
                    </Nav>

                    <Form className='mr-2' inline>
                        <FormControl type="text" placeholder="Search"/>
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;