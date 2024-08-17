import React from 'react'
import Chart from "react-apexcharts";

const DonutChartWithGradient = () => {
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
     fill: {
      type:  'gradient',
      gradient: {
        shade: 'dark',
        type: "diagonal1",
        shadeIntensity: 0.5,
        gradientToColors: ['#4B9ABF','#D56181','#C8E1F5'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 100],
        colorStops: []
    },
     
    },

     dataLabels: {
       enabled: false
     },
     fill: {
       type: 'gradient',
       gradient: {
        shade: 'light'  
      }
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
      <h2>DonutChartWithGradient</h2>
      <Chart options={options} series={series} width={900} height={300} type="donut"/>

    </div>
  )
}

export default DonutChartWithGradient
