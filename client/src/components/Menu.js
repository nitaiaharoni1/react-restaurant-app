import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MenuItem from "./MenuItem";
import {connect} from "react-redux";

class Menu extends Component {
    menuItemRender = (item) => <MenuItem title={item.title}
                                         price={item.price} description={item.description}/>;

    render() {
        return (
            <Container className='pb-4' style={{background: 'dark'}}>
                <h1 className=''>Appetizers</h1>
                <Row className='my-4'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal === 'appetizer') ? this.menuItemRender(item) : null
                    )}
                </Row>

                <Row/>

                <h1 className='mt-4'>Main Course</h1>
                <Row className='my-4'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal === 'main') ? this.menuItemRender(item) : null
                    )}
                </Row>

                <Row/>

                <h1 className=''>deserts</h1>
                <Row className='my-4'>
                    {Object.values(this.props.items).map(item =>
                        (item.meal === 'desert') ? this.menuItemRender(item) : null
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