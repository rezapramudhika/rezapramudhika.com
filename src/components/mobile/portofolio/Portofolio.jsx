import React, { Component } from 'react';
import portofolios from '../../../assets/portofolio'

import PortofolioItem from './Item.portofolio.mobile'

class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (window.innerWidth <= 500) {
            return (
                <div style={styles.container}>
                    {
                        portofolios.map((data, i) => {
                            return (
                                <PortofolioItem data={data} key={i} />
                            )
                        })
                    }
                </div>
            )
        } else {
            return (
                <div style={styles.containerWeb}>
                    {
                        portofolios.map((data, i) => {
                            return (
                                <PortofolioItem data={data} key={i} />
                            )
                        })
                    }
                </div>
            )
        }
    }
}

const styles = {
    container: {
        padding: 20
    },
    containerWeb: {
        padding: 40,
        marginLeft: 120,
        marginRight: 120
    },
}

export default Portofolio;