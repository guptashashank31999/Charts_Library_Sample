import React from 'react'
import Chart from "react-apexcharts";

const Dounut = () => {
   const series= [44, 55, 41, 17, 15]
   const options = {
    chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      title: {
        text: 'Gradient Donut with custom Start-angle'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  
   
  return (
    <div>
      <h2>Donut chart</h2>
        <Chart options={options} series={series} width={900} height={300} type="donut"/>
    </div>
  )
}

export default Dounut
