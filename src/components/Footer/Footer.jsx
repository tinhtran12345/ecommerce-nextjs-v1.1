import React from "react";
import { BsSendCheck } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="w-full max-w-screen mt-5">
            <div className="max-w-[1220px] px-10 mb-3 flex mx-auto md:flex-row flex-col gap-2">
                <div className="flex pl-4 flex-col flex-1">
                    <span className="text-[20px] font-bold text-gray-900">
                        ĐĂNG KÝ BẢN TIN
                    </span>
                    <small className="text-[13px] text-gray-900">
                        Đăng ký ngay và nhận bản tin hàng tuần
                    </small>
                </div>
                <div className="flex-1 flex items-center">
                    <input
                        type="email"
                        className="rounded-l-full p-4 pr-0 w-full bg-[#D0E7D2] outline-none text-black placeholder:text-sm placeholder:text-gray-800 placeholder:opacity-70"
                        placeholder="Email address"
                    ></input>
                    <div className="w-[56px] h-[56px] bg-[#D0E7D2] rounded-r-full flex items-center justify-center text-black">
                        <BsSendCheck className="w-5 h-5 text-orange-500 mr-2 hover:scale-110" />
                    </div>
                </div>
            </div>
            <div className="h-[300px] bg-gray-900 w-full p-3 text-white text-[13px]">
                <div className="flex gap-5 mt-5 max-w-[1220px] mx-auto ">
                    <div className="flex-1 flex-col gap-2 flex">
                        <h2 className="mb-[20px] text-[15px] font-medium border-main border-l-4 pl-4">
                            Về chúng tôi
                        </h2>
                        <span>
                            <span>Địa chỉ: </span>
                            <span className="opacity-50">Hà Nội, Việt Nam</span>
                        </span>
                        <span>
                            <span>Hotline: </span>
                            <span className="opacity-50">(+1234)56789xxx</span>
                        </span>
                        <span>
                            <span>Email: </span>
                            <span className="opacity-50">
                                thphatt@gmail.com
                            </span>
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="mb-[20px] text-[15px] font-medium border-main border-l-4 pl-4">
                            THÔNG TIN
                        </h2>
                        <span className="opacity-50">...</span>
                        <span className="opacity-50">...</span>
                        <span className="opacity-50">...</span>
                        <span className="opacity-50">...</span>
                        <span className="opacity-50">...</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="mb-[20px] text-[15px] font-medium border-main border-l-4 pl-4">
                            CHÚNG TA LÀ AI
                        </h2>
                        <span className="opacity-50">Hỗ trợ</span>
                        <span className="opacity-50">Miễn phí giao hàng</span>
                        <span className="opacity-50">FAQs</span>
                        <span className="opacity-50">Đổi và trả hàng</span>
                        <span className="opacity-50">...</span>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="mb-[20px] text-[15px] font-medium border-main border-l-4 pl-4">
                            Shopping now!
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
