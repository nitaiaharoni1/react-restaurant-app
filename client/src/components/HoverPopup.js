import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Badge from "react-bootstrap/Badge";
import { FaShoppingCart } from "react-icons/fa";
import { Form } from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import HoverPopupItem from './HoverPopupItem'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import DeliveryCard from "./DeliveryCard";
import Row from "react-bootstrap/Row";

class HoverPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    _toggle = () => {
        this.setState({show: !this.state.show});
    };

    _show = () => {
        this.setState({show: true});
    };

    HoverPopupItemRender = (title) => <HoverPopupItem img={this.props.items[title].img} title={this.props.items[title].title}
                                                      price={this.props.items[title].price} num={this.props.items[title].num}/>;


    render() {

        const popup =
            <Popover className='text-dark' style={{width: 300}} onMouseOver={this._show} onMouseOut={this._toggle}
                     title="Some title text">
                <Popover.Content>
                    <ScrollArea speed={0.3} className="area" style={{maxHeight: 400}} contentClassName="content" horizontal={false}>
                        {Object.keys(this.props.items).map(title =>
                            (this.props.items[title].num > 0) ? this.HoverPopupItemRender(title) : null
                        )}
                    </ScrollArea>
                </Popover.Content>
                <Popover.Title className='text-center' as="h2">
                    Total: ${this.props.totalPrice}

                </Popover.Title>

                <Popover.Title as="h2">
                    <Form className='mx-4 d-flex justify-content-between'>
                        <Link to='/cart'>
                            <Button variant='dark'>Show Cart</Button>
                        </Link>
                        <Button variant='dark'>Pay</Button>
                    </Form>
                </Popover.Title>
            </Popover>

        const sharedProps = {
            show: this.state.show,
            container: this,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };

        return (
            <React.Fragment>
                <Link to='/cart'>
                    <Button variant="dark" style={{position: 'relative'}} ref="target" onMouseOver={this._toggle} onMouseOut={this._toggle}>
                        My Cart
                        <FaShoppingCart className='ml-2' size='1.5em'/>
                        <Badge style={{position: 'absolute', top: -8, right: -8}} pill variant="warning">{this.props.total} </Badge>
                    </Button>
                </Link>
                <Overlay {...sharedProps} placement="bottom">{popup}</Overlay>
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

export default connect(mapStateToProps)(HoverPopup)