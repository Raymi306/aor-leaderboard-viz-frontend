import React, { useState } from 'react';
import './App.css';
import LineChart from './components/LineChartAllTimes';
import ScrollableLeaderboard from './components/ScrollableLeaderboard';
import DonutChart from './components/DonutChartCarPreference';
import { genLeaderboardEntries } from './mock-data';

function CurrentChart(props: any) {
	let lineChart = <LineChart incoming_data={props.leaderboardEntries}></LineChart>
	let donutChart = <DonutChart incoming_data={props.leaderboardEntries}></DonutChart>
	let scrollableLeaderboard = <ScrollableLeaderboard incoming_data={props.leaderboardEntries}></ScrollableLeaderboard>
	switch (props.which) {
	case 'line':
		return lineChart;
	case 'donut':
		return donutChart;
	case 'leaderboard':
		return scrollableLeaderboard;
	}
	return null
}

function App() {
	let leaderboardEntries = genLeaderboardEntries(100); // for consistency in data output
	const [displayedChart, setDisplayedChart] = useState<string | null>(null);

	const handleClick = (prev: string | null) => {
		let result = null;
		switch (prev) {
		case 'line':
			result = 'donut';
			break;
		case 'donut':
			result = 'leaderboard';
			break;
		case 'leaderboard':
		case null:
			result = 'line'
			break;
		}
		setDisplayedChart(result);
	}

	return (
		<div className="App">
			<button onClick={() => handleClick(displayedChart)}>Change Display</button>
			<CurrentChart which={displayedChart} leaderboardEntries={leaderboardEntries}></CurrentChart>
		</div>
	);
}

export default App;
