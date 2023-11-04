import React, { useState } from 'react';

const ComponentA = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} type="button">
        Add
      </button>
      <div>{counter}</div>
    </div>
  );
};

export default ComponentA;
