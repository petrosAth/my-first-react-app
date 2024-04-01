import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ firstName: '', lastName: '', age: 10 });

  const handleIncreaseAge = () => {
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const handleChangeFirstName = (input) => {
    const newPerson = { ...person, firstName: input };
    setPerson(newPerson);
  };

  const handleChangeLastName = (input) => {
    const newPerson = { ...person, lastName: input };
    setPerson(newPerson);
  };

  return (
    <div style={{ borderBlock: '1px solid white', paddingBottom: '20px' }}>
      <h1>
        <span>{person.firstName}</span> <span>{person.lastName}</span>
      </h1>
      <h2>{person.age}</h2>
      <input type="text" onChange={(event) => handleChangeFirstName(event.target.value)} />
      <input type="text" onChange={(event) => handleChangeLastName(event.target.value)} />
      <button onClick={handleIncreaseAge}>Increse age</button>
    </div>
  );
}
