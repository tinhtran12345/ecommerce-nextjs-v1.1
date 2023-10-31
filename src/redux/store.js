import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter/counterSlice";
import productReducer from "./Product/productSlice";
// import authReducer from "./Auth/authSlice";
// import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import cartReducer from "./Cart/CartSlice";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["isLoggedIn", "token", "current"],
};

export const store = configureStore({
    reducer: {
        // auth: persistReducer(authPersistConfig, authReducer),
        counter: counterReducer,
        product: productReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});
