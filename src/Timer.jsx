import React, { useState, useEffect, useRef } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    let counterId = useRef(null);

    const handleStart = () => {
        setIsCounting(true);
        counterId.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        if (counterId.current) {
            clearInterval(counterId.current);
            counterId.current = null;
            console.log(`-|-|clear interval, counterId: ${counterId.current}`);
        }
        setIsCounting(false);
    };

    const handleReset = () => {
        handleStop();
        setCount(0);
    };

    useEffect(() => {
        const userCount = localStorage.getItem('count');
        if (userCount) setCount(+userCount);

        return () => {
            if (counterId.current) {
                clearInterval(counterId.current);
            }
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    return (
        <div className='App'>
            <h1>React Timer</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={handleStart}>Start</button>
            ) : (
                <button onClick={handleStop}>Stop</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Timer;
