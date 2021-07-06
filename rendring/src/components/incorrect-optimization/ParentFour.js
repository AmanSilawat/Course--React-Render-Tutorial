import React, { useState } from 'react';
import { MemoChildFour } from './ChildFour';

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Aman')

    console.log('Parent Four Render')
    return (
        <div>
            <button onClick={() => setName('Saleh')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>

            <MemoChildFour name={name}/>
        </div>
    )
}

export default ParentFour;