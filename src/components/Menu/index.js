import React from 'react';
import { Link } from 'react-router-dom';

import config from '../../config/backend.config.js';
import LogoutForm from '../LogoutForm';
import ApiService from '../../services/ApiService.js';
import withAjax from '../../hocs/withAjax.js';
import './styles.css';

export default function Menu(props) {
    const LogoutFormContainer = withAjax(LogoutForm, () => ApiService.getCsrfToken());

    return (
        <div className="menu">
            <span className="menu__item">
                <Link to={`/`}>Posts</Link>
            </span>
            <span className="menu__item">
                <LogoutFormContainer method="POST" action={config.urls.auth.logout} csrfPlaceholderName="_csrf" />
            </span>
        </div>
    );
}
