import React, {Component} from 'react';
import CustomParallax from '../components/CustomParallax'

class Error extends Component {
    render() {
        return (
            <CustomParallax title='404 Page Not Found' height={700} text="Sorry...
            We couldn't find the page you were looking for. This is either because:
            There is an error in the URL entered into your web browser. Please check the URL and try again.
            The page you are looking for has been moved or deleted."  />
        );
    }
}

export default Error;