import React from 'react';

import Authentication from '../components/Authentication';
import AuthProtection from '../components/Authentication/AuthProtection';
/* Login */
import LoginVk from '../components/Authentication/Login/LoginVk';
import LoginEmail from '../components/Authentication/Login/LoginEmail';
import SetLoginPassword from '../components/Authentication/Login/SetLoginPassword';
/* Registration */
import Registration from '../components/Authentication/Registration/Registration';
import SetPassword from '../components/Authentication/Registration/SetPassword';
import CongratsMessage from '../components/Authentication/Registration/CongratsMessage';
/* Recover */
import EmailToRecover from '../components/Authentication/Recovery/EmailToRecover';

/* Admin */
import Profile from '../components/Admin/pages/Profile';
import Analyze from '../components/Admin/pages/Analyze';
import Aside from '../components/Admin/includes/Aside';
import ResultDetails from '../components/Admin/pages/ResultDetails';
import VerifyAccount from '../components/Authentication/Registration/VerifyAccount';
import PasswordReset from '../components/Authentication/Recovery/PasswordReset';
import Results from '../components/Admin/pages/Results';
import Enrichment from '../components/Admin/pages/Enrichment';

export const routes = [
      {
            path: '/',
            exact: true,
            component: () => <AuthProtection exact path='/'> <Analyze /> </AuthProtection>
      },
      {
            path: '/profile',
            component: Profile,
            sidebar: Aside
      },
      {
            path: '/analyze/:id',
            component: ResultDetails,
            sidebar: Aside
      },
      {
            path: '/results',
            component: Results,
            sidebar: Aside
      },
      {
            path: '/enrichment',
            component: Enrichment,
            sidebar: Aside
      },
      {
            path: '/auth',
            component: Authentication,
            routes: [
                  {
                        path: '/auth/vk-auth',
                        component: LoginVk
                  },
                  {
                        path: '/auth/basic-auth',
                        component: LoginEmail
                  },
                  {
                        path: '/auth/basic-auth-pass',
                        component: SetLoginPassword
                  },
                  {
                        path: '/auth/recover',
                        component: EmailToRecover
                  },
                  {
                        path: '/auth/register',
                        component: Registration
                  },
                  {
                        path: '/auth/set-password',
                        component: SetPassword,
                        title: 'Придумайте новый пароль',
                        description: 'Укажите новый пароль для входа в сервис',
                        action: 'Введите пароль'
                  },
                  {
                        path: '/auth/repeat-password',
                        component: SetPassword,
                        title: 'Повторите новый пароль',
                        description: ['Повторите свой новый пароль', <br key={1} />, 'Это на всякий случай, вдруг вы его уже забыли'],
                        action: 'Введите пароль'
                  },
                  {
                        path: '/auth/completed',
                        component: CongratsMessage,
                        title: ['Спасибо! Вам на почту отправлено письмо', <br key={2} />, 'с ссылкой для завершения регистрации.'],
                        action: 'Вернуться на главную'
                  },
                  {
                        path: '/auth/recovery-completed',
                        component: CongratsMessage,
                        title: ['Спасибо! Вам на почту отправлено письмо', <br key={2} />, 'с ссылкой для восстановления пароля.'],
                        action: 'Вернуться на главную'
                  },
                  // Recovery
                  {
                        path: '/auth/passwordReset',
                        component: PasswordReset,
                        title: 'Придумайте новый пароль',
                        description: 'Укажите новый пароль для входа в сервис',
                        action: 'Введите пароль'
                  },
                  {
                        path: '/auth/repeat-reset-password',
                        component: PasswordReset,
                        title: 'Повторите новый пароль',
                        description: ['Повторите свой новый пароль', <br key={1} />, 'Это на всякий случай, вдруг вы его уже забыли'],
                        action: 'Введите пароль'
                  },
                  {
                        path: '/auth/reset-completed',
                        component: CongratsMessage,
                        title: 'Пароль успешно изменен, можете войти новыми данными',
                        action: 'Войти'
                  },
            ]
      },
      // Verification
      {
            path: '/verifyAccount',
            component: VerifyAccount
      }
]