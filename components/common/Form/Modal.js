import React, {Component} from 'react';
import './Modal.scss';

export default class Modal extends Component {
    render() {
        return (
            <>
                <div className="alpha-background" />
                <div className="modal-wrap">
                    <div className="modal-body">
                        <div className="modal-header">
                            {this.props.title}
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