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
              <Row gutter={64}>
                  <Col span={3}>
                    <span style={{ fontSize: '140%',fontWeight:'600', color: 'black' }}> Overview </span>
                  </Col>
                  <Col span={21} >
                  <ul className="isoRight mr-auto" style={{listStyleType: 'none', margin:'0',padding:'0',}} >
                  <li className="isoSearch" style={{ display:'inline', float: 'left'}}>
                   Hello1 {/* <TopbarSearch locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "notification" })}
                    className="isoNotify"
                    style={{ display:'inline', float: 'left'}}
                  >
                    Hello1{/* <TopbarNotification locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "message" })}
                    className="isoMsg"
                    style={{ display:'inline', float: 'left'}}
                  >
                    Hello1{/* <TopbarMessage locale={locale} /> */}
                  </li>

                  <li
                    // onClick={() => this.setState({ selectedItem: "user" })}
                    className="isoUser"
                    style={{ display:'inline', float: 'left'}}
                  >
                    Hello1{/* <TopbarUser locale={locale} /> */}
                  </li>
                </ul>
                  </Col>
              </Row>
            </Header>
          );
    }
}