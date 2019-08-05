import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";

class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Signup' img={home_top} height={300}/>
            </React.Fragment>
        );
    }
}

export default Signup;