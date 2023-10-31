import { DOTS, usePagination } from "@/hook/usePagination";
import React from "react";
import { icons } from "@/lib/icons/icons";

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange =
        usePagination({
            currentPage, // 1
            totalCount, // 32
            siblingCount, // 1
            pageSize, // 8
        }) || [];

    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <div className=" border-t border-gray-200 bg-white mt-5 px-4 py-3 sm:px-6 ">
            {/* for mobile */}
            <div className="flex justify-end sm:hidden">
                <button
                    onClick={onPrevious}
                    disabled={currentPage === 1}
                    className={` w-[90px] disabled:opacity-75 ${
                        currentPage === 1 && "cursor-not-allowed"
                    } font-bold relative inline-flex items-center rounded-md border border-gray-300 bg-orange-300 px-4 py-2 text-sm text-gray-700 hover:bg-orange-400`}
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    disabled={currentPage === lastPage}
                    className={`w-[90px] ${
                        currentPage === lastPage && "cursor-not-allowed"
                    } font-bold relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-orange-300 px-4 py-2 text-sm  text-gray-700 hover:bg-orange-400`}
                >
                    Next
                </button>
            </div>

            <ul className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">{lastPage}</span> pages
                    </p>
                </div>
                <button
                    disabled={currentPage === 1}
                    className={`${
                        currentPage === 1 && "cursor-not-allowed"
                    } hover:scale-110 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                    onClick={onPrevious}
                >
                    <icons.GrFormPrevious />
                </button>
                {paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                        return <li key={index}>&#8230;</li>;
                    }

                    return (
                        <li
                            className={`${
                                currentPage === pageNumber && "bg-orange-500"
                            } cursor-pointer relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                            key={index}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <button
                    disabled={currentPage === lastPage}
                    className={`${
                        currentPage === lastPage && "cursor-not-allowed"
                    } hover:scale-110 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                    onClick={onNext}
                >
                    <icons.GrFormNext />
                </button>
            </ul>
        </div>
    );
};

export default Pagination;
