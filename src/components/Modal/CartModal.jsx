"use client";
import useOnClickOutside from "@/hook/useOnClickOutside";
import React, { useRef } from "react";

const CartModal = ({ carts, setShowCart }) => {
    const { cart, totalCount } = carts;
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setShowCart(false);
    });

    return (
        <div className="">
            <div
                ref={ref}
                className="h-[400px] md:w-[500px] bottom-0 mx-auto bg-white z-50 text-black px-5 py-3 border-2 border-gray-300 rounded-md overflow-y-auto"
            >
                <h2 className="font-bold text-2xl mb-3 flex items-center">
                    Giỏ hàng
                    <span className="text-[16px] px-3 py-2 text-center ml-3">
                        {totalCount}
                    </span>
                </h2>
                <div>
                    {cart.length !== 0 ? (
                        <div>
                            {cart.map((item, index) => {
                                return (
                                    <div
                                        className="flex gap-4 mb-3 items-center border-b-2 border-gray-300"
                                        key={index}
                                    >
                                        <img
                                            src={item.image}
                                            alt="product"
                                            className="w-10 h-10"
                                        />
                                        <span className="px-2 py-3">
                                            {item.id.slice(0, 25)}
                                        </span>
                                        <span className="px-2 py-3">1</span>
                                        <span className="px-2 py-3">
                                            {item.price}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>Không có sản phẩm trong giỏ</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartModal;
