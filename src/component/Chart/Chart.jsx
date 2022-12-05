import React from "react";
import ChartBars from "./ChartBars";
import './Chart.css'


function Chart(props){
    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
    const totalMaxValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
        {props.dataPoints.map((dataPoint=>{
           return <ChartBars 
                key={dataPoint.label}
                value={dataPoint.value}
                maxvalue={totalMaxValue}
                label={dataPoint.label}
            />
        }))}
    </div>
  );
}

export default Chart;