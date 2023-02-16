import React,{Component} from "react";
import { Header } from "antd/es/layout/layout";
import { DashboardOutlined ,UnorderedListOutlined ,ShoppingCartOutlined} from '@ant-design/icons';
import {Avatar, Progress, Button, Space, Row, Col} from "antd";

export class Topbar extends Component {
    render() {
        const styling = {
            background: "#F7F8FC",
            // position: "fixed",
            // width: "100%",
            // height: 70,
            // zIndex: 1,
          };
        return (
            <Header
            style={styling}>
              <Row>
                  <Col span={3}>
                    <span style={{ fontSize: '140%',fontWeight:'600', color: 'black' }}> Overview </span>
                  </Col>
                
              </Row>
              
              
                <ul className="isoRight">
                  <li className="isoSearch">
                   Hello1 {/* <TopbarSearch locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "notification" })}
                    className="isoNotify"
                  >
                    Hello1{/* <TopbarNotification locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "message" })}
                    className="isoMsg"
                  >
                    Hello1{/* <TopbarMessage locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "user" })}
                    className="isoUser"
                  >
                    Hello1{/* <TopbarUser locale={locale} /> */}
                  </li>
                </ul>
            </Header>
          );
    }
}