import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";

class Footer extends Component {
    render() {
        return (
            <Jumbotron className='m-auto text-left text-light h-100 bg-dark' style={{height: 150, fontSize: 20}}>
                <Row className='pl-5 text-uppercase'>
                    <Col xs={1}/>
                    <Col xs={8} className='border-right'>
                        <p>LOCATIONS</p>
                    </Col>
                    <Col>
                        <p>Hours</p>
                    </Col>
                </Row>
                <Row className='pl-5 text-capitalize'>
                    <Col xs={1}/>

                    <Col xs={2}>
                        <p className='w-75'>Brooklyn
                            376 Fake Street
                            Brooklyn, NY — 11231
                            (718) 555-1234
                        </p>
                    </Col>
                    <Col xs={2}>
                        <p className='w-75'>Queens
                            47-33 Fake Street
                            Long Island City, NY — 11101
                            (347) 555-1234</p>
                    </Col>
                    <Col xs={2}>
                        <p className='w-75'>Food Truck
                            25 Fake Street
                            New York, NY — 10003
                            (917) 555-1234</p>
                    </Col>
                    <Col xs={2} className='border-right'>
                        <p className='w-75'>New Place
                            14 New Street
                            New Jersy, WD — 20587
                            (923) 666-1234</p>
                    </Col>

                    <Col xs={3}>
                        <p>Monday — Thursday
                            <p>8am — 11pm </p>
                        </p>

                        <p>
                            Friday — Sunday
                            <p>11am — 11pm</p>
                        </p>
                    </Col>

                </Row>
            </Jumbotron>
        );
    }
}

export default Footer;