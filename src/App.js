import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Home, Delivery, Error, Gallery, MenuLunch, MenuEvening } from './utils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/delivery" component={Delivery}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/menu.lunch" component={MenuLunch}/>
                    <Route exact path="/menu.evening" component={MenuEvening}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={Error}/>
                </Switch>
                <Footer/>
            </div>
        </Router>

    );
}

export default App;
