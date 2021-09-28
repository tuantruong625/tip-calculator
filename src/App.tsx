import React from 'react';
import './App.css';
import BaseHeader from './components/BaseHeader';

function App() {
  return (
    <div style={{ backgroundColor: '#b9dee2' }}>
      <div className="container mx-auto pt-5 h-screen flex flex-col items-center md:justify-center" style={{ backgroundColor: '#b9dee2' }}>
        <BaseHeader title="splitter" />

        <div className="">
          <div>
            <label htmlFor="bill" className="flex flex-col text-gray-700 font-medium">
              Bill
              <div className="flex items-center">
                <span className="absolute pl-3">$</span>
                <input type="text" name="bill" placeholder="Enter bill..." className="py-3 px-8 rounded-lg text-right" />
              </div>
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;