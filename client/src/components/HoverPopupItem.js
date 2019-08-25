import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {FiTrash2} from "react-icons/fi";
import CustomButtonGroup from "./CustomButtonGroup";
import {connect} from "react-redux";
import { Zero } from "../redux/actions/cartActions";
import {fetchUpdateItems} from "../utils/api";

class HoverPopupItem extends Component {
    handleZero = async () => {
        this.props.Zero(this.props.title);
        if (this.props.loggedIn) {
            await fetchUpdateItems(this.props.email, this.props.title, 'ZERO')
        }
    };

    render() {
        return (
            <Row className='py-3 border-bottom border-top'>
                <Col xs={7} className='ml-3 px-0 '>
                    <Row>
                        <Col xs={2} className='mt-0 m-2 pr-0 p-2'>
                            <FiTrash2 style={{position: 'absolute', top: 0, right:'1em'}} className='shadow-sm' size='1.2em' onClick={this.handleZero}/>
                        </Col>
                        <Col xs={9} className='my-auto ml-0 pl-0'>
                            <h6 className='my-auto text-left'>{this.props.title}</h6>
                        </Col>
                    </Row>


                    <Row className='mt-2 mx-0'>
                        <Col className='px-0' xs={6}>
                            <CustomButtonGroup title={this.props.title} num={this.props.num}/>
                        </Col>
                        <Col xs={4} className='my-auto ml-2 pr-0'>
                            <h6 className='text-left my-auto'>${this.props.round(this.props.price * this.props.num)}</h6>
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