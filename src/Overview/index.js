import React,{Component} from "react";
import {Chart} from "react-google-charts";

export class Overview extends Component {
    render() {
        
        return (
            <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
                />
          );
    }
}