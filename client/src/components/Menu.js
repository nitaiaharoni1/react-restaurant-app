import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MenuItem from "./MenuItem";
import {connect} from "react-redux";
import DeliveryCard from "./DeliveryCard";

class Menu extends Component {
    menuItemRender = (title) => <MenuItem title={this.props.items[title].title}
                                          price={this.props.items[title].price} description={this.props.items[title].description}/>

    render() {
        return (
            <Container className='my-5'>
                <h1 className='text-center text-uppercase'>Appetizers</h1>
                <Row className='mt-4 pb-4'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'appetizers') ? this.menuItemRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase mt-4'>Main Course</h1>
                <Row className='mt-4 pb-4'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'main') ? this.menuItemRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase'>deserts</h1>
                <Row className='mt-4 pb-4'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'desert') ? this.menuItemRender(title) : null
                    )}
                </Row>
            </Container>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
    }
};

export default connect(mapStateToProps)(Menu)