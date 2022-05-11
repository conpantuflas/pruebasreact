import React from "react";
import { useState } from "react";

const Impresora = () => {
    const style={
        fondo:{
            margin:"0 auto",
            width: "15rem",
        }
    }
    const [imprimir, setImprimir] = useState(null)
    const onSubmit = (e) => {
        e.preventDefault()
        const div = document.getElementById('c')
        div.innerHTML += `<p>${imprimir}</p>`
    }
    return (
        <>
            <form style={style.fondo} onSubmit={(e) => onSubmit(e)}>
                <input placeholder="write..."
                    onChange={(e) => {
                        setImprimir(e.target.value)
                        /*evento imprime el valor de la etiqueta(target)*/
                        // const div = document.getElementById('c')
                        // div.innerHTML = `<p>${imprimir}</p>`
                    }} />
            </form>
            <div style={style.fondo} id="c"></div>
        </>
    )
}
export default Impresora;