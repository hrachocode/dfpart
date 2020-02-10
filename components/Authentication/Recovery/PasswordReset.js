import React, { useRef } from 'react';
import { resetPassword } from '../utils';

const PasswordReset = ({ title, description, action, history}) => {
    const password = useRef(null);
    const email = new URLSearchParams(document.location.search.substring(1)).get('email');
    const token = new URLSearchParams(document.location.search.substring(1)).get('token');
    return (
        <div className="form-reg">
            <span className="form-reg__title">{title}</span>
            <span className="form-reg__text form-reg__text--gray">{description}</span>
            <div className="form-reg__block">
                <div className="form-reg__block-line">
                    <div className="form-group  center">
                        <input ref={password} title="Пароль должен содержать как минимум одну большую букву, можно и цифры" type="password" name="text" required />
                        <label htmlFor="text" className="label-name  center">
                            <span className="content-name">
                                {action}
                            </span>
                        </label>
                    </div>
                    <button className="btn-quad" onClick={e => resetPassword(email, password.current.value, token, history)}></button>
                </div>
            </div>
        </div>
    )
}

export default PasswordReset;