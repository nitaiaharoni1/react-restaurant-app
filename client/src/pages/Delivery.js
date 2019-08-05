import React, { Component } from 'react';
import Cards from '../components/Cards'
import CustomParallax from '../components/CustomParallax'
import home_top from "../assets/home_top.jpg";

class Delivery extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Deliveries' img={home_top} height={300}/>
                <Cards/>
            </React.Fragment>
        );
    }
}

export default Delivery;