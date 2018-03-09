import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  TRY_LOGIN,  
  ON_LOGIN_FAILED , 
  ON_LOGIN_SUCCESS
} from '../action/type'

const INITIAL_STATE = {
  email: '',
  password: '',
  isLoading : false,
  user : null,
  isSignedIn : false,
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
      return {...state, ...INITIAL_STATE, user: action.payload, isSignedIn: true }
    case ON_LOGIN_FAILED:
      return {...state, password: '', isLoading: false, failed: true }
    case TRY_LOGIN:
      return {...state, isLoading: true }
    default:
      return state
  }
}