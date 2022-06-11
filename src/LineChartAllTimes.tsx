import React from 'react';
import type { LeaderboardEntry } from './mock-data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const options = {
	responsive: true,
	scales: {
		x: {
			type: 'linear' as const,
			reverse: true,
			ticks: {
				callback: (item: any, _index: any, _ticks: any) => {
					return `${item / 1000}s`;
				},
			},
			grace: '15%',
		},
		y: {
			beginAtZero: true,
			grace: '15%',
		},
	},
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart Demo',
		},
	},
};

const data = {
	datasets: [
		{
			label: 'Leaderboard Time Distribution',
			data: [],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}
	],
};

type RoundedScores = {
	[key: number]: LeaderboardEntry[],
}

type ChartData = {
	x: string,
	y: number,
}

export default function LineChart(props: any) {
	const rounded_scores: RoundedScores = {};
	props.incoming_data.forEach((item: LeaderboardEntry) => {
		const rounded_score = Math.round(item.score / 10000) * 10000;
		if (rounded_scores[rounded_score]) {
			rounded_scores[rounded_score].push(item);
		} else {
			rounded_scores[rounded_score] = [item];
		}
	});
	const mapped_data: ChartData[] = []
	for (let score in rounded_scores) {
		mapped_data.push({x: score, y: rounded_scores[score].length});
	}
	data.datasets[0].data = mapped_data as any;
	return <Line options={options} data={data}/>;
}
