import React from 'react';

import config from '../config/backend.config.js';
import ApiService from '../services/ApiService.js';
import withAjax from '../hocs/withAjax.js';
import LoginForm  from '../components/LoginForm';

export default function LoginPage(props) {
    const LoginFormContainer = withAjax(LoginForm, () => ApiService.getCsrfToken());
    return (
        <LoginFormContainer method="POST" action={config.urls.auth.login} csrfPlaceholderName="_csrf"/>
    );
}
