"use client";

import { useDebounce } from "@/hook/useDebounce";
import { icons } from "@/lib/icons/icons";
import React, { useCallback, useState } from "react";
import { GrFormNext } from "react-icons/gr";

const categories = [
    {
        id: 0,
        slug: "/phone",
        name: "Điện thoại",
        brands: [
            "Apple (iPhone)",
            "Samsung",
            "Oppo",
            "Xiaomi",
            "Honor",
            "realme",
            "Vivo",
            "Asus",
            "Masstel",
            "Nokia",
        ],
        icon: icons.BsPhone,
    },
    {
        id: 1,
        slug: "/laptop",
        name: "Laptop",
        brands: [
            "Apple (MacBook)",
            "Asus",
            "HP",
            "Lenovo",
            "Acer",
            "MSI",
            "Dell",
            "Gigabyte",
            "Huawei",
            "LG",
            "Masstel",
            "Vaio",
            "Microsoft (Surface)",
            "Chuwi",
        ],
        icon: icons.BsLaptop,
    },
    {
        id: 2,
        slug: "/ipad",
        name: "Máy Tính Bảng",
        brands: [
            "Apple (iPad)",
            "Samsung",
            "Masstel",
            "Lenovo",
            "Xiaomi",
            "Coolpad",
            "OPPO",
        ],
        icon: icons.TbDeviceIpadCheck,
    },
    { id: 3, slug: "/phone/:name", name: "Apple", icon: icons.AiOutlineApple },
    {
        id: 4,
        slug: "/pc-link-kien",
        name: "PC-Linh kiện",
        icon: icons.PiComputerTower,
    },
    { id: 5, slug: "/other", name: "Phụ kiện", icon: icons.AiOutlineTool },
];

const Menu = ({ setShowModal, setBrands }) => {
    const delay = useCallback((value) => {
        setTimeout(() => {
            setShowModal(true);
            setBrands(value);
        }, 1000);
    }, []);
    return (
        <div className="w-full h-full px-2 py-3 relative ">
            <h2 className="p-2 mb-3 font-bold text-[20px]">
                Các loại sản phẩm
            </h2>
            <div className="pl-4 flex flex-col gap-2 h-full relative">
                {categories.map((category, index) => {
                    return (
                        <a
                            onMouseEnter={() => {
                                delay(category.brands);
                            }}
                            href={category.slug}
                            key={index}
                            className={`flex w-full items-center text-gray-900  hover:text-orange-600 hover:translate-x-2 ease-out duration-300 cursor-pointer shadow-md relative `}
                        >
                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <category.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex-auto">
                                <p className="block font-semibold">
                                    {category.name}
                                </p>
                            </div>
                            <GrFormNext className="w-5 h-5 " />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
