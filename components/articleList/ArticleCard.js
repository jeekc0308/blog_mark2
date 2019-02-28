import React, { Component } from 'react'
import Link from 'next/link';
import './articleList.scss';

export default class ArticleCard extends Component {
    /**
     * @param {Date} date 
     */
    getDateToString = (date) => {
        const currentTime = new Date();
        const timeGap = currentTime.getTime() - date.getTime();
        if (timeGap >= 30 * 24 * 60 * 60 * 1000) { //시간차가 30일 이상일 때
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return `${year}년 ${month}월 ${day}일`;
        }
        if (timeGap >= 24 * 60 * 60 * 1000) { //시간차가 하루 이상일 때
            const days = Math.floor(timeGap / (24 * 60 * 60 * 1000));
            return `${days}일 전`;
        }
        if (timeGap >= 60 * 60 * 1000) { //시간차가 한 시간 이상일 때
            const hours = Math.floor(timeGap / (60 * 60 * 1000));
            return `${hours}시간 전`;
        }
        if (timeGap >= 60 * 1000) { //시간차가 분 이상일 때
            const mins = Math.floor(timeGap / (60 * 1000));
            return `${mins}분 전`;
        }
        const secs = Math.floor(timeGap / 1000);
        return `${secs}초 전`;
    }

    render() {
        const { image, title, category, href, date } = this.props;
        return (
            <div className="articleList-card">
                <Link href={href}>
                    <a className="unset">
                        <img className="articleList-card-img" src={image} />
                    </a>
                </Link>
                <div className="articleList-card-body">
                    <span className="articleList-card-category">
                        <Link href={href}>
                            <a className="unset">
                                {category}
                            </a>
                        </Link>
                    </span>
                    <h3 className="articleList-card-title">
                        <Link href={href}>
                            <a className="unset">
                                {title}
                            </a>
                        </Link>
                    </h3>
                    <p className="articleList-card-info">
                        {this.getDateToString(date)}
                    </p>
                </div>
            </div>
        )
    }
}