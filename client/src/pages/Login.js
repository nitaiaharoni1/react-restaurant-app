import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import {userLogin} from "../redux/actions/userActions";
import {getLogin} from "../utils/api";
import {connect} from "react-redux";
import {Set, Reset} from "../redux/actions/cartActions";

class Login extends Component {
    state = {
        email: '',
        password: '',
        remember: false,
    };

    validateForm() {
        return !(this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleCheckbox = e => {
        this.setState({
            remember: e.target.checked
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let res = await getLogin(this.state.email.toLowerCase(), this.state.password, this.state.remember);
        if (res) {
            this.props.history.push('');
            this.props.userLogin(res.data.user);
            this.props.Reset();
            this.setItemsNum(res.data.currentItems);
        } else {
            this.setState({
                password: '',
                remember: false
            });
        }
    };

    setItemsNum(items) {
        Object.keys(items).forEach((item) => {
                this.props.Set(item, items[item])
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <Container className="mt-5 pt-3 Login">
                    <Row>
                        <Col xs={6} className='border-right'>
                            <h3 className='text-center text-uppercase font-weight-bold'>
                                Login
                            </h3>
                            <Form onSubmit={this.handleSubmit} className='mt-4'>
                                <Form.Group controlId="email">
                                    <Form.Label>Email/Username</Form.Label>
                                    <Form.Control placeholder="Email/Username" autoFocus required value={this.state.email}
                                                  onChange={this.handleChange}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password}
                                                  onChange={this.handleChange} required/>
                                </Form.Group>
                                <Form.Group controlId="remember">
                                    <Form.Check type="checkbox" label="Remember me" onChange={this.handleCheckbox}/>
                                </Form.Group>
                                <Button block variant="dark" type="submit" disabled={this.validateForm()}>
                                    Login
                                </Button>
                            </Form>

                        </Col>

                        <Col xs={6}>
                            <h3 className='text-center text-uppercase font-weight-bold '>
                                New Customer?
                            </h3>
                            <Link to='signup'>
                                <Form.Label/>
                                <Button block variant='warning' bsSize="large" className='mt-4'>
                                    Signup
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data) => {
            dispatch(userLogin(data))
        },
        Set: (title, num) => {
            dispatch(Set(title, num))
        },
        Reset: () => {
            dispatch(Reset())
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);