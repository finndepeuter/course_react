import { useState } from 'react';

export default function Greetings() {
  var buttonStyle = {
    borderRadius: 4,
    height: 50,
    border: 0,
    marginTop: 15,
    color: "#FFFFFF",
    backgroundColor: "#3388ff"
  }

  var paddingStyle = {
    padding: 20
  };

  const [name, setName] = useState('Jeff');
  
  const message = `Hello, ${name}!`; // calculate output
  // not good!
  document.title = `Greetings to ${name}`; // side-effect!
  // calculate output
  return ( 
    <div style={paddingStyle}>
      <div>
        {message}
      </div>
      <div>
        <input style={buttonStyle} type="button" value="Change name" onClick={() => setName('Emma')} />
      </div>
    </div>
  );
}