import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import './styles.css';
import CsrfPlaceholder from '../CsrfPlaceholder';

export default class LoginForm extends Component {
    static propTypes = {
        method: PropTypes.oneOf(['GET', 'POST']).isRequired,
        action: PropTypes.string.isRequired,
        csrfToken: PropTypes.string,
        csrfPlaceholderName: requiredIf(PropTypes.string, props => props.csrfToken)
    };

    render() {
        const { method, action, csrfToken, csrfPlaceholderName } = this.props;

        return (
            <form className="login-form" method={method} action={action}>
                <div className="login-form__header">Sign in</div>
                <div className="login-form__body">
                    { csrfToken && <CsrfPlaceholder token={csrfToken} name={csrfPlaceholderName} /> }
                    <input className="login-form__username" type="text" placeholder="username" name="LoginForm[username]" required autoComplete="off" autoFocus />
                    <input className="login-form__password" type="password" placeholder="password" name="LoginForm[password]" required />
                    <input className="login-form__submit" type="submit" value="Sign in" />
                </div>
            </form>
        );
    }
}
