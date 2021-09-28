import React from 'react';
import './App.css';
import BaseHeader from './components/BaseHeader';

function App() {
  return (
    <div style={{ backgroundColor: '#b9dee2' }}>
      <div className="container mx-auto pt-5 h-screen flex flex-col items-center md:justify-center" style={{ backgroundColor: '#b9dee2' }}>
        <BaseHeader title="splitter" />

        <div>
          <label htmlFor="bill">
            Bill
            <input type="text" name="bill" placeholder="Enter bill..." />
          </label>
        </div>

      </div>
    </div>
  );
}

export default App;