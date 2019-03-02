import React, { Component } from 'react';
import './Body.scss';

export default class FixedBody extends Component {
    render() {
        return (
            <div className="fixed-body">
                {this.props.children}
            </div>
        )
    }
}