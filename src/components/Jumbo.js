import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import pic from '../assets/about_img.jpg'

const Style = {
    backgroundImage: `url(${pic})`,
    backgroundSize: 'cover',
    height: 500,
}

class Jumbo extends Component {
    state = {
        title: '',
        text: '',
        img: '',
        button: '',
    };

    render() {
        return (
            <Jumbotron style={Style} className='justify-content-center' fluid>
                <h1 className='text-center text-light display-3 mt-5 align font-weight-bold'>Fluid jumbotron </h1>
                <p className='text-center text-light h2'>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Jumbotron>
        );
    }
}

export default Jumbo;