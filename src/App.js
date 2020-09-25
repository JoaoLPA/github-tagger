import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import GlobalStyles from './styles/global';

import Routes from './routes';

import AppTitle from './components/Title';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <AppTitle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
