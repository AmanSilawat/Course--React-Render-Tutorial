import React, { useState } from 'react';
import ParentOne from './ParentOne';
import ChildOne from './ChildOne';

const GrandParent = ({ children }) => {
    const [newCount, setNewCount] = useState(0);

    console.log('Grand Parent One render');

    return (
        <div>
            <button onClick={() => setNewCount((prevCount => prevCount + 1))}>GrandParent count - {newCount}</button>
            <ParentOne newCount={newCount}>
                <ChildOne />
            </ParentOne>
        </div>
    )
}

export default GrandParent;