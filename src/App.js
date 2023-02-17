import React from "react";
import Layout from "antd/es/layout/layout";
import { Content } from "antd/es/layout/layout";
import { Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Topbar } from "./Topbar";
import { Sidebar } from "./Sidebar";
import { Overview } from "./Overview";

const App = () => {
    return (
        <>  
        <Layout style={{
                      'height':  window.innerHeight
                    }}>
        
            <Layout>    
                {/* <Collections /> */}
                <Sidebar />
                <Content
                
                style={{background:'#F7F8FC'}}>
                  <Layout>
                  <Topbar />
                  <Content style={{background:'#F7F8FC'}}>
                      <Overview />
                  </Content>
                  </Layout>
                </Content>
            </Layout>
        </Layout>
        </>
        );
}
export default App;