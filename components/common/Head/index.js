import Head from 'next/head';
import React, { Component } from 'react';
export default class HeadComponent extends Component {
    render() {
        return (
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>{this.props.title ? this.props.title : "타이틀"}</title>
                <style>{`
                    body {
                        margin: 0;
                    }
                `}</style>
                {this.props.children}
            </Head>
        )
    }
}