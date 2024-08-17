import React from 'react'
import Chart from "react-apexcharts";

const BarChartWithGradient = () => {

    const series = [
        {
         data : [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
     }];
     const options = {
         xaxis: {
             categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
           },
           plotOptions: {
             bar: {
               borderRadius: 5,
               horizontal: false,
             }
           },
           fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 1,
              colorStops: [
              
                {
                  offset: 20,
                  color: "#B6519D",
                  opacity: 1
                },
                {
                  offset: 40,
                  color: "#3C53A3",
                  opacity: 1
                },
                {
                  offset: 80,
                  color: "#76CFEF",
                  opacity: 1
                }
              ]
            }
          },
           dataLabels: {
             enabled: false
           },
     }


  return (
    <div>
      <Chart options={options} series={series} type="bar" width="900" height="300" />
      
    </div>
  )
}

export default BarChartWithGradient
