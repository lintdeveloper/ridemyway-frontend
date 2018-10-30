import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeComponent } from '../pages/home/HomeComponenet';
import AboutPageCOmponent from '../pages/about/AboutComponent';

const AppRouter = () => (
  <div className="wrapper">
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/about" component={AboutPageCOmponent} />
    </Switch>
  </div>
);

export default AppRouter;
