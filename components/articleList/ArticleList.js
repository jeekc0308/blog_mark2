import React, { Component } from 'react'
import ArticleCard from './ArticleCard';
import './articleList.scss';

export default class ArticleList extends Component {
    render() {
        return (
            <div className="articleList-body">
                <ArticleCard
                    image="/static/image.jpg"
                    title="타이틀"
                    category="카테고리"
                    href="/"
                    date={new Date()}
                />
                <ArticleCard
                    image="/static/image.jpg"
                    title="타이틀"
                    category="카테고리"
                    href="/"
                    date={new Date()}
                />
                <ArticleCard
                    image="/static/image.jpg"
                    title="타이틀"
                    category="카테고리"
                    href="/"
                    date={new Date()}
                />
                <ArticleCard
                    image="/static/image.jpg"
                    title="타이틀"
                    category="카테고리"
                    href="/"
                    date={new Date()}
                />
                <ArticleCard
                    image="/static/image.jpg"
                    title="타이틀"
                    category="카테고리"
                    href="/"
                    date={new Date()}
                />
            </div>
        )
    }
}