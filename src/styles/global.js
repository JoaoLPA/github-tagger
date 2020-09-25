import { createGlobalStyle } from 'styled-components';

import { darkGray } from './colors';

export default createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: sans-serif;
  }

  #root{
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    color: ${darkGray};
  }

  body, input, button {
    font-size: 1.2rem;
    font-family: 'Lato', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
