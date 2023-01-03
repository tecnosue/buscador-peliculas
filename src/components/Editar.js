
import React from 'react'

export const Editar = ({peli, conseguirElementosLocalStorage, setEditar, setListadoState }) => {

    const titulo_componente = 'Editar película';

    const guardarEdicion= (e, id ) => {
        e.preventDefault();
        // conseguir el target del evento
        let target = e.target;
        //buscar el indice de la pelicula a actualizar
        const pelis_almacenadas = conseguirElementosLocalStorage();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //crear objeto con ese id de ese indice, con titulo y descripcion del formulario

        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,

        }

        // Actualizar el elemento con ese indice

        pelis_almacenadas[indice] = peli_actualizada;


        //guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem('pelis',JSON.stringify(pelis_almacenadas));

        //y actualizar estados
       setListadoState(pelis_almacenadas);
       setEditar(0);

        console.log( indice, pelis_almacenadas);

        
    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}: {peli.titulo}</h3>
        <form onSubmit={e => guardarEdicion( e, peli.id)}>
            <input 
                type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue={peli.titulo}
            />
            <textarea
                name='descripcion'
                defaultValue={peli.descripcion}
                className='descripcion_editada'
            />
            <input type='submit' className='editar' value='Actualizar' />

        </form>
        
    </div>
  )
}
