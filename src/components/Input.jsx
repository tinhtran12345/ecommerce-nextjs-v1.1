import React from "react";

const Input = ({ name, type, value, onChange, label, errors }) => {
    return (
        <div className="mt-5 relative w-full min-w-[200px]">
            <input
                id={name}
                className="peer h-full w-full border-b border-gray-300 bg-transparent pt-4 pb-4 text-md font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-orange-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label
                htmlFor={name}
                className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[14px] font-medium leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-orange-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-500 peer-focus:after:scale-x-100 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
            >
                {label}
            </label>
            <span className="absolute right-1.5 top-0 text-red-400 text-[11px] font-bold">
                {errors}
            </span>
        </div>
    );
};

export default Input;
