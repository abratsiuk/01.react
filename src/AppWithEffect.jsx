import React, { useState, useEffect } from 'react';

function AppWithEffect() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log(count, 'AppWithEffect 1 mounted');

        return () => {
            console.log(count, 'AppWithEffect 1 cleanUp');
        };
    }, []);
    useEffect(() => {
        console.log(count, 'AppWithEffect 2 update');

        return () => {
            console.log(count, 'AppWithEffect 2 update cleanUp');
        };
    }, [count]);

    return (
        <div className='component app-with-effect'>
            <div className='toolbar'>
                <button onClick={() => setCount(count - 1)}>-</button>
                <span className='count-value'>{count}</span>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className='component-body'>
                {isVisible ? (
                    <>
                        <button onClick={() => setIsVisible(false)}>
                            hide
                        </button>
                        <div>hello word</div>
                    </>
                ) : (
                    <button onClick={() => setIsVisible(true)}>show</button>
                )}
            </div>
        </div>
    );
}

export default AppWithEffect;
