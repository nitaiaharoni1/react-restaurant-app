import React, { Component } from 'react';
import ParallaxCustom from '../components/ParallaxCustom'

class Error extends Component {
    render() {
        return (
            <ParallaxCustom>
                <h2>
                    404 Page Not Found
                </h2>
            </ParallaxCustom>
        );
    }
}

export default Error;