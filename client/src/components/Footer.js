import React from 'react';
import {Col, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <Jumbotron className='text-left text-light bg-dark mb-0 mt-5 font-footer p-4'>
            <Container>
                <Row>
                    <Col xs={7} sm={8} className='border-right'>
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
                        </Row>

                    </Col>
                    <Col>
                        <Col>
                            <p className='text-uppercase'>Hours</p>
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