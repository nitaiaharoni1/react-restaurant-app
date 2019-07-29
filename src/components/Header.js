import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import icon from '../assets/mama-icon.jpg'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className='py-3' bg="light" variant="light" sticky="top">
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt="Mama Icon"
                    />
                    {'Mama\'s Restaurant'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="delivery">Delivery</Nav.Link>
                        <NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Morning</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lunch</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Evening</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="gallery">Gallery</Nav.Link>
                        <Nav.Link href="about">About Us</Nav.Link>
                    </Nav>
                    <Nav.Link href="cart">My Orders</Nav.Link>
                    <Form inline className="mr">
                        <FormControl type="text" placeholder="Search" className="mr-auto"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;