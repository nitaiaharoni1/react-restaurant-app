import React, {Component} from 'react';
import ParallaxCustom from '../components/ParallaxCustom'
import top_home from "../assets/top_home.jpg";

class Error extends Component {
    render() {
        return (
            <ParallaxCustom title='404 Page Not Found' height={700} text="Sorry...
            We couldn't find the page you were looking for. This is either because:
            There is an error in the URL entered into your web browser. Please check the URL and try again.
            The page you are looking for has been moved or deleted."  />
        );
    }
}

export default Error;