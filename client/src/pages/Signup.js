import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {userSignup} from "../redux/actions/userActions";
import {connect} from "react-redux";
import {postSignup} from "../utils/api";

class Signup extends Component {
    state = {
        agree: false,
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        houseNum: '',
        email: '',
        password: '',
    };

    validateForm() {
        return !(this.state.agree && this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.address.length > 0 && this.state.city.length > 0 && this.state.country.length > 0 && this.state.houseNum.length > 0 && this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleCheckbox = e => {
        this.setState({
            agree: e.target.checked
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.setState({email: this.state.email.toLowerCase()});
        let res = await postSignup(this.state);
        if (res) {
            this.props.userSignup(this.state);
            this.props.history.push('');
        }
    };

    render() {
        return (
            <React.Fragment>
                <Container className="my-5 pb-3 Signup">
                    <h2 className='text-uppercase text-center font-weight-bold'>Signup</h2>
                    <Form onSubmit={this.handleSubmit} className='my-4'>
                        <Form.Row>
                            <Form.Group as={Col} controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={this.handleChange} autoFocus placeholder="First Name" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={this.handleChange} placeholder="Last Name" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={this.handleChange} type='email' placeholder="Email" required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.handleChange} type='password' placeholder="Password" required/>
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={this.handleChange} placeholder="1234 Main St" required/>
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="country">
                                <Form.Label>Country</Form.Label>
                                <Form.Control onChange={this.handleChange} as="select" required>
                                    <option disabled selected>Choose...</option>
                                    <option>Israel</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control onChange={this.handleChange} placeholder="City" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="houseNum">
                                <Form.Label>House Number</Form.Label>
                                <Form.Control onChange={this.handleChange} type='number' placeholder="House Number" required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="zip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control onChange={this.handleChange} type='number' placeholder="Zip" required/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group className='d-flex justify-content-center'>
                            <Form.Check onChange={this.handleCheckbox} id="checkbox" type="checkbox" required/>
                            <label>I agree to
                                <Link to='terms'> terms of service</Link>
                            </label>
                        </Form.Group>

                        <Button block variant="warning" type="submit" disabled={this.validateForm()}>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignup: (data) => {
            dispatch(userSignup(data))
        }
    }
};

export default connect(null, mapDispatchToProps)(Signup);