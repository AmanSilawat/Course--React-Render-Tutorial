import React, { useState, useMemo, useCallback } from 'react';
import { MemoChildSix } from './ChildSix';

const ParentSix = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Aman')

    const person = {
        fname: 'Rahul',
        lname: 'Soni'
    }

    const handleClick = () => 'handleClickFunction';

    const memoizedPerson = useMemo(() => person, []);
    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('Parent Six Render')
    return (
        <div>
            <button onClick={() => setName('Saleh')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>

            {/* <MemoChildFive name={name} person={memoizedPerson} /> */}
            <MemoChildSix name={name} handleClick={memoizedHandleClick} />
        </div>
    )
}

export default ParentSix;