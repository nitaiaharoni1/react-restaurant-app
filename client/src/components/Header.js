import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
class Header extends Component {

    render() {
        return (
            <Navbar inline collapseOnSelect className='my-auto py-2 text-uppercase shadow' expand="lg" bg="white" sticky='top'>
                <Navbar.Brand c href="/" className='pl-sm-5 font-weight-bold'>
                    Mama's Restaurant
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="h6 ml-auto mr-5">
                        <Nav.Link className='my-auto' href="delivery">delivery</Nav.Link>
                        <NavDropdown className='my-auto' title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="menu.lunch">lunch</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="menu.evening">evening</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='my-auto' href="gallery">gallery</Nav.Link>
                        <Nav.Link className='ml-lg-3 my-auto text-dark' href="cart">
                            <FaShoppingCart size='1.5em'/>
                            <Badge className='ml-1' pill variant="warning">{1} </Badge>
                        </Nav.Link>
                    </Nav>

                    <Form className='mr-2 mb-auto' inline>
                        <FormControl style={{maxWidth: '10em'}} type="text" placeholder="Search"/>
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;