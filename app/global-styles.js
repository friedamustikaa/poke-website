import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', sans-serif;
  }

  #app {
    font-family: 'Montserrat', sans-serif;
    background-color: #F5F5F5;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5em;
  }

  .main-yellow{
    color: #F5CE32;
  }
`;

export default GlobalStyle;
