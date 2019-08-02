import React, {Component} from 'react';
import {Container, CardDeck, Card, Row, Col} from "react-bootstrap";
import ParallaxCustom from '../components/ParallaxCustom'
import top_home from '../assets/top_home.jpg'
import sitting_home from '../assets/sitting_home.jpg'
import kitchen_home from '../assets/kitchen_home.jpg'
import card_home_1 from '../assets/card_home_1.jpg'
import card_home_2 from '../assets/card_home_2.jpg'
import card_home_3 from '../assets/card_home_3.jpg'
import Jumbotron from "react-bootstrap/Jumbotron";

class Home extends Component {
    render() {
        return (
            <div>
                <ParallaxCustom title='home cuisine' text="Voted IDC's Best Thai Restaurant" img={top_home} height={800}/>
                <Container style={{height: 400}}>
                    <Row className='h-100'>
                        <Col className="text-center m-auto">
                            <h2 className='text-uppercase'>a destination</h2>
                            <p className='m-auto' style={{fontSize: 20, maxWidth: 500}}>Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
                                ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <ParallaxCustom title='eat together'
                                text='Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.'
                                img={sitting_home} buttonText='Button' height={600} img={top_home}/>

                <Container className="text-center m-auto" style={{height: 600}}>
                    <Row className="pt-2">
                        <Col>
                            <CardDeck>
                                <Card>
                                    <Card.Img src={card_home_1}/>
                                </Card>
                                <Card>
                                    <Card.Img src={card_home_2}/>
                                </Card>
                                <Card>
                                    <Card.Img src={card_home_3}/>
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <h2>A DESTINATION</h2>
                        </Col>
                    </Row>
                    <Row className='pt-3 text-secondary text-left' style={{fontSize: 15}}>
                        <Col xs={1}/>
                        <Col xs={5}>
                            <p>Praesent commodo cursus magna,
                                Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at
                                lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
                                consectetur est at lobortis. Maecenas faucibus mollis interdum. Nulla vitae elit libero,
                                a pharetra augue. Cras justo odio, dapibus ac facilisis.
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo
                                cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed
                                consectetur.
                            </p>
                        </Col>
                        <Col xs={1}/>

                        <Col xs={5}>
                            <p>Praesent commodo cursus magna,
                                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                                euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.
                                Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit
                                sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Integer posuere
                                erat a ante venenatis dapibus posuere velit luctus sem adipiscing elit.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <ParallaxCustom title='the kitchen' img={kitchen_home} height={800}/>

                <Container className='text-left text-secondary text-uppercase h-100'>
                    <Row style={{height: 350, maxWidth: 2000, fontSize: 18}}>
                        <Col className='mb-auto'>
                            <h2 className='text-dark'>LIZ GRISAITIS</h2>
                            <h5>EXECUTIVE CHEF</h5>
                            <p className='text-lowercase'>Nullam quis risus eget urna mollis ornare vel eu leo.
                                Curabitur blandit tempus porttitor.
                                Curabitur blandit tempus porttitor. Fusce dapibus, tellus ac cursus commodo, tortor
                                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor
                                sit
                                amet, consectetur adipiscing elit.
                            </p>
                        </Col>

                        <Col className='mb-auto'>
                            <h2 className='text-dark'>MATTEO CAPON
                            </h2>
                            <h5>CHEF DE CUISINE </h5>
                            <p className='text-lowercase'>Duis mollis, est non commodo luctus, nisi erat porttitor
                                ligula, eget lacinia odio sem
                                nec elit. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus
                                varius
                                blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Praesent
                                commodo cursus magna, vel scelerisque.
                            </p>
                        </Col>

                        <Col className='mb-auto'>
                            <h2 className='text-dark'>ANGIE WALSH </h2>
                            <h5>PASTRY CHEF </h5>
                            <p className='text-lowercase'>Cras justo odio, dapibus ac facilisis in, egestas eget
                                quam.
                                Maecenas faucibus mollis
                                interdum. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
                                dapibus
                                ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue laoreet rutrum
                                faucibus dolor auctor. Cum sociis natoque penatibus et magnis.</p>
                        </Col>
                    </Row>
                </Container>

                <Jumbotron className='text-left text-light h-100 bg-dark'
                           style={{height: 300, fontSize: 20}}>
                    <Row className='pl-5 text-uppercase'>
                        <Col xs={9}>
                            <p>LOCATIONS</p>
                        </Col>
                        <Col>
                            <p>Hours</p>
                        </Col>
                    </Row>
                    <Row className='pl-5 text-capitalize'>
                        <Col xs={3}>
                            <p className='w-75'>Brooklyn
                                376 Fake Street
                                Brooklyn, NY — 11231
                                (718) 555-1234
                            </p>
                        </Col>
                        <Col xs={3}>
                            <p className='w-75'>Queens
                                47-33 Fake Street
                                Long Island City, NY — 11101
                                (347) 555-1234</p>
                        </Col>
                        <Col xs={3}>
                            <p className='w-75'>Food Truck
                                25 Fake Street
                                New York, NY — 10003
                                (917) 555-1234</p>
                        </Col>

                        <Col>
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
            </div>
        );
    }
}

export default Home;