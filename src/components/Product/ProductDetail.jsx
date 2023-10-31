import React, { memo } from "react";
import { Slider } from "..";
import { technicalIcon } from "@/lib/icons/icons";

const ProductDetail = ({ data }) => {
    const features = data?.specifications.map((item) => {
        const iconFilter = technicalIcon.filter((i) => {
            return i.title === item.data_icon;
        });

        return {
            ...item,
            ...iconFilter[0],
        };
    });

    return (
        <div className="py-2 px-3 mt-5">
            <div className="flex md:flex-row flex-col gap-5">
                <div className="w-full flex flex-col gap-3">
                    <h2 className="text-[20px] font-bold text-center">
                        Đặc điểm nổi bật
                    </h2>
                    <p className="text-gray-700 text-[13px] text-ellipsis">
                        {data?.description}
                    </p>
                    <Slider images={data?.features_imgs} />
                </div>
                <div className="w-full">
                    <h2 className="text-[20px] font-bold mb-[30px] text-center">
                        Thông số kĩ thuật
                    </h2>
                    <div className="w-full mx-auto">
                        {features && (
                            <table className="table-auto mx-auto shadow-lg bg-white border-collapse">
                                <tbody>
                                    {features.map((item, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="flex flex-row gap-3 pt-2 border-b-2 border-gray-300  hover:bg-gray-50 focus:bg-gray-300 active:bg-orange-200"
                                            >
                                                <td className="flex-1 flex items-center border-r-2 text-orange-500 text-bold justify-center border-gray-300 w-64 h-[60px]  px-4 py-2 ">
                                                    {item.content}
                                                </td>
                                                <td className="flex-1 flex md:text-[14px] text-[12px] items-center h-[50px] px-4 py-2 text-gray-700 text-bold ">
                                                    {item.data_info.slice(
                                                        0,
                                                        60
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDetail);
