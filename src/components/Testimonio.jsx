import React from "react";
import estilo from "../components/TestimonioDesign.module.scss";

function Testimonio(props) {
    return(
        <div className={estilo.prueba}>
            <img 
                className={estilo.imagen}
                src={props.imagen}
                alt='mmmm'
            />
            <div className={estilo.contenedor}>
                <p className={estilo.testimonio}>
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className={estilo.cargoTestimonio}>
                    <strong>{props.cargo}</strong> en {props.empresa}</p>
                <p className={estilo.textoTestimonio}>
                    <strong>"{props.testimonio}"</strong> </p>
            </div>
        </div>
    );
}

export default Testimonio;