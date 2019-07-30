import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import icon from '../assets/mama-icon.png'

class Header extends Component {
    state = {
        color: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const color = window.scrollY < 400;
            if (color !== this.state.color) {
                this.setState({'color': color})
            }
        });
    }

    render() {
        return (
            <Navbar collapseOnSelect className='navbar navbar-expand-lg fixed-top navbar-light py-2'
                    bg={this.state.color ? 'transparent' : 'light'}>
                <Navbar.Brand href="/">
                    <img
                        src={icon}
                        width="40"
                        height="40"
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