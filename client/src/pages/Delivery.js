import React from 'react';
import DeliveryMenu from '../components/DeliveryMenu'
import CustomParallax from '../components/CustomParallax'
import home_top from "../assets/home_top.jpg";

export default function Delivery() {
    return (
        <React.Fragment>
            <CustomParallax title='Deliveries' img={home_top} height={300}/>
            <DeliveryMenu className='Delivery'/>
        </React.Fragment>
    );
}