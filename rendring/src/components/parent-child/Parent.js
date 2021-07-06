import React, { useState } from 'react';
import Child from './../parent-child/Child';

const Parent = () => {
    const [count, setCount] = useState(0);

    console.log('Parent render');

    return (
        <div>
            <button onClick={() => setCount((prevCount => prevCount + 1))}>count - {count}</button>
            <button onClick={() => setCount(0)}>count to 0 - {count}</button>
            <button onClick={() => setCount(5)}>count to 5 - {count}</button>
            <button onClick={() => setCount(10)}>count to 10 - {count}</button>
            <Child />
        </div>
    )
}

export default Parent;