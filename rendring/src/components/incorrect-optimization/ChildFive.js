import React from 'react';

export const ChildFive = (props) => {
    console.log('Child Five Render')
    return (
        <div>
            Hello - {props.name}
            {/* {props.person.fname} {props.person.lname} */}
        </div>
    )
}

export const MemoChildFive = React.memo(ChildFive);
