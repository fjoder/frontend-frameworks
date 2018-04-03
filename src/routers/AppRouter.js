import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Search, Mine, NotFound } from '../screens';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
