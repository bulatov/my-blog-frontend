import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginFormContainer  from './containers/LoginFormContainer';
import CommentaryNew from './components/Commentary/CommentaryNew';
// <Commentary userName="frt" createdAt="2017 03 01 14:15:16" content={`hello everyone.hello everyone.hello \n everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.`} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <CommentaryNew placeholder="Add a public comment" cancelButtonText="Cancel" submitButtonText="Reply" />
            <LoginFormContainer method="POST" action="http://api.myblog.test/site/login" />
        </div>
      </div>
    );
  }
}

export default App;
