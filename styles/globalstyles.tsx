import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Satoshi.woff2') format('woff2')
    font-display: fallback;
  }
  @font-face {
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/ClashDisplay.woff2') format('woff2')
    font-display: fallback;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline; 
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block; 
  } 
  
  body { 
    line-height: 1; 
  } 
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  } 
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  *, *::after, *::before{
  
   box-sizing: border-box;
  
  }
  
  a {
    color: inherit;
    text-decoration: none;
    outline: none;
  }

  html, body {
    font-size: 16px;
    font-family: Satoshi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1. h2, h3, h4, h5, h6 {
    font-family: Clash Display;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.05em;
  }

  h3, h4, h5, h6 {
    font-weight: 500;
  }

  h1 {
    font-size: 3.052rem;
  }

  
  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5, h6 {
    text-transform: uppercase;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }





`;

export default GlobalStyle;
