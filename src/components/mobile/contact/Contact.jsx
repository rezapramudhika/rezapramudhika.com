import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (window.innerWidth <= 500) {
            return (
                <div style={styles.container}>
                    <p style={styles.title}>
                        Please feel free to reach me if you have any questions or anything to discuss.
                        Also, you could always just send me a friendly hello.
                    </p>
                    <div style={styles.contactBody}>
                        <form>
                            {/* <p style={styles.formTitle}>Name</p> */}
                            <input style={styles.inputContainer} type="text" name="name" placeholder="Your name..."></input>
                            {/* <p style={styles.formTitle}>Email</p> */}
                            <input style={styles.inputContainer} type="email" name="email" placeholder="Your email address..."></input>
                            {/* <p style={styles.formTitle}>Message</p> */}
                            <textarea style={styles.textarea} type="text" name="message" placeholder="Your message..."></textarea>
                            <input style={styles.btnSubmit} type="submit" name="submit"></input>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={styles.containerWeb}>
                    <p style={styles.title}>
                        Please feel free to reach me if you have any questions or anything to discuss. <br />
                        Also, you could always just send me a friendly hello.
                    </p>
                    <div style={styles.contactBody}>
                        <form>
                            {/* <p style={styles.formTitle}>Name</p> */}
                            <input style={styles.inputContainer} type="text" name="name" placeholder="Your name..."></input>
                            {/* <p style={styles.formTitle}>Email</p> */}
                            <input style={styles.inputContainer} type="email" name="email" placeholder="Your email address..."></input>
                            {/* <p style={styles.formTitle}>Message</p> */}
                            <textarea style={styles.textarea} type="text" name="message" placeholder="Your message..."></textarea>
                            <input style={styles.btnSubmit} type="submit" name="submit"></input>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const styles = {
    container: {
        padding: 20,
        textAlign: 'center'
    },
    containerWeb: {
        padding: 40,
        marginLeft: 120,
        marginRight: 120,
        textAlign: 'center'
    },
    title: {
        fontFamily: 'Heebo'
    },
    contactBody: {
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5'
    },
    inputContainer: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
        marginBottom: 8,
        boxSizing: 'border-box',
        borderRadius: 5,
        fontFamily: 'Heebo'
    },
    textarea: {
        width: '100%',
        height: 150,
        border: '1px',
        borderRadius: 5,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
        boxSizing: 'border-box',
        fontFamily: 'Heebo'
    },
    formTitle: {
        margin: 0,
        color: 'white'
    },
    btnSubmit: {
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 8,
        marginBottom: 8,
        boxSizing: 'border-box',
        borderRadius: 5,
        fontFamily: 'Heebo',
        backgroundColor: '#111111',
        color: 'white'
    }
}

export default Contact;