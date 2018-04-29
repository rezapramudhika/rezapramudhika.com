import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTitle } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    closeNav(payload) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        if(payload !== ''){
            this.props.getTitle(payload)
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={()=>this.closeNav('')}>&times;</a>
                <Link to="/" onClick={()=>this.closeNav('About')}>About</Link>
                <Link to="/portofolio" onClick={()=>this.closeNav('Portofolio')}>Portofolio</Link>
                <Link to="/contact" onClick={()=>this.closeNav('Contact')}>Contact</Link>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTitle
  }, dispatch)

export default connect(null, mapDispatchToProps)(SideNav);