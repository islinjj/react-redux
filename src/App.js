import React from 'react';
import './App.css';
import store from '../src/store'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Counter
          value={store.getState()}
          addTotal={()=>store.dispatch({ type: 'INCREMENT' })} />
      </header>
    </div>
  );
}

store.subscribe(App);

export default App;
