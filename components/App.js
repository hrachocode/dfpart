import React from 'react';
import { Switch } from 'react-router-dom';

import './assets/style.css';

// Custom components
import { HandleChildRoutes } from '../utils';
import { routes } from '../configs/routesConfig';

const App = () => {

  return (
    <Switch>
      {routes.map((route, i) => (
        <HandleChildRoutes key={i} {...route} />
      ))}
    </Switch>
  )
}
export default App;