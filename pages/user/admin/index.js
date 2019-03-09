import React, {Component} from 'react';
import {AdminTab, CodeGenerate} from '../../../components/admin';
import {Button} from '../../../components/common/Form';
import Router from 'next/router';

export default () => { 
    return (
        <div>
            <AdminTab title="코드 발급">
                <CodeGenerate />
            </AdminTab>
            <AdminTab title="글쓰기">
                <Button onClick={() => {Router.push('/user/admin/write')}}>바로 가기</Button>
            </AdminTab>
        </div>
    )
}