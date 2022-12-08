import './App.css';
import TableDataComponents from "./components/tableData";   
import TableData from "./jsonFiles/Data.json";
import configData1 from "./jsonFiles/configData1.json"; 
import configData2 from "./jsonFiles/configData2.json";
import configData3 from "./jsonFiles/configData3.json";
import mainTableConfig from "./jsonFiles/mainTableConfig.json";

//comment

function App() {
  return (
    <div className = "App">
      <TableDataComponents TableData = {TableData} configData = {mainTableConfig}/>
      <TableDataComponents TableData = {TableData} configData = {configData1}/>
      <TableDataComponents TableData = {TableData} configData = {configData2}/>
      <TableDataComponents TableData = {TableData} configData = {configData3}/>
    </div>
  );
}
export default App;
