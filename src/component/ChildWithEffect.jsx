import React, { useState, useEffect } from 'react';
import SubChildWithEffect from './SubChildWithEffect';

function ChildWithEffect() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        console.log(count, 'ChildWithEffect 1 mounted');

        return () => {
            console.log(count, 'ChildWithEffect 1 cleanUp');
        };
    }, []);
    useEffect(() => {
        console.log(count, 'ChildWithEffect 2 update');

        return () => {
            console.log(count, 'ChildWithEffect 2 update cleanUp');
        };
    }, [count]);

    console.log(count, 'ChildWithEffect before render');
    return (
        <div className='component childWithEffect'>
            <div className='toolbar'>
                <h3>ChildWithEffect</h3>
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
                        <SubChildWithEffect />
                    </>
                ) : (
                    <button onClick={() => setIsVisible(true)}>show</button>
                )}
            </div>
        </div>
    );
}

export default ChildWithEffect;
