import { useEffect, useState } from "react";

export default function useClick(key, initialCount = 0) {
    const [buttonPressed, setButtonPressed] = useState(false);
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        localStorage.setItem(key, count);
    }, [count]);

    function handleClick() {
        setButtonPressed((prevState) => !prevState);
        setCount((prevState) => prevState + 1);
    }
    return { clicked: buttonPressed, handleClick, count };
}

