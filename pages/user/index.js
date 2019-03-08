import {User} from '../../APICall';
import Router from 'next/router';
import React, {Component} from 'react';

export default class UserPage extends Component {
    componentDidMount() {
        User.isLogined().then(isLogined => {
            if (isLogined) {
                Router.push('/user/admin');
                return;
            }
            Router.push('/user/login');
        });
    }
    render() {
        return (
            <div style={{
                position: 'fixed',
                top: '50%',
                textAlign: 'center',
                width: '100%'
            }}>
                리다이렉트 중입니다...
            </div>
        )
    }
}