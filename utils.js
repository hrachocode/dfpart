import React from 'react';
import { Route } from 'react-router-dom';
import { HOST, API_PATH } from './configs/constants';


// Functions library.
// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
const HandleChildRoutes = route => {
      return (
            <Route
                  path={route.path}
                  render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} title={route.title} description={route.description} action={route.action} />
                  )}
            />
      );
};

const getDataFromServer = async (route, options = {}) => {
      
      try {
            route = `${HOST}/${API_PATH}/${route}`;
            if(!options.headers){
                  options.headers = {
                        'Content-Type': 'application/json'
                  }
            }
            const fetchData = await fetch(route, options);
            const response = await fetchData.json();
            return response;
      } catch (error) {
            return error;
      }
}



export {
      HandleChildRoutes,
      getDataFromServer
}