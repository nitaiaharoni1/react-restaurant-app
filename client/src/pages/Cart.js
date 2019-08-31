import React from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import CartTableItem from "../components/CartTableItem";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import CartTotalsCart from "../components/CartTotalsCart";
import {round} from "../utils/functions";

function Cart(props) {
    const cartTableItemRender = (title) => <CartTableItem img={props.items[title].img} title={props.items[title].title}
                                                          price={props.items[title].price} num={props.items[title].num}/>;

    const full = <Row>
        <Col xs={12} lg={8}>
            <div className='d-flex'>
                <h4 className='text-uppercase mr-2 my-auto'>My Cart</h4>
                <p className='my-auto'>({props.total} Products)</p>
            </div>
            <Table className='mt-3' responsive>
                <thead>
                <tr className='text-center'>
                    <th/>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.items).map(title =>
                    (props.items[title].num > 0) && cartTableItemRender(title)
                )}
                </tbody>
            </Table>
        </Col>

        <Col className='ml-lg-5 pl-lg-2 mt-4 mt-lg-0' xs={12} lg={3}>
            <CartTotalsCart disabled={false} buttonText='Checkout' total={props.total} totalPrice={round(props.totalPrice)}/>
        </Col>
    </Row>;
    const empty = <div className='text-center'>
        <h2>
            Your cart is currently empty...
        </h2>
        <Link to='delivery'>
            <Button variant='warning' className='mt-4'>
                Back to Deliveries
            </Button>
        </Link>
    </div>;

    return (
        <React.Fragment>
            <CustomParallax title='Cart' img={home_top} height={300}/>
            <Container className='my-auto Cart'>
                {props.total > 0 ? (full) : (empty)}
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        total: state.cart.total,
        totalPrice: state.cart.totalPrice
    }
};

export default connect(mapStateToProps)(Cart)