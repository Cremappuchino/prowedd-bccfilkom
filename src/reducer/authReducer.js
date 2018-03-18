import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  TRY_LOGIN,  
  ON_LOGIN_FAILED , 
  ON_LOGIN_SUCCESS,
  ON_SIGNOUT_SUCCESS,
  ON_SIGNOUT_FAILED,
  TRY_SIGNOUT
} from '../action/type'

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading : false,
  user : null,
  failed : false
}

export const authReducer = (state = INITIAL_STATE ,action)=>{
  switch(action.type){
    case EMAIL_CHANGED:
      return {...state, email: action.payload }
    case PASSWORD_CHANGED:
      return {...state, password: action.payload }
    case ON_LOGIN_SUCCESS:
      console.log(action.payload)
      return {...state, ...INITIAL_STATE, user: action.payload }
    case ON_LOGIN_FAILED:
      return {...state, password: '', isLoading: false, failed: true }
    case TRY_LOGIN:
      return {...state, isLoading: true }
    case TRY_SIGNOUT:
      return {...state, isLoading: true }
    case ON_SIGNOUT_SUCCESS:
      return {...state, ...INITIAL_STATE }
    case ON_SIGNOUT_FAILED:
      return {...state, failed: true, isLoading: false}
    default:
      return state
  }
}