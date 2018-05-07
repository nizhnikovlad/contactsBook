import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import MenuModule from './components/modules/MenuModule';

class App extends Component {
  render() {
    return (
      <div className="App">
            <MenuModule />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Contact List</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
