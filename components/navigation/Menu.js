import React, { Component } from 'react'
import MenuItem from './MenuItem';

export default class Menu extends Component {
    state = {
        opened: false
    }
    openMenu = () => {
        this.setState({
            opened: true
        });
    }
    closeMenu = () => {
        this.setState({
            opened: false
        });
    }
    render() {
        return (
            <div className="navigation-menu-wrapper">

                <div
                    className={"navigation-menu-background" + (this.state.opened ? " opened" : "")}
                    onClick={this.closeMenu}
                />
                <ul className={"navigation-menu" + (this.state.opened ? " opened" : "")}>
                    <MenuItem href="/">1</MenuItem>
                    <MenuItem href="/">2</MenuItem>
                    <MenuItem href="/">3</MenuItem>
                </ul>
                <button className="navigation-menu-open" onClick={this.openMenu}>
                    메뉴
                </button>
            </div>
        )
    }
}