import React, { Component } from 'react';
import { Col, Row } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

class Footer extends Component {
    render() {
        return (
            <Jumbotron className='m-auto text-left text-light bg-dark h-auto'>
                <Container>
                    <Row className='px-md-5'>
                        <Col xs={6} md={7} lg={9} className='border-right'>
                            <p className='text-uppercase'>LOCATIONS</p>
                            <Row className='text-capitalize'>
                                <Col lg={3}>
                                    <p>Brooklyn
                                        376 Fake Street
                                        Brooklyn, NY — 11231
                                        (718) 555-1234
                                    </p>
                                </Col>
                                <Col lg={3}>
                                    <p>Queens
                                        47-33 Fake Street
                                        Long Island City, NY — 11101
                                        (347) 555-1234</p>
                                </Col>
                                <Col lg={3}>
                                    <p>Food Truck
                                        25 Fake Street
                                        New York, NY — 10003
                                        (917) 555-1234</p>
                                </Col>
                                <Col lg={3}>
                                    <p>New Place
                                        14 New Street
                                        New Jersy, WD — 20587
                                        (923) 666-1234</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <p className='text-uppercase'>Hours</p>
                            <Col>
                                <p>Monday — Thursday
                                    <p>8am — 11pm </p>
                                </p>

                                <p>
                                    Friday — Sunday
                                    <p>11am — 11pm</p>
                                </p>
                            </Col>
                        </Col>
                    </Row>
                </Container>

            </Jumbotron>
        );
    }
}

export default Footer;