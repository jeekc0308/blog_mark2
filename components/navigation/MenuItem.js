import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        return (
            <li className="navigation-menu-item">
                <a className="navigation-menu-item-link" href={this.props.href}>{this.props.children}</a>
            </li>
        )
    }
}