"use client";

import React, {
    memo,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import axiosConfig from "@/config/axios.config";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";

const MainSetting = () => {
    const { current } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(null);
    const [disableName, setDisableName] = useState(true);
    const [disableBio, setDisableBio] = useState(true);
    const handleSave = async () => {
        try {
            setLoading(true);
            const res = await axiosConfig.post("/api/user", {
                ...values,
                email: current?.current.email,
            });
            if (res) {
                toast.success("Thành công!");
                setDisableName(true);
                setDisableBio(true);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        const getInfo = async () => {
            if (current?.current.email) {
                const res = await axiosConfig(
                    `api/user?email=${current?.current.email}`
                );
                setValues({
                    name: res.name,
                    bio: res.bio,
                });
            }
        };
        if (!values) {
            getInfo();
        }
    }, []);

    return (
        <div className="mt-[40px] px-3 py-3 ">
            {values && (
                <div className="flex flex-col gap-8 py-5 px-3 border-2 min-h-[300px w-full">
                    <div className="flex flex-col gap-3 items-center justify-start">
                        <div className="flex justify-start flex-col mb-2 w-full">
                            <label
                                htmlFor="name"
                                className="font-bold text-[20px] my-2"
                            >
                                Tên người dùng
                            </label>
                            <div className="ml-2 md:w-[60%] h-[50px] gap-3  p-1 flex flex-row">
                                <input
                                    disabled={disableName}
                                    className="flex-1 px-2 text-[16px] font-700 disabled:text-gray-600 disabled:bg-gray-100 border-2 border-gray-500 outline outline-0 transition-all focus:border-orange-400 focus:outline-0 disabled:border-0"
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Thay đổi tên"
                                    value={values?.name}
                                    onChange={handleChange}
                                />

                                <button
                                    onClick={() => {
                                        setDisableName(false);
                                    }}
                                    className="mr-3 rounded-lg text-[10px] bg-red-500 py-3 px-2 w-[80px] font-sans  font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-start flex-col mb-2 w-full">
                            <label
                                htmlFor="description"
                                className="font-bold text-[20px] my-2"
                            >
                                Mô tả
                            </label>
                            <div className="ml-2 mb-2 md:w-[60%] h-[50px] gap-3  p-1 flex">
                                <input
                                    disabled={disableBio}
                                    className="flex-1 px-2 text-[16px] font-700 border-2 disabled:text-gray-600 disabled:bg-gray-100 border-gray-500 outline outline-0 transition-all focus:border-orange-400 focus:outline-0 disabled:border-0"
                                    id="description"
                                    type="text"
                                    placeholder="Mô tả"
                                    name="bio"
                                    value={values?.bio || ""}
                                    onChange={handleChange}
                                />
                                <button
                                    onClick={() => {
                                        setDisableBio(false);
                                    }}
                                    className="mr-3 rounded-lg bg-red-500 py-3 px-2 font-sans text-[10px] w-[80px] font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                >
                                    Chỉnh sửa
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="w-[100px] center  mr-3 rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            {loading ? "Đang xử lí ..." : "Lưu lại"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(MainSetting);
