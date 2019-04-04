import React, { Component } from 'react';

import { createStore } from 'redux'; // why?
import { Provider } from 'react-redux'; // why?
import reducers from './reducers';

import logo from './logo.svg';
import './App.css';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">
              Welcome to React
            </h1>
          </header>
          <p className="App-intro">
            tmrz
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
