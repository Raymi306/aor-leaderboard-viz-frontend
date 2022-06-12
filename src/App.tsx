import React from 'react';
import './App.css';
import LineChart from './LineChartAllTimes';
import ScrollableLeaderboard from './ScrollableLeaderboard';
import { genLeaderboardEntries } from './mock-data';

function App() {
  return (
    <div className="App">
	<ScrollableLeaderboard incoming_data={genLeaderboardEntries(10)}></ScrollableLeaderboard>
    </div>
  );
}

export default App;
