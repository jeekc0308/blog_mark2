import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
    closeModal = e => {
        e.preventDefault();
        this.props.onClose();
    }

    render() {
        if (!this.props.show) {
            return <></>;
        }
        return (
            <>
                <div className="alpha-background" />
                <div className="modal-wrap">
                    <div className="modal-body">
                        <div className="modal-header">
                            <h3>{this.props.title}</h3>
                            <a href="#" onClick={this.closeModal} className="modal-close">&times;</a>
                        </div>
                        <div className="modal-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}