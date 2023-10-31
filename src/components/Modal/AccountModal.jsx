"use client";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { memo, useContext } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";

const AccountModal = () => {
    const router = useRouter();
    const pathName = usePathname();
    const { current, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <div className="absolute px-2 py-2 mt-1 rounded-md shadow-md bg-slate-100 left-[-105px] border-2 border-gray-300">
            <div className="">
                {!current?.isLoggedIn ? (
                    <Link
                        href={pathName === "/login" ? "/register" : "/login"}
                        className="w-[120px] flex justify-start gap-2 items-center cursor-pointer "
                    >
                        <BiLogIn className="h-5 w-5 text-black" />
                        <p className="font-700">
                            {pathName === "/login" ? "Đăng kí" : "Đăng nhập"}
                        </p>
                    </Link>
                ) : (
                    <div className="flex flex-col gap-2">
                        <h2 className="w-[120px] text-[14px]">
                            Tên người dùng:
                            <span className="font-bold text-[13px]">
                                {current?.current.name}
                            </span>
                        </h2>
                        {pathName !== "/setting" && (
                            <Link
                                href={"/setting"}
                                className="cursor-pointer w-[120px] flex justify-start gap-2 items-center "
                            >
                                <AiOutlineSetting className="h-5 w-5 text-black" />
                                <p className="font-700">Cài đặt</p>
                            </Link>
                        )}
                        <div
                            onClick={handleLogout}
                            className="w-[120px] flex justify-start gap-2 items-center cursor-pointer "
                        >
                            <BiLogOut className="h-5 w-5 text-black" />
                            <p className="font-700">Đăng xuất</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default memo(AccountModal);
