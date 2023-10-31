import React from "react";
import { BsFillCartPlusFill, BsFillGiftFill } from "react-icons/bs";

const ProductCard = ({ item }) => {
    return (
        <div className="md:basis-[40%]  py-2 ml-2 shadow-md border-gray-300 rounded-md">
            <div className="">
                <div className="flex flex-col gap-5 mb-2">
                    <div className="font-bold text-gray-900 text-[16px]">
                        Số lượng đánh giá :{" "}
                        <span className="font-500 text-[14px] text-gray-600">
                            {item?.evaluate || 0}
                        </span>
                    </div>
                    {item.colors.length !== 0 && (
                        <div>
                            <h2 className="font-bold text-gray-900 text-[16px] mb-5">
                                Chọn màu để xem giá và chi nhánh có hàng
                            </h2>
                            <div className="mt-1 ml-2 w-full grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-2 ">
                                {item.colors.map((color, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className="flex justify-center gap-2 h-[50px] px-2 items-center rounded-md shadow-md border-2 border-gray-400 hover:scale-105 hover:border-orange-500 relative"
                                        >
                                            <img
                                                src={color?.image}
                                                alt="colorProduct"
                                                className="w-8 h-8"
                                            />
                                            <p className="font-bold text-[12px] flex-1  text-gray-900 ml-1">
                                                {color.label}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full flex my-[10px] justify-center flex-col">
                <h2 className="font-bold text-gray-900 text-[16px] mb-3">
                    Giá sản phẩm
                </h2>
                <button className="mx-auto px-3 py-2 w-[60%] h-[50px] text-[13px] md:text[16px] rounded-md font-bold border-2 border-red-500 ">
                    {item?.price}
                </button>
            </div>
            <div>
                <h2 className="flex flex-row gap-2 font-bold text-gray-900 text-[16px]">
                    <BsFillGiftFill className="text-red-500 h-5 w-5" />
                    <span> Khuyến mãi</span>
                </h2>
                <ul className="grid grid-cols-2 gap-5 mt-1 font-bold text-gray-600">
                    <li className="h-[50px] px-2 py-3 text-center rounded-md shadow-md border-2 border-gray-400 hover:scale-110 hover:border-blue-500 relative">
                        10%
                    </li>
                    <li className="h-[50px] px-2 py-3 text-center rounded-md shadow-md border-2 border-gray-400 hover:scale-110 hover:border-blue-500 relative">
                        20%
                    </li>
                </ul>
            </div>

            <div className="mt-[20px] flex gap-5">
                <button className="px-2 py-2 h-[50px] md:text-[16px] text-[12px] rounded-md font-bold flex-1 bg-orange-500  hover:scale-105 text-white ">
                    Mua hàng
                </button>
                <button className="flex-none flex items-center justify-center flex-col gap-1 text-orange-500 px-3 border-2 border-orange-500 h-[50px] rounded-md hover:scale-105">
                    <BsFillCartPlusFill className="text-orange-500 h-5 w-5" />
                    <small className="font-200 text-[10px]">Thêm vào giỏ</small>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
