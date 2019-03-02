import React, { Component } from 'react';
import './Form.scss';

export default class Button extends Component {
    state = {
        isTooltipShow: false
    }
    onMouseOver = () => {
        this.setState({
            isTooltipShow: true
        });
    }
    onMouseLeave = () => {
        this.setState({
            isTooltipShow: false
        });
    }
    render() {
        const { children, tooltip } = this.props;
        let props = this.props;

        return (
            <button className="form-button" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave} {...props}>
                {children}
                {tooltip ? (
                    <div style={{
                        display: (this.state.isTooltipShow ? "block" : "none")
                    }} className="form-button-tooltip">
                        {tooltip}
                    </div>
                ) : null}
            </button>
        )
    }
}