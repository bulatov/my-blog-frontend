import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage.js';
import LoginPage from './pages/LoginPage.js';
import PostPage from './pages/PostPage.js';
// <Commentary userName="frt" createdAt="2017 03 01 14:15:16" content={`hello everyone.hello everyone.hello \n everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.`} />
// <PostContainer />
// <LoginFormContainer method="POST" action={config.urls.auth.login} csrfPlaceholderName="_csrf"/>

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <Switch>
                      <Route exact path='/' component={BlogPage}/>
                      <Route path='/login' component={LoginPage}/>
                      <Route path='/post/:id' component={PostPage}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
