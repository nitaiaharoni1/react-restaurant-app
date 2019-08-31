import React from 'react';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function CartTotalsCheckout(props) {
        return (
            <div>
                <h4 className='text-uppercase my-auto'>Cart Totals</h4>
                <Card className='mt-3'>
                    <Card.Header className='pl-2 font-weight-bold'>
                        {props.total} Products
                    </Card.Header>
                    <Card.Body className='d-flex justify-content-between p-2 mt-3'>
                        <Card.Text>
                            Products Price
                        </Card.Text>
                        <Card.Text>
                            ${props.totalPrice}
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className='d-flex justify-content-between p-2'>
                        <Card.Text>
                            Delivery
                        </Card.Text>
                        <Card.Text>
                            ${3.50}
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className='d-flex justify-content-between p-2'>
                        <Card.Text>
                            Total
                        </Card.Text>
                        <Card.Text>
                            ${props.totalPrice + 3.50}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={props.handleNewOrder} variant='warning' block disabled={props.disabled}>
                            {props.buttonText}
                        </Button>
                        <hr/>
                        <h6 className='mt-3'>
                            WE ACCEPT:
                            <Image className="img-thumbnail mt-1" src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                                   alt="payment options"/>
                        </h6>
                        <p style={{fontSize: '0.8em'}}>
                            Got a coupon code? Add it in the next step
                        </p>
                    </Card.Footer>
                </Card>

            </div>
        );
}