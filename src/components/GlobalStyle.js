import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

    }
    body{
        
        background-color: #5D5B6A;
        color:white;
        font-family: 'Roboto Mono', monospace;
        overflow: hidden;
    }

`;
export default GlobalStyle;
