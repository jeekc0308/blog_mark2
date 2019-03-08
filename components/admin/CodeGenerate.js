import React, {Component} from 'react';
import {Button} from '../common/Form';
import {Code} from '../../APICall';

export default class CodeGenerate extends Component {
    state = {
        code: null
    };
    generate = () => {
        Code.GenerateCode()
        .then(value => {
            if (!value) {
                alert("오류가 발생했습니다. 다시 시도하십시오.");
                return;
            }
            this.setState({
                code: value
            });
        })
    }
    render() {
        return (
            <div>
                <p>아래 버튼을 누르면 코드가 발급됩니다. <span style={{color: 'red'}}>발급된 코드는 단 한번만 보여지며, 삭제할 수 없습니다.</span></p>
                {this.state.code !== null ? <h1>{this.state.code}</h1> : null}
                <Button onClick={this.generate}>발급</Button>
            </div>
        )
    }
}