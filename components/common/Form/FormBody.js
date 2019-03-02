import React, { Component } from 'react';
import './Body.scss';

export default class FormBody extends Component {
    render() {
        return (
            <div className="form-body">
                {this.props.children}
            </div>
        )
    }
}