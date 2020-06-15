import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import { ProvideAuth } from './services/AuthService';
import { ThemeProvider, ColorModeProvider, CSSReset } from '@chakra-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <ProvideAuth>
          <CSSReset />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
          </style>
          <Routes />
        </ProvideAuth>
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
