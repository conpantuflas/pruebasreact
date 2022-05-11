import React from "react";
import { useState } from "react";

const Turnoguardian = () => {
    const style={
        fondo:{
            margin: "1rem auto",
            width: "24rem",
            padding: "2rem",
            backgroundColor: "#ff48e9",
            color: "#ffffff",
        }
    }
    const [text, setText] = useState("¿quien cuida hoy? =")
    const perros = ["bulldog,","salchicha,","pug,","chiguagua,","kiltro"]
    return(
        <div style={style.fondo}>
            <p>{text}</p>
            <button
            onClick={ () => {
                setText(text + " " + perros [Math.floor(Math.random()*perros.length)])
            } }
            >Leer mas</button>
        </div>
    )
}
export default Turnoguardian;