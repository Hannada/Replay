import {postUser, postSession, deleteSession} from '../util/session_util'
 import * as userUtil from '../util/user_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USER = 'RECEIVE_USER'
export const RESET_USER_UI_STATE = 'RESET_USER_UI_STATE'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveCurrentUser = (user) => {
    return ({
    type: RECEIVE_CURRENT_USER,
    user
})}

const logoutCurrentUser = () =>{
    return({
    type: LOGOUT_CURRENT_USER
})}

export const receiveSessionErrors = errors => { 
    return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
  
}
export const receiveUserErrors = errors => {
    return ({
    type: RECEIVE_USER_ERRORS,
    errors
  });
  
}

const receiveUserByEmail = (user) => {

    return ({
        type: RECEIVE_USER,
        user
    })
}

export const resetUserUIState = () => {
    return ({
        type: RESET_USER_UI_STATE
    })
}

export const clearErrors = () => {
    return({
        type: CLEAR_ERRORS
    })
}





export const createNewUser = formUser => dispatch =>{
    return(
    postUser(formUser).then( (user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
)}

 
export const login = formUser => dispatch => {
    return(
    postSession(formUser)
    .then( (user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
    .then( () => dispatch(resetUserUIState()))
)}

export const logout = () => dispatch => (
    deleteSession().then( () => dispatch(logoutCurrentUser()))
)

export const fetchUserByEmail = (formEmail) => dispatch => {
    return(
    userUtil.fetchUserByEmail(formEmail).then( (user) => dispatch(receiveUserByEmail(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
)}

// export const fetchCurrU
