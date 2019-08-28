import React, { Component } from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from '../assets/home_top.jpg'
import home_sitting from '../assets/home_sitting.jpg'
import home_kitchen from '../assets/home_kitchen.jpg'
import KitchenNames from "../components/KitchenNames";
import HomeCards from "../components/HomeCards";
import CustomContainer from "../components/CustomContainer";
import ColumnsContainer from "../components/ColumnsContainer";
import Container from "react-bootstrap/Container";

class Readme extends Component {
    render() {
        return (
            <>
                <CustomParallax title='Readme' text="Nitai Aharoni's Readme" img={home_top} height='20em'/>
                <Container>
                    <article className="markdown-body entry-content p-5" itemProp="text">
                        <h2>Mama's Restaurant - React ecommerce website</h2>
                        <p>Mama's Restaurant is an ecommerce website built using React, Redux integrated with Node.js and Express backend.</p>
                        <p>A demo for the Website App is available <a href="https://mamas-restaurant-app.herokuapp.com/" rel="nofollow">here</a>.</p>
                        <h4>Screenshots</h4>
                        <p><a target="_blank" rel="noopener noreferrer"
                              href="/nitaiaharoni1/react-restaurant-website/blob/master/images/mobile-apps.png"><img
                            src="/nitaiaharoni1/react-restaurant-website/raw/master/images/mobile-apps.png" alt="Mobile Apps" title="Mobile Apps"
                            style={{maxWidth: '100%'}}/></a></p>
                        <h4>Prerequisites</h4>
                        <ol>
                            <li>Git</li>
                            <li>Node v10.16.1</li>
                            <li>A fork/clone of this repo</li>
                        </ol>
                        <h4>Running locally</h4>
                        <ol>
                            <li>In react-restaurant-website directory run in terminal: <code>npm run app</code></li>
                            <li>Open <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a></li>
                        </ol>
                    </article>
                </Container>
            </>
        );
    }
}

export default Readme;