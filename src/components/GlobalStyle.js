import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: 'Odibee Sans';
    margin: 0;
    height: 100%;
    background: ghostwhite;
  }
`;


export default GlobalStyle;
