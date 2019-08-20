import React, { Component } from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

class CustomButtonGroup extends Component {
    render() {
        const addCartElement =
            <Button className='py-2' variant="outline-dark" onClick={() => this.props.Add(this.props.title, 1)}>
                Add to Cart
            </Button>;
        const plusMinusElement =
            <ButtonGroup variant="outline-dark">
                <Button variant="outline-dark" onClick={() => this.props.Sub(this.props.title, 1)}> - </Button>
                <Button className='disabled'
                        variant="outline-dark">{this.props.num ? this.props.num : 0}</Button>
                <Button className='py-2' variant="outline-dark" onClick={() => this.props.Add(this.props.title, 1)}> + </Button>
            </ButtonGroup>;
        const num = this.props.num;
        return (!num || num === 0) ? addCartElement : plusMinusElement;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Add: (title, num) => {
            dispatch({
                type: "ADD",
                title: title,
                num: num
            })
        },
        Sub: (title, num) => {
            dispatch({
                type: "SUB",
                title: title,
                num: num
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(CustomButtonGroup);

