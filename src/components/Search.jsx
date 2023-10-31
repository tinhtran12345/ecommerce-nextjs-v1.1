"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="relative hidden md:flex justify-center items-center gap-2">
                <AiOutlineSearch className="absolute right-2 w-6 h-6 text-bold hover:scale-110 text-orange-500" />
                <input
                    id="search"
                    placeholder="Search ..."
                    className="px-3 py-2 rounded-full outline-none shadow-md text-[16px] text-gray-800"
                    name="search"
                    type="text"
                />
                <label htmlFor="search"></label>
            </div>

            {/* Open modal for mobile */}
        </div>
    );
};

export default Search;
