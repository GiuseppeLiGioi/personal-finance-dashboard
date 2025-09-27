import { useState } from "react"

export function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    })

    let valueToStore;
    if (typeof value === "function") {
        valueToStore = value(storedValue)
    } else {
        valueToStore = value;
    }
}