"use client";
import React from "react";
import { ProductList } from "..";
import { fetchProducts } from "@/redux/Product/productSlice";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const ProductMainList = () => {
    const { products, loading } = useSelector((state) => state.product);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return <ProductList products={products} loading={loading} />;
};

export default ProductMainList;
