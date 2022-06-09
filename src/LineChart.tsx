import React from 'react';
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

export const options = {
	responsive: true,
	scales: {
		x: {
			type: 'linear' as const,
		}
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

export const data = {
	datasets: [
		{
			label: 'Dataset 1',
			data: [{x: 1, y: 100}, {x: 2, y: 300}, {x: 3, y: 50}],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}
	],
};

export default function LineChart(incoming_data: any) {
	console.log('Prop?',  incoming_data);
	return <Line options={options} data={data} />;
}
