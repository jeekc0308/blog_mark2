import React, { Component } from 'react';
import marked from 'marked';
import { Post } from '../../../APICall';
import { Input } from '../../../components/common/Form';
import '../../../styles/write.scss';
import Router from 'next/router';

export default class WritePage extends Component {
    state = {
        post: "",
        postToHTML: "",
        title: "",
        url: ""
    };

    writeChanged = e => {
        marked.parse(e.target.value, (err, result) => {
            this.setState({
                post: e.target.value,
                postToHTML: result
            });
        });
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    upload = e => {
        e.preventDefault();
        const { post, title, url } = this.state;
        Post.UploadPost(post, title, url)
            .then(value => {
                if (!value.success) {
                    alert(value.message);
                    return;
                }
                Router.push('/post/' + url);
            });
    }
    render() {
        return (
            <div className="write-page wrap">
                <div className="write-page header">
                    <div className="write-page menu">
                        <Input placeholder="제목" onChange={this.handleChange} value={this.state.title} name="title" />
                        <Input placeholder="URL 주소" onChange={this.handleChange} value={this.state.url} name="url" />
                        <a href="#" rel="업로드" onClick={this.upload}>업로드</a>
                    </div>
                </div>
                <div className="write-page body">
                    <div className="write-page write-wrap">
                        <textarea className="write-page write" onChange={this.writeChanged}></textarea>
                    </div>
                    <div className="write-page preview-wrap">
                        <h3>Preview</h3>
                        <div dangerouslySetInnerHTML={{
                            __html: this.state.postToHTML
                        }} className="write-page preview"></div>
                    </div>
                </div>
            </div>
        )
    }
}