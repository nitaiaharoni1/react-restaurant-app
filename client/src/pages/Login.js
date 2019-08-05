import React, { Component } from 'react';
import CustomParallax from "../components/CustomParallax";
import home_top from "../assets/home_top.jpg";

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <CustomParallax title='Login' img={home_top} height={300}/>
            </React.Fragment>
        );
    }
}

export default Login;