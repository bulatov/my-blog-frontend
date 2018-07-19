import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function PostPreview({id, createdAt, userName, title, content}) {
    return (
        <Link to={`/post/${id}`}>
            <div>
                {id} {createdAt} {userName} {title} {content}
            </div>
        </Link>
    );
}
