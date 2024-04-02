
const initialState = {
    counterValue : 0
}
export function counterReducer(state = initialState,action) {

    switch(action.type) {

        case "INCREMENT" :
            return {
                ...state,
                counterValue : state.counterValue+1
            }
        case "DECREMENT" :
            return{
                ...state,
                counterValue : state.counterValue-1
            }  
         default :     
            return state;
    }
}