import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store'
import GlobalStyle from './GlobalStyle';
import Header from './Header';
import Main from './Main';

const Home = lazy(() => import('./Home'));


const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <Header />
      <Main>
        <Suspense fallback={null}>
          <Route path="/" exact component={Home} />
        </Suspense>
      </Main>
    </Router>
  </Provider>
);


export default App;
