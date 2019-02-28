import React, { Component } from 'react'
import MenuItem from './MenuItem';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul className="navigation-menu">
                    <MenuItem href="/">홈</MenuItem>
                </ul>
            </div>
        )
    }
}