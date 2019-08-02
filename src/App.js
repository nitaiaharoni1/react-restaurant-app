import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Home, Delivery, Error, Gallery } from './utils'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/delivery" component={Delivery}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
