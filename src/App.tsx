import React from 'react';
import './App.css';
import LineChart from './components/LineChartAllTimes';
import ScrollableLeaderboard from './components/ScrollableLeaderboard';
import DonutChart from './components/DonutChartCarPreference';
import { genLeaderboardEntries } from './mock-data';

function App() {
  let leaderboardEntries = genLeaderboardEntries(100); // for consistency in data output

  return (
    <div className="App">
      <DonutChart incoming_data={leaderboardEntries}/>
    </div>
  );
}

export default App;
