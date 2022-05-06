import React from "react";

const Carta = (props) => {
    const style ={
        imagenStyle:{
        width:250,
        height:250,
        objectFit: "cover", 
       },
       card:{
           margin: "0 auto",
           width: 250,
       }
    }
    return (
            <div className="card" style={style.card}>
                <img src={props.src} className="card-img-top" style={style.imagenStyle} alt="holas" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.descripcion}</p>
                    <a href="" className="btn btn-primary">Leer mas</a>
                </div>
            </div>
    )
}
export default Carta;