import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, Home, Delivery, Error, Gallery, MenuLunch, MenuEvening, Cart, Login, Signup, Checkout, Terms, Readme, Admin} from './utils'
import Footer from "./components/Footer";
import './App.css';
import {connect} from "react-redux";
import {getUserAuth} from "./utils/api";
import {userLogin} from "./redux/actions/userActions";
import {Reset, Set} from "./redux/actions/cartActions";

class App extends Component {
    async componentDidMount() {
        const isToken = document.cookie.includes('token_mama');
        if (isToken) {
            let res = await getUserAuth();
            if (res) {
                this.props.userLogin(res.data.user);
                this.props.Reset();
                this.setItemsNum(res.data.currentItems);
            }
        }
    }

    setItemsNum(items) {
        Object.keys(items).forEach((item) => {
                this.props.Set(item, items[item])
            }
        );
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header className="Header"/>
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
                        <Route exact path="/readme" component={Readme}/>
                        {this.props.loggedIn && this.props.email === 'admin' && <Route exact path="/admin" component={Admin}/>}
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
        loggedIn: state.user.loggedIn,
        email: state.user.email
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (data) => {
            dispatch(userLogin(data))
        },
        Set: (title, num) => {
            dispatch(Set(title, num))
        },
        Reset: () => {
            dispatch(Reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)