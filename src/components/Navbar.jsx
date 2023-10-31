"use client";
import Image from "next/image";
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { AccountModal, CartModal, Search } from ".";
import { BiSolidBellRing } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import useOnClickOutside from "@/hook/useOnClickOutside";
import { AuthContext } from "@/context/AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
    const router = useRouter();
    const { getCurrent } = useContext(AuthContext);
    const collection = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => {
        setOpen(false);
    });
    useEffect(() => {
        getCurrent();
    }, []);
    return (
        <nav className="fixed inset-0 z-20 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex gap-2 items-center justify-between text-gray-900">
                <div
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <Image
                        src={"/icon.png"}
                        priority
                        width={40}
                        height={40}
                        alt="logo"
                    />
                    <p className="hidden md:block md:font-bold md:text-[16px]">
                        Shopping now!
                    </p>
                </div>
                <div className="mr-8 items-center justify-center gap-6 flex">
                    <Search />
                    <div
                        onClick={() => setShowCart(!showCart)}
                        className="relative px-2 hover:scale-110"
                    >
                        <BsFillCartPlusFill className="h-6 w-6 text-red-500" />
                        <span className="absolute top-[-10px] text-[10px] text-white bg-orange-500 text-bold right-0 rounded-full p-1 text-center w-5 h-5">
                            {collection.totalCount}
                        </span>
                    </div>
                    <div className="p-1 font-bold relative">
                        <BiSolidBellRing className="h-6 w-6 text-yellow-600 duration-300 ease-in-out transition hover:scale-110" />
                    </div>
                    <div
                        ref={ref}
                        onClick={() => setOpen(!open)}
                        className="p-1 relative"
                    >
                        <RiAccountCircleLine className="w-8 h-8 text-yellow-600 duration-300 ease-in-out transition hover:scale-110" />

                        {open && <AccountModal />}
                    </div>
                </div>
            </div>
            {showCart && (
                <CartModal setShowCart={setShowCart} carts={collection} />
            )}
        </nav>
    );
};

export default memo(Navbar);
