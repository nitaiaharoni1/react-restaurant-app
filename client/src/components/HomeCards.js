import React, {Component} from 'react';
import {Card, CardDeck, Col, Container, Row} from "react-bootstrap";
import card_home_1 from "../assets/card_home_1.jpg";
import card_home_2 from "../assets/card_home_2.jpg";
import card_home_3 from "../assets/card_home_3.jpg";

class HomeCards extends Component {
    render() {
        return (
            <Container className="text-center m-auto">
                <Row className="pt-2">
                    <Col>
                        <CardDeck>
                            <Card className='shadow'>
                                <Card.Img src={card_home_1}/>
                            </Card>
                            <Card className='shadow'>
                                <Card.Img src={card_home_2}/>
                            </Card>
                            <Card className='shadow'>
                                <Card.Img src={card_home_3}/>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col>
                        <h2>A DESTINATION</h2>
                    </Col>
                </Row>
                <Row className='mt-3 text-left' style={{fontSize: '1em', height: '16em'}}>
                    <Col className='d-none d-md-block' xs={1}/>
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
        );
    }
}

export default HomeCards;