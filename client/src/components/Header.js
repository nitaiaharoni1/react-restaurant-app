import React, {Component} from 'react';
import {Navbar, Nav, FormControl, Button, Form, NavDropdown} from 'react-bootstrap'
import HoverPopup from './HoverPopup';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import {userLogout} from "../redux/actions/userActions";
import { postLogout } from "../utils/api";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleLogout = () => {
        this.props.userLogout();
        postLogout();
    };

    render() {
        const login = (this.props.loggedIn === false) ?
            (<Navbar.Text className='my-auto py-0'>
                <Link to='login' className='mr-md-3'>
                    Login/Signup
                </Link>
            </Navbar.Text>)
            :
            (<Navbar.Text className='my-auto py-0 text-muted my-auto mr-md-3 text-capitalize'>
                Hey, {this.props.firstName}
                <Link onClick={this.handleLogout} className='ml-2 ml-md-5 py-0'>
                    Logout
                </Link>
            </Navbar.Text>);

        return (
            <Navbar inline collapseOnSelect className='my-auto py-2 text-uppercase shadow' expand="lg" bg="white" sticky='top'>
                <Navbar.Brand className='nav-link pl-0 ml-sm-5 pl-sm-5 font-weight-bold'>
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
                        <NavDropdown className='my-auto text-dark' title='MENU' id="collasible-nav-dropdown">
                            <Link to='menu.lunch' className='text-secondary ml-3 mr-4'>
                                lunch
                            </Link>

                            <NavDropdown.Divider/>

                            <Link to='menu.evening' className='text-secondary ml-3 mr-4'>
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
                        {login}
                        <Nav.Link className='my-auto text-dark mr-sm-5 pr-sm-5'>
                            <HoverPopup/>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
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