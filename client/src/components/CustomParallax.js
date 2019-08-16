import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import {Parallax} from 'react-parallax';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class CustomParallax extends Component {

    render() {
        const displayBtn = this.props.buttonText && (
            <Button className='mt-5' size="lg" variant="outline-light">{this.props.buttonText}</Button>);


        return (
            <Parallax className='jumbotron jumbotron-fluid text-white shadow text-center bg-dark' bgImage={this.props.img} strength={400}>
                <Container style={{height: this.props.height}}>
                    <Row className='h-100'>
                        <Col className="m-auto">
                            <h1 className='display-4 font-weight-bold text-uppercase'>
                                {this.props.title}
                            </h1>
                            <p className='m-auto w-75' style={{fontSize: '1.2em'}}>
                                {this.props.text}
                            </p>
                            {displayBtn}
                        </Col>
                    </Row>
                </Container>
            </Parallax>
        );
    }
}

export default CustomParallax;