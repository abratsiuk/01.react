import React, { useState, useEffect, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    let counterId = useRef(null);

    // const componentDidUpdate = () =>{
    //     localStorage.setItem('count', count);
    // }

    const handleStart = () => {
        console.log('start', count, isCounting, counterId);
        setIsCounting(true);
        counterId = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    };

    const handleStop = () => {
        console.log('stop', count, isCounting, counterId);
        clearInterval(counterId);
        setIsCounting(false);
    };

    const handleReset = () => {
        console.log('reset', count, isCounting, counterId);
        setCount(0);
        setIsCounting(false);
        clearInterval(counterId);
    };

    useEffect(() => {
        // const userCount = localStorage.getItem('count');
        // if (userCount) setCount({ count: +userCount });
        console.log('useEffect', count, isCounting, counterId);
        return () => {
            clearInterval(counterId);
            handleStop();
        };
    }, []);

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
