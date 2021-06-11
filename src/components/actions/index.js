export const INCREMENT =  'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const REMOVE = 'REMOVE';
export const ADDITEM = 'ADDITEM';
export const PLUS = 'PLUS';
export const ADDTOCART = 'ADDTOCART';
export const UPDATEQUANTITY = 'UPDATEQUANTITY'
  export function addtocart(){
    return {
    type: "ADDTOCART"
  }
}
  export function updatequantity(){
    return{
      type: "UPDATEQUANTITY"
    }
  }
export function increment() {
    return {
      type: "INCREMENT"
    }
  }
  
  export function decrement() {
    return {
      type: "DECREMENT"
    }
  }
  export function additem(){
    return {
      type: "ADDITEM"
    }
  }
  export function remove(){
    return {
      type: "REMOVE"
    }
  }
  export function plus(){
    return{
      type: "PLUS"
    }
  }