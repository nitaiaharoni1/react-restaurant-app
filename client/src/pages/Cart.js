import React, {Component} from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import CartTableItem from "../components/CartTableItem";
import CustomButtonGroup from "../components/CustomButtonGroup";
import {connect} from "react-redux";
import ScrollArea from "react-scrollbar";
import HoverPopupItem from "../components/HoverPopupItem";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import {Link} from "react-router-dom";
import CartTotals from "../components/CartTotals";

class Cart extends Component {
    cartTableItemRender = (title) => <CartTableItem round={this._round} img={this.props.items[title].img} title={this.props.items[title].title}
                                                    price={this.props.items[title].price} num={this.props.items[title].num}/>;

    _round = (num) =>{
        return Math.round(num * 100) / 100
    }

    render() {
        const checkout = (this.props.total > 0) ?
            (<Button variant='warning' block>
                Checkout
            </Button>) :
            (<Button variant='warning' disabled block>
                Checkout
            </Button>)
        return (
            <React.Fragment>
                <CustomParallax title='Cart' img={home_top} height={300}/>
                <Container className='my-auto py-5'>
                    <Row>
                        <Col xs={12} lg={8}>
                            <div className='d-flex'>
                                <h4 className='text-uppercase mr-2 my-auto'>My Cart</h4>
                                <p className='my-auto'>({this.props.total} Products)</p>
                            </div>
                            <Table className='mt-3' responsive>
                                <thead>
                                <tr className='text-center'>
                                    <th></th>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {Object.keys(this.props.items).map(title =>
                                    (this.props.items[title].num > 0) ? this.cartTableItemRender(title) : null
                                )}
                                </tbody>
                            </Table>
                        </Col>

                        <Col className='ml-lg-5 pl-lg-2 mt-4 mt-lg-0 p-0 m-0' xs={12} lg={3}>
                            <CartTotals totalPrice={this._round(this.props.totalPrice)}/>
                            <Link to='checkout'>
                                {checkout}
                            </Link>
                            <h6 className='mt-3'>
                                WE ACCEPT:
                            </h6>
                            <p>
                                Got a coupon code? Add it in the next step
                            </p>
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

export default connect(mapStateToProps)(Cart)