import React from 'react';
import './App.css';
import store from '../src/store'
import CounterGroup from './components/CounterGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CounterGroup />
      </header>
    </div>
  );
}

store.subscribe(App);

export default App;
