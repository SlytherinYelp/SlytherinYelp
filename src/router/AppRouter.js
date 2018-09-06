import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import BookPage from '../components/BookPage';

const AppRouter = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/book/:bookId" component={BookPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
