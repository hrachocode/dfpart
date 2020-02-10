import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function AuthProtection({ children, ...rest }) {

      const userAuthenticated = useSelector(state => state.userAuthenticated);
      return (
            <Route
                  {...rest}
                  render={({ location }) =>
                        userAuthenticated && userAuthenticated.isEmailVerified ? (
                              children
                        ) : (
                                    <Redirect
                                          to={{
                                                pathname: "/auth/vk-auth",
                                                state: { from: location }
                                          }}
                                    />
                              )
                  }
            />
      );
}

export default AuthProtection;