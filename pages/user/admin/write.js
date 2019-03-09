import React, {Component} from 'react';
import marked from 'marked';
import {Modal} from '../../../components/common/Form';

import '../../../styles/write.scss';

export default class WritePage extends Component {
    state = {
        post: "",
        postToHTML: ""
    };

    writeChanged = e => {
        marked.parse(e.target.value, (err, result) => {
            this.setState({
                post: e.target.value,
                postToHTML: result
            });
        });
    }
    render() {
        return (
            <div className="write-page wrap">
                <ImageUploadModal />
                <div className="write-page header">
                    <div className="write-page menu">
                        <a href="#" rel="이미지 업로드">이미지 업로드</a>
                        <a href="#" rel="업로드">업로드</a>
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

class ImageUploadModal extends Component {
    render() {
        return (
            <Modal title="이미지 업로드">
                이미지 업로드
            </Modal>
        )
    }
}