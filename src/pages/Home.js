import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import ParallaxCustom from '../components/ParallaxCustom'
import pic from '../assets/about_img.jpg'
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
    render() {
        return (
            <div className='text-center my-auto justify-content-center'>
                <ParallaxCustom title='Title' text='This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.' img={pic} height={800}/>

                <Container style={{height: 400}}>
                    <Row className='h-100'>
                        <Col className="col-md-12 my-auto">
                            <h2>A DESTINATION</h2>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel
                                augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare
                                vel eu
                                leo. Aenean lacinia bibendum nulla sed consectetur.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <ParallaxCustom title='Title' text='This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.' img={pic} buttonText='Button' height={600}/>

                <Container className='pt-5' style={{height: 600}}>
                    <Row className='h-50'>
                        <Col className="col-md-12 my-auto">
                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160"/>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160"/>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160"/>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>

                    <h2>A DESTINATION</h2>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel
                        augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Aenean lacinia bibendum nulla sed consectetur.
                    </p>
                </Container>
            </div>
        );
    }
}

export default Home;