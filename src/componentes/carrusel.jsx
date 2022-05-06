import React from "react";
import  Carta from "./card.jsx"

const carrusel = () => {
    const style={
        padre:{
            margin: "auto",
            display: "flex",
            justifyContent: "spaceAround",
            alignItems: "center",
            gap: "1rem"
        }
    }
    return(
      <div style={style.padre}>
        <Carta title="Doja Cat" descripcion="proviene de estados unidos" src="./img/Doja-Cat.jpg"/>,
        <Carta title="Dua Lipa" descripcion="proviene de reino unido" src="./img/dualipa.jpg"/>,
        <Carta title="MacDemarco" descripcion="proviene de canada" src="./img/macdemarco.jpeg"/>
      </div>
    )
}

export default carrusel