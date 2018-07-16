import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CSRFToken from './CSRFToken.js';

export default class LoginForm extends Component {
    static propTypes = {
        method: PropTypes.oneOf(['GET', 'POST']).isRequired,
        action: PropTypes.string.isRequired,
    };

    render() {
        const { method, action } = this.props;

        return (
            <div className="login-form">
                <p>Please fill out the following fields to login:</p>
                <form method={method} action={action}>
                    <CSRFToken name="_csrf" />
                    <label htmlFor="login-form__username">Username</label>
                    <input type="text" id="login-form__username" name="LoginForm[username]" required />
                    <br />
                    <label htmlFor="login-form__password">Password</label>
                    <input type="password" id="login-form__password" name="LoginForm[password]" required />
                    <br />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}
