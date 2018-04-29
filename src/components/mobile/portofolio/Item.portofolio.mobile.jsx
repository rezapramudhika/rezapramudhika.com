import React, { Component } from 'react';

class PortofolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { data } = this.props;
        return (
            <div style={styles.container}>
                <p style={styles.title}>{data.name} </p>
                <table style={styles.table}>
                    <tbody>
                        <tr style={styles.tr}>
                            <td><strong>Description</strong></td>
                            <td> : </td>
                            <td>{data.description}</td>
                        </tr>
                        <tr style={styles.tr}>
                            <td><strong>Type</strong></td>
                            <td> : </td>
                            <td>{data.type}</td>
                        </tr>
                        <tr style={styles.tr}>
                            <td><strong>Role</strong></td>
                            <td> : </td>
                            <td>{data.role}</td>
                        </tr>
                        <tr style={styles.tr}>
                            <td><strong>Front-End Tech</strong></td>
                            <td> : </td>
                            {
                                data.frontendTech.length !== 0 ?
                                    <td>{data.frontendTech.join(', ')}</td> :
                                    <td> - </td>
                            }
                        </tr>
                        <tr style={styles.tr}>
                            <td><strong>Back-End Tech</strong></td>
                            <td> : </td>
                            {
                                data.backendTech.length !== 0 ?
                                    <td>{data.backendTech.join(', ')}</td> :
                                    <td> - </td>
                            }
                        </tr>
                    </tbody>
                </table>
                <div style={styles.footer}>
                    <a style={styles.btn} href={data.url} target="_blank"> See Project </a>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        margin: 0,
        padding: 10,
        backgroundColor: '#272C42',
        color: 'white',
        fontFamily: 'Heebo',
        fontSize: 16
    },
    table: {
        padding: 10
    },
    tr: {
        verticalAlign: 'top'
    },
    footer: {
        textAlign: 'center',
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#111111',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        border: 'none',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 32,
        paddingRight: 32,
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: 16,
        cursor: 'pointer',
    }
}

export default PortofolioItem;