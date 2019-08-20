import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FiTrash2 } from "react-icons/fi";
import CustomButtonGroup from "./CustomButtonGroup";
import { connect } from "react-redux";

class HoverPopupItem extends Component {
    render() {
        return (
            <Row className='py-3 border-bottom border-top'>
                <Col className='m-auto' xs={4}>
                    <Image className='text-center' style={{height: 90, width: 90}} src={this.props.img} roundedCircle/>
                </Col>

                <Col className='ml-3'>
                    <Row>
                        <Col xs={8}>
                            <h6 className='my-auto'>{this.props.title}</h6>
                        </Col>
                        <Col xs={4}>
                            <FiTrash2 className='mr-2 shadow-sm' size='1.2em' onClick={() => this.props.Zero(this.props.title)}/>
                        </Col>
                    </Row>

                    <Row className='mt-1'>
                        <Col>
                            <h6 className='my-auto text-muted'>${Math.round((this.props.price * this.props.num) * 100) / 100}</h6>
                        </Col>
                    </Row>

                    <Row className='mt-1 ml-0'>
                        <CustomButtonGroup title={this.props.title} num={this.props.num}/>
                    </Row>
                </Col>
            </Row>

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

export default connect(null, mapDispatchToProps)(HoverPopupItem);