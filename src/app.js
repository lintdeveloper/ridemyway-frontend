import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { loadSideBar, stickyNav } from './util/stickynav';
import store from './store';
import 'styles/style.css';
import 'styles/responsive.css';


axios.defaults.baseURL = 'https://ridemw.herokuapp.com/api/v1/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

const root = document.getElementById('root');

render(<Provider store={store}><App /></Provider>, root);
loadSideBar();
stickyNav();
