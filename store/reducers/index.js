import * as actionTypes from '../actionTypes';

const initialState = {
    userAuthenticated: false,
    errorIndicated: false,
    successIndicated: false,
    analyzeData: false,
    request: [],
    popupIndicated: {
        isOpen: false,
        content: false
    },
    modalIndicated: {
        isOpen: false,
        content: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_AUTHENTICATED:
            return {
                ...state,
                userAuthenticated: { ...action.user }
            }
        case actionTypes.ERROR_INDICATED:
            return {
                ...state,
                errorIndicated: action.error
            }
        case actionTypes.SUCCESS_INDICATED:
            return {
                ...state,
                successIndicated: action.success
            }
        case actionTypes.ANALYZE_DATA:
            return {
                ...state,
                analyzeData: action.data
            }
        case actionTypes.USERS_REQUESTS:
            return {
                ...state,
                request: action.request
            }
        case actionTypes.POPUP_INDICATED:
            return {
                ...state,
                popupIndicated: {isOpen: !state.popupIndicated.isOpen, ...action.content}
            }
        case actionTypes.MODAL_INDICATED:
            return {
                ...state,
                modalIndicated: {isOpen: !state.modalIndicated.isOpen, ...action.content}
            }
        default:
            return state;
    }
}

export default reducer;