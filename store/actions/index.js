import * as actionTypes from '../actionTypes';

const userAuthenticated = user => { return { type: actionTypes.USER_AUTHENTICATED, user } };
const errorIndicated = error => { return { type: actionTypes.ERROR_INDICATED, error } };
const successIndicated = success => { return { type: actionTypes.SUCCESS_INDICATED, success } };
const setAnalyzeData = data => { return { type: actionTypes.ANALYZE_DATA, data } };
const setUserRequests = request => { return { type: actionTypes.USERS_REQUESTS, request } };
const popupIndicated = content => { return { type: actionTypes.POPUP_INDICATED, content } };
const modalIndicated = content => { return { type: actionTypes.MODAL_INDICATED, content } };

export {
    userAuthenticated,
    errorIndicated,
    successIndicated,
    setAnalyzeData,
    setUserRequests,
    popupIndicated,
    modalIndicated
}