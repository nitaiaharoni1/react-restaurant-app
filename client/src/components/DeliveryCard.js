import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default class DeliveryCard extends Component {

    render() {
        return (
            //const className = (this.state.width > 992 ? 'border-right' : 'border-bottom') + ' px-md-5 px-4';
            <Col xs={12} sm={6} md={4} lg={3} className='mt-4'>
                <Card className='h-100'>
                    <Card.Body>
                        <Card.Title>
                            <Row>
                                <Col xs={7} className='text-capitalize'>{this.props.title}</Col>
                                <Col className='text-right px-0'>
                                    <Button className='text-center mx-2 my-0 p-0' variant="outline-dark">
                                        <p className='font-weight-bold mx-2 my-0 p-0'>
                                            ${this.props.price}
                                        </p>
                                        <p className='text-muted mx-2 my-0 p-0' style={{fontSize: '0.75em'}}>
                                            add to cart
                                        </p>

                                    </Button>
                                </Col>
                            </Row>
                        </Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src={this.props.img}/>

                </Card>
            </Col>
        )
    }
}

