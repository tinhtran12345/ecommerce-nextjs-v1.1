import React from "react";

const BrandModal = ({ data, setShowModal }) => {
    return (
        <div
            onMouseDown={() => {
                setShowModal(true);
            }}
            onMouseLeave={() => {
                setShowModal(false);
            }}
            className="absolute top-0 left-[-60px] z-100 shadow-lg rounded-xl bg-slate-100 m-auto h-[90%] w-[60%] flex items-center justify-center"
        >
            <div className="border-2 w-full h-full p-10 ">
                <h2 className="font-bold mb-3 text-[25px]">Thương hiệu</h2>
                <ul className="grid grid-cols-3 gap-5 list-outside list-disc ">
                    {data?.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="p-1 cursor-pointer hover:underline"
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BrandModal;
