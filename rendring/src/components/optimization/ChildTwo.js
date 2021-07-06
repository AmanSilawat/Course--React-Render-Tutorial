import React from 'react';

export const ChildTwo = ({ name }) => {
    console.log('Child Two Render')
    return <div>ChildTwo component - {name}</div>
}

export const MemoChildTwo = React.memo(ChildTwo);