import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import ApiService from '../services/ApiService.js';

export default class LoginFormContainer extends Component {
    state = {
        csrfToken: null
    };

    componentDidMount() {
        ApiService.getCsrfToken()
        .then((csrfToken) => {
            this.setState({ csrfToken });
        });
    }

    render() {
        return (
            <LoginForm csrfToken={this.state.csrfToken} csrfInputFieldName={"_csrf"} {...this.props} />
        );
    }
}
