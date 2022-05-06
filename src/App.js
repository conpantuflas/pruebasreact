import React from 'react';
import './App.css';
import Carrusel from './componentes/carrusel';


function App() {
  const style={
    estilos:{
      display: "flex",
      alignItems: "center",
      height: "100vh" 
    }
  }
  return (
    <div style={style.estilos}>
      <Carrusel />
    </div>
  );
}

export default App
