import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkmode = {

}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkmode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
