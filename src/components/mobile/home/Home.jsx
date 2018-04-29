import React, { Component } from 'react';
import Header from './Header.home.mobile';
import Body from './Body.home.mobile';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}
 
export default Home;