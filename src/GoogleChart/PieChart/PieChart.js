import React from 'react'
import { Chart } from "react-google-charts";

const PieChart = () => {
    const data = [
        ["Language", "Speakers (in millions)"],
        ["Assamese", 13],
        ["Bengali", 83],
        ["Bodo", 1.4],
        ["Dogri", 2.3],
        ["Gujarati", 46],
        ["Hindi", 300],
        ["Kannada", 38],
        ["Kashmiri", 5.5],
        ["Konkani", 5],
        ["Maithili", 20],
        ["Malayalam", 33],
        ["Manipuri", 1.5],
        ["Marathi", 72],
        ["Nepali", 2.9],
        ["Oriya", 33],
        ["Punjabi", 29],
        ["Sanskrit", 0.01],
        ["Santhali", 6.5],
        ["Sindhi", 2.5],
        ["Tamil", 61],
        ["Telugu", 74],
        ["Urdu", 52],
      ];
      
       const options = {
        title: "Indian Language Use",
        legend: "none",
        pieSliceText: "label",
        slices: {
          0:{offset : 0.1},  
          1: { offset: 0.2 },
          3: { offset: 0.3 },
          4: { offset: 0.4 },
          5: { offset: 0.5 },

          6:{offset : 0.1},  
          7: { offset: 0.2 },
          8: { offset: 0.3 },
          9: { offset: 0.4 },
          10: { offset: 0.5 },

          11:{offset : 0.1},  
          12: { offset: 0.2 },
          13: { offset: 0.3 },
          14: { offset: 0.4 },
          15: { offset: 0.5 },

          16:{offset : 0.1},  
          17: { offset: 0.2 },
          18: { offset: 0.3 },
          19: { offset: 0.4 },
          20: { offset: 0.5 },
        },
      };

    return (
    <div>
       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}

export default PieChart
