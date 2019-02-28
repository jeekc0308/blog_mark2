import React, { Component } from 'react'
import Menu from './Menu';
import Brand from './Brand';
import './navigation.scss';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navigation-bar">
                <Brand />
                <Menu />
            </nav>
        );
    }
}