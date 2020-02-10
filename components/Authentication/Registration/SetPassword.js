import React, { useRef } from 'react'
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// custom Components
import RecoveryHeader from '../Includes/recoveryHeader';
import { registerUser } from '../utils';

const SetPassword = ({ history, title, description, action }) => {

  const { path } = useRouteMatch();
  const password = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(state => state.errorIndicated)
  
  return (
    <div className="form-reg">
      <RecoveryHeader title={title} description={description} />
      <div className="form-reg__block">
        <div className="form-reg__block-line">
          <div className="form-group center">
            <input ref={password} title="Пароль должен содержать как минимум одну большую букву, можно и цифры" type="password" name="text" required />
            <label htmlFor="text" className="label-name center">
              <span className="content-name">
                {action}
              </span>
            </label>
          </div>
          <button className="btn-quad" onClick={e => registerUser(history, path, password, dispatch)}></button>
        </div>
      </div>
      {error && <p style={{ color: 'white' }}>{error}</p>}
    </div>
  )
}
export default SetPassword;