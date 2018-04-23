import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  title: "Mon site qui fait du chocolat chaud",
  description: "To get started, edit code and save to reload.",
}

  render() {
    const {title, description} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
        </header>
        <p className="App-intro">
          {description}
        </p>
      </div>
    );
  }
}

export default App;
