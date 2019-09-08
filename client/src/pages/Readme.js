import React from 'react';
import CustomParallax from '../components/CustomParallax'
import home_top from '../assets/home_top.jpg'
import Container from "react-bootstrap/Container";

export default function Readme() {
    return (
        <>
            <CustomParallax title='Readme' text="Nitai Aharoni Readme" img={home_top} height='20em'/>
            <Container className="p-5">
                <article className="markdown-body entry-content" itemProp="text">
                    <div>
                        <h1>Mama's Restaurant - React ecommerce website</h1>
                        <hr/>
                        <p>Mama's Restaurant is an ecommerce website built using React, Redux integrated with Node.js and Express backend.</p>
                        <p>A demo for the Website App is available <a href="https://mamas-restaurant-app.herokuapp.com/" rel="nofollow">here</a>.
                        </p>
                    </div>

                    <div>
                        <h2>Project Questions</h2>
                        <hr/>

                        <div>
                            <h4>What are you selling?</h4>
                            <ul>
                                <li>Our store is basically a restaurant and we sell food through delivery to the customer's house.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>What additional page did you add? How to operate them?</h4>
                            <p>Home page <code>/home</code>:
                                * Welcome home page.
                                * You can scroll and see pictures with effect, and get information about the restaurant.
                                * Each of the pages in the app is accompanied by a navbar that lets you navigate between the different app pages.
                                The
                                navbar also contains a cart button which is used as a pop-up on mouseover, Above it is a number showing the
                                quantity
                                of products in the cart.</p>
                            <ul>
                                <li>
                                    <p>Deliveries page <code>/delivery</code>:</p>
                                    <ul>
                                        <li>You can add a product to the cart</li>
                                        <li>You can use search input to search for a specific product by description, title or price</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Gallery page <code>/gallery</code>:</p>
                                    <ul>
                                        <li>Image gallery received from the server (simulates access to the database)</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Menu pages <code>/menu</code>:</p>
                                    <ul>
                                        <li>Two menu pages, render the objects iteratively.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Admin page <code>/admin</code>:</p>
                                    <ul>
                                        <li>An admin page can only be accessed if an admin user is logged in.</li>
                                        <li>The page that allows to view the database in json format.</li>
                                        <li>You can click on the arrows to view specific user's data.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Login page <code>/login</code>:</p>
                                    <ul>
                                        <li>You can enter email/username and password to login and receive a user data.</li>
                                        <li>To place a new order, you must login to the site.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Signup page <code>/signup</code>:</p>
                                    <ul>
                                        <li>You can register a new user for the site.</li>
                                        <li>All fields must be entered in the right format to click on the Subscribe button.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Cart page <code>/cart</code>:</p>
                                    <ul>
                                        <li>The selected products will appear in the cart.</li>
                                        <li>Products for a signed-in user will be stored in a database so that a user can see them even after the
                                            site
                                            is refreshed or exited.
                                        </li>
                                        <li>You can add a quantity to a specific product or delete it from the cart.</li>
                                        <li>You can see a summary of the quantity and cost of the products</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Checkout page <code>/chekout</code>:</p>
                                    <ul>
                                        <li>This page shows user information includes address, name, email, etc.</li>
                                        <li>To place an order you can enter payment details in the correct format.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Terms of service page <code>/terms</code>:</p>
                                    <ul>
                                        <li>Displays the terms of use before registering for the site.</li>
                                    </ul>
                                </li>
                                <li>
                                    <p>Page not found page <code>/any other</code>:</p>
                                    <ul>
                                        <li>This page will display when any route that is not defined is used.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4>What was hard to do?</h4>
                            <ul>
                                <li>Learn to React from scratch.</li>
                                <li>Learn Bootstrap from scratch, which was very hard for me to understand at the beginning.</li>
                                <li>Learn Redux framework from scratch (Working in a very non-intuitive way I must say).</li>
                                <li>Learn Jest and Enzyme testing framework from scratch.</li>
                                <li>Integrate with Node Express and save the data (And deployment to Heroku that I wanted to do to allow my site
                                    to be public).
                                </li>
                                <li>In general, coding the project took me around 120 hours, which in itself is difficult.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Who is your partner name and id?</h4>
                            <ul>
                                <li>Me: <code>Nitai Aharoni 203626742</code></li>
                                <li>Partner: <code>Nadav Lotan 312346406</code></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Specify all the different route your app supports</h4>
                            <ul>
                                <li>
                                    <p>Update user's items in db - POST <code>/api/items/:email/:title/:action</code></p>
                                </li>
                                <li>
                                    <p>Authenticate user with cookie on lunching the app and getting user's data -
                                        GET <code>/api/items/:email/:title/:action</code></p>
                                </li>
                                <li>
                                    <p>Admin get all database - GET <code>/api/admin/data/:email</code></p>
                                </li>
                                <li>
                                    <p>Login user - GET <code>/api/user/login/:email/:password/:remember</code></p>
                                </li>
                                <li>
                                    <p>Logout user - POST <code>/api/user/logout</code></p>
                                </li>
                                <li>
                                    <p>Signup new user - POST <code>/api/user/signup</code></p>
                                </li>                                <li>
                                    <p>Delete a user - DELETE <code>/api/user/:email/:password</code></p>
                                </li>
                                <li>
                                    <p>Post a new order - POST <code>/api/order/new/:email</code></p>
                                </li>
                                <li>
                                    <p>Get gallery images (Simulates database access) - GET <code>/api/gallery</code></p>
                                </li>
                                <li>
                                    <p>Serves react client static files - GET <code>*</code></p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4>How did you make your store secured?</h4>
                            <ul>
                                <li>Validating all forms.</li>
                                <li>Validating admin user before showing Admin page.</li>
                                <li>Validating requests on the server.</li>
                                <li>Working with cookies.</li>
                                <li>Not exposing static files which contain private information.</li>
                                <li>Preventing repeated requests (DDOS) to the API with express-rate-limit.</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Did you implement the store using react.js?</h4>
                            <p>Yes, React and Redux</p>
                        </div>
                    </div>

                    <div>
                        <h2>Prerequisites</h2>
                        <hr/>
                        <ol>
                            <li>Git</li>
                            <li>Node v10.16.1</li>
                            <li>A fork/clone of this repo</li>
                        </ol>
                    </div>

                    <div>
                        <h2>Running locally</h2>
                        <hr/>
                        <ol>
                            <li>In react-restaurant-website directory run in terminal: <code>npm run app</code></li>
                            <li>Open <a href="http://localhost:3000" rel="nofollow">http://localhost:3000</a></li>
                        </ol>
                    </div>

                    <div>
                        <h2>Testing</h2>
                        <hr/>
                        <ol>
                            <li>In react-restaurant-website directory run in terminal: <code>npm test</code></li>
                            <li>Run all tests: <code>a</code></li>
                        </ol>
                    </div>

                </article>
            </Container>
        </>
    );
}