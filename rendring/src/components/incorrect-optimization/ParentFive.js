import React, { useState } from 'react';
import { MemoChildFive } from './ChildFive';

const ParentFive = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Aman')

    const person = {
        fname: 'Rahul',
        lname: 'Soni'
    }

    const handleClick = () => {}

    console.log('Parent Five Render')
    return (
        <div>
            <button onClick={() => setName('Saleh')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>

            {/* <MemoChildFive name={name} person={person} /> */}
            <MemoChildFive name={name} handleClick={handleClick} />
        </div>
    )
}

export default ParentFive;