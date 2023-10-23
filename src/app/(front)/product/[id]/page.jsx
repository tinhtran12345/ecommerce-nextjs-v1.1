"use client";

import { Loading, ProductCard, Slider } from "@/components";
import { getProductItem } from "@/lib/fakeApi/productApi";

import { allProducts, productLoading } from "@/redux/Product/productSlice";

import React, { useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

const Page = ({ params }) => {
    const { products, loading } = useSelector((state) => state.product);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProductItem = async () => {
            dispatch(productLoading());
            const response = await getProductItem(params.id);
            dispatch(allProducts(response));
        };
        fetchProductItem();
    }, []);

    return (
        <div className="bg-white">
            {!loading && products?.id ? (
                <div>
                    <div className="pt-6">
                        <nav
                            aria-label="Breadcrumb"
                            className="w-full shadow-md fixed z-10 left-0 bg-white p-2 top-[55px]"
                        >
                            <ol
                                role="list"
                                className="container p-2 mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 md:max-w-7xl lg:px-8"
                            >
                                <li>
                                    <div className="flex items-center">
                                        <a
                                            href="/"
                                            className="mr-2 text-md font-medium text-gray-900 hover:text-orange-400 hover:underline hover:decoration-orange-300"
                                        >
                                            Trang chủ
                                        </a>
                                        <svg
                                            width="16"
                                            height="20"
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-500"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <a
                                            href={`/${products?.brand}`}
                                            className="mr-2 text-md font-medium text-gray-900 hover:text-orange-400 hover:underline hover:decoration-orange-300"
                                        >
                                            {products?.brand}
                                        </a>
                                        <svg
                                            width="16"
                                            height="20"
                                            viewBox="0 0 16 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="hidden md:flex h-5 w-4 text-gray-500"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="hidden md:flex md:text-sm">
                                    <p
                                        aria-current="page"
                                        className="font-medium text-gray-500 hover:text-gray-600"
                                    >
                                        {params.id.slice(0, 25)}
                                    </p>
                                </li>
                            </ol>
                        </nav>
                        {/* mobile */}
                        <h2 className="md:hidden text-[20px] font-bold text-black mt-16">
                            Mã sản phẩm:{" "}
                            <span
                                aria-current="page"
                                className="font-medium text-[16px] text-gray-500 hover:text-gray-600"
                            >
                                {params.id.slice(0, 25)}
                            </span>
                        </h2>
                    </div>

                    <div className="mt-10">
                        <div className="justify-center px-5 py-3 flex gap-2 md:flex-row flex-col">
                            <div className="h-full md:basis-[60%] border-2 border-gray-300 rounded-md">
                                <Slider images={products?.images} />
                            </div>
                            <ProductCard item={products} />
                        </div>

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Thông tin chi tiết
                            </h1>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Page;
