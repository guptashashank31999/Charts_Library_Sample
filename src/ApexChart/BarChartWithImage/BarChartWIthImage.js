import React from 'react'
import Chart from "react-apexcharts";
import velocisHorizonatl from './img/velocis-horizontal.png'

const BarChartWIthImage = () => {
    const series = [
        {
         data : [500, 500, 500, 500]
     }];

     const options = {
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands'],
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'image',
            opacity: 0.87,
            image: {
              src: [velocisHorizonatl],
              width: 200,
              height: 300
            }
          },
    }

  return (
    <div>
    <h2>Bar Chart With Image</h2>
      <Chart options={options} series={series} type="bar" width="900" height="300" />
      
    </div>
  )
}

export default BarChartWIthImage
