import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import 'styles/style.css';
import 'styles/responsive.css';
import AppRouter from './routes/AppRouter';
import { loadSideBar, stickyNav } from './util/stickynav';

const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

const root = document.getElementById('root');

render(<App />, root);
loadSideBar();
stickyNav();
