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
                state.data.push(action.payload)
            }
        },
        removeCart: (state, action) => {
            const filterData = state.data.filter(item => item.id !== action.payload)
            state.data = filterData
        }
    }
})

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;