import React, { Component } from 'react';
import Cards from '../components/Cards'
import CustomParallax from '../components/CustomParallax'

class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax/>
                <Cards/>
            </React.Fragment>
        );
    }
}

export default Delivery;