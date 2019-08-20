import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DeliveryCard from "./DeliveryCard";
import { connect } from "react-redux";

class DeliveryMenu extends Component {
    cardRender = (title) => <DeliveryCard img={this.props.items[title].img} title={this.props.items[title].title}
                                          price={this.props.items[title].price} description={this.props.items[title].description}
                                          num={this.props.items[title].num}/>;

    render() {
        return (
            <Container>
                <h1 className='text-center text-uppercase pt-4'>Appetizers</h1>
                <Row className='pb-3'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'appetizer') ? this.cardRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase pt-5'>Main Course</h1>
                <Row className='pb-3'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'main') ? this.cardRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase pt-5'>deserts</h1>
                <Row className='pb-5'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'desert') ? this.cardRender(title) : null
                    )}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
};

export default connect(mapStateToProps)(DeliveryMenu);