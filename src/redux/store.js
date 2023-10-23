import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import productReducer from "./Product/productSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    },
});
