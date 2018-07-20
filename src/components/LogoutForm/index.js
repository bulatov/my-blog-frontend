import React, { Component } from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

import './styles.css';
import CsrfPlaceholder from '../CsrfPlaceholder';

export default class LogoutForm extends Component {
    static propTypes = {
        method: PropTypes.oneOf(['GET', 'POST']).isRequired,
        action: PropTypes.string.isRequired,
        csrfToken: PropTypes.string,
        csrfPlaceholderName: requiredIf(PropTypes.string, props => props.csrfToken)
    };

    render() {
        const { method, action, csrfToken, csrfPlaceholderName } = this.props;

        return (
            <form className="logout-form" method={method} action={action}>
                { csrfToken && <CsrfPlaceholder token={csrfToken} name={csrfPlaceholderName} /> }
                <input className="logout-form__submit" type="submit" value="Sign out" />
            </form>
        );
    }
}
