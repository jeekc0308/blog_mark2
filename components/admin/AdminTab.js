import React, {Component} from 'react';

export default class AdminTab extends Component {
    state = {
        open: false
    };
    toggleTab = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        const {title} = this.props;
        return (
            <div>
                <a onClick={this.toggleTab} href="#" style={{
                    display: 'block',
                    background: "#ced9ea",
                    color: 'black',
                    padding: '1em'
                }}>
                    {title} {this.state.open ? "▲" : "▼"}
                </a>
                <div style={{
                    display: this.state.open ? "block" : "none",
                    padding: '1em'
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}