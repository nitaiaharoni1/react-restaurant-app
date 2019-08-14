import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default class DeliveryCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }
    }

    handleClickPlus = () => {
        this.setState({num: ++this.state.num});
    };

    handleClickMinus = () => {
        this.setState((state) => {
            if (state.num > 0) {
                return {num: --this.state.num}
            }
        });
    }

    render() {
        const height = window.innerHeight < 1200 ? '13em' : '18em';
        const addCartElement =
            <Button className='py-2' variant="outline-dark" onClick={this.handleClickPlus}>
                Add to Cart
            </Button>
        const plusMinusElement =
            <ButtonGroup variant="outline-dark">
                <Button variant="outline-dark" onClick={this.handleClickMinus}> - </Button>
                <Button className='disabled' variant="outline-dark"> {this.state.num}</Button>
                <Button className='py-2' variant="outline-dark" onClick={this.handleClickPlus}> + </Button>
            </ButtonGroup>
        const button = (this.state.num === 0) ? addCartElement : plusMinusElement;
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
                    {button}

                    <Card.Img variant="top" style={{objectFit: 'cover', height: height}} src={this.props.img}/>

                </Card>
            </Col>
        )
    }
}

