import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        totalCount: 0,
    },
    reducers: {
        getToCard: (state, action) => {},
        addToCart: (state, action) => {
            state.cart.push(action.payload);
            state.totalCount = state.totalCount + 1;
        },
        removeToCart: (state, action) => {
            // const array = [2, 5, 9];

            // console.log(array);

            // const index = array.indexOf(5);
            // if (index > -1) {
            //     // only splice array when item is found
            //     array.splice(index, 1); // 2nd parameter means remove one item only
            // }

            // // array = [2, 9]
            // console.log(array);
            state.cart.push(action.payload);
            state.totalCount = state.totalCount - 1;
        },
    },
});

export const { addToCart, removeToCart, getToCard } = cartSlice.actions;

export default cartSlice.reducer;
