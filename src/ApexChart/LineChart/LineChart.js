import React from "react";

import Chart from "react-apexcharts";

const LineChart = () => {
  
    const series = [
        {
          name: "series-1",
          data: [30, 40, 25, 50, 49, 21, 70, 51]
        },
        {
          name: "series-2",
          data: [23, 12, 54, 61, 32, 56, 81, 19]
        },
        {
          name: "series-3",
          data: [24, 20, 5, 75, 42, 79, 72, 35]
        }
      ];

  const options = {
    chart: {
      events: {
        click: function(event, chartContext, config) {
        // console.log("event",event);
        // console.log("chartContext",chartContext);
         console.log("config",config);
         console.log("config.config.series[config.seriesIndex]",config.config.series[config.seriesIndex])

        console.log(config.config.series[config.seriesIndex])
        //console.log(config.config.series[config.seriesIndex].name)
        console.log(config.config.series[config.seriesIndex].data[config.dataPointIndex])
      },

      dataPointSelection: function(event, chartContext, config){

        console.log(event);
    },
      // mouseMove: function(event, chartContext, config) {
      //   console.log("event",event);
      //   console.log("chartCOntext",chartContext)
      //   console.log("config",config);
      // },
        height: 'auto',
    }
      },
      tooltip:{
        theme: "dark",
      },
      
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'stepline',
      },
  };

  return (
    <div>
      <h2>Line CHart</h2>
      <Chart options={options} series={series} type="area" width="900" height="250"/>
    </div>
  );
};

export default LineChart;
