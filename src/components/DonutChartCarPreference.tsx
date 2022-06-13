import React from 'react'
// TODO: remove what's unneeded from here
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement); // this needs to exist for some reason
ChartJS.register(Legend);
ChartJS.register(Tooltip);
ChartJS.register(Title);

let chartColors = ["#CCCCCC",
"#669999",
"#CCCC66",
"#CC6600",
"#9999FF",
"#0066CC",
"#99CCCC",
"#999999",
"#FFCC00",
"#009999",]

const DonutChart = (props: any) => { // not sure what props: any *really* does, I'm a typescript noob
  let cars = new Map<string, number>(); // maps car name : # of appearances
  for(let entry of props.incoming_data){
    // cars.set(entry.car, cars.get(entry.car)?+1 : 1); // if it exists, increment else set it to 1
    cars.set(entry.car, (cars.get(entry.car) ?? 0) + 1)
  }

  // convert the data to something usable by chartjs
  let data = {
    datasets: [
      {
        label: 'car usage',
        data: Array.from(cars.values()),
        backgroundColor: chartColors,
        hoverOffset: 4
      }
    ],
    labels: Array.from(cars.keys())
  }

  return (
    <div>
      <Doughnut data={data}/>
    </div>
  )
}

export default DonutChart
