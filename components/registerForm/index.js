import React, { Component } from 'react';
import { Button, Input, FormBody } from '../common/Form';
import { User } from '../../APICall';
import Router from 'next/router';

export default class registerForm extends Component {
    state = {
        username: '',
        password: '',
        password_accept: '',
        nickname: ''
    }
    formSubmit = (e) => {
        e.preventDefault();
        const { username, password, password_accept, nickname } = this.state;
        if (!username || !password || !password_accept || !nickname) {
            alert("빈 필드가 있습니다!");
            return;
        }
        if (password != password_accept) {
            alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
            return;
        }
        User.Register(username, password, nickname)
            .then(value => {
                if (value.data.success == true && value.status == 201) {
                    alert("아이디가 만들어졌습니다.");
                    Router.push("/");
                    return;
                }
                alert(value.data.message);
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                    return;
                }
                alert(error.message);
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form className="fadein-effect" onSubmit={this.formSubmit}>
                <h1>회원가입</h1>
                <FormBody>
                    <span>아이디</span>
                    <Input
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                </FormBody>
                <FormBody>
                    <span>비밀번호</span>
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </FormBody>
                <FormBody>
                    <span>비밀번호 확인</span>
                    <Input
                        placeholder="Password"
                        type="password"
                        name="password_accept"
                        onChange={this.handleChange}
                        value={this.state.password_accept}
                    />
                </FormBody>
                {
                    this.state.password == this.state.password_accept 
                    ? <span style={{color: "#1460bc"}}>비밀번호가 같습니다.</span> 
                    : <span style={{color: "#bc1414"}}>비밀번호가 다릅니다.</span>
                }
                <FormBody>
                    <span>닉네임</span>
                    <Input
                        placeholder="Nickname"
                        name="nickname"
                        onChange={this.handleChange}
                        value={this.state.nickname}
                    />
                </FormBody>
                <Button>가입</Button>
            </form>
        )
    }
}