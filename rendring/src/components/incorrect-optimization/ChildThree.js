import React from 'react';

export const ChildThree = ({ name, children }) => {
    console.log('Child three Render')
    return <div>{children} - {name}</div>
}

export const MemoChildThree = React.memo(ChildThree);