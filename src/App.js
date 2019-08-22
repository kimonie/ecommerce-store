import React, { Component } from 'react';
import './App.css';

import Homepage from './pages/homepage/Homepage'

class App extends Component {
    constructor () {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Homepage />
            </div>
        );
    }

}

export default App;