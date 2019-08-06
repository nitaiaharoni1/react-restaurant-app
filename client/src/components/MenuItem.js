import React, { Component } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
        window.addEventListener("resize", () => {
            this.setState({width: window.innerWidth});
        });
    }

    render() {
        const className = (this.state.width > 992 ? 'border-right' : 'border-bottom') + ' px-md-5 px-4';
        return (
            <Col key={this.props.title} lg={4} className={className}>
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