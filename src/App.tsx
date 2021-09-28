import React from 'react';
import './App.css';
import BaseHeader from './components/BaseHeader';

function App() {
  return (
    <div className="App">
      <BaseHeader title="Spiltter" />
      <label htmlFor="bill">
        Bill
        <input type="text" name="bill" placeholder="Enter bill..." />
      </label>

      
    </div>
  );
}

export default App;