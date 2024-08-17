import React from 'react'
import { Chart } from "react-google-charts";

const GBarChart = () => {
    const data = [
        ["Year", "Sales", "Expenses", "Profit", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200, 1000, 400, 200],
        ["2015", 1170, 460, 250 , 1000, 400, 200],
        ["2016", 660, 1120, 300 , 0, 0, 0],
        ["2017", 1030, 540, 350 , 1000, 400, 200],
      ];
      
       const options = {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      };

  return (
    <div>
             <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  )
}

export default GBarChart
