import React, {Component} from 'react';
import {FixedBody, Input, Button} from "../../components/common/Form"
import {User} from '../../APICall';
import Router from 'next/router';

import '../../styles/login.scss';

export default class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        show: false
    };
    componentDidMount() {
       User.RedirectIfLogined()
       .then(value => {
           this.setState({show: value});
       })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault();

        User.Auth(this.state.username, this.state.password)
        .then(value => {
            if (!value.success) {
                alert(value.message);
                return;
            }
            Router.push('/user');
        })
    }
    render () {
        if (!this.state.show) return null;
        return (
            <FixedBody>
                <form className="login-form" onSubmit={this.formSubmit}>
                    <h1>로그인</h1>
                    <Input placeholder="Username" name="username" onChange={this.handleChange} value={this.state.username} />
                    <Input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password" />
                    <Button>로그인</Button>
                </form>
                
            </FixedBody>
        )
    };
}