import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Header from './Header';


const App = () => (
  <Router>
    <GlobalStyle />
    <Header />
  </Router>
);


export default App;
