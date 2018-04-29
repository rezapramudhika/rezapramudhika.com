import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (window.innerWidth <= 500) {
            return (
                <div style={styles.container}>
                    <p style={styles.aboutTitle}>About Me</p>
                    <p style={styles.aboutBody}>Hey there, my name is Reza. I'm a full stack web developer based in Jakarta, Indonesia.
                    <br />In 2017, I finished my Bachelor's Degree in Computer Information System.
                    Since I was a graduate, I did some projects in terms of creating and managing
                    mobile application. I have a very high interest in programming and I feel like to
                    deepen this field. Therefore, I decided to join hacktiv8 in December 2017. I learned a lot of new technology
                    related to web development.
                    <br />I wish I can take advantage of the knowledge that I have, to solve many problem in this world using technology.</p>
                </div>
            )
        } else {
            return (
                <div style={styles.containerWeb}>
                    <p style={styles.aboutTitle}>About Me</p>
                    <p style={styles.aboutBody}>Hey there, my name is Reza. I'm a full stack web developer based in Jakarta, Indonesia. 
                    In 2017, I finished my Bachelor's Degree in Computer Information System.
                    Since I was a graduate, I did some projects in terms of creating and managing
                    mobile application. I have a very high interest in programming and I feel like to
                    deepen this field. Therefore, I decided to join hacktiv8 in December 2017. I learned a lot of new technology
                    related to web development.
                    I wish I can take advantage of the knowledge that I have, to solve many problem in this world using technology.</p>
                </div>
            )
        }
    }
}

const styles = {
    container: {
        textAlign: 'justify',
        padding: 20
    },
    containerWeb: {
        textAlign: 'justify',
        padding: 80,
        marginLeft: 80,
        marginRight: 80
    },
    aboutTitle: {
        fontSize: 16,
        padding: 10,
        backgroundColor: '#272C42',
        color: 'white',
        display: 'inline-block',
        borderRadius: 5,
        margin: 0
    },
    aboutBody: {
        fontFamily: 'Heebo'
    }

}

export default Body;