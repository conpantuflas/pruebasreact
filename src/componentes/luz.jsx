import React from "react";
import { useState } from "react";

const Luz = () => {
    const style={
        fondo:{
            width: "22rem",
            backgroundColor:"#000000",
            margin: "0 auto",
            padding: "2rem"
        },
        h1:{
            color: "#ffffff"
        }
    }
    const [luz, setLuz] = useState(false)
    return(
       <div style={style.fondo}>
            <h1 style={style.h1}>{luz ? "Encendida" : "Apagada"}</h1>
        <button
        onClick={()=>{
            if(luz){
                setLuz(false)
            }
            else{
                setLuz(true)
            }
        }}
        >Interruptor</button>
       </div>
    )
}

export default Luz;