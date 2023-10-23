"use client";
import React, { useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };
    return (
        <div>
            {showTopBtn && (
                <button
                    onClick={goToTop}
                    className="z-100 fixed right-10 bottom-10 items-center justify-center text-white p-3 bg-orange-500 font-bold text-[16px] rounded-full flex cursor-pointer hover:scale-105"
                >
                    <BsArrowUpShort size={20} />
                    Top
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
