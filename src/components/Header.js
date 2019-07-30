import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import icon from '../assets/mama-icon.png'
import Badge from "react-bootstrap/Badge";

class Header extends Component {

    render() {
        return (
            <Navbar collapseOnSelect className='navbar navbar-expand-lg navbar-light py-2 text-capitalize' bg='light'
                    variant='light' sticky='top'>
                <Navbar.Brand href="/" className='ml-5'>
                    <img
                        src={icon}
                        width="40"
                        height="40"
                        alt="Mama Icon"
                    />
                    {'Mama\'s Restaurant'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse className="h6" id="responsive-navbar-nav">
                    <Nav className='ml-auto mr-5'>
                        <Nav.Link href="delivery">delivery</Nav.Link>
                        <NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">morning</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">lunch</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">evening</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="gallery">gallery</Nav.Link>
                        <Nav.Link href="about">about us</Nav.Link>
                        <Nav.Link className='' style={{color: 'inherit'}} href="cart">
                            <Badge pill className='' variant="primary">{1} </Badge>
                            cart
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