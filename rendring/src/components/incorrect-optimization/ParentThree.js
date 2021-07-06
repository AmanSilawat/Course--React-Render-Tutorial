import React, { useState } from 'react';
import { MemoChildThree } from './ChildThree';

const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Aman')

    console.log('Parent Two Render')
    return (
        <div>
            <button onClick={() => setName('Saleh')}>Change name</button>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>

            {/* <ChildTwo name={name} /> */}
            <MemoChildThree name={name}>
                <strong>Hello</strong> {/* props.children always cause the new reference - always render */}
            </MemoChildThree>
        </div>
    )
}

export default ParentThree;