import React, { Component } from 'react';
import { Jumbotron } from "react-bootstrap";
import pic from '../assets/about_img.jpg'

const Style = {
    backgroundImage: `url(${pic})`,
};


class Jumbo extends Component {
    render() {
        return (
            <Jumbotron style={Style} fluid>
                <h1 className='text-center text-light display-3'>Fluid jumbotron</h1>
                <p className='text-center text-light'>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Jumbotron>
        );
    }
}

export default Jumbo;