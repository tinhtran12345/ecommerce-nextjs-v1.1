"use client";
import React, { useState } from "react";

import { Menu, Slider } from ".";
import BrandModal from "./Modal/BrandModal";

const Carousel = () => {
    const [showModal, setShowModal] = useState(false);
    const [brands, setBrands] = useState([]);

    return (
        <div className="flex flex-col w-full md:flex-row mt-2 gap-2  p-2 ">
            <div className="md:basis-1/4 md:block hidden ">
                <Menu setBrands={setBrands} setShowModal={setShowModal} />
            </div>
            <div className="md:basis-3/4 ml-10 relative">
                <Slider />
                {showModal && (
                    <BrandModal setShowModal={setShowModal} data={brands} />
                )}
            </div>
        </div>
    );
};

export default Carousel;
