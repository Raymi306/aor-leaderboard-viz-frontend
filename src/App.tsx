import React from 'react';
import './App.css';
import LineChart from './LineChartAllTimes';
import ScrollableLeaderboard from './ScrollableLeaderboard';
import DonutChart from './components/DonutChart';
import { genLeaderboardEntries } from './mock-data';

function App() {
  let leaderboardEntries = genLeaderboardEntries(10); // for consistency in data output

  return (
    <div className="App">
	    {/* <ScrollableLeaderboard incoming_data={leaderboardEntries}></ScrollableLeaderboard> */}
      <DonutChart incoming_data={leaderboardEntries}/>
    </div>
  );
}

export default App;
