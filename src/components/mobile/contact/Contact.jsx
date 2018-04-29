import React, { Component } from 'react';
import { saveMessage } from '../../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    sendMessage = () => {
        let msg = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            message: document.querySelector('#message').value,
        }
        this.props.saveMessage(msg)
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
                            <input style={styles.inputContainer} id='name' type="text" name="name" placeholder="Your name..."></input>
                            {/* <p style={styles.formTitle}>Email</p> */}
                            <input style={styles.inputContainer} id='email' type="email" name="email" placeholder="Your email address..."></input>
                            {/* <p style={styles.formTitle}>Message</p> */}
                            <textarea style={styles.textarea} id='message' type="text" name="message" placeholder="Your message..."></textarea>
                        </form>
                        {
                            this.props.data.loading ?
                                <Loader type="ThreeDots" color="#3F51B5" height={80} width={80} /> :
                                <button style={styles.btnSubmit} onClick={this.sendMessage}> Submit </button>
                        }
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
                            <input style={styles.inputContainer} id='name' type="text" name="name" placeholder="Your name..."></input>
                            {/* <p style={styles.formTitle}>Email</p> */}
                            <input style={styles.inputContainer} id='email' type="email" name="email" placeholder="Your email address..."></input>
                            {/* <p style={styles.formTitle}>Message</p> */}
                            <textarea style={styles.textarea} id='message' type="text" name="message" placeholder="Your message..."></textarea>
                        </form>
                        {
                            this.props.data.loading ?
                                <Loader type="ThreeDots" color="#3F51B5" height={80} width={80} /> :
                                <button style={styles.btnSubmit} onClick={this.sendMessage}> Submit </button>
                        }
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveMessage
}, dispatch)

const mapStateToProps = state => {
    return {
        data: state.reducer
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Contact);