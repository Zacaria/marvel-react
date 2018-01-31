import React, { Component } from 'react';
import HeroListPage from '../pages/HeroListPage';
import HeroDetailsPage from '../pages/HeroDetailsPage';

class App extends Component {
  render() {
    return (
      <div>
        <HeroDetailsPage />
        <HeroListPage />
      </div>
    );
  }
}

export default App;
