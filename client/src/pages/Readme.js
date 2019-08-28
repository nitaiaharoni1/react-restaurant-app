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
                        <hr/>
                        <h2>Mama's Restaurant - React ecommerce website</h2>
                        <p>Mama's Restaurant is an ecommerce website built using React, Redux integrated with Node.js and Express backend.
                            <br/>
                            The deployed Website is available <a href="https://mamas-restaurant-app.herokuapp.com/" rel="nofollow">here</a>.
                        </p>

                        <hr/>
                        <h3>Project Questions</h3>

                        <h5>What are you selling?</h5>
                        <p>Our store is basically a restaurant and we sell food through delivery to the customer's house</p>

                        <h5>What additional page(s) did you add? How to operate them?</h5>
                        <p></p>

                        <h5>What was hard to do?</h5>
                        <p></p>

                        <h5>Who is your partner? name and id. What did you do? What did your partner do?</h5>
                        <p></p>

                        <h5>Specify all the different route your app supports</h5>
                        <p></p>

                        <h5>How did you make your store secured?</h5>
                        <p></p>

                        <h5>Did you implement the store using react.js? </h5>
                        <p></p>
                        <hr/>

                        <h3>Prerequisites</h3>
                        <ol>
                            <li>Git</li>
                            <li>Node v10.15.1</li>
                            <li>A fork/clone of this repo</li>
                        </ol>
                        <hr/>

                        <h3>Running locally</h3>
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