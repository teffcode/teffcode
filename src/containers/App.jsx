import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import AboutMe from '../containers/AboutMe';
import MedellinCSS from '../containers/MedellinCSS';
import Workshops from '../containers/Workshops';
import Talks from '../containers/Talks';
import Tips from '../containers/Tips';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="app">
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/medellincss" component={MedellinCSS} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/talks" component={Talks} />
            <Route path="/tips" component={Tips} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
