import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import HoverPopup from './HoverPopup';
import { connect } from "react-redux";

class Header extends Component {
    render() {
        return (
            <Navbar inline collapseOnSelect className='my-auto py-2 text-uppercase shadow' expand="lg" bg="white" sticky='top'>
                <Navbar.Brand href="/" className='ml-sm-5 pl-sm-5 font-weight-bold'>
                    Mama's Restaurant
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="h6 mr-5">
                        <Nav.Link className='my-auto' href="delivery">Deliveries</Nav.Link>
                        <NavDropdown className='my-auto' title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="menu.lunch">lunch</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="menu.evening">evening</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='my-auto' href="gallery">gallery</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto mr-sm-5 pr-sm-5">
                        <Nav.Link className='my-auto text-dark'>
                            <HoverPopup/>
                        </Nav.Link>
                        <Form className='my-auto ml-lg-2 mr-lg-4' inline>
                            <FormControl style={{maxWidth: '14em'}} type="text" placeholder="Search"/>
                            <Button variant="outline-dark">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;