import React from 'react';
import './App.css';
import LineChart from './LineChartAllTimes';
import { genLeaderboardEntries } from './mock-data';

function App() {
  return (
    <div className="App">
      <LineChart incoming_data={genLeaderboardEntries(1000)}></LineChart>
    </div>
  );
}

export default App;
