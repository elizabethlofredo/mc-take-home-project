import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import routes from './routes';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ component, props}, index) => (
        <Route key={index} {...props}>{component}</Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
