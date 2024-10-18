import React, { useState, useEffect, useRef } from 'react';

function getDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

function Timer() {
    const [count, setCount] = useState(getDefaultValue());
    const [isCounting, setIsCounting] = useState(false);
    let timerIdRef = useRef(null);

    console.log('Timer rendered');
    const handleStart = () => {
        setIsCounting(true);
    };

    const handleStop = () => {
        setIsCounting(false);
    };

    const handleReset = () => {
        setIsCounting(false);
        setCount(0);
    };

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, [isCounting]);

    return (
        <div className='App'>
            <h1>React Timer 2</h1>
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
