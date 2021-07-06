import React, { useState } from 'react';

const initialState = {
    fname: 'Aman',
    lname: 'Silawat'
}

const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState);

    const changeName = () => {
        // person.fname = 'Rahul';
        // person.lname = 'Soni';
        // setPerson(person); 
        
        const newPerson = {...person}
        newPerson.fname = 'Rahul';
        newPerson.lname = 'Soni';
        setPerson(newPerson);
    }

    console.log('render- ObjectUseState component')

    return (
        <div>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default ObjectUseState;