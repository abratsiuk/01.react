import React, { useState } from 'react';
import Timer from './Timer';
import TimerWithReducer from './TimerWithReducer';

function App() {
    const [isTimerVisible, setIsTimerVisible] = useState(true);

    return (
        <>
            <div className='App'>
                <button onClick={() => setIsTimerVisible(false)}>hide</button>
                <button onClick={() => setIsTimerVisible(true)}>show</button>
                {isTimerVisible ? <Timer /> : null}
            </div>
            <hr />
            <div className='App'>
                <button onClick={() => setIsTimerVisible(false)}>hide</button>
                <button onClick={() => setIsTimerVisible(true)}>show</button>
                {isTimerVisible ? <TimerWithReducer /> : null}
            </div>
        </>
    );
}

export default App;
