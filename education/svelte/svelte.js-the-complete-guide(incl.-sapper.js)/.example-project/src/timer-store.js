import { readable } from "svelte/store";

let count = 0;

export const timer = readable(0, (set) => {
    const interval = setInterval(() => {
        count++;
        set(count);
    }, 1000)

    return () => {
        count = 0;
        clearInterval(interval)
    }
});
