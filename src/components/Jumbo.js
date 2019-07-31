import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import pic from '../assets/about_img.jpg'

const Style = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    height: 500,
    paddingTop: 170,
}

class Jumbo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            img: props.img,
            button: '',
        };
    }


    render() {
        return (
            <Jumbotron style={Style} className='text-light text-center' fluid>
                <h1 className='display-3 font-weight-bold'>
                    {this.state.title}
                </h1>
                <p className='h2'>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Jumbotron>
        );
    }
}

export default Jumbo;