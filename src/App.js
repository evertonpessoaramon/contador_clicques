import React, { UseState, useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  function incrementar (){
    setContador(contador + 1);
  }

  function decrementar (){
    if (contador > 0)
      setContador(contador - 1);
  }

  function zerar() {
    setContador(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Contador: {contador}
        </h1>
        <div className="containerBotoes">
          <button onClick={incrementar}>+</button>
          <button onClick={decrementar}>-</button>
          <button onClick={zerar}>Zerar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
