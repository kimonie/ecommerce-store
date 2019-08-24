import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage'

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

class App extends Component {
    constructor () {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/hats' component={HatsPage} />
                </Switch>
            </div>
        );
    }

}

export default App;