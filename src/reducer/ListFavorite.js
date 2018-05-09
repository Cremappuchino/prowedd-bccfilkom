import { TOGGLE_FAVORITE, UNTOGGLE_FAVORITE } from '../action/type'

const INITIAL_STATE = {
  list : []
}


export const ListFavorite = (state = INITIAL_STATE, action)=>{
  
  switch(action.type){
    case TOGGLE_FAVORITE:
      return {...state, list: [...state.list, action.payload] }
    case UNTOGGLE_FAVORITE:
      const remove = state.list.filter((vendor)=> vendor.key !== action.payload.key )
      
      return {...state, list : remove }
    default:
      return state
  }
}