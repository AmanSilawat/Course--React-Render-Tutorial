import React, { useState } from 'react';
import { ChildTwo, MemoChildTwo } from './ChildTwo';

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Aman')

    console.log('Parent Two Render')
    return (
        <div>
            <button onClick={() => setName('Saleh')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            
            {/* <ChildTwo name={name} /> */}
            <MemoChildTwo name={name} />
        </div>
    )
}

export default ParentTwo;