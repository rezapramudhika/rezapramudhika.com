import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={styles.container}>
                <img src={require('../../../assets/img/reza.png')} alt="profile" style={styles.imgStyle} />
                <p style={styles.name}><strong>REZA PRAMUDHIKA</strong></p>
                <p style={styles.tagline}>Full Stack Javascript Developer</p>
            </div>
        )
    }
}

const styles = {
    container: {
        backgroundImage: `url(${require('../../../assets/img/header-background.jpg')})`,
        textAlign: 'center',
        padding: 20
    },
    imgStyle: {
        width: 154,
        height: 'auto'
    },
    name: {
        fontSize: 24,
        fontFamily: 'Heebo',
        lineHeight: 0.2,
        color: 'white'
    },
    tagline : {
        fontFamily: 'Heebo',
        lineHeight: 0,
        fontWeight: 200,
        color: 'white'
    }
}

export default Header;