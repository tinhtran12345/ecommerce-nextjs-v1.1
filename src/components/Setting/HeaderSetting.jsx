import React from "react";

const HeaderSetting = () => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="w-full shadow-md fixed z-10 left-0 bg-white p-2 top-[55px]"
        >
            <ol
                role="list"
                className="container p-2 mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 md:max-w-7xl lg:px-8"
            >
                <li>
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="mr-2 text-md font-bold text-gray-900 hover:text-orange-400 hover:underline hover:decoration-orange-300"
                        >
                            Trang chủ
                        </a>
                        <svg
                            width="16"
                            height="20"
                            viewBox="0 0 16 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-5 w-4 text-gray-500"
                        >
                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                    </div>
                </li>
                <li>
                    <div className="flex items-center">
                        <a
                            href={`/setting`}
                            className="mr-2 text-md font-medium text-gray-900 hover:text-orange-400 hover:underline hover:decoration-orange-300"
                        >
                            Cài đặt
                        </a>
                    </div>
                </li>
            </ol>
        </nav>
    );
};

export default HeaderSetting;
