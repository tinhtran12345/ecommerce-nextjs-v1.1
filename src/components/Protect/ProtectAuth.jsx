"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const ProtectAuth = ({ children }) => {
    const { current } = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (current?.isLoggedIn) {
            router.push("/");
        }
    }, [current, router]);
    return <div>{children}</div>;
};

export default ProtectAuth;
