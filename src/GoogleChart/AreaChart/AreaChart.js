import React from 'react'
import { Chart } from "react-google-charts";

const AreaChart = () => {
 
 
  const options = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
  };

    const data = [
      ["Year", "Sales", "Expenses"],
      ["2013", 1000, 400],
      ["2014", 1170, 460],
      ["2015", 660, 1120],
      ["2016", 1030, 540],
    ];
    
      
  return (
    <div>
      <h2>Area Chart</h2>
      <Chart
      chartType="AreaChart"
      width="70%"
      height="40%"
      data={data}
      options={options}
    />
    </div>
  )
}

export default AreaChart
