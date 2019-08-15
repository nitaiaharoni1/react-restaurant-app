import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { IoMdClose } from "react-icons/io";
import Image from "react-bootstrap/Image";
import CustomButtonGroup from "../components/CustomButtonGroup";

class Cart extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Cart' img={home_top} height={300}/>
                <Container className='my-auto py-5'>
                    <Row>
                        <Col className='d-flex' xs={8}>
                            <h4 className='text-uppercase mr-2 my-auto'>My Cart</h4>
                            <p className='my-auto' style={{fontSize: '1.05em'}}>({0} Products)</p>
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
                                <tr>
                                    <td className='align-middle'><IoMdClose className='my-auto mr-1 pr-1' size='1.5em'/></td>
                                    <td className='align-middle'>
                                        <Image style={{height: 50}}
                                               src="https://rasamalaysia.com/wp-content/uploads/2015/03/fried_spring_rolls_thumb.jpg" rounded/>
                                    </td>
                                    <td className='align-middle'>Fried Spring Rolls</td>
                                    <td className='align-middle'>$2.95</td>
                                    <td className='align-middle'><CustomButtonGroup/></td>
                                    <td className='align-middle'>$2.95</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={1}/>
                        <Col>
                            <Table responsive>
                                <tbody>

                                <tr>
                                    <td>
                                        Current Price
                                    </td>
                                    <td>
                                        $2.95
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Delivery
                                    </td>
                                    <td>
                                        $3.50
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        Total
                                    </th>
                                    <th>
                                        $6.45
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

export default Cart;