import React from "react";
import { useState } from "react";

const Incremento = () => {
    const style ={
        fondo:{
            margin: "1rem auto",
            width: "24rem",
            padding: "2rem",
            backgroundColor: "#ffa8e7",
            color: "#ffffff",
        },
    }
    const [contador, setContador] = useState(0);
    return(
        <div style={style.fondo}>
            <h1>Papas fritas = {contador}</h1>
            <button
            onClick={()=>{
                setContador(contador+1)
            }}
            >Click</button>
        </div>
    )
}
export default Incremento