import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const {user, submitted} = this.state;
        return (
            <React.Fragment>
                <Container className="my-5 pb-3">
                    <h2 className='text-uppercase text-center font-weight-bold'>Signup</h2>
                    <Form className='my-4'>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First Name"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridlastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder="Email"/>
                        </Form.Group>

                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St"/>
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>Israel</option>
                                    <option>United States</option>
                                    <option>United Kingdom</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridHouseNum">
                                <Form.Label>House Number</Form.Label>
                                <Form.Control placeholder="House Number"/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control placeholder="Zip"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group className='d-flex justify-content-center' id="formGridCheckbox">
                            <Form.Check type="checkbox"/>
                            <label>I agree to
                                <Link to='terms'> terms of service</Link>
                            </label>
                        </Form.Group>

                        <Button block variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default Signup;