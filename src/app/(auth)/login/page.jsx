"use client";
import { Input } from "@/components";
import { validateLogin } from "@/lib/validators/authValidate";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
    const [payload, setPayload] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setErrors({});
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const validation = validateLogin(payload.email, payload.password);
            if (validation) {
                setErrors(validation);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="w-full lg:w-1/3 bg-muted p-6 rounded-lg">
            <div className="flex justify-center">
                <Image
                    src={"/icon.png"}
                    priority
                    width={80}
                    height={80}
                    alt="logo"
                />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mt-5">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Login</h1>
                            <p>Shopping now !</p>
                        </div>
                    </div>

                    <Input
                        errors={errors?.email}
                        name={"email"}
                        type={"email"}
                        value={payload.email}
                        label={"Email"}
                        onChange={handleChange}
                    />
                    <Input
                        errors={errors?.password}
                        name={"password"}
                        type={"password"}
                        value={payload.password}
                        label={"Password"}
                        onChange={handleChange}
                    />

                    <div className="mt-5 flex justify-center">
                        <button
                            className="middle none center w-full mr-3 rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            {loading ? "Processing ..." : "Login"}
                        </button>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <div>
                            <span>Don't Have an account ? </span>
                            <Link
                                href="/register"
                                className="text-orange-300 font-bold"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Page;