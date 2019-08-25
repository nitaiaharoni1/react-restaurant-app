import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Home, Delivery, Error, Gallery, MenuLunch, MenuEvening, Cart, Login, Signup, Checkout, Terms } from './utils'
import Footer from "./components/Footer";
import './App.css';
import { connect } from "react-redux";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/delivery" component={Delivery}/>
                        <Route exact path="/gallery" component={Gallery}/>
                        <Route exact path="/menu.lunch" component={MenuLunch}/>
                        <Route exact path="/menu.evening" component={MenuEvening}/>
                        <Route exact path="/cart" component={Cart}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/checkout" component={Checkout}/>
                        <Route exact path="/terms" component={Terms}/>
                        <Route exact path="/" component={Home}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        loggedIn: state.user.loggedIn,
        items: state.cart.items,
        total: state.cart.total
    }
};

export default connect(mapStateToProps)(App)