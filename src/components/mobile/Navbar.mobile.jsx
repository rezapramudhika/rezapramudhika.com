import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    render() {
        return (
            <div id="main" style={styles.container}>
                <span style={{fontSize: 16 ,cursor: "pointer", color: '#fff'}} onClick={this.openNav}>&#9776; &nbsp; {this.props.data.navbarTitle}</span>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundColor: '#111111'
    }
}

const mapStateToProps = state => {
    return {
        data: state.reducer
    }
}

export default connect(mapStateToProps, null)(Navbar);