import React, { useState ,useEffect} from 'react';
import logo from './logo.svg';
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import parse from 'html-react-parser';
import styled, { createGlobalStyle } from 'styled-components'




import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-dracula";

import "ace-builds/src-min-noconflict/ext-language_tools"
import "ace-builds/src-noconflict/snippets/html";


import './App.css';
import { Helmet } from 'react-helmet';




function App() {
  
  
  const [html,seth] = useState('')
  const [cs,setc]=useState('')
  
  
  

  const GlobalStyle = createGlobalStyle`${cs}`
  

 
  return (
    <div>
     
      <AceEditor
                mode="html"
                theme="dracula"
                fontSize={15}
                showPrintMargin={true}
                focus={true}
                onChange={x=>seth(x)}
              
      />
      <AceEditor
                mode="html"
                theme="dracula"
                fontSize={15}
                showPrintMargin={true}
                focus={true}
                onChange={x=>setc(x)}
              
      />
      
      <GlobalStyle />
      {parse(html)}
      
      
      
      
    </div>
  )
}

export default App
