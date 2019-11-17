import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

function App() {
  const [technologies, setThechnologies] = useState([]);
  const [newTech, setNewTech] = useState('');

  // Will execute a single time before render (componentDidMount)
  useEffect(() => {
    const techs = localStorage.getItem('tech');
    if (techs) {
      setThechnologies(JSON.parse(techs));
    }

    return () => {
      // Will execute when the component won't exist (componentWillUnmount)
      // Usualy event listener
    };
  }, []);

  // Will execute everytime technologies changes (componentDidUpdate)
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(technologies));

    return () => {
      // Will execute when the component won't exist (componentWillUnmount)
      // Usualy event listener
    };
  }, [technologies]);

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
