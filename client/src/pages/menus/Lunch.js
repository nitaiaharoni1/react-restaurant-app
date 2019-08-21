import React, { Component } from 'react';
import CustomParallax from "../../components/CustomParallax";
import menu_top from "../../assets/menu_top.jpg";
import Menu from "../../components/Menu";

class Lunch extends Component {
    render() {
        return (
            <div>
                <CustomParallax title='Lunch Menu' img={menu_top} height={300}/>
                <Menu/>
            </div>
        );
    }
}

export default Lunch;
