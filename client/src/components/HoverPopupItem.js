import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { IoMdClose } from "react-icons/io";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class HoverPopupItem extends Component {
    render() {
        return (
            <Row className='my-2 py-2 border-bottom border-top'>
                <Col xs={4}>
                    <Image style={{height: 100}} src="https://rasamalaysia.com/wp-content/uploads/2015/03/fried_spring_rolls_thumb.jpg" rounded/>
                </Col>
                <Col xs={1}/>

                <Col xs={5}>
                    <Row>
                        <Col>
                            <h6 className='my-auto'>Title</h6>
                        </Col>

                        <Col xs={4}>
                            <IoMdClose className='my-auto mr-1 pr-1' size='1.5em'/>
                        </Col>
                    </Row>

                    <Row className='mt-1'>
                        <Col>
                            <h6 className='my-auto text-muted'>$5.75</h6>
                        </Col>
                        <Col xs={4}/>
                    </Row>

                    <Row className='mt-1 ml-0'>
                        <ButtonGroup variant="outline-dark">
                            <Button variant="outline-dark" onClick={this.handleClickMinus}> - </Button>
                            <Button className='disabled' variant="outline-dark">2</Button>
                            <Button className='py-2' variant="outline-dark" onClick={this.handleClickPlus}> + </Button>
                        </ButtonGroup>
                    </Row>
                </Col>
            </Row>

        );
    }
}

export default HoverPopupItem;