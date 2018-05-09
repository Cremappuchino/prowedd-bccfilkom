import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { updateProfile } from './EditProfile'
import { ListFavorite } from './ListFavorite'

export default combineReducers({
  auth: authReducer,
  profile : updateProfile,
  favorite: ListFavorite
})