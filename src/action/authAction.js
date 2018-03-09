import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  TRY_LOGIN,
  ON_LOGIN_FAILED,
  ON_LOGIN_SUCCESS
} 
from './type'
import firebase from 'firebase'

export const onEmailChanged = (email)=>{
  return {
    type: EMAIL_CHANGED,
    payload: email
  }
}

export const onPasswordChanged = (password)=>{
  return {
    type: PASSWORD_CHANGED,
    payload: password
  }
}

export const onSubmitt = ()=>{
  return {
    type: TRY_LOGIN
  }
}

export const tryLogin = (email,password)=>{
  return(dispatch)=>{
    dispatch({
      type: TRY_LOGIN
    })
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user =>onSuccessAuth(dispatch,user))
    .catch((err)=>{
      onFailedAuth(dispatch)
    })
  }
}

const onSuccessAuth = (dispatch,user)=>{
  dispatch({
    type: ON_LOGIN_SUCCESS,
    payload: user
  })
}

const onFailedAuth = (dispatch) =>{
  dispatch({
    type: ON_LOGIN_FAILED
  })
}
