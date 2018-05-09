import { MAXIMUM_PRICE, MINIMUM_PRICE, FIND_VENDOR } from './type'
import firebase from 'firebase'


export const getMinimumPrice = (minimum) =>{
  return {
    type : MINIMUM_PRICE,
    action : minimum
  }
}

export const getMaximumPrice = (maximum) =>{
  return {
    type : MAXIMUM_PRICE,
    action : maximum
  }
}

export const findVendor = (minimum,maximum) =>{
  
  let calculateVendor
  this.db = firebase.database().ref('vendor')
  this.db.on('value', (value) => {
    const vendors = Object.entries(value.val()).map(value => Object.assign({}, { key: value[0] }, value[1]))
    calculateVendor = vendors
  })
  console.log(calculateVendor)
  return {
    type: FIND_VENDOR,
    action : {
      max : maximum,
      min : minimum
    }
  }
}