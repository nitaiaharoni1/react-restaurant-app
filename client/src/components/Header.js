import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import HoverPopup from './HoverPopup';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/userActions";
import { postLogout } from "../utils/api";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleLogout = () => {
        this.handleCollapse();
        this.props.userLogout();
        postLogout();
    };

    handleCollapse = async (e) => {
        try {
            if (window.innerWidth < 1200) {
                let toggle = await document.getElementsByClassName('navbar-toggler')[0]
                toggle.click()
            }
        } catch (e) {

        }
    };

    render() {
        const login = (this.props.loggedIn === false) ?
            (<Navbar.Text>
                <Link onClick={this.handleCollapse} to='login' className='mr-md-3'>
                    Login/Signup
                </Link>
            </Navbar.Text>)
            :
            (<Navbar.Text>
                Hey, {this.props.firstName}
                <Link onClick={this.handleLogout} className='ml-2 ml-md-5'>
                    Logout
                </Link>
            </Navbar.Text>);

        return (
            <Navbar inline collapseOnSelect className='my-auto text-uppercase shadow py-1' expand="lg" bg="white" sticky='top'>
                <Navbar.Brand className='nav-link pl-0 ml-md-5 pl-md-5 font-weight-bold'>
                    <Link to='' className='text-dark'>
                        Mama's Restaurant
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="h6 text-dark w-100">
                        <Nav.Link className='my-auto'>
                            <Link to='delivery' onClick={this.handleCollapse} className='text-secondary'>
                                Deliveries
                            </Link>
                        </Nav.Link>
                        <NavDropdown className='my-auto text-dark' title='MENU' id="collapsible-nav-dropdown">
                            <Link to='menu.lunch' onClick={this.handleCollapse} className='text-secondary ml-3 mr-4'>
                                lunch
                            </Link>

                            <NavDropdown.Divider/>

                            <Link to='menu.evening' onClick={this.handleCollapse} className='text-secondary ml-3 mr-4'>
                                evening
                            </Link>

                        </NavDropdown>
                        <Nav.Link className='my-auto'>
                            <Link to='gallery' onClick={this.handleCollapse} className='text-secondary'>
                                gallery
                            </Link>
                        </Nav.Link>

                        {this.props.loggedIn && this.props.email === 'admin' && <Nav.Link className='my-auto'>
                            <Link to='admin' onClick={this.handleCollapse} className='text-secondary'>
                                Admin
                            </Link>
                        </Nav.Link>}
                        {window.innerWidth < 1200 ?
                            <div className='position-absolute sticky-top align-self-end navbar-text text-capitalize text-muted py-2 my-1'>
                                {login}
                            </div>
                            :
                            <div className='ml-md-auto mr-md-3 my-auto navbar-text text-capitalize text-muted '>
                                {login}
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto mr-sm-5 pr-sm-5 my-0">
                    <Nav.Link className='my-auto text-dark mr-sm-5 pr-sm-5 py-1'>
                        <HoverPopup/>
                    </Nav.Link>
                </Nav>

                <Navbar.Toggle className='ml-2'/>
            </Navbar>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        email: state.user.email,
        firstName: state.user.firstName,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => {
            dispatch(userLogout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)