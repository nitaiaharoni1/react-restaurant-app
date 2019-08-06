import React, { Component } from 'react';
import CustomParallax from "../../components/CustomParallax";
import menu_top from "../../assets/menu_top.jpg";
import Menu from "../../components/Menu";

const lunchMenuItems = {
    appetizers: [
        {title: 'Fried Spring Rolls', price: '2.95', description: 'chicken or vegetable'},
        {title: 'Gai Of Nuur Satay', price: '4.95', description: 'skewered chicken or beef with a peanut sauce'},
        {title: 'Tofu Tod', price: '4.75', description: 'fried tofu with a mild chili peanut sauce'},
        {title: 'Fresh Thai Summer Roll', price: '3.95', description: 'with shrimp in a tamarind sauce'},
        {title: 'Fried Tiger Shrimp Rolls', price: '6.50', description: 'with a plum sauce'},
        {title: 'Thai Spare Ribs', price: '8.95', description: 'glazed and grilled pork ribs'}
    ],
    main: [
        {
            title: 'Gai Pad Khing',
            price: '7.95',
            description: 'sauteed sliced chicken with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce'
        },
        {
            title: 'Nuur Kra Prow',
            price: '8.50',
            description: 'sauteed sliced beef with peppers, cabbage, carrots and onions in a chili basil sauce'
        },
        {
            title: 'Koong Pad Khing',
            price: '8.95',
            description: 'sauteed shrimp with mushrooms, peppers, cabbage, carrots and onions in a fresh ginger sauce'
        },
        {title: 'Gai Kratiam', price: '7.95', description: 'sauteed sliced chicken with broccoli, cabbage and onions in a fresh garlic sauce'}
    ],
    deserts: [
        {title: 'Fried Banana', price: '7.50', description: 'deep-fried banana topped with coconut ice cream'},
        {title: 'Gelato', price: '4.95', description: 'seasonal flavor made in-house'},
        {title: 'Khao Tom Mud', price: '8.50', description: 'steamed sticky rice in a banana leaf with baby banana'}
    ]
};

class Lunch extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Lunch Menu' img={menu_top} height={300}/>
                <Menu menuItems={lunchMenuItems}/>
            </React.Fragment>
        );
    }
}

export default Lunch;