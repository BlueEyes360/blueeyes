import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Projects from './components/Projects/Projects';

class App extends Component {

    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Navigation />
                <Route path="/" exact component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/projects" component={Projects} />
            </div>
        </BrowserRouter>
        );
    }
}

export default App;