import { useState } from 'react';

export default function Form() {
  const [person, setPerson] = useState({
    firstName: 'Jeff',
    lastName: 'Jones',
    email: 'jjones@thomasmore.be'
  });

  // function handleFirstNameChange(e) {
  //   // person.firstName = e.target.value;
  //   setPerson({firstName: e.target.value});
  // }

  // function handleLastNameChange(e) {
  //   // person.lastName = e.target.value;
  //   setPerson({lastName: e.target.value});
  // }

  // function handleEmailChange(e) {
  //   // person.email = e.target.value;
  //   setPerson({email: e.target.value});
  // }

  function handleFirstNameChange(e) {
    setPerson({
      firstName: e.target.value, // first name from input
      lastName: person.lastName, // others from person
      email: person.email
    });
  }
  function handleLastNameChange(e) {
    setPerson({
      ...person, // copy old fields of person
      lastName: e.target.value // override this one
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person, // copy old fields of person
      email: e.target.value // override this one
    });
  }

  return (
    <>
      <div>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </div>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}