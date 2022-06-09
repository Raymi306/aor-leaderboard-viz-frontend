import React from 'react';
import './App.css';
import LineChart from './LineChart';
import type { LeaderboardEntry } from './mock-data';
import { dataset_1 } from './mock-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload. Scroll down for chart!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LineChart incoming_data={dataset_1}></LineChart>
    </div>
  );
}

export default App;
