import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CustomButtonGroup from "./CustomButtonGroup";

export default class DeliveryCard extends Component {

    render() {
        const height = window.innerHeight < 1200 ? '13em' : '18em';

        return (
            <Col xs={12} sm={6} md={4} lg={3} className='mt-4'>
                <Card className='h-100'>
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col xs={7} className='text-capitalize'>{this.props.title}</Col>
                                <Col className='text-right px-0'>
                                    <p className='mx-2 my-0 p-0 text-secondary'>
                                        ${this.props.price}
                                    </p>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Card.Text className='mb-0 pb-0'>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <CustomButtonGroup/>
                    <Card.Img variant="top" style={{objectFit: 'cover', height: height}} src={this.props.img}/>

                </Card>
            </Col>
        )
    }
}

