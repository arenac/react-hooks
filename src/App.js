import React, { useState } from 'react';

// import { Container } from './styles';

function App() {
  const [technologies, setThechnologies] = useState([
    'ReactJS',
    'React Native',
    'Node.js',
  ]);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setThechnologies([...technologies, newTech]);
    setNewTech('');
  }
  return (
    <>
      <input
        type="text"
        value={newTech}
        onChange={event => setNewTech(event.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <ul>
        {technologies.map((tech, key) => (
          <li key={key}>{tech}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
