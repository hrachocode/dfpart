import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

// custom Components
import AuthHeader from '../Includes/authHeader';
import { setEmail } from '../utils';


const LoginEmail = ({ history }) => {
  const email = useRef(null);
  return (
    <div className="form-reg">
      <AuthHeader />
      <div className="form-reg__block">
        <div className="form-reg__block-line">
          <div className="form-group center">
            <input ref={email} type="email" autoComplete='off' name="login-email" required />
            <label htmlFor="text" className="label-name center">
              <span className="content-name">
                Адрес e-mail
                </span>
            </label>
          </div>
          <button className="btn-quad" onClick={e => setEmail(history, email, 'basic-auth-pass')}></button>
        </div>
        <span className="form-reg__bottom-link"><Link to={`/auth/vk-auth`}>Войти через ВКонтакте</Link></span>
        <span className="form-reg__bottom-link"><Link to={'/auth/register'}>Зарегистрироваться</Link></span>
      </div>

    </div>
  )
}
export default LoginEmail;