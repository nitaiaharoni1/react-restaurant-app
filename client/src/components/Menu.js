import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MenuItem from "./MenuItem";
import {connect} from "react-redux";

function Menu(props) {
    const menuItemRender = (item) => <MenuItem title={item.title} price={item.price} description={item.description}/>;

    return (
        <Container className='pb-4' style={{background: 'dark'}}>
            <h1 className=''>Appetizers</h1>
            <Row className='my-4'>
                {Object.values(props.items).map(item =>
                    (item.meal === 'appetizer') && menuItemRender(item)
                )}
            </Row>

            <Row/>

            <h1 className='mt-4'>Main Course</h1>
            <Row className='my-4'>
                {Object.values(props.items).map(item =>
                    (item.meal === 'main') && menuItemRender(item)
                )}
            </Row>

            <Row/>

            <h1 className=''>deserts</h1>
            <Row className='my-4'>
                {Object.values(props.items).map(item =>
                    (item.meal === 'desert') && menuItemRender(item)
                )}
            </Row>
        </Container>
    );
}


const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
    }
};

export default connect(mapStateToProps)(Menu)