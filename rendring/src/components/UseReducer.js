import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return initialState;

        default:
            return state;
    }
}

const UseReducer = () => {
    const [count, despatch] = useReducer(reducer, initialState);

    console.log('render- UseReducer component')

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => despatch('increment')}>Increment</button>
            <button onClick={() => despatch('decrement')}>Decrement</button>
            <button onClick={() => despatch('reset')}>reset</button>
        </div>
    )
}

export default UseReducer;