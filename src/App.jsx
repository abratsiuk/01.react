import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    let counterId = useRef(null);

    const handleStart = () => {
        console.log(
            `start, count: ${count}, isCounting: ${isCounting}, counterId: ${counterId.current}`
        );
        setIsCounting(true);
        counterId.current = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        console.log(
            `stop, count: ${count}, isCounting: ${isCounting}, counterId: ${counterId.current}`
        );

        clearInterval(counterId.current);
        counterId.current = null;

        setIsCounting(false);
    };

    const handleReset = () => {
        console.log(
            `reset, count: ${count}, isCounting: ${isCounting}, counterId: ${counterId.current}`
        );

        handleStop();
        setCount(0);
    };

    // useEffect(() => {
    //     const userCount = localStorage.getItem('count');
    //     console.log(
    //         `useEffect - mounting, load from storage, userCount: ${userCount}`
    //     );

    //     if (userCount) setCount({ count: +userCount });
    //     return () => {
    //         console.log(
    //             `useEffect - unmounting, count: ${count}, isCounting: ${isCounting}, counterId: ${counterId.current}`
    //         );
    //         if (counterId.current) clearInterval(counterId.current);
    //     };
    // }, []);

    useEffect(() => {
        console.log(`useEffect 1 - mounting`);
        return () => {
            console.log(`useEffect 1 - cleanUp`);
        };
    }, []);

    useEffect(() => {
        console.log(
            `useEffect - change count and write to localStorage, count: ${count}`
        );
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

export default App;
