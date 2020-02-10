import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// custom Components
import AuthHeader from '../Includes/authHeader';
import { loginUser } from '../utils';

const SetLoginPassword = ({ location, history }) => {
  const password = useRef(null);
  const dispatch = useDispatch();
  const error = useSelector(state => state.errorIndicated);

  if (!location.state) {
    history.push('/auth/basic-auth');
  }
  return (
    <div className="form-reg">
      <AuthHeader />
      <div className="form-reg__block">
        <div className="form-reg__block-line">
          <div className="form-group center">
            <input ref={password} title="Пароль должен содержать как минимум одну большую букву, можно и цифры" type="password" name="text" required />
            <label htmlFor="text" className="label-name center">
              <span className="content-name">
                Введите пароль
                </span>
            </label>
          </div>
          <button className="btn-quad" onClick={e => loginUser(location.state.email, password, history, dispatch)} ></button>
        </div>
        <span className="form-reg__bottom-link"><Link to={`/auth/recover`}>Но Помню пароль</Link></span>
      </div>
      {error && location.state && <p style={{ color: 'white' }}>{error}</p>}
    </div>
  )
}
export default SetLoginPassword;