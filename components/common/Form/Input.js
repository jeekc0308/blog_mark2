import React, { Component } from 'react';
import './Form.scss';

export default class Input extends Component {
    render() {
        return (
            <input className="form-input" {...this.props} />
        )
    }
}