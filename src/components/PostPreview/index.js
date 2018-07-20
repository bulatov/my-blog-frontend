import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function PostPreview({id, createdAt, userName, title, content}) {
    return (
        <Link to={`/post/${id}`}>
            <div className="post-preview">
                <div className="post-preview__header">
                    <div className="post-preview__title">{title}</div>
                    <div className="post-preview__meta">
                        <span className="post-preview__username">{userName} </span>
                        <span className="post-preview__createdAt">{(new Date(createdAt)).toDateString()}</span>
                    </div>
                </div>

                <div className="post-preview__body">
                    <div className="post-preview__content">{content}</div>
                </div>
            </div>
        </Link>
    );
}
