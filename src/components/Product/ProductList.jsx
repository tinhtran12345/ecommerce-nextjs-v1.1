"use client";

import React, { useMemo, useState } from "react";

import { Loading, Pagination, ProductItem } from "..";

let PageSize = 8;

const ProductList = ({ products, loading }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="font-bold md:text-3xl text-2xl mb-5">
                        Sản phẩm nổi bật
                    </h2>

                    <div>
                        {loading ? (
                            <div className="w-full mt-2 p-2">
                                <Loading />
                            </div>
                        ) : (
                            <div>
                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-2 p-2">
                                    {currentTableData.map((product, index) => (
                                        <ProductItem
                                            key={index}
                                            product={product}
                                        />
                                    ))}
                                </div>
                                <Pagination
                                    currentPage={currentPage}
                                    totalCount={products.length}
                                    pageSize={PageSize}
                                    onPageChange={(page) =>
                                        setCurrentPage(page)
                                    }
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
