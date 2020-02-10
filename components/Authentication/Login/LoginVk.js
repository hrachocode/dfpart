import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import AuthHeader from '../Includes/authHeader';
// import { initVkApi } from '../utils';
import VkLogo from '../../assets/images/vk-color.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getVkuser } from '../utils';
import { CALLBACK_PATH } from '../../../configs/constants';


const LoginVk = ({ history }) => {
    const dispatch = useDispatch();
    const userID = useSelector(state => state.userAuthenticated)
    useEffect(() => {
        (!userID || Object.getOwnPropertyNames(userID).length === 0) && getVkuser(dispatch, history);
    }, [userID, dispatch, history]);
    return (
        <div className="form-reg">
            <AuthHeader />
            <div className="form-reg__block">
                <a href={`${CALLBACK_PATH}`} className="white-btn"><span className="icon"><img src={VkLogo} alt="VK logo" /></span>Войти через ВКонтакте</a>
                <span className="form-reg__bottom-link"><Link to={`/auth/basic-auth`}>Авторизоваться через e-mail</Link></span>
                <span className="form-reg__bottom-link"><Link to={`/auth/register`}>Зарегистрироваться</Link></span>
            </div>
        </div>
    )
}
export default LoginVk;