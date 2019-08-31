import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Badge from "react-bootstrap/Badge";
import {FaShoppingCart} from "react-icons/fa";
import {Form} from "react-bootstrap";
import ScrollArea from "react-scrollbar";
import HoverPopupItem from './HoverPopupItem'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {round} from "../utils/functions";


class HoverPopup extends Component {
    state = {
        show: false,
    };

    toggle = () => {
        this.setState({show: !this.state.show});
    };

    show = () => {
        this.setState({show: true});
    };

    hide = () => {
        this.setState({show: false});
    };

    HoverPopupItemRender = (item) => <HoverPopupItem img={item.img} title={item.title} price={item.price} num={item.num}/>;


    render() {
        const checkout = (this.props.total > 0) ?
            (<Button variant='warning' onClick={this.hide}>Checkout</Button>) :
            (<Button disabled variant='warning' onClick={this.hide}>Checkout</Button>);


        const popup = (this.props.total > 0) ?
            (<Overlay {...{
                show: this.state.show,
                container: this,
                target: () => ReactDOM.findDOMNode(this.refs.target)
            }} placement="bottom">
                <Popover className='text-dark' onMouseOver={this.show} onMouseOut={this.toggle}>
                    <Popover.Title as="h2" className='text-center'>
                        My Cart
                    </Popover.Title>
                    <Popover.Content>
                        <ScrollArea speed={0.3} style={{maxHeight: 400}} horizontal={false}>
                            {Object.values(this.props.items).map(item =>
                                (item.num > 0) ? this.HoverPopupItemRender(item) : null
                            )}
                        </ScrollArea>
                    </Popover.Content>
                    <Popover.Title className='text-center text-dark' as="h2">
                        Subtotal: ${round(this.props.totalPrice)}
                    </Popover.Title>

                    <Popover.Title as="h2">
                        <Form className='mx-4 d-flex justify-content-between'>
                            <Link to='/cart'>
                                <Button variant='dark' onClick={this.hide}>My Cart</Button>
                            </Link>
                            <Link to='/checkout'>
                                {checkout}
                            </Link>
                        </Form>
                    </Popover.Title>
                </Popover>
            </Overlay>) : null;

        return (
            <React.Fragment>
                <Link to='/cart'>
                    <Button variant="dark" style={{position: 'relative'}} ref="target" onClick={this.toggle}
                            onMouseOver={this.show}
                            onMouseOut={this.hide}>
                        <FaShoppingCart className='mr-1' size='1.5em'/>
                        <Badge style={{position: 'absolute', top: -8, right: -8}} pill variant="warning">{this.props.total} </Badge>
                    </Button>
                </Link>
                {popup}
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