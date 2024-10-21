import React, { useEffect, useReducer } from 'react';

function getDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

const timerReducer = (state, { type }) => {
    switch (type) {
        case 'START':
            return { ...state, isCounting: true };
        case 'STOP':
            return { ...state, isCounting: false };
        case 'RESET':
            return { ...state, isCounting: false, count: 0 };
        case 'TICK':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};
function TimerWithReducer() {
    const [{ count, isCounting }, dispatch] = useReducer(timerReducer, {
        count: getDefaultValue(),
        isCounting: false,
    });

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        let timerId = null;
        if (isCounting) {
            timerId = setInterval(() => {
                dispatch({ type: 'TICK' });
            }, 1000);
        }
        return () => {
            timerId && clearInterval(timerId);
            timerId = null;
        };
    }, [isCounting]);

    return (
        <div className='App'>
            <h1>TimerWithReducer</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={() => dispatch({ type: 'START' })}>
                    Start
                </button>
            ) : (
                <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
            )}
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}

export default TimerWithReducer;
