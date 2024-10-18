import React, { useState } from 'react';
import Timer from './Timer';

function App() {
    const [isTimerVisible, setIsTimerVisible] = useState(true);

    return (
        <div className='App'>
            <button onClick={() => setIsTimerVisible(false)}>hide</button>
            <button onClick={() => setIsTimerVisible(true)}>show</button>
            {isTimerVisible ? <Timer /> : null}
        </div>
    );
}

export default App;
