import React, { Component } from 'react';
import Cards from '../components/Cards'
import ParallaxCustom from '../components/ParallaxCustom'

class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <ParallaxCustom/>
                <Cards/>
            </React.Fragment>
        );
    }
}

export default Delivery;