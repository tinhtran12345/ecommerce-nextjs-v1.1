import { getAllProducts, getProductItem } from "@/lib/fakeApi/productApi";
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
    },
    reducers: {
        allProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        productLoading: (state, action) => {
            state.loading = true;
        },
    },
});

export const fetchProducts = () => async (dispatch) => {
    dispatch(productLoading());
    const response = await getAllProducts();
    dispatch(allProducts(response));
};

export const fetchProductItem = (id) => async (dispatch) => {
    dispatch(productLoading());
    const response = await getProductItem(id);
    dispatch(allProducts(response));
};

export const { allProducts, productLoading } = productSlice.actions;

export default productSlice.reducer;
