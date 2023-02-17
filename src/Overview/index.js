import React,{Component} from "react";
import {Chart} from "react-google-charts";
import Card from "antd/es/card/Card";
import {Avatar, Progress, Button, Space, Row, Col} from "antd";

export class Overview extends Component {
    render() {
        
        return (

           <> 
           <div style={{margin:'30px'}}>
           <Row  gutter={[16, 16]}>
                 <Col span={6} className="pr-5" style={{marginBottom:'30px'}}>
                 <Card >Card content</Card>
                </Col>
                <Col span={6} className="pr-5">
                 <Card >Card content</Card>
                </Col>
                <Col span={6} className="pr-5">
                 <Card >Card content</Card>
                </Col>
                <Col span={6} className="pr-5">
                 <Card >Card content</Card>
                </Col>
            </Row>

            <Chart
                chartType="ScatterChart"
                data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                width="100%"
                height="400px"
                legendToggle
                />
                </div>
                </>
          );
    }
}