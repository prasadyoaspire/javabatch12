import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name : 'counterS',
    initialState : {
        counterValue : 100
    },
    reducers : {
        increment : state => {
           state.counterValue = state.counterValue+1
        },
        decrement : state => {
            state.counterValue = state.counterValue-1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
