import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import {
  HomePage,
  PageNotFound,
  RedirectPage,
  StatsPage
} from '../pages'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:code" component={RedirectPage} />
        <Route exact path="/:code/stats" component={StatsPage} />
        <Route exact path="/*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
};
