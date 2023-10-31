import React from "react";
import { Carousel, ProductMainList } from "@/components";

export default function Home() {
    return (
        <div className="max-w-full bg-white">
            <div className="max-w-[1220px] m-auto py-0 px-10">
                <Carousel />
                <ProductMainList />
            </div>
        </div>
    );
}
