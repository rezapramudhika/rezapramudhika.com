import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from './components/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route path="/" component={Index} />
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
