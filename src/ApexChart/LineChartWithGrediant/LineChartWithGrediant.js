import React from "react";
import Chart from "react-apexcharts";
const LineChartWithGrediant = () => {
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
    // {
    //   name: "series-2",
    //   data: [23, 12, 54, 61, 32, 56, 81, 19],
    // },
    // {
    //   name: "series-3",
    //   data: [24, 20, 5, 75, 42, 79, 72, 35],
    // },
  ];

  const options = {
    chart: {
        background: '#000000',
      events: {
        click: function (event, chartContext, config) {
          // console.log("event",event);
          // console.log("chartContext",chartContext);
          console.log("config", config);
          console.log(
            "config.config.series[config.seriesIndex]",
            config.config.series[config.seriesIndex]
          );

          console.log(config.config.series[config.seriesIndex]);
         // console.log(config.config.series[config.seriesIndex].name);
          console.log(
            config.config.series[config.seriesIndex].data[config.dataPointIndex]
          );
        },

        dataPointSelection: function (event, chartContext, config) {
          console.log(event);
        },
        // mouseMove: function(event, chartContext, config) {
        //   console.log("event",event);
        //   console.log("chartCOntext",chartContext)
        //   console.log("config",config);
        // },
        height: "auto",
      },
    },
    tooltip: {
      theme: "dark",
    },
    stroke: {
        curve: "smooth",
        width: 3,
        fill: {
          type: "gradient",
          gradient: {
            type: "horizontal",
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#0085FF",
                  opacity: 1
                },
                {
                  offset: 33,
                  color: "#FF2E92",
                  opacity: 1
                },
                {
                  offset: 80,
                  color: "#FFAC2F",
                  opacity: 1
                },
                {
                  offset: 99,
                  color: "#FFFFFF",
                  opacity: 1
                }
              ]
            ]
          }
        }
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          type: "vertical",
          colorStops: [
            [
              {
                offset: 0,
                color: "#F48116",
                opacity: 1.0
              },
              {
                offset: 70,
                color: "#6510F8",
                opacity: 0.6
              },
              {
                offset: 97,
                color: "#6510F8",
                opacity: 0.3
              }
            ]
          ]
        }
      },
   

    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div>
      <h2>Line CHart With grediant</h2>
      <Chart
        options={options}
        series={series}
        type="area"
        width="900"
        height="250"
      />
    </div>
  );
};

export default LineChartWithGrediant;
