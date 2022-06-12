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
					let seconds = item / 1000
					const minutes = Math.floor(seconds / 60)
					seconds = seconds % 60
					return `${minutes}:${seconds.toString().padStart(2, '0')}`;
				},
			},
			grace: '15%',
			title: {
				display: true,
				text: 'time',
			}
		},
		y: {
			beginAtZero: true,
			grace: '15%',
			title: {
				display: true,
				text: 'total players',
			}
		},
	},
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Leaderboard Time Distribution',
		},
	},
};

const data = {
	datasets: [
		{
			label: 'Top 10,000 Players',
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
