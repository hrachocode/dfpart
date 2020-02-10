import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';

// Custom components
import RecoveryHeader from '../Includes/recoveryHeader';
import { sendEmailForRecovery } from '../utils';
import { useDispatch, useSelector } from 'react-redux';

const EmailToRecover = ({ history }) => {
    const email = useRef(null);
    const dispatch = useDispatch();
    const error = useSelector(state => state.errorIndicated);
    return (
        <div className="form-reg">
            <RecoveryHeader title="Восстановление пароля" description={['Укажите ваш e-mail, мы вышлем на него инструкцию', <br key={0} />, 'по восстановлению пароля.'  ]} />
            <div className="form-reg__block">
                <div className="form-reg__block-line">
                    <div className="form-group  center">
                        <input ref={email} type="email" name="text" required />
                        <label htmlFor="text" className="label-name  center">
                            <span className="content-name">
                              Адрес e-mail
                            </span>
                        </label>
                    </div>
                    <button className="btn-quad" onClick={e => sendEmailForRecovery(email.current, history, dispatch)}></button>
                </div>
                <span className="form-reg__bottom-link immitate-link" onClick={e => history.goBack()}>Я помню пароль</span>
            </div>
            {error && <p style={{ color: 'white' }}>{error}</p>}
        </div>
    )
}

export default withRouter(EmailToRecover);