import { DECREMENT, INCREMENT, ADDITEM, PLUS, ADDTOCART, REMOVE, UPDATEQUANTITY, updatequantity } from "../actions"

const countLocalStorage = JSON.parse(localStorage.getItem("count") || 0)
const cart = JSON.parse(localStorage.getItem("cart") || "[]")
const intiCount = {
   numberCart: countLocalStorage,
   Cart: cart
}
function reducer(state = intiCount, action) {
    console.log(action.type)
    switch (action.type) {
        case ADDTOCART :
            if(state.numberCart === 0)
            {
                let cart = {
                    id: action.newItem.id,
                    quantity: 1,
                    name: action.newItem.name,
                    price: action.newItem.price,
                    image: action.newItem.image,
                    address: action.newItem.address
                }
                state.Cart.push(cart);
            }
            else{
                let check = false;
                state.Cart.map((item,key)=>{
                    if(item.id === action.newItem.id)
                    {
                        state.Cart[key].quantity++;
                        check=true;
                    }
                    return 'ok';
                });
                if(check === false){
                    let cart = {
                        id: action.newItem.id,
                        quantity: 1,
                        name: action.newItem.name,
                        price: action.newItem.price,
                        image: action.newItem.image,
                        address: action.newItem.address
                    }
                    state.Cart.push(cart);
                }
            }
            return{
               ...state,
               numberCart: state.numberCart + 1
            }
        case UPDATEQUANTITY :
            const oldQuantity = 0;
            state.Cart.map((item,key)=> {
                if(item.id === action.id)
                {
                  console.log(item)
                    state.Cart[key].quantity = parseInt(action.updateQuantity);
                }
            })
            console.log(oldQuantity)
            return {
                ...state,
            }
        case ADDITEM :
            return{
                array: [...state.array, action.newItem]
            }
        case INCREMENT:
            return{
                count: state.count + 1
            }
        case DECREMENT:
            return{
                count: state.count - 1
            }
        case REMOVE:
            const numberMinus = [];
            state.Cart.map((item) => {
                if(item.id === action.id){
                    numberMinus.push(item)
                }
                return "okk";
            })
            console.log(numberMinus)
            return{
                ...state,
                Cart: state.Cart.filter(item => item.id !== action.id),
                numberCart: state.numberCart - numberMinus[0].quantity
            }
        case PLUS:
            return{
                all: parseInt(action.a) + parseInt(action.b)
            }
        default:
            return state;
    }
}

export default reducer;