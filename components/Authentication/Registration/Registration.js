import React, { useRef } from 'react';

// Custom components
import AuthHeader from '../Includes/authHeader';
import { setEmail } from '../utils';
import { Link } from 'react-router-dom';

const Registration = ({ history }) => {
  const email = useRef(null);
  return (
    <div className="form-reg">
      <AuthHeader />
      <div className="form-reg__block">
        <div className="form-group center">
          <input ref={email} type="text" name="text" autoComplete="off" required />
          <label htmlFor="text" className="label-name  center">
            <span className="content-name">
              Адрес e-mail
              </span>
          </label>
        </div>
        <a onClick={e => setEmail(history, email, 'set-password')} className="btn">Зарегистрироваться</a>
        <span className="form-reg__bottom-link immitate-link" onClick={e => history.goBack()}>У меня уже есть аккаунт</span>
      </div>
    </div>
  )
}
export default Registration;