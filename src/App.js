import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import GlobalStyle from './components/GlobalStyle';
import Header from './components/Header';
import Main from './components/Main';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/home'));
const Cats = lazy(() => import('./pages/cats'));
const Characters = lazy(() => import('./pages/characters'));


const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyle />
      <Header />
      <Main>
        <Suspense fallback={<Spinner />}>
          <Route path="/" exact component={Home} />
          <Route path="/cats" component={Cats} />
          <Route path="/lotr" component={Characters} />
        </Suspense>
      </Main>
    </Router>
  </Provider>
);


export default App;
