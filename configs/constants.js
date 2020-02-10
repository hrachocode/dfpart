const HOST = `${window.location.protocol}//${window.location.hostname}${window.location.port === "" ? window.location.port : ":3000"}`;
const USER_PATH = 'users';
const AUTH_PATH = 'auth';
const API_PATH = 'api';
const CALLBACK_PATH = `/${API_PATH}/auth/vkontakte`;

export {
      HOST,
      USER_PATH,
      API_PATH,
      CALLBACK_PATH,
      AUTH_PATH
}