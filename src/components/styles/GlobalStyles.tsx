import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  *, 
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0; 
  }

  html {
    font-size: 10px;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: "Josefin Sans SemiBold", "Poppins Regular",  "Josefin Sans", "Josefin Sans Bold", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #1f1f20;
  }

  body h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* nav, */
  footer,
  header,
  section,
  main {
    display: block;
  }

  ul,
  ul li {
    list-style: none;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

`;
