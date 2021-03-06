import { AUTH_USER, AUTH_ERROR } from '../actions/types'

const INTIAL_STATE = {
    authenticated: '',
    errorMessage: ''
};

export default(state = INTIAL_STATE, action) => { 
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenicated: action.payload }
        case AUTH_ERROR: 
            return { ...state, errorMessage: action.payload }
        default:
            return state; 
    }
}