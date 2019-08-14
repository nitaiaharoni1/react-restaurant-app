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

    render() {
        const popup =
            <Popover style={{width: 300}} className='text-dark' onMouseOver={this._show} onMouseOut={this._toggle}
                     title="Some title text">
                <Popover.Content>
                    <ScrollArea speed={0.3} className="area" style={{maxHeight: 400}} contentClassName="content" horizontal={false}>
                        <HoverPopupItem/>
                    </ScrollArea>
                </Popover.Content>
                <Popover.Title as="h2">
                    <Form className='mx-4 d-flex justify-content-between'>
                        <Button variant='dark'>Show Cart</Button>
                        <Button variant='dark'>Pay</Button>
                    </Form>
                </Popover.Title>
            </Popover>
        ;

        const sharedProps = {
            show: this.state.show,
            container: this,
            target: () => ReactDOM.findDOMNode(this.refs.target)
        };

        return (
            <div>
                <Button variant="dark" style={{position: 'relative'}} ref="target" onMouseOver={this._toggle} onMouseOut={this._toggle}>
                    My Cart
                    <FaShoppingCart className='ml-2' size='1.5em'/>
                    <Badge style={{position: 'absolute', top: -8, right: -8}} pill variant="warning">{1} </Badge>
                </Button>
                <Overlay {...sharedProps} placement="bottom">{popup}</Overlay>
            </div>
        );
    }
}

export default HoverPopup;