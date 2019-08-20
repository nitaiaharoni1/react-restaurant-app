import React, { Component } from 'react';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import HoverPopup from './HoverPopup';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar inline collapseOnSelect className='my-auto py-2 text-uppercase shadow' expand="lg" bg="white" sticky='top'>
                <Navbar.Brand className='nav-link ml-sm-5 pl-sm-5 font-weight-bold'>
                    <Link to='' className='text-dark'>
                        Mama's Restaurant
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="h6 mr-5 text-dark">
                        <Nav.Link className='my-auto'>
                            <Link to='delivery' className='text-secondary'>
                                Deliveries
                            </Link>
                        </Nav.Link>
                        <NavDropdown className='my-auto' title="Menu" id="collasible-nav-dropdown">
                            <Link to='menu.lunch' className='text-secondary ml-3'>
                                lunch
                            </Link>

                            <NavDropdown.Divider/>

                            <Link to='menu.evening' className='text-secondary ml-3'>
                                evening
                            </Link>

                        </NavDropdown>
                        <Nav.Link className='my-auto'>
                            <Link to='gallery' className='text-secondary'>
                                gallery
                            </Link>
                        </Nav.Link>
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