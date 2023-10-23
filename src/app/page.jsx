"use client";

import { Carousel, Footer, ProductList } from "@/components";
import { getAllProducts } from "@/lib/fakeApi/productApi";
import { allProducts, productLoading } from "@/redux/Product/productSlice";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const { products, loading } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProducts = async () => {
            dispatch(productLoading());
            const response = await getAllProducts();
            dispatch(allProducts(response));
        };
        fetchProducts();
    }, [dispatch]);
    return (
        <div className="max-w-full bg-white">
            <div className="max-w-[1220px] m-auto py-0 px-10">
                <Carousel />
                <ProductList products={products} loading={loading} />
            </div>
        </div>
    );
}
