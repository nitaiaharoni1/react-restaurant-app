import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class MenuItem extends Component {
    render() {
        return (
            <Col key={this.props.title} xs={4} className='px-5 border-right'>
                <Row>
                    <h5 className='text-capitalize mr-auto'>{this.props.title}</h5>
                    <h5>${this.props.price}</h5>
                </Row>
                <Row>
                    <p>{this.props.description}</p>
                </Row>
            </Col>
        );
    }
}

export default MenuItem;