import React, { useState } from 'react';

const initialState = ['Aman', 'Saleh']

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initialState);

    const handleClick = () => {
        // persons.push('Sahil');
        // persons.push('Rahul');
        // setPersons(persons);

        const newPerson = [...persons];
        newPerson.push('Sahil');
        newPerson.push('Rahul');
        setPersons(newPerson);
    }

    console.log('render- ObjectUseState component')

    return (
        <div>
            <button onClick={handleClick}>Add person</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}

export default ArrayUseState;