import React, { Component } from 'react';
import Image from "react-bootstrap/Image";
import CustomButtonGroup from "./CustomButtonGroup";
import { connect } from "react-redux";
import { FiTrash2 } from "react-icons/fi";

class CartTableItem extends Component {
    render() {
        return (
            <tr className='text-center'>
                <td className='align-middle'>
                    <FiTrash2 className='mr-2 shadow-sm' size='1.2em' onClick={() => this.props.Zero(this.props.title)}/>
                </td>
                <td className='align-middle'>
                    <Image style={{height: 110, width: 110}}
                           src={this.props.img} rounded/>
                </td>
                <td className='align-middle'>{this.props.title}</td>
                <td className='align-middle'>${this.props.price}</td>
                <td className='align-middle'><CustomButtonGroup title={this.props.title} num={this.props.num}/></td>
                <td className='align-middle'>${this.props.round(this.props.price * this.props.num)}</td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Zero: (title) => {
            dispatch({
                type: "ZERO",
                title: title,
                num: 0
            })
        }
    }
};

export default connect(null, mapDispatchToProps)(CartTableItem);