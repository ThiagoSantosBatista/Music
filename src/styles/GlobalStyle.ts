import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 7rem;
  }
  body{
    min-height: 100vh;
    font-size: 1.6rem;
  }
  img{
    display: block;
    max-width: 100%;
  }
  svg{
    display: block;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyle;
