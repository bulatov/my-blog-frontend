import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import config from './services/ApiService.config.js';
import ApiService from './services/ApiService.js';
import withAjaxInit from './hocs/withAjaxInit.js';
import LoginForm  from './components/LoginForm';
import PostContainer from './containers/PostContainer';
// <Commentary userName="frt" createdAt="2017 03 01 14:15:16" content={`hello everyone.hello everyone.hello \n everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.`} />

class App extends Component {
    render() {
        const LoginFormContainer = withAjaxInit(LoginForm, () => ApiService.getCsrfToken());
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <PostContainer />
                    <LoginFormContainer method="POST" action={config.urls.auth.login} csrfPlaceholderName="_csrf"/>
                </div>
            </div>
        );
    }
}

export default App;
