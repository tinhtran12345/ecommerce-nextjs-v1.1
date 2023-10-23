"use client";

import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { Provider } from "react-redux";

export const CustomProvider = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export const ReduxProvider = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
