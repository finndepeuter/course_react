import { useState } from 'react';
import { useRef } from 'react';

function InputForm({ onInsert }) {

  const [task, setTask] = useState('');
  const inputRef = useRef(null);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); // don't submit the form

    onInsert(task);
    setTask('');
    inputRef.current.focus();
  }

  return (
    <div className="header">
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          onChange={handleChange}
          value={task}
          placeholder="enter task" />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default InputForm;
