import React, { Component } from 'react';
import Cards from './Cards'
import Jumbo from './Jumbo'

class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbo/>
                <Cards/>
            </React.Fragment>
        );
    }
}

export default Delivery;