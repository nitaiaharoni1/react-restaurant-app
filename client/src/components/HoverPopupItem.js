import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {FiTrash2} from "react-icons/fi";
import CustomButtonGroup from "./CustomButtonGroup";
import {connect} from "react-redux";
import { Zero } from "../redux/actions/cartActions";
import { postItemsUpdate } from "../utils/api";
import {round} from "../utils/functions";

class HoverPopupItem extends Component {

    handleZero = async () => {
        this.props.Zero(this.props.title);
        if (this.props.loggedIn) {
            await postItemsUpdate(this.props.email, this.props.title, 'ZERO')
        }
    };

    render() {
        return (
            <Row className='py-2 border-bottom border-top'>
                <Col xs={7} className='ml-3 px-0'>
                    <Row>
                        <Col className='my-auto pl-0 pr-1 text-right' xs={2}>
                            <FiTrash2 className='shadow-sm my-auto' size='1.2em' onClick={this.handleZero}/>
                        </Col>
                        <Col className='my-auto pl-1' xs={9}>
                            <h6 className='my-auto text-left'>{this.props.title}</h6>
                        </Col>
                    </Row>


                    <Row className='mt-2 mx-0'>
                        <Col className='px-0' xs={7}>
                            <CustomButtonGroup title={this.props.title} num={this.props.num}/>
                        </Col>
                        <Col xs={5} className='my-auto pr-0'>
                            <h6 className='text-left my-auto'>${round(this.props.price * this.props.num)}</h6>
                        </Col>
                    </Row>
                </Col>

                <Col className='ml-0 pl-0 my-auto' xs={4}>
                    <Image className='text-left ml-0 pl-0' style={{height: '6.25em', width: '6.25em'}} src={this.props.img} rounded/>
                </Col>

            </Row>

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

export default connect(mapStateToProps, mapDispatchToProps)(HoverPopupItem);