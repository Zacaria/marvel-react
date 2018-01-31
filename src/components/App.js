import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import HeroListPage from '../pages/HeroListPage';
import HeroDetailsPage from '../pages/HeroDetailsPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/details/:id" component={HeroDetailsPage} />
          <Route component={HeroListPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
