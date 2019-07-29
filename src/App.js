import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Home, About, Delivery, Error,Gallery } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/about" component={About}/>
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
