import React, {Component} from 'react';
import {AdminTab, CodeGenerate} from '../../../components/admin';

export default () => { 
    return (
        <div>
            <AdminTab title="코드 발급">
                <CodeGenerate />
            </AdminTab>
        </div>
    )
}