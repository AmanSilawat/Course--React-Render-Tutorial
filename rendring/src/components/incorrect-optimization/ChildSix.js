import React from 'react';

export const ChildSix = (props) => {
    console.log('Child Six Render', props.handleClick()); // handleClickFunction
    return (
        <div>
            Hello - {props.name}
            {/* {props.person.fname} {props.person.lname} */}
        </div>
    )
}

export const MemoChildSix = React.memo(ChildSix);
