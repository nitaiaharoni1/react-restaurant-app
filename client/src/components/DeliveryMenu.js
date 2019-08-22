import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DeliveryCard from "./DeliveryCard";
import {connect} from "react-redux";

class DeliveryMenu extends Component {
    cardRender = (item) => <DeliveryCard img={item.img} title={item.title} price={item.price} description={item.description} num={item.num}/>;

    render() {
        return (
            <Container>
                <h1 className='pt-4'>Appetizers</h1>
                <Row className='pb-3'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal == 'appetizer') ? this.cardRender(item) : null
                    )}
                </Row>

                <Row/>

                <h1 className='pt-5'>Main Course</h1>
                <Row className='pb-3'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal == 'main') ? this.cardRender(item) : null
                    )}
                </Row>

                <Row/>

                <h1 className='pt-5'>deserts</h1>
                <Row className='pb-5'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal == 'desert') ? this.cardRender(item) : null
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