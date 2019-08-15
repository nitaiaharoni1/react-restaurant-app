import React, { Component } from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

class CustomButtonGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }
    }

    handleClickPlus = () => {
        this.setState({num: ++this.state.num});
    };

    handleClickMinus = () => {
        this.setState((state) => {
            if (state.num > 0) {
                return {num: --this.state.num}
            }
        });
    };

    render() {
        const addCartElement =
            <Button className='py-2' variant="outline-dark" onClick={this.handleClickPlus}>
                Add to Cart
            </Button>;
        const plusMinusElement =
            <ButtonGroup variant="outline-dark">
                <Button variant="outline-dark" onClick={this.handleClickMinus}> - </Button>
                <Button className='disabled' variant="outline-dark">{this.state.num}</Button>
                <Button className='py-2' variant="outline-dark" onClick={this.handleClickPlus}> + </Button>
            </ButtonGroup>;
        return (this.state.num === 0) ? addCartElement : plusMinusElement;
    }
}

export default CustomButtonGroup;