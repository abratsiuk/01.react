import React, { useState } from 'react';
import AppWithEffect from './component/AppWithEffect';
import './index.css';

function App() {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <div>
            {isVisible ? (
                <>
                    <button onClick={() => setIsVisible(false)}>hide</button>
                    <AppWithEffect />
                </>
            ) : (
                <button onClick={() => setIsVisible(true)}>show</button>
            )}
        </div>
    );
}

export default App;
