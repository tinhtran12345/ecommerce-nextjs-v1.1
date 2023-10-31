"use client";
import { createContext, useEffect, useState } from "react";

const initialState = {
    isLoggedIn: false,
    current: null,
    token: null,
};
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [current, setCurrent] = useState(initialState);
    const login = (user, token) => {
        setCurrent({
            isLoggedIn: true,
            current: user,
            token: token,
        });
        localStorage.setItem(
            "auth",
            JSON.stringify({ isLoggedIn: true, current: user, token: token })
        );
    };
    const getCurrent = () => {
        const data = localStorage.getItem("auth");
        setCurrent(JSON.parse(data));
    };
    const logout = () => {
        localStorage.clear();
        setCurrent({ isLoggedIn: false, current: null, token: null });
    };
    useEffect(() => {
        getCurrent();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                current,
                setCurrent,
                login,
                logout,
                getCurrent,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
