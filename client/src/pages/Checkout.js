import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import CartTotals from "../components/CartTotals";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartTableItem from "../components/CartTableItem";

class Checkout extends Component {
    _round = (num) => {
        return Math.round(num * 100) / 100
    }

    cartTableItemRender = (title) => <CartTableItem round={this._round} img={this.props.items[title].img} title={this.props.items[title].title}
                                                    price={this.props.items[title].price} num={this.props.items[title].num}/>;

    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Checkout' img={home_top} height={300}/>
                <Container className='my-auto py-5'>
                    <Row>
                        <Col xs={12} lg={8}>
                                <h4 className='text-uppercase mr-2 my-auto'>My Cart</h4>
                        </Col>

                        <Col className='ml-lg-5 pl-lg-2 mt-4 mt-lg-0 p-0 m-0' xs={12} lg={3}>
                            <CartTotals totalPrice={this._round(this.props.totalPrice)}/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        total: state.cart.total,
        totalPrice: state.cart.totalPrice
    }
};

export default connect(mapStateToProps)(Checkout)
