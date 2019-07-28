import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>
                        Welcome to Mama's Restaurant
                    </h2>
                </Jumbotron>
            </Container>
        );
    }
}

export default Home;