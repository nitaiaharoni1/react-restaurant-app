import React, { Component } from 'react';
import { Container, CardDeck, Card, Row, Col } from "react-bootstrap";
import ParallaxCustom from '../components/ParallaxCustom'
import top_home from '../assets/top_home.jpg'
import sitting_home from '../assets/sitting_home.jpg'
import kitchen_home from '../assets/kitchen_home.jpg'
import card_home_1 from '../assets/card_home_1.jpg'
import card_home_2 from '../assets/card_home_2.jpg'
import card_home_3 from '../assets/card_home_3.jpg'

class Home extends Component {
    render() {
        return (
            <div className='text-center my-auto justify-content-center'>
                <ParallaxCustom title='Title' text='This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.' img={top_home} height={800}/>

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
                    its parent.' img={sitting_home} buttonText='Button' height={600}/>

                <Container className='pt-5' style={{height: 600}}>
                    <Row className='h-50'>
                        <Col className="col-md-12 my-auto">
                            <CardDeck>
                                <Card>
                                    <Card.Img variant="top" src={card_home_1}/>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card_home_2}/>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={card_home_3}/>
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