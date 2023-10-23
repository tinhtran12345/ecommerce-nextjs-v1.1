import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search } from ".";
import { BiSolidBellRing } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = () => {
    return (
        <nav className="sticky inset-0 z-20 block h-max w-full max-w-full rounded-none border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex gap-2 items-center justify-between text-gray-900">
                <Link href={"/"} className="flex items-center gap-2">
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
                </Link>
                <Search />
                <div className="mr-8 items-center justify-center gap-6 flex">
                    <div className="relative px-2">
                        <BsFillCartPlusFill className="h-6 w-6 text-red-500 hover:scale-110" />
                    </div>
                    <div className="p-2 font-bold relative">
                        <BiSolidBellRing className="h-6 w-6 text-yellow-600 hover:scale-110" />
                        {/* <span className="absolute top-[-5px] right-0 rounded-full p-1 text-center w-5 h-5">
                            1
                        </span> */}
                    </div>
                    <div className="p-1 font-bold">Account</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
