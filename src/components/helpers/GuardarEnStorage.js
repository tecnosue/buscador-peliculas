export const GuardarEnStorage = (clave, elemento) => {


  //conseguir los elementos que ya tenemos en localStorage
  let elementos = JSON.parse(localStorage.getItem(clave));
  console.log({elementos});
  
  //comprobar si es un array
  if(Array.isArray(elementos)){
    //añadir dentro del array un elemento nuevo
    elementos.push(elemento);
  } else {
    //crear un array con la nueva peli
    elementos = [elemento];
  }
  //guardar en el localStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  //devolver objeto guardado
  return elemento;


}
