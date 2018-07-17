import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import ApiService from '../services/ApiService.js';

export default class LoginFormContainer extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        ApiService.getCsrfToken()
        .then((json) => {
            this.setState({
                data: json
            });
        });
    }

    render() {
        return (
            <LoginForm
                {...this.props}
                csrfInputFieldName={"_csrf"}
                {...this.state.data}
            />
        );
    }
}
