import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DeliveryCard from "./DeliveryCard";

class DeliveryMenu extends Component {
    render() {
        return (
            <Container>
                <h1 className='text-center text-uppercase pt-4'>Appetizers</h1>
                <Row className='pb-3'>
                    {this.props.menuItems.appetizers.map(item => (
                        <DeliveryCard img={item.img} title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase pt-5'>Main Course</h1>
                <Row className='pb-3'>
                    {this.props.menuItems.main.map(item => (
                        <DeliveryCard img={item.img} title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase pt-5'>deserts</h1>
                <Row className='pb-5'>
                    {this.props.menuItems.deserts.map(item => (
                        <DeliveryCard img={item.img} title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default DeliveryMenu;