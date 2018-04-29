import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/mobile/Navbar.mobile';
import SideNav from './components/mobile/SideNav.mobile';
import HomeMobile from './components/mobile/home/Home';
import PortofolioMobile from './components/mobile/portofolio/Portofolio';
import Contact from './components/mobile/contact/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.forceUpdate();
  };

  render() {
    // if (window.innerWidth <= 500) {
      return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <SideNav />
            <Switch>
              <Route exact path="/" component={HomeMobile}/>
              <Route exact path="/portofolio" component={PortofolioMobile}/>
              <Route exact path="/contact" component={Contact}/>
              <Route path="/" component={HomeMobile} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    // } else {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <h1 className="App-title">Welcome to React</h1>
    //       </header>
    //       <p className="App-intro">
    //         To get started, edit <code>src/App.js</code> and save to reload.
    //       </p>
    //     </div>
    //   );
    // }

  }
}

export default App;
