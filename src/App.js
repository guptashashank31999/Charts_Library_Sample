import BarChart from "./ApexChart/BarChart/BarChart";
import BarChartWithGradient from "./ApexChart/BarChartWIthGradinet/BarChartWithGradient";
import BarChartWIthImage from "./ApexChart/BarChartWithImage/BarChartWIthImage";
import ComboChart from "./ApexChart/ComboChart/ComboChart";
import DonutChartWithGradient from "./ApexChart/DonutChartWithGradient/DonutChartWithGradient";
import Dounut from "./ApexChart/DounutChart/Dounut";
import PyramidChart from "./ApexChart/FunnalChart/PyramidChart";
import LineChart from "./ApexChart/LineChart/LineChart";
import LineChartWithGrediant from "./ApexChart/LineChartWithGrediant/LineChartWithGrediant";
import AreaChart from "./GoogleChart/AreaChart/AreaChart";
import GBarChart from "./GoogleChart/BarChart/GBarChart";
import GLineChart from "./GoogleChart/LineChart/GLineChart"
import PieChart from "./GoogleChart/PieChart/PieChart";
import VStackedChart from "./VIctoryChart/VStackedChart/VStackedChart";


function App() {
  return (
    <div className="App">
      <h2>Apex Chart</h2>
      <LineChart/>
      <BarChart />
      <ComboChart/>
      <PyramidChart />
      <Dounut />
      <BarChartWithGradient />
      <DonutChartWithGradient />
      <LineChartWithGrediant />
      <BarChartWIthImage />
     



      <h1>Google Chart</h1>
      <AreaChart />
      <GLineChart />
      <GBarChart />
      <PieChart />


      {/* <h1>Victory Chart</h1>
      <VStackedChart /> */}
    </div>
  );
}

export default App;
