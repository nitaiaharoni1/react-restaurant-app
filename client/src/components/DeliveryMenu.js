import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DeliveryCard from "./DeliveryCard";
import { connect } from "react-redux";
import {Form, FormControl} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import InputGroup from "react-bootstrap/InputGroup";

class DeliveryMenu extends Component {
    state = {
        search: ''
    };

    handleChange = (e) => {
        this.setState({search: e.target.value.toUpperCase()})
    };


    itemsIterate = (meal) => {
        return Object.values(this.props.items)
            .filter(item =>
                item.meal === meal && (item.title.toUpperCase().includes(this.state.search) || item.description.toUpperCase().includes(this.state.search) || item.price.toUpperCase().includes(this.state.search))
            ).map(item => this.cardRender(item));
    };

    cardRender = (item) => <DeliveryCard img={item.img} title={item.title} price={item.price} description={item.description} num={item.num}/>;

    render() {
        const appetizer = this.itemsIterate('appetizer'),
            main = this.itemsIterate('main'),
            desert = this.itemsIterate('desert');

        return (
            <Container className='Delivery'>
                <Form className='justify-content-center' inline>
                    <InputGroup style={{width: "50%"}}>
                        <FormControl onChange={this.handleChange} type="text" placeholder='Search items'/>
                        <InputGroup.Append>
                            <InputGroup.Text id="inputGroupPrepend">
                                <FaSearch/>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>

                {appetizer.length > 0 &&
                <>
                    <h1 className='pt-5 mx-auto'>Appetizers</h1>
                    <Row className='pb-3'>
                        {appetizer}
                    </Row>
                </>}

                {main.length > 0 &&
                <>
                    <h1 className='pt-5 mx-auto'>Main Course</h1>
                    <Row className='pb-3'>
                        {main}
                    </Row>
                </>}


                {desert.length > 0 &&
                <>
                    <h1 className='pt-5 mx-auto'>Main Course</h1>
                    <Row className='pb-3'>
                        {desert}
                    </Row>
                </>}

                {(desert.length === 0 && main.length === 0 && appetizer.length === 0) &&
                <div className='text-center mt-5'>
                    <h4>
                        Your search didn't match any item
                    </h4>
                </div>
                }

            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
};

export default connect(mapStateToProps)(DeliveryMenu);