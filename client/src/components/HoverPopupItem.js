import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {FiTrash2} from "react-icons/fi";
import CustomButtonGroup from "./CustomButtonGroup";
import {connect} from "react-redux";
import { Zero } from "../redux/actions/cartActions";

class HoverPopupItem extends Component {
    render() {
        return (
            <Row className='py-3 border-bottom border-top'>
                <Col xs={8} className='ml-3 px-0 '>
                    <Row>
                        <Col xs={2} className='m-2 mt-0 p-2'>
                            <FiTrash2 style={{position: 'absolute', top: -1, right:5}} className='shadow-sm' size='1.2em' onClick={() => this.props.Zero(this.props.title)}/>
                        </Col>
                        <Col xs={8} className='my-auto ml-0 pl-0'>
                            <h6 className='my-auto text-left'>{this.props.title}</h6>
                        </Col>
                    </Row>


                    <Row className='mt-2 mx-0'>
                        <Col className='px-0' xs={6}>
                            <CustomButtonGroup title={this.props.title} num={this.props.num}/>
                        </Col>
                        <Col xs={4} className='my-auto pl-2 ml-3 pr-0'>
                            <h6 className='text-left my-auto'>${this.props.round(this.props.price * this.props.num)}</h6>
                        </Col>
                    </Row>
                </Col>

                <Col className='ml-0 pl-0 my-auto' xs={2}>
                    <Image className='text-left ml-0 pl-0' style={{height: 80, width: 80, position: 'absolute',top:-39 ,right: -18}} src={this.props.img} rounded/>
                </Col>
                <Col xs={2}/>

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

export default connect(null, mapDispatchToProps)(HoverPopupItem);