import { useState } from 'react';

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');

  function addItem() {

  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </p>
  );
}
