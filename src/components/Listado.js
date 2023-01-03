import React, { useEffect, useState } from 'react';
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);
    
    useEffect(() => {
        conseguirElementosLocalStorage();
    },[]);

    const conseguirElementosLocalStorage = () => {
        let peliculas = JSON.parse(localStorage.getItem('pelis'));
        setListadoState(peliculas);
        
        return peliculas;
        
    }
    const borrarPeli = (id)=> {
        //conseguir pelis almacenadas
        let pelis_almacenadas = conseguirElementosLocalStorage();
        
        //filtrar esas pelis para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        //actualizar estado del listado
        setListadoState(nuevo_array_pelis);
        
        //actualizar datos en el localStorage
        localStorage.setItem('pelis',JSON.stringify(nuevo_array_pelis));


    }

    


    return (

        <>
            {
                listadoState != null ? 
                    listadoState.map(peli => {
                        return(
                            <article key={peli.id} className="peli-item">
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>
                                <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                                <button className="delete" onClick={()=> borrarPeli(peli.id)}>Borrar</button>

                                {/* aparece formulario de editar */}
                                {editar === peli.id && (
                                    <Editar 
                                        peli={peli}
                                        conseguirElementosLocalStorage ={conseguirElementosLocalStorage}
                                        setEditar={setEditar}
                                        setListadoState={setListadoState}
                                    />
                                ) }
                            </article>
                        );
                    })
                : <h2> no hay peliculas</h2>   
            }

              
            
  
        </>
    )
}
