import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Home, About, Delivery } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
