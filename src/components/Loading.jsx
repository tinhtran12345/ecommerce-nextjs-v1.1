"use client";

import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="container h-[400px] mx-auto px-4 flex items-center justify-center">
            <ClimbingBoxLoader color="#fbbf24" />
        </div>
    );
};

export default Loading;
