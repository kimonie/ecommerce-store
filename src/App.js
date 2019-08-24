import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/shop'

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
                    <Route path='/shop' component={Shop} />
                </Switch>
            </div>
        );
    }

}

export default App;