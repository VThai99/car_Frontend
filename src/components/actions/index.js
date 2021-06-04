export const INCREMENT =  'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITEM = 'ADDITEM';
export const PLUS = 'PLUS';
export const ADDTOCART = 'ADDTOCART';
  export function addtocart(){
    return {
    type: "ADDTOCART"
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
  export function plus(){
    return{
      type: "PLUS"
    }
  }