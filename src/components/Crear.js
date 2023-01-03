import React, { useState } from "react";
import { GuardarEnStorage } from "./helpers/GuardarEnStorage";

export const Crear = ({setListadoState}) => {
  const titulo = "Añadir película";
  const  [peliState, setPeliState] =useState ({
    titulo : "",
    descripcion : ""

  });

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = { 
      id: new Date().getTime(),
      titulo,
      descripcion
    };
    //Guardar estado
    setPeliState(peli);

    //Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, peli];
    });

    //guardar en el localstorage
    GuardarEnStorage("pelis", peli);

  }

  
  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>
      {peliState.titulo}

      <form onSubmit={conseguirDatosForm}>
        <input type="text" id="title" name="titulo" placeholder="Titulo" />
        <textarea
          id="description"
          placeholder="Descripción"
          name="descripcion"
        />
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};
