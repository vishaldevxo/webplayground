import React, { useState ,useEffect} from 'react';

import AceEditor from "react-ace";
import parse from 'html-react-parser';
import { createGlobalStyle } from 'styled-components'




import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-dracula";

import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/html";


import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';



import './App.css';





function App() {

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const [html,sethtml] = useState('')
const [css,setcss]=useState('')

  
  console.log("render")

  const GlobalStyle = createGlobalStyle`${css}`
  return (
    <div>
     <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={true} >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1"  icon={<PieChartOutlined /> }>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            
            <Menu.Item key="9" icon={<FileOutlined />} >
            option 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="flex-split">
          
          <div className="flex-split-left">
         
              <h1>HTML</h1>
              <AceEditor
                mode="html"
                theme="dracula"
                fontSize={15}
                showPrintMargin={true}
                focus={true}
                onChange={x=>sethtml(x)}
                height= {"50%"}
                width={"100%"}
              
              />
              <h1>CSS</h1>
              <AceEditor
                mode="css"
                theme="dracula"
                fontSize={15}
                showPrintMargin={true}
                focus={true}
                onChange={x=>setcss(x)}
                height= {"50%"}
                width={"100%"}
              
              />
              
          </div>
         
          <div className="flex-split-right">
          
             <React.Fragment>
               <GlobalStyle />
               {parse(html)}
             </React.Fragment>
              
             
          </div>
         
         
        </Layout>
      </Layout>
      
      
    </div>
  )
}

export default App
