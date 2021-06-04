import { DECREMENT, INCREMENT, ADDITEM, PLUS, ADDTOCART } from "../actions"

const intiCount = {
    count: 0,
    array: [],
    all: 0,
}
function reducer(state = intiCount, action) {
    switch (action.type) {
        case ADDTOCART :
            return{
                ...state,
                array: [...state.array, action.newItem],
                count: state.count + 1,
            }
        case ADDITEM :
            return{
                ...state,
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
        case PLUS:
            return{
                all: parseInt(action.a) + parseInt(action.b)
            }
        default:
            return state;
    }
}

export default reducer;