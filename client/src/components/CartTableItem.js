import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import CustomButtonGroup from "./CustomButtonGroup";
import {connect} from "react-redux";
import {FiTrash2} from "react-icons/fi";
import {Zero} from "../redux/actions/cartActions";
import { postItemsUpdate } from "../utils/api";
import {round} from "../utils/functions";

class CartTableItem extends Component {
    handleZero = async () => {
        this.props.Zero(this.props.title);
        if (this.props.loggedIn) {
            await postItemsUpdate(this.props.email, this.props.title, 'ZERO')
        }
    };

    render() {
        return (
            <tr className='text-center'>
                <td className='align-middle'>
                    <FiTrash2 className='mr-2 shadow-sm' size='1.2em' onClick={this.handleZero}/>
                </td>
                <td className='align-middle'>
                    <Image style={{height: 110, width: 110}}
                           src={this.props.img} rounded/>
                </td>
                <td className='align-middle'>{this.props.title}</td>
                <td className='align-middle'>${this.props.price}</td>
                <td className='align-middle'><CustomButtonGroup title={this.props.title} num={this.props.num}/></td>
                <td className='align-middle'>${round(this.props.price * this.props.num)}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Zero: (title) => {
            dispatch(Zero(title))
        }
    }
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn,
        email: state.user.email
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTableItem);