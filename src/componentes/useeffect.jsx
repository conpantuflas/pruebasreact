import React from "react";
import { useState, useEffect} from "react";

export const Primera = () => {
    const [mostrar,setMostrar] = useState(true)
    
    return(
        <div style={{margin:"0 auto", width:"20rem",background: "#fffe9a"}}> 
            <button
            onClick={() => setMostrar(false)} > Dejar de mostrar</button>
            <div id="hola">
            {mostrar ? <Cambio /> : null}
            </div>
        </div>
    )
}

const Cambio = () => {
 
    const [color, setColor] = useState("red")

    useEffect( () => {
        function onMauseMove(evento){
            if(evento.clientX < window.innerWidth /2){ setColor("red") }
            else{ setColor("blue") }
        }
        window.addEventListener("mousemove", onMauseMove)
    })
    return(
        <div style={{background: color}}>
            <h1>hola</h1>
        </div>
    )
}
