import React from 'react';
import Incremento from './componentes/incremento';
import Luz from './componentes/luz';
import Turnoguardian from './componentes/turnoguardian';
import {Primera} from './componentes/useeffect';
import Impresora from './componentes/impresora';


function App() {

  return (
    <>
      <Incremento />
      <Luz />
      <Turnoguardian />
      <Primera />
      <Impresora />
    </>
  );
}

export default App
