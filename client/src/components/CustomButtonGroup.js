import React, {Component} from 'react';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {connect} from "react-redux";
import {Add, Sub} from "../redux/actions/cartActions";
import {postItemsUpdate} from "../utils/api";

class CustomButtonGroup extends Component {

    handleAdd = async () => {
        this.props.Add(this.props.title, 1);
        if (this.props.loggedIn) {
            await postItemsUpdate(this.props.email, this.props.title, 'ADD')
        }

    };

    handleSub = async () => {
        this.props.Sub(this.props.title, 1);
        if (this.props.loggedIn) {
            await postItemsUpdate(this.props.email, this.props.title, 'SUB')
        }
    };

    render() {
        const addCartElement =
            <Button className='py-2' variant="outline-dark" onClick={this.handleAdd}>
                Add to Cart
            </Button>;
        const plusMinusElement =
            <ButtonGroup className='w-100' variant="outline-dark">
                <Button variant="outline-dark" onClick={this.handleSub}> - </Button>
                <Button className='disabled'
                        variant="outline-dark">{this.props.num ? this.props.num : 0}</Button>
                <Button className='py-2' variant="outline-dark" onClick={this.handleAdd}> + </Button>
            </ButtonGroup>;
        const num = this.props.num;
        return (!num || num === 0) ? addCartElement : plusMinusElement;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Add: (title, num) => {
            dispatch(Add(title, num))
        },
        Sub: (title, num) => {
            dispatch(Sub(title, num))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        items: state.cart.items,
        loggedIn: state.user.loggedIn
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomButtonGroup);

