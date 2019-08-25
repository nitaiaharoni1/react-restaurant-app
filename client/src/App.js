import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Home, Delivery, Error, Gallery, MenuLunch, MenuEvening, Cart, Login, Signup, Checkout, Terms } from './utils'
import Footer from "./components/Footer";
import './App.css';
import { connect } from "react-redux";
import { Add } from "./redux/actions/cartActions";
import { fetchUserData, fetchUpdateItems } from "./utils/api";

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    async componentDidUpdate(prevProps, prevState) {
        //if (prevProps.total !== this.props.total) {
        //    let currentItems = {}
        //    Object.values(this.props.items).map(item => {
        //        currentItems[item.title] = item.num
        //    })
        //    await fetchUpdateItems(this.props.email, currentItems)
        //}
    }

    //async componentDidMount() {
    //    if (this.props.loggedIn) {
    //        const items = fetchUserData(this.props.email);
    //        Object.keys(items).forEach((item) => {
    //                this.props.Add(item, items[item].num)
    //            }
    //        );
    //    }
    //}

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

//const mapDispatchToProps = (dispatch) => {
//    return {
//        Add: (title, num) => {
//            dispatch(Add(title, num))
//        }
//    }
//};

export default connect(mapStateToProps)(App)