"use client";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { memo, useContext, useEffect } from "react";

const Protect = ({ children }) => {
    const { current } = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!current?.isLoggedIn) {
            router.push("/");
        }
    }, [current, router]);
    return <div>{children}</div>;
};

export default memo(Protect);
