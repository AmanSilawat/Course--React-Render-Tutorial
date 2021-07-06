import React from 'react';

export const ChildFour = ({ name }) => {
    console.log('Child Four Render')
    const date = new Date();
    return <div>Hello - {name} {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}</div>
}

export const MemoChildFour = React.memo(ChildFour);