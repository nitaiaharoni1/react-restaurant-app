import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import { Parallax } from 'react-parallax';
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

class ParallaxCustom extends Component {

    render() {
        const displayBtn = this.props.buttonText && (
            <Button className='mt-5' size="lg" variant="outline-light">{this.props.buttonText}</Button>);

        return (
            <Parallax className='jumbotron text-light text-center' bgImage={this.props.img} strength={400}>
                <div style={{height: this.props.height}}>
                    <Row className='h-100'>
                        <Col className="col-md-12 my-auto">
                            <h1 className='display-3 font-weight-bold text-uppercase'>
                                {this.props.title}
                            </h1>
                            <p className='font-italic' style={{fontSize: 20}}>
                                {this.props.text}
                            </p>
                            {displayBtn}
                        </Col>
                    </Row>
                </div>
            </Parallax>
        );
    }
}

export default ParallaxCustom;