import { TOGGLE_FAVORITE, UNTOGGLE_FAVORITE } from './type'



export const toggleFav = (vendor) => {
  console.log(vendor)
  return {
    type: TOGGLE_FAVORITE,
    payload: vendor
  }
}

export const unToggleFav = (vendor) => {
  return {
    type : UNTOGGLE_FAVORITE,
    payload: vendor
  }
}