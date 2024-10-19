import React, { useState, useEffect } from 'react';

function TestEffect() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log(count, '-[]-> TestEffect 1 mounted');

        return () => {
            console.log(count, '-[]-| TestEffect 1 cleanUp');
        };
    }, []);
    useEffect(() => {
        console.log(count, '=count=> TestEffect 2 update');

        return () => {
            console.log(count, '=count=| TestEffect 2 update cleanUp');
        };
    }, [count]);
    useEffect(() => {
        console.log(count, '=isVisible=> TestEffect 2 update');

        return () => {
            console.log(count, '=isVisible=| TestEffect 2 update cleanUp');
        };
    }, [isVisible]);

    useEffect(() => {
        console.log(count, '-_-> testEffect without [] executed');

        return () => {
            console.log(count, '-_-| testEffect without [] cleanUp executed');
        };
    });

    console.log(count, 'TestEffect before render');
    return (
        <div className='component testEffect'>
            <h3>TestEffect</h3>
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

export default TestEffect;
