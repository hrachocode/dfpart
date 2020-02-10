import React from 'react';
import { USER_PATH, AUTH_PATH } from '../../configs/constants';
import { emailRegex, passwordRegex } from '../../configs/regex';
import { getDataFromServer } from '../../utils';
import { errorMessages } from '../../configs/messages';
import { userAuthenticated, errorIndicated } from '../../store/actions';

const setEmail = (history, email, path) => email.current.value.length > 0 && emailRegex.test(email.current.value) ? history.push(`/auth/${path}`, { email: email.current.value }) : console.log('Введена невалидная электронная почта');

const registerUser = async (history, path, passwordRef, dispatch) => {
    const password = passwordRef.current.value;
    if ((passwordRegex).test(password)) {
        if (path === '/auth/set-password') {
            history.push('/auth/repeat-password', { email: history.location.state.email, password })
        } else {
            if (password === history.location.state.password) {
                const init = {
                    method: 'POST',
                    body: JSON.stringify({
                        email: history.location.state.email,
                        password: history.location.state.password
                    })
                }
                const setUserData = await getDataFromServer(`${USER_PATH}/register`, init)
                if (!setUserData.error) {
                    const setUser = dispatch(userAuthenticated(setUserData));
                    setUser && history.push('/auth/completed');
                } else {
                    dispatch(errorIndicated(errorMessages['userAlreadyExist']))
                }
            }else{
                dispatch(errorIndicated(errorMessages['passwordsDoesntMatch']));
            }
        }
    }else{
        dispatch(errorIndicated(errorMessages['passwordIsInvalid']));
    }
}

const loginUser = async (email, passwordRef, history, dispatch) => {
    const password = passwordRef.current.value;
    if (password.length > 0 && passwordRegex.test(password)) {
        const init = {
            method: 'POST',
            body: JSON.stringify({
                username: email,
                password
            })
        }
        const getUserData = await getDataFromServer(`${AUTH_PATH}/local`, init);
        if (!getUserData.error) {
            const isAuthed = dispatch(userAuthenticated(getUserData))
            isAuthed.user.id && isAuthed.user.isEmailVerified ? history.push('/') : history.push('/auth/recovery-completed', JSON.stringify({
                title: ['Вам на почту отправлено письмо', <br key={2} />, 'с ссылкой для верификации почты.'],
                action: 'Вернуться на главную'
            }))
        } else {
            getUserData.error === 'Invalid password' ? dispatch(errorIndicated(errorMessages['wrongCredentials'])) : dispatch(errorIndicated(errorMessages['userNotExist']))
        }
    } else {
        dispatch(errorIndicated(errorMessages['passwordIsInvalid']))
    }
}

const verifyUserEmail = async (email, token, history, dispatch) => {
    if (emailRegex.test(email) && token) {
        const init = {
            method: 'POST',
            body: JSON.stringify({
                email,
                token
            })
        }
        const verified = await getDataFromServer(`${USER_PATH}/verifyEmail`, init);

        if (!verified.error && verified.id) {
            const updateUser = dispatch(userAuthenticated(verified))
            updateUser && history.push('/');
        } else {
            console.log(verified);
        }
    } else {
        return { errorCode: 1, errorMessage: 'Mail Verification failed' }
    }
}

const sendEmailForRecovery = async (email, history, dispatch) => {
    if ((emailRegex).test(email.value)) {
        const init = {
            method: 'POST',
            body: JSON.stringify({
                email: email.value
            })
        }
        const checkEmail = await getDataFromServer(`${USER_PATH}/getUser`, init);
        if (!checkEmail.error) {
            const emailSent = await getDataFromServer(`${USER_PATH}/forgotPassword`, init);
            !emailSent.error && emailSent.message && history.push('/auth/recovery-completed')
        } else {
            checkEmail.error === 'User not found' && dispatch(errorIndicated(errorMessages['userNotExist']))
        }
    } else {
    }
}

const resetPassword = async (email, newPassword, token, history) => {
    if (history.location.pathname.includes('/auth/passwordReset') && (emailRegex.test(email) && passwordRegex.test(newPassword))) {
        email && newPassword && token && history.push('/auth/repeat-reset-password', { email, newPassword, token })
    } else {
        const { email, newPassword, token } = history.location.state;
        if (email && newPassword && token) {
            const init = {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    newPassword,
                    token
                })
            }
            const resetPass = await getDataFromServer(`${USER_PATH}/passwordReset`, init)
            !resetPass.error && resetPass.status && history.push('/auth/reset-completed')
        }
    }
}

const getVkuser = async (dispatch, history) => {
    const response = await getDataFromServer('users/me');
    if (response.id) {
        const setUser = dispatch(userAuthenticated(response))
        setUser && history.push('/')
    }
}

export {
    setEmail,
    registerUser,
    loginUser,
    verifyUserEmail,
    sendEmailForRecovery,
    resetPassword,
    getVkuser
}