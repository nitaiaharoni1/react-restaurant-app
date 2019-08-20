import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import CartTableItem from "../components/CartTableItem";
import CustomButtonGroup from "../components/CustomButtonGroup";
import { connect } from "react-redux";
import ScrollArea from "react-scrollbar";
import HoverPopupItem from "../components/HoverPopupItem";

class Cart extends Component {
    cartTableItemRender = (title) => <CartTableItem img={this.props.items[title].img} title={this.props.items[title].title}
                                                    price={this.props.items[title].price} num={this.props.items[title].num}/>;

    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Cart' img={home_top} height={300}/>
                <Container className='my-auto py-5'>
                    <Row>
                        <Col className='d-flex' xs={8}>
                            <h4 className='text-uppercase mr-2 my-auto'>My Cart</h4>
                            <p className='my-auto' style={{fontSize: '1.05em'}}>({this.props.total} Products)</p>
                        </Col>
                        <Col xs={1}/>
                        <Col xs={3}>
                            <h4 className='text-uppercase my-auto'>Total</h4>
                        </Col>
                    </Row>

                    <Row className='pb-5 mb-5 mt-3'>
                        <Col xs={8}>
                            <Table responsive>
                                <thead>
                                <tr>
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
                        <Col xs={1}/>
                        <Col>
                            <Table responsive>
                                <tbody>

                                <tr>
                                    <td>
                                        Products Price
                                    </td>
                                    <td className='text-left'>
                                        ${this.props.totalPrice}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Delivery
                                    </td>
                                    <td className='text-left'>
                                        ${3.50}
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Total
                                    </th>
                                    <th className='text-left'>
                                        ${this.props.totalPrice + 3.50}
                                    </th>
                                </tr>
                                </tbody>
                            </Table>
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