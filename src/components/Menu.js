import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MenuItem from "./MenuItem";

class Menu extends Component {
    render() {
        return (
            <Container className='my-5'>
                <h1 className='text-center text-uppercase'>Appetizers</h1>
                <Row className='mt-4 pb-4'>
                    {this.props.menuItems.appetizers.map(item => (
                        <MenuItem title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase mt-4'>Main Course</h1>
                <Row className='mt-4 pb-4'>
                    {this.props.menuItems.main.map(item => (
                        <MenuItem title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>

                <Row/>

                <h1 className='text-center text-uppercase'>deserts</h1>
                <Row className='mt-4 pb-4'>
                    {this.props.menuItems.deserts.map(item => (
                        <MenuItem title={item.title} price={item.price} description={item.description}/>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Menu;