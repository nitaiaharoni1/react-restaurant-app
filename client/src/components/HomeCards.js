import React, {Component} from 'react';
import {Card, CardDeck, Col, Container, Row} from "react-bootstrap";
import card_home_1 from "../assets/card_home_1.jpg";
import card_home_2 from "../assets/card_home_2.jpg";
import card_home_3 from "../assets/card_home_3.jpg";

class HomeCards extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <Row>
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

            </Container>
        );
    }
}

export default HomeCards;