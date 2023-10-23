"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

//https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/

const imagesDefault = [
    "https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/12/638169084121313935_msi-gaming-gf63-thin-11uc-1228vn-i7-11800h-thiet-ke.jpg",
    "https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/12/638169084116661360_msi-gaming-gf63-thin-11uc-1228vn-i7-11800h-man-hinh.jpg",
    "https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/12/638169084118272649_msi-gaming-gf63-thin-11uc-1228vn-i7-11800h-hieu-nang.jpg",
    "https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/12/638169084116865421_msi-gaming-gf63-thin-11uc-1228vn-i7-11800h-am-thanh.jpg",
    "https://images.fpt.shop/unsafe/fit-in/665x374/filters:quality(100):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/12/638169084110942501_msi-gaming-gf63-thin-11uc-1228vn-i7-11800h-pin.jpg",
];

const Slider = ({ images = imagesDefault }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("left");
    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1 === images.length ? 0 : prev + 1));
    };
    const handlePrev = () => {
        setDirection("left");
        setCurrentIndex((prev) =>
            prev - 1 < 0 ? images.length - 1 : prev - 1
        );
    };
    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
    };

    useEffect(() => {
        const loopBanner = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setDirection("left");
        }, 3000);
        return () => clearInterval(loopBanner);
    }, [images]);
    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1.2,
            },
        },
        // exit: {
        //     opacity: 0,
        //     transition: {
        //         duration: 0,
        //     },
        // },
    };
    const slidersVariants = {
        hover: {
            scale: 1.2,
            backgroundColor: "#f1f5f9",
        },
    };
    const dotsVariants = {
        initial: {
            y: 0,
        },
        animate: {
            y: -5,
            scale: 1.3,
            transition: { type: "spring", stiffness: 1000, damping: "10" },
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 },
        },
    };

    return (
        <div className="mx-auto relative w-full z-0">
            <div className="h-90 w-full relative overflow-hidden ">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="image"
                        className="w-full rounded-t-lg shadow-lg shadow-orange-300/50"
                        variants={slideVariants}
                        initial={
                            direction === "right" ? "hiddenRight" : "hiddenLeft"
                        }
                        animate="visible"
                        // exit="exit"
                    ></motion.img>
                </AnimatePresence>

                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    onClick={handleNext}
                    className="absolute top-[40%] right-0 my-auto  opacity-50 md:opacity-100  rounded-md cursor-pointer"
                >
                    <GrFormNext className="md:w-8 md:h-8 w-5 h-5 " />
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    onClick={handlePrev}
                    className="absolute top-[40%] left-0 opacity-50 md:opacity-100  rounded-md  cursor-pointer"
                >
                    <GrFormPrevious className="md:w-8 md:h-8 w-5 h-5" />
                </motion.div>

                {/* indicator */}
                <div className="mt-3 p-2 flex justify-center gap-3 ">
                    {images.map((_, index) => {
                        return (
                            <motion.div
                                initial="initial"
                                animate={
                                    currentIndex === index ? "animate" : ""
                                }
                                whileHover="hover"
                                variants={dotsVariants}
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`${
                                    currentIndex === index
                                        ? "bg-orange-300"
                                        : "bg-slate-500"
                                } md:w-3 md:h-3 h-2 w-2 rounded-full cursor-pointer`}
                            ></motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Slider;
