import React, { Component } from 'react';
import { Jumbotron, Container} from "react-bootstrap";

class Error extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>
                        404 Page Not Found
                    </h2>
                </Jumbotron>
            </Container>
        );
    }
}

export default Error;