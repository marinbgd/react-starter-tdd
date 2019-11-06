import {
    USER_LOGIN_IN_PROGRESS,
    USER_LOGIN_ERROR,
    USER_LOGIN_SUCCESS,
} from './Login.actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    errorMessage: '',
    data: null,
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case USER_LOGIN_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }

    case USER_LOGIN_ERROR: 
        return {
            ...state,
            isLoading: false,
            errorMessage: 'Login error',
        }

    case USER_LOGIN_SUCCESS: 
        return {
            ...state,
            isLoading: false,
            errorMessage: '',
            data: action.payload
        }
    }
}