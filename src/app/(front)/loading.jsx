"use client";
import DotLoader from "react-spinners/DotLoader";

export default function Loading() {
    return (
        <div className="absolute top-[100px] left-0 w-full h-full flex items-center justify-center bg-gray-200 z-100">
            <DotLoader size={80} color="#fb923c" />
        </div>
    );
}
