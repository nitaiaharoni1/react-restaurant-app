import React, { Component } from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

class CustomButtonGroup extends Component {
    render() {
        const addCartElement =
            <Button className='py-2' variant="outline-dark" onClick={() => this.props.Add(1, this.props.title)}>
                Add to Cart
            </Button>;
        const plusMinusElement =
            <ButtonGroup variant="outline-dark">
                <Button variant="outline-dark" onClick={() => this.props.Sub(1, this.props.title)}> - </Button>
                <Button className='disabled'
                        variant="outline-dark">{this.props.cart[this.props.title] ? this.props.cart[this.props.title] : 0}</Button>
                <Button className='py-2' variant="outline-dark" onClick={() => this.props.Add(1, this.props.title)}> + </Button>
            </ButtonGroup>;
        const item = this.props.cart[this.props.title];
        return (item === 0 || !item) ? addCartElement : plusMinusElement;
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        Add: (num, title) => {
            dispatch({
                type: "ADD",
                num: num,
                title: title
            })
        },
        Sub: (num, title) => {
            dispatch({
                type: "SUB",
                num: num,
                title: title
            })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomButtonGroup)

