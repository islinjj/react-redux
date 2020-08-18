import React from 'react';
import './App.css';
import store from '../src/store'
import CounterGroup from './components/CounterGroup';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <header className="App-header">
          <CounterGroup />
        </header>
      </Provider>
    </div>
  );
}

export default App;
