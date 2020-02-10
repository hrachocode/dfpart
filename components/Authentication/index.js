import React from 'react';
import { Switch } from 'react-router-dom';

// Config
import { HandleChildRoutes } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { errorIndicated } from '../../store/actions';


const Authentication = ({ routes, history }) => {
      const error = useSelector(state => state.errorIndicated);
      const dispatch = useDispatch();
      history.listen((location, action) => error && dispatch( errorIndicated('')));
      return (
            <React.Fragment>
                  <div className="user-form form-page">
                        <div className="user-form__content">
                              <Switch>
                                    {routes.map((route, i) => (
                                          <HandleChildRoutes key={i} {...route}  />
                                    ))}
                              </Switch>
                        </div>
                  </div>
            </React.Fragment>
      );
}

export default Authentication;