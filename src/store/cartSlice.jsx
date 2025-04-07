import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: []
    },
    reducers: {
        addCart: (state, action) => {
            const alreadyExist = state.data.find(item => item.id === action.payload.id)
            if (!alreadyExist) {
                state.data.push({...action.payload, quantity: 1})
            }
        },
        removeCart: (state, action) => {
            const filterData = state.data.filter(item => item.id !== action.payload)
            state.data = filterData
        },
        increasePrice: (state, action) => {
            const item = state.data.find(item => item.id === action.payload)
            if(item){
                item.quantity += 1
            }
        },
        decreasePrice: (state, action) => {
            const item = state.data.find(item => item.id === action.payload)
            if(item){
                if(item.quantity > 1){
                    item.quantity -= 1
                }else{
                    state.data = state.data.filter(i => i.id !== action.payload)
                }
            }
        }
    }
})

export const { addCart, removeCart, increasePrice, decreasePrice } = cartSlice.actions;
export default cartSlice.reducer;