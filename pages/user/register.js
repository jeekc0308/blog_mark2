import Layout from '../../components/layout';

import React, { Component } from 'react';
import RegisterForm from '../../components/registerForm';
import { FixedBody, Input, Button, FormBody } from '../../components/common/Form';
import { Code } from '../../APICall';

class Register extends Component {
    state = {
        code: '',
        verified: false
    };
    verifyCode = () => {
        if (!this.state.code)
            return;
        Code.VerifyCode(this.state.code)
            .then((res) => {
                if (res.status == 200) {
                    this.setState({
                        verified: true
                    });
                } else if (res.status == 202) {
                    alert("이 코드는 존재하지 않는 코드입니다.");
                }
            })
            .catch((err) => {
                if (err.response)
                    alert(err.response.data.message);
                else
                    alert(err.message);
            });
    };
    handleCodeChange = (e) => {
        this.setState({
            code: e.target.value
        });
    }
    render() {
        const notVerifed = (
            <FixedBody>
                <h1>회원가입</h1>
                <p>본 사이트에 가입하려면 가입 코드가 필요합니다.</p>
                <FormBody>
                    <Input placeholder="가입 코드" onChange={this.handleCodeChange} value={this.state.code} />
                    <Button onClick={this.verifyCode}>
                        인증
                        </Button>
                </FormBody>
            </FixedBody>
        );
        const Verified = (
            <FixedBody>
                <RegisterForm />
            </FixedBody>
        );
        return this.state.verified ? Verified : notVerifed;
    }
}

export default Register;