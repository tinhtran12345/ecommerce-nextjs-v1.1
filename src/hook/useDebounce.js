import { useEffect, useState } from "react";

export const useDebounce = (value, time) => {
    const [debounceValue, setDebounceValue] = useState(null);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, time);

        return clearTimeout(handler);
    }, [time, value]);

    return debounceValue;
};
