import React, { Component } from 'react';
import Navigation from '../navigation';
import Head from '../common/Head';

export default class Layout extends Component {
    render() {
        return (
            <>
                <Head />
                <Navigation />
                <div>
                    {this.props.children}
                </div>
            </>
        );
    }
}