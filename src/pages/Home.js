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
                <ParallaxCustom title='home cuisine' text="Voted IDC's Best Thai Restaurant" img={top_home}
                                height={800}/>

                <Container style={{height: 400}}>
                    <Row className='h-100'>
                        <Col className="m-auto">
                            <h2 className='text-uppercase'>a destination</h2>
                            <p className='m-auto' style={{fontSize: 20, maxWidth: 500}}>Praesent commodo
                                cursus magna, vel scelerisque
                                nisl consectetur et. Vivamus sagittis
                                lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis
                                ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <ParallaxCustom title='eat together'
                                text='Every plate achieves that elusive, cuisine-defining balance of sweet, salty, and sour — even dessert.'
                                img={sitting_home} buttonText='Button' height={600}/>

                <Container className='pt-5' style={{height: 600}}>
                    <Row className='h-50'>
                        <Col className="m-auto">
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

                    <h2>A DESTINATION</h2>
                    <Row className='text-left m-auto' style={{fontSize: 15, maxWidth: 1000, color: 'grey'}}>
                        <Col>
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

                        <Col>
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
            </div>
        );
    }
}

export default Home;