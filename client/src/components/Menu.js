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
            <Container className='my-5 pb-4' style={{background: 'dark'}}>
                <h1 className=''>Appetizers</h1>
                <Row className='my-4'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'appetizer') ? this.menuItemRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className='mt-4'>Main Course</h1>
                <Row className='my-4'>
                    {Object.keys(this.props.items).map(title =>
                        (this.props.items[title].meal == 'main') ? this.menuItemRender(title) : null
                    )}
                </Row>

                <Row/>

                <h1 className=''>deserts</h1>
                <Row className='my-4'>
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