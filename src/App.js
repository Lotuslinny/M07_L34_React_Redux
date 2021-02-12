import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  //const islogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      <h1>Counter {counter}  </h1>

    </div>
  );
}

export default App;
