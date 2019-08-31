import React from 'react';
import Button from "react-bootstrap/Button";
import {Parallax} from 'react-parallax';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function CustomParallax(props) {

    const displayBtn = props.buttonText && (
        <Button className='mt-5' size="lg" variant="outline-light">{props.buttonText}</Button>);

    return (
        <Parallax className='jumbotron jumbotron-fluid text-white shadow text-center bg-dark mb-5' bgImage={props.img} strength={400}>
            <Container style={{height: props.height}}>
                <Row className='h-100'>
                    <Col className="m-auto">
                        <h1 className='display-4 font-weight-bold'>
                            {props.title}
                        </h1>
                        <p className='m-auto w-75'>
                            {props.text}
                        </p>
                        {displayBtn}
                    </Col>
                </Row>
            </Container>
        </Parallax>
    );
}